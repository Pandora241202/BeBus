import ToolBar from "../components/ToolBar/ToolBar";
import TopBar from "../components/TopBar/TopBar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Image, Text } from "react-native";
import React, { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import MapDisplay from "../components/Map/MapDisplay";

const features = [
    {
        'name': 'Tra cứu',
        'screen': 'LookUp',
        'icon': 
            <Image 
                source={require('../assets/img/map.png')}
                style={{width: '70%', height: '70%', resizeMode: 'contain'}}
            />
    },
    {
        'name': 'JobMap',
        'icon': 
            <Image 
                source={require('../assets/img/job.png')}
                style={{width: '70%', height: '70%', resizeMode: 'contain'}}
            />
    },
    {
        'name': 'Đặt vé',
        'screen': 'Booking',
        'icon': 
            <Image 
                source={require('../assets/img/bus-ticket.png')}
                style={{width: '70%', height: '70%', resizeMode: 'contain'}}
            />
    },
    {
        'name': 'Hỗ trợ',
        'screen': "Support",
        'icon': 
            <Image 
                source={require('../assets/img/support.png')}
                style={{width: '70%', height: '70%', resizeMode: 'contain'}}
            />
    },
]

const Home = ({navigation}) => {

    const onPress = (screen, name) => {
        if (screen)
        navigation.navigate(screen, {name: name})
    }

    return (
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
            <View style={{height: 150}}>
                <TopBar />
            </View>
            <MapDisplay />
            <View elevation={11} style={{top: 170, flexDirection: 'row', flexWrap: 'wrap', width: '100%', backgroundColor: '#FFF3DD', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'space-between', paddingTop: 45, paddingHorizontal: '8%', paddingBottom: 10, position: 'absolute'}} >
                {features.map((feature, index) => 
                    <View key={index} style={{alignItems: 'center'}}>
                        <TouchableOpacity style={{width: 60, height: 60, borderRadius: 100, backgroundColor: '#FFD180', alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => onPress(feature.screen, feature.name)}
                        >
                            {feature.icon}
                        </TouchableOpacity>
                        <Text style={{fontSize: 10, fontFamily: 'PoppinsMedium'}}>{feature.name}</Text>
                    </View>
                )}
            </View>
            <View elevation={10} style={{left: '6%', top: 155, backgroundColor: 'white', height: 45, width: '88%', borderRadius: 10, position: 'absolute' }}>
                <TouchableOpacity style={{flexDirection: 'row', padding: 10, width: '100%', height: '100%' }} onPress={() => navigation.navigate("FindRoute")}>
                    <AntDesign name="search1" size={24} color="rgba(0,0,0,0.5)" />
                    <Text style={{fontSize: 15, fontFamily: 'PoppinsLight', color: "rgba(0,0,0,0.5)"}}> Bạn muốn đi đâu ?</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" backgroundColor='black'/>
            <ToolBar itemEnable={'Home'}></ToolBar>
        </SafeAreaView>
    )
}

export default Home