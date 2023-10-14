import ToolBar from "../components/ToolBar/ToolBar";
import TopBar from "../components/TopBar/TopBar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
const buses = [
    {
        'name': 'Tuyến số 08',
        'route': "Bến xe buýt quận 8 - Đại học quốc gia",
        'time': "04:40 - 20:30",
    },    
    {
        'name': 'Tuyến số 33',
        'route': "Bến xe An Sương - Đại học quốc gia",
        'time': "04:40 - 21:00",
    },
]
const Routes = [
    {
        'name': 'Đại học Bách Khoa - KTX khu A',
        'route': "Tuyến số 08",
        'time': "04:40 - 20:30",
    },    
    {
        'name': 'KTX khu A - Chung cư Riverside',
        'route': "Tuyến số 08 - 30",
        'time': "04:40 - 20:30",
    },
]
const Heart = ({navigation}) => {
    const[showBus, setShowBus] = useState(true);
    const[busColor, setBusColor] = useState('#FFD180');
    const[routeColor, setRouteColor] = useState('#FFF4DF');
    function handleBusPress(){
        setBusColor('#FFD180');
        setRouteColor('#FFF4DF');
        setShowBus(true);
    }
    function handleRoutePress(){
        setBusColor('#FFF4DF');
        setRouteColor('#FFD180');
        setShowBus(false);
    }
    return (
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
            <View className="topScreen" style={{height: 150, width: '100%'}}>
                <View style={{height: 150}}>
                    <TopBar />
                    <Text style={{fontSize: 35, fontFamily: 'PoppinsBold', color: "#F39500", position: 'absolute', bottom: 1, width: '100%', textAlign: 'center'}}>Yêu thích</Text>
                </View>
            </View>

            <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity style={{backgroundColor: busColor, borderBottomLeftRadius: 10, height: 40, width: '50%',  justifyContent: 'center', alignItems: 'center'}}
                onPress={handleBusPress}>
                    <Text style={{fontSize: 18, fontFamily: 'PoppinsRegular'}}>Tuyến xe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: routeColor, borderBottomRightRadius: 10, height: 40, width: '50%', justifyContent: 'center', alignItems: 'center'}}
                onPress={handleRoutePress}>
                    <Text style={{fontSize: 18, fontFamily: 'PoppinsRegular'}}>Tuyến đường</Text>
                </TouchableOpacity>
            </View>          
            <View style={{height: '73%', width: '100%'}}>
                {showBus ? (<ScrollView style={{width: '100%', top:14}}>
                    {buses.map((bus, index) =>     
                        <View key={index} style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', alignItems: 'center'}}>     
                            <TouchableOpacity style={styles.Item}>
                                <Image source={require("../assets/img/bus_o.png")} style={styles.logobus}/>
                                <Text style={{fontSize: 18, fontFamily: 'PoppinsMedium',position: 'absolute', marginLeft:52, marginTop: 5}}>{bus.name}</Text>
                                <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular',position: 'absolute', marginLeft:52, marginTop: 35, width: '80%'}} numberOfLines={1}>{bus.route}</Text>
                                <View style={{marginLeft:52, marginTop: 61, display:'flex', flexDirection:'row'}}>
                                    <Image source={require("../assets/img/clock.png")} style={{height: 18, width: 18}}/>
                                    <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', marginLeft: 6}}>{bus.time}</Text>
                                </View>
                                <Image source={require("../assets/img/heart_o.png")} style={{position: 'absolute', top: 10, right: 15, height: 22, width:22}}/>
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView>) : (<ScrollView style={{width: '100%', top:14}}>
                    {Routes.map((route, index) =>     
                        <View key={index} style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', alignItems: 'center'}}>     
                            <TouchableOpacity style={styles.Item}>
                                <Image source={require("../assets/img/bus_o.png")} style={styles.logobus}/>
                                <Text style={{fontSize: 15, fontFamily: 'PoppinsMedium',position: 'absolute', marginLeft:52, marginTop: 7, width: '70%'}} numberOfLines={1}>{route.name}</Text>
                                <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular',position: 'absolute', marginLeft:52, marginTop: 33}} >{route.route}</Text>
                                <View style={{marginLeft:52, marginTop: 57, display:'flex', flexDirection:'row'}}>
                                    <Image source={require("../assets/img/clock.png")} style={{height: 18, width: 18}}/>
                                    <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', marginLeft: 6}}>{route.time}</Text>
                                </View>
                                <Image source={require("../assets/img/heart_o.png")} style={{position: 'absolute', top: 10, right: 15, height: 22, width:22}}/>
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView>)}
                
            </View>



            <StatusBar style="light" backgroundColor='black'/>
            <ToolBar itemEnable={'Heart'}></ToolBar>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    Item: {
        backgroundColor: '#FFF4DF',
        height: 85,   
        width: '90%',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    logobus:{
        position: 'absolute',
        left: 16,
        top: 10,
        height: 29,
        width: 29,

    },
  });

export default Heart