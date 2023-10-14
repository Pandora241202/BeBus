import ToolBar from "../components/ToolBar/ToolBar";
import TopBar from "../components/TopBar/TopBar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import React from 'react';
import { StatusBar } from 'expo-status-bar';


const new_noti = [
    {
        'title': 'Bạn có 1 lịch trình',
        'date': "28/04/2023",
        'content': "Bạn có 1 lịch trình “Đi học” vào lúc 08:00 ngày 28/04/2023 chưa hoàn thành",
    },    
    {
        'title': 'Ưu đãi lễ 30/4 - 1/5',
        'date': "22/04/2023",
        'content': "Thành viên của BeBus sẽ được nhận ưu đãi giảm 5% vé tháng khi đăng ký mua vé tháng ....",
    },
]
const old_noti = [
    {        
        'title': 'Fiction C.O tuyển dụng',
        'date': "20/04/2023",
        'content': "Fiction Company tuyển dụng thực tập sinh tại các vị trí Software Engineer Intern,....",
    },
    {        
        'title': 'Thông báo bảo trì ',
        'date': "19/04/2023",
        'content': "Vào 00:00 - 02:00 21/04/2023 BeBus sẽ bảo trì sever, người dùng sẽ không thế truy cập vào app...",
    },
    {        
        'title': 'Notification A',
        'date': "17/04/2023",
        'content': "Vào 00:00 - 02:00 21/04/2023 BeBus sẽ bảo trì sever, người dùng sẽ không thế truy cập vào app...",
    },
    {        
        'title': 'Notification B',
        'date': "16/04/2023",
        'content': "Vào 00:00 - 02:00 21/04/2023 BeBus sẽ bảo trì sever, người dùng sẽ không thế truy ...",
    },
    {        
        'title': 'Notification C',
        'date': "16/04/2023",
        'content': "Vào 00:00 - 02:00 21/04/2023 BeBus sẽ bảo trì sever, người dùng sẽ không thế truy ...",
    },
    {        
        'title': 'Notification D',
        'date': "16/04/2023",
        'content': "Vào 00:00 - 02:00 21/04/2023 BeBus sẽ bảo trì sever, người dùng sẽ không thế truy ...",
    },
]
const Booking = ({navigation}) => { 

    return (
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
            <View className="topScreen" style={{height: 150, width: '100%'}}>
                <View style={{height: 150}}>
                    <TopBar />
                    <Text style={{fontSize: 35, fontFamily: 'PoppinsBold', color: "#F39500", position: 'absolute', bottom: 1, width: '100%', textAlign: 'center'}}>Thông báo</Text>
                </View>
            </View>
            <View style={{height: '73%', width: '100%'}}>
                <ScrollView style={{width: '100%', top:14}}>
                    {new_noti.map((noti, index) =>     
                        <View key={index} style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', alignItems: 'center'}}>  
                            <View style={styles.newNoti}>
                                <Image source={require("../assets/img/ringing.png")} style={styles.logoring}/>
                                <View style={{display: 'flex', flexDirection: 'column', width: "84%"}}>
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center',marginTop: 5}}>
                                        <Text style={{fontSize: 16, fontFamily: 'PoppinsRegular'}}>{noti.title}</Text>
                                        <Text style={{fontSize: 12, fontFamily: 'PoppinsRegular', opacity: 0.8}}>{noti.date}</Text>
                                    </View>
                                    <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular'}}>{noti.content}</Text>
                                </View>
                                <Image source={require("../assets/img/dot.png")} style={{position: 'absolute', top: 8, right: 4, height: 9, width:9}}/>
                            </View>
                        </View>
                    )}
                    {old_noti.map((noti, index) =>     
                        <View key={index} style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', alignItems: 'center'}}>  
                            <View style={[styles.newNoti, styles.oldNoti]}>
                                <Image source={require("../assets/img/ringing.png")} style={styles.logoring}/>
                                <View style={{display: 'flex', flexDirection: 'column', width: "84%"}}>
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center',marginTop: 5}}>
                                        <Text style={{fontSize: 16, fontFamily: 'PoppinsRegular'}}>{noti.title}</Text>
                                        <Text style={{fontSize: 12, fontFamily: 'PoppinsRegular', opacity: 0.8}}>{noti.date}</Text>
                                    </View>
                                    <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular'}}>{noti.content}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </ScrollView>
            </View>

            <StatusBar style="light" backgroundColor='black'/>
            <ToolBar itemEnable={'Notification'}></ToolBar>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    newNoti: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFD180',
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
        paddingBottom: 8,
    },
    oldNoti:{
        backgroundColor: '#FFF4DF',

    },
    logoring:{
        marginLeft: 16,
        marginTop: 10,
        marginRight: 7,
        height: 20,
        width: 20,
    },
  });

export default Booking