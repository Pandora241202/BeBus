import axios from 'axios';
import { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, Keyboard } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const SearchPlace = (props) => {

    const [searchStr, setSearchStr] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (props.choice == null || searchStr != props.choice.display_name) {
            const delayDebounceFn = setTimeout(() => {
                axios.get(`https://api.locationiq.com/v1/autocomplete?key=pk.4472f00e265bb7e766f7eabcc67b687b&q=${searchStr}&limit=5&viewbox=106.88325105421974,11.153904958192934,106.33395651183025,10.560951&bounded=1`)
                .then((response) => {
                    setResults(response.data)
                })
                .catch((err) => {
                    setResults([])
                })
            }, 300)
        
            return () => clearTimeout(delayDebounceFn)
        }
    }, [searchStr])

    return (
        <View style={{zIndex: props.autoFocus?-1:1}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, borderRadius: 10, width: '100%', height: 43, backgroundColor: '#FFFFFF', gap: 13, alignItems: 'center', marginBottom: 20}}>
                <Text style={{fontSize: 15, fontFamily: 'PoppinsMedium', color: "#F39500", width: 40, includeFontPadding: false}}>{props.label}</Text>
                <FontAwesome5 name="map-marker-alt" size={24} color="#F39500" style={{paddingBottom: 8}}/>
                <View style={{flex: 1, height: '100%'}}>
                    <View style={{position: 'absolute', flex:1, left: 0, right: 0, top: 0}}>
                        <Autocomplete
                            autoCorrect={false}
                            data={results}
                            value={searchStr}
                            onChangeText={(val) => {
                                setSearchStr(val)
                                val == "" && props.setChoice(null)
                            }}
                            placeholder={props.placeholder}
                            inputContainerStyle={{borderWidth: 0}}
                            style={{fontFamily: 'PoppinsLight', fontSize: 15, includeFontPadding: false}}
                            onBlur={() => setResults([])}
                            onFocus={() => props.setFindRoute(false)}
                            autoFocus={props.autoFocus}
                            flatListProps={{
                                keyboardShouldPersistTaps: 'always',
                                keyExtractor: (_, idx) => idx,
                                renderItem: ({ item }) => (
                                <TouchableOpacity 
                                    style={{borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.3)', width: '100%', height: 50, padding: 5}}
                                    onPress={() => {
                                        props.setChoice(item)
                                        setSearchStr(item.display_name)
                                        setResults([])
                                        Keyboard.dismiss()
                                    }}
                                >
                                    <Text numberOfLines={1} style={{fontFamily: 'PoppinsLight', fontSize: 11}}>{item.display_name}</Text>
                                    <Text numberOfLines={1} style={{fontFamily: 'PoppinsLight', fontSize: 9, color: 'rgba(0,0,0,0.5)'}}>{item.display_address}</Text>
                                </TouchableOpacity>
                                ),
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SearchPlace