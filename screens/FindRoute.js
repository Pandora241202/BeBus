import { useState, useLayoutEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchPlace from '../components/Map/SearchPlace';
import MapDisplay from '../components/Map/MapDisplay';
import ToolBar from '../components/ToolBar/ToolBar';
import AllRouteResult from '../components/RouteResult/AllRouteResult';
import { useDispatch } from "react-redux";
import { end } from '../redux/startRoute';

const FindRoute = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)
    const [findRoute, setFindRoute] = useState(false)
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
            <View style={{flex: 1}}>
                <View style={{height: 260, width: '100%'}}>
                    <ImageBackground source={require("../assets/img/bg.jpg")} resizeMode="stretch" style={{flex: 1}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                            <View style={styles.logoContainer}>          
                                <Image source={require("../assets/img/logo_black.png")} style={styles.logo}/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Be</Text>
                                <Text style={{...styles.text, marginTop: -9}}>Bus</Text>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: '6%', width: '100%'}}>
                            <SearchPlace 
                                label="Từ" 
                                placeholder="Vị trí hiện tại" 
                                choice={from} 
                                setChoice={setFrom} 
                                setFindRoute={setFindRoute} 
                            />
                            <SearchPlace 
                                label="Đến" 
                                placeholder="Bạn muốn đi đâu" 
                                choice={to} 
                                setChoice={setTo}
                                autoFocus={true}
                                setFindRoute={setFindRoute}
                            />
                            <View style={{width: 45, height: 45, backgroundColor: '#000', position: 'absolute', right: '6%', top: 30, alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 10, borderTopLeftRadius: 10, zIndex: 2}}>
                                <Image 
                                    source={require('../assets/img/connect.png')}
                                    style={{width: 35, height: 35, resizeMode: 'contain'}}
                                />
                            </View>
                            <TouchableOpacity 
                                disabled={to == null}
                                style={{backgroundColor: to!=null?'#F39500':'rgba(255,255,255,0.6)', justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: '60%', alignSelf: 'center', height: 35, zIndex: -2}}
                                onPress={() => {
                                    dispatch(end())
                                    setFindRoute(true)
                                }}
                            >
                                <Text style={{fontFamily: 'PoppinsSemiBold', includeFontPadding: false, fontSize: 16}}>
                                    Tìm đường
                                </Text>
                            </TouchableOpacity> 
                        </View>
                    </ImageBackground>
                </View>
                {findRoute 
                ?<AllRouteResult from={from} to={to}/>
                :<MapDisplay from={from} to={to}/>}
                <ToolBar />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
      width: '100%',
      height: '100%',
    },
    logoContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      width: 40,
      height: 40,
      marginTop: 10,
      marginLeft: 15,
      marginRight: 5,
    },
    text: {
      color: '#FFFFFF',
      fontFamily: 'PoppinsSemiBold',
      fontSize: 15,
      includeFontPadding: false,
    },
    textContainer: {
      marginLeft: 2, 
      marginTop: 10,
      width: 40
    }
});

export default FindRoute