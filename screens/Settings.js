import ToolBar from "../components/ToolBar/ToolBar";
import TopBar from "../components/TopBar/TopBar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({navigation}) => { 
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('email');
            navigation.navigate('Login')
            console.log('Key deleted successfully.');
        } catch (error) {
            console.log('Error deleting key:', error);
        }
    }
    return (
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
            <View className="topScreen" style={{height: 150, width: '100%'}}>
                <View style={{height: 150}}>
                    <TopBar />
                    <Text style={{fontSize: 35, fontFamily: 'PoppinsBold', color: "#F39500", position: 'absolute', bottom: 1, width: '100%', textAlign: 'center'}}>Thông tin cá nhân</Text>
                </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', alignItems: 'center'}}>
                <TouchableOpacity style={styles.Item}
                    onPress={() => {logout()}}>
                    <Text style={{fontSize: 18, fontFamily: 'PoppinsRegular'}}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="light" backgroundColor='black'/>
            <ToolBar itemEnable={'Settings'}></ToolBar>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    Item: {
        backgroundColor: '#FFF4DF',
        height: 50,   
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
});

export default Settings