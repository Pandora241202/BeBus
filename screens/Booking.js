import ToolBar from "../components/ToolBar/ToolBar";
import TopBar from "../components/TopBar/TopBar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Image, Text, StyleSheet, Dimensions, ScrollView, Modal, Pressable } from "react-native";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';


const busRoute = [
    {
        'name': 'Tuyến số 01',
        'route': "Bến Thành - Bến xe buýt Chợ lớn",
        'time': "04:40 - 20:30",
        'duration': "80-90 phút",
        'space': "6-10 phút",
        'price': "7,000 VNĐ",
        'price_student': "3,000 VNĐ",
        'price_month': "160,000 VNĐ/tập (30 vé)",
        'momo': "160,000 VNĐ"
    },
    {
        'name': 'Tuyến số 02',
        'route': "Bến Thành - Bến xe buýt Chợ lớn",
        'time': "04:40 - 20:30",
        'duration': "80-90 phút",
        'space': "6-10 phút",
        'price': "7,000 VNĐ",
        'price_student': "3,000 VNĐ",
        'price_month': "160,000 VNĐ/tập (30 vé)",
        'momo': "160,000 VNĐ"
    },
    {
        'name': 'Tuyến số 03',
        'route': "Bến Thành - Bến xe buýt Chợ lớn",
        'time': "04:40 - 20:30",
        'duration': "80-90 phút",
        'space': "6-10 phút",
        'price': "7,000 VNĐ",
        'price_student': "3,000 VNĐ",
        'price_month': "160,000 VNĐ/tập (30 vé)",
        'momo': "160,000 VNĐ"
    },
    {
        'name': 'Tuyến số 04',
        'route': "Bến Thành - Bến xe buýt Chợ lớn",
        'time': "04:40 - 20:30",
        'duration': "80-90 phút",
        'space': "6-10 phút",
        'price': "7,000 VNĐ",
        'price_student': "3,000 VNĐ",
        'price_month': "160,000 VNĐ/tập (30 vé)",
        'momo': "160,000 VNĐ"
    },
    {
        'name': 'Tuyến số 05',
        'route': "Bến Thành - Bến xe buýt Chợ lớn",
        'time': "04:40 - 20:30",
        'duration': "80-90 phút",
        'space': "6-10 phút",
        'price': "7,000 VNĐ",
        'price_student': "3,000 VNĐ",
        'price_month': "160,000 VNĐ/tập (30 vé)",
        'momo': "160,000 VNĐ"
    },
    {
        'name': 'Tuyến số 06',
        'route': "Bến Thành - Bến xe buýt Chợ lớn",
        'time': "04:40 - 20:30",
        'duration': "80-90 phút",
        'space': "6-10 phút",
        'price': "7,000 VNĐ",
        'price_student': "3,000 VNĐ",
        'price_month': "160,000 VNĐ/tập (30 vé)",
        'momo': "160,000 VNĐ"
    },
    {
        'name': 'Tuyến số 07',
        'route': "Bến Thành - Bến xe buýt Chợ lớn",
        'time': "04:40 - 20:30",
        'duration': "80-90 phút",
        'space': "6-10 phút",
        'price': "7,000 VNĐ",
        'price_student': "3,000 VNĐ",
        'price_month': "160,000 VNĐ/tập (30 vé)",
        'momo': "160,000 VNĐ"
    },    
    {
        'name': 'Tuyến số 08',
        'route': "Bến Thành - Bến xe buýt Chợ lớn",
        'time': "04:40 - 20:30",
        'duration': "80-90 phút",
        'space': "6-10 phút",
        'price': "7,000 VNĐ",
        'price_student': "3,000 VNĐ",
        'price_month': "160,000 VNĐ/tập (30 vé)",
        'momo': "160,000 VNĐ"
    },
    {
        'name': 'Tuyến số 09',
        'route': "Bến Thành - Bến xe buýt Chợ lớn",
        'time': "04:40 - 20:30",
        'duration': "80-90 phút",
        'space': "6-10 phút",
        'price': "7,000 VNĐ",
        'price_student': "3,000 VNĐ",
        'price_month': "160,000 VNĐ/tập (30 vé)",
        'momo': "160,000 VNĐ"
    },
    {
        'name': 'Tuyến số 10',
        'route': "Bến Thành - Bến xe buýt Chợ lớn",
        'time': "04:40 - 20:30",
        'duration': "80-90 phút",
        'space': "6-10 phút",
        'price': "7,000 VNĐ",
        'price_student': "3,000 VNĐ",
        'price_month': "160,000 VNĐ/tập (30 vé)",
        'momo': "160,000 VNĐ"
    },
]
const Booking = ({navigation}) => {
    const[modalVisible, setModalVisible] = useState('false');

    return (
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
            <View className="topScreen" style={{height: 150, width: '100%'}}>
                <View style={{height: 150}}>
                    <TopBar />
                    <Text style={{fontSize: 35, fontFamily: 'PoppinsBold', color: "#F39500", position: 'absolute', bottom: 20, width: '100%', textAlign: 'center'}}>Đặt vé</Text>
                </View>

                <View style={styles.searchBox}>
                    <TouchableOpacity style={{flexDirection: 'row', padding: 10, width: '100%', height: '100%' }}>
                        <AntDesign name="search1" size={24} color="rgba(0,0,0,0.5)" />
                        <Text style={{fontSize: 15, fontFamily: 'PoppinsLight', color: "rgba(0,0,0,0.5)"}}> Bạn muốn mua vé tuyến xe nào?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={{height: '73%', width: '100%'}}>
                <ScrollView style={{width: '100%', top:30}}>
                    {busRoute.map((bus, index) =>     
                        <View key={index} style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', alignItems: 'center'}}>  
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.');
                                    setModalVisible(!modalVisible);}
                                }
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <View>
                                            <Text style={{fontSize: 22, fontFamily: 'PoppinsMedium', marginTop: 13, textAlign: 'center'}}>{bus.name}</Text>
                                        </View>
                                        <View style={styles.modalInfo}>
                                            <View style={{display: 'flex', flexDirection:'row'}}>
                                                <Image source={require("../assets/img/info.png")} style={{height: 20, width: 20}}/>
                                                <Text style={{fontSize: 18, fontFamily: 'PoppinsSemiBold', marginLeft:6}}>Thông tin:</Text>
                                            </View>
                                            <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular', marginTop: 3}}>Tên tuyến: <Text>{' '}</Text>
                                                <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', opacity: 0.7}}>{bus.route}</Text>
                                            </Text>
                                            <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular', marginTop: 5}}>Thời gian hoạt động: <Text>{' '}</Text>
                                                <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', opacity: 0.7}}>{bus.time}</Text>
                                            </Text>
                                            <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular', marginTop: 5}}>Thời gian chạy: <Text>{' '}</Text>
                                                <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', opacity: 0.7}}>{bus.duration}</Text>
                                            </Text>
                                            <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular', marginTop: 5}}>Giãn cách tuyến: <Text>{' '}</Text>
                                                <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', opacity: 0.7}}>{bus.space}</Text>
                                            </Text>
                                        </View>
                                        <View style={styles.modalInfo}>
                                            <View style={{display: 'flex', flexDirection:'row'}}>
                                                <Image source={require("../assets/img/dollar.png")} style={{height: 20, width: 20}}/>
                                                <Text style={{fontSize: 18, fontFamily: 'PoppinsSemiBold', marginLeft:6}}>Giá vé:</Text>
                                            </View>
                                            <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular', marginTop: 3}}>Giá vé: <Text>{' '}</Text>
                                                <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', opacity: 0.7}}>{bus.price}</Text>
                                            </Text>
                                            <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular', marginTop: 5}}>Giá vé (HS/SV): <Text>{' '}</Text>
                                                <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', opacity: 0.7}}>{bus.price_student}</Text>
                                            </Text>
                                            <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular', marginTop: 5}}>Vé tháng: <Text>{' '}</Text>
                                                <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', opacity: 0.7}}>{bus.price_month}</Text>
                                            </Text>
                                        </View>
                                        <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', width: '85%', marginTop: -2}}>
                                            <Image source={require("../assets/img/momo.png")} style={{height: 28, width: 28, marginRight: 7}} />
                                            <View style={{display: 'flex', flexDirection:'column'}}>
                                                <Text style={{fontSize: 12, fontFamily: 'PoppinsRegular'}}>Ví MoMo</Text>
                                                <Text style={{fontSize: 12, fontFamily: 'PoppinsRegular'}}>{bus.momo}</Text>
                                            </View>
                                        </View>
                                        <Pressable style={{width:'85%', height: 30, backgroundColor:'#F39500', borderRadius: 5, marginTop:7, alignItems:'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular'}}>Mua vé tháng</Text>
                                        </Pressable>
                                        <Pressable style={{width:'85%', height: 27, marginTop:5}}
                                            onPress={() => setModalVisible(!modalVisible)}>
                                            <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular', textAlign:'center'}}>Hủy</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>         
                            <TouchableOpacity style={styles.bookingItem} onPress={() => setModalVisible(true)}>
                                <Image source={require("../assets/img/bus_o.png")} style={styles.logobus}/>
                                <Text style={{fontSize: 20, fontFamily: 'PoppinsMedium',position: 'absolute', marginLeft:52, marginTop: 5}}>{bus.name}</Text>
                                <Text style={{fontSize: 15, fontFamily: 'PoppinsRegular',position: 'absolute', marginLeft:52, marginTop: 35}}>{bus.route}</Text>
                                <View style={{marginLeft:52, marginTop: 61, display:'flex', flexDirection:'row'}}>
                                    <Image source={require("../assets/img/clock.png")} style={{height: 18, width: 18}}/>
                                    <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', marginLeft: 6}}>{bus.time}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView>
            </View>


            <StatusBar style="light" backgroundColor='black'/>
            <ToolBar itemEnable={'Home'}></ToolBar>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBox:{
        left: '6%', 
        top: 125, 
        backgroundColor: 'white', 
        height: 45, 
        width: '88%', 
        borderRadius: 10, 
        position: 'absolute', 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    bookingItem: {
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      backgroundColor: '#FFF4DF',
      borderRadius: 15,
      height: 440,
      width: 375,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalInfo:{
        borderBottomWidth: 1,
        borderBottomColor: '#F39500',
        paddingBottom: 8,
        marginBottom: 10,
        width: '89%',
    }
  });

export default Booking