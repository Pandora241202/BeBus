import TopBar from "../components/TopBar/TopBar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Image, Text } from "react-native";
import React, { useLayoutEffect } from 'react'


const Support = ({route, navigation}) => {
    const {name} = route?.params
    return (
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
            <View style={{height: 150}}>
                <TopBar title={name}/>
            </View>
            <View elevation={7} style={{borderRadius: 10, backgroundColor: '#FFF4DF', marginTop: 16, padding: 20, width: '95%', alignSelf: 'center'}}>
                <Text style={{lineHeight: 20}}>
                    Khách hàng có thể liên hệ qua những kênh thông tin sau để được hỗ trợ:{'\n'}
                    Email: bebus@gmail.com{'\n'}
                    SĐT: 0123xxx789
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Support