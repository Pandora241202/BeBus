import { useLayoutEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapDisplay from '../components/Map/MapDisplay';
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome5 } from '@expo/vector-icons';
import { end, start } from '../redux/startRoute';
import RouteDetail from '../components/RouteResult/RouteDetail';

const StartRoute = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const { route } = useSelector(state => state.startRoute)
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
            <View style={{flex: 1}}>
                <View style={{height: 260, width: '100%'}}>
                    <ImageBackground source={require("../assets/img/bg.jpg")} resizeMode="stretch" style={{flex: 1}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop: 0}}>
                            <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => navigation.goBack()}>
                                <Text style={{fontFamily: 'PoppinsRegular', fontSize: 35, includeFontPadding: false, textAlign: 'center', color: '#F39500', paddingLeft: 15}}>{"<"}</Text>
                            </TouchableOpacity>
                            <View style={styles.logoContainer}>          
                                <Image source={require("../assets/img/logo_black.png")} style={styles.logo}/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Be</Text>
                                <Text style={{...styles.text, marginTop: -9}}>Bus</Text>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: '6%', width: '100%'}}>
                            <View style={{flexDirection: 'row', paddingHorizontal: 10, borderRadius: 10, width: '100%', height: 43, backgroundColor: '#FFFFFF', gap: 13, alignItems: 'center', marginBottom: 20}}>
                                <Text style={{fontSize: 15, fontFamily: 'PoppinsMedium', color: "#F39500", width: 40, includeFontPadding: false}}>Từ</Text>
                                <FontAwesome5 name="map-marker-alt" size={24} color="#F39500" style={{paddingBottom: 8}}/>
                                <Text style={{fontFamily: 'PoppinsLight', fontSize: 15, includeFontPadding: false, width: '70%'}} numberOfLines={1}>{route.from}</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingHorizontal: 10, borderRadius: 10, width: '100%', height: 43, backgroundColor: '#FFFFFF', gap: 13, alignItems: 'center', marginBottom: 20}}>
                                <Text style={{fontSize: 15, fontFamily: 'PoppinsMedium', color: "#F39500", width: 40, includeFontPadding: false}}>Đến</Text>
                                <FontAwesome5 name="map-marker-alt" size={24} color="#F39500" style={{paddingBottom: 8}}/>
                                <Text style={{fontFamily: 'PoppinsLight', fontSize: 15, includeFontPadding: false, width: '70%'}} numberOfLines={1}>{route.to}</Text>
                            </View>
                            <View style={{width: 45, height: 45, backgroundColor: '#000', position: 'absolute', right: '6%', top: 30, alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 10, borderTopLeftRadius: 10, zIndex: 2}}>
                                <Image 
                                    source={require('../assets/img/connect.png')}
                                    style={{width: 35, height: 35, resizeMode: 'contain'}}
                                />
                            </View>
                            <TouchableOpacity 
                                style={{backgroundColor:'#F39500', justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: '60%', alignSelf: 'center', height: 35, zIndex: -2}}
                                onPress={() => dispatch(route.start?end():start())}
                            >
                                <Text style={{fontFamily: 'PoppinsSemiBold', includeFontPadding: false, fontSize: 16}}>
                                    {route.start?"Dừng chuyến đi":"Bắt đầu"}
                                </Text>
                            </TouchableOpacity> 
                        </View>
                    </ImageBackground>
                </View>
                <MapDisplay route={[
                    {
                        latitude: 10.878305, 
                        longitude: 106.806183
                    },
                    {
                        latitude: 10.876057, 
                        longitude: 106.804715
                    },
                    {
                        latitude: 10.875639, 
                        longitude: 106.804913
                    },
                    {
                        latitude: 10.875192,
                        longitude: 106.80520
                    },
                    {
                        latitude: 10.875051,
                        longitude: 106.805235
                    },
                    {
                        latitude: 10.875075, 
                        longitude: 106.805368
                    },
                    {
                        latitude:10.873334, 
                        longitude: 106.808167
                    },
                    {
                        latitude:10.868508, 
                        longitude: 106.804116
                    },
                    {
                        latitude:10.867724, 
                        longitude: 106.803824
                    },
                    {
                        latitude:10.865534, 
                        longitude: 106.800340
                    },
                    {
                        latitude:10.865586, 
                        longitude: 106.800297
                    },
                    {
                        latitude:10.850180, 
                        longitude: 106.774742
                    },
                    {
                        latitude:10.849965, 
                        longitude: 106.774643
                    },
                    {
                        latitude:10.849793, 
                        longitude: 106.774449
                    },
                    {
                        latitude:10.849681, 
                        longitude: 106.773960
                    },
                    {
                        latitude:10.849777, 
                        longitude: 106.773512
                    },
                    {
                        latitude:10.849830, 
                        longitude: 106.771628
                    },
                    {
                        latitude:10.849705, 
                        longitude: 106.771623
                    },
                    {
                        latitude:10.849784, 
                        longitude: 106.767903
                    },
                    {
                        latitude:10.850405, 
                        longitude: 106.767152
                    },
                    {
                        latitude:10.850851, 
                        longitude: 106.762724
                    },
                    {
                        latitude:10.850468, 
                        longitude: 106.761970
                    },
                    {
                        latitude:10.850661, 
                        longitude: 106.758691
                    },
                    {
                        latitude:10.851010, 
                        longitude: 106.758128
                    },
                    {
                        latitude:10.851313, 
                        longitude: 106.757189
                    },
                    {
                        latitude:10.851291, 
                        longitude: 106.753553
                    },
                    {
                        latitude:10.852336, 
                        longitude: 106.752907
                    },
                    {
                        latitude:10.853551, 
                        longitude: 106.751349
                    },
                    {
                        latitude:10.842264, 
                        longitude: 106.744838
                    },
                    {
                        latitude:10.841748, 
                        longitude: 106.744406
                    },
                    {
                        latitude:10.840623, 
                        longitude: 106.742273
                    },
                    {
                        latitude:10.838648, 
                        longitude: 106.735141
                    },
                    {
                        latitude:10.836978, 
                        longitude: 106.732052
                    },
                    {
                        latitude:10.828762, 
                        longitude: 106.721865
                    },
                    {
                        latitude:10.827617, 
                        longitude: 106.719688
                    },
                    {
                        latitude:10.827278, 
                        longitude: 106.718966
                    },
                    {
                        latitude:10.826190, 
                        longitude: 106.714460
                    },
                    {
                        latitude:10.826240, 
                        longitude: 106.713986
                    },
                    {
                        latitude:10.825976, 
                        longitude: 106.713790
                    },
                    {
                        latitude:10.825544, 
                        longitude: 106.713991
                    },
                    {
                        latitude:10.817744, 
                        longitude: 106.712642
                    },
                    {
                        latitude:10.816575, 
                        longitude: 106.711165
                    },
                    {
                        latitude:10.812343, 
                        longitude: 106.709116
                    },
                    {
                        latitude:10.802997, 
                        longitude: 106.709326
                    },
                    {
                        latitude:10.803465, 
                        longitude: 106.703474
                    },
                    {
                        latitude:10.803879, 
                        longitude: 106.701495
                    },
                    {
                        latitude:10.802514, 
                        longitude: 106.697860
                    },
                    {
                        latitude:10.804017, 
                        longitude: 106.685341
                    },
                    {
                        latitude:10.799233, 
                        longitude: 106.680121
                    },
                    {
                        latitude:10.800232, 
                        longitude: 106.667761
                    },
                    {
                        latitude:10.802669, 
                        longitude: 106.663634
                    },
                    {
                        latitude:10.795480, 
                        longitude: 106.655726
                    },
                    {
                        latitude:10.796533, 
                        longitude: 106.654633
                    },
                    {
                        latitude:10.793748, 
                        longitude: 106.651795
                    },
                    {
                        latitude:10.793084, 
                        longitude: 106.653040
                    },
                    {
                        latitude:10.792704, 
                        longitude: 106.653201
                    },
                    {
                        latitude:10.790154, 
                        longitude: 106.652364
                    },
                    {
                        latitude:10.771206, 
                        longitude: 106.657893
                    },
                    {
                        latitude:10.772073, 
                        longitude: 106.657632
                    },
                    {
                        latitude:10.772028, 
                        longitude: 106.657744
                    },
                ]}/>
                <RouteDetail />
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
      marginLeft: 'auto',
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
      width: 40,
      marginRight: 15
    }
});

export default StartRoute