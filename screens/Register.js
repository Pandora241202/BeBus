import React, { useEffect, useState } from 'react';
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { auth } from '../firebase-config'

const Register = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
          /*if (user) {
            //navigation.navigate('Home');
          }*/
        })
        return unsubcribe;
    }, [])

    const handleRegister = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentails => {
                const user = userCredentails.user;
                console.log('Registered with: ', user.email);
            })
            .catch(error => alert(error.message));
    }

    return (
        <ScrollView className="bg-main  px-[8%] py-[5%]" automaticallyAdjustKeyboardInsets={true} contentContainerStyle={{ flexGrow: 1 }}>
            <View className="h-[10%] justify-evenly">
                <View className="flex-row items-center">
                    <Text className="text-xl" style={{fontFamily: 'PoppinsBold'}}>Register </Text>
                    <Octicons name="person" size={24}/>
                </View>
                <View>
                    <Text className="text-lg" style={{color: '#5B5B5B', fontFamily: 'PoppinsMedium'}}>Welcome to BeBus!!!</Text>
                </View>
            </View>
            <View className="flex-col h-[40%] justify-end items-center ">
                <View className="flex-row justify-center items-center mb-[10px]">
                    <View className="w-[50%]">
                        <Image 
                            source={require('../assets/img/logo.png')}
                        />
                    </View>
                    <Text className="text-7xl font-semibold">{`Be\nBus`}</Text>
                </View>
                <Text className="text-6xl font-semibold">{`Be With Us`}</Text>
            </View>
            <View className="h-[50%]">
                <View className="h-[60%]">
                    <TextInput 
                        onChangeText={(val) => setEmail(val)}
                        value={email}
                        placeholder="Enter Email"
                        className="border-[1px] p-[12px] text-base my-[2%] rounded-lg"
                        style={{fontFamily: 'PoppinsLight'}}
                    />
                    <TextInput 
                        onChangeText={(val) => setPassword(val)}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Enter Password"
                        className="border-[1px] p-[12px] text-base my-[2%] rounded-lg mb-[20px]"
                        style={{fontFamily: 'PoppinsLight'}}
                    />
                    <TouchableOpacity 
                        className="h-[50px] justify-center items-center rounded-[10px] bg-black"
                        onPress={handleRegister}>
                        <Text className="text-white text-[19px] text-align" style={{fontFamily: 'PoppinsBold'}}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View className="h-[40%] justify-between">
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                        <AntDesign name="google" size={24}/>
                        <Text style={{fontSize: 16, fontFamily: 'PoppinsMedium'}}> Google</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 14, fontFamily: 'PoppinsLight', textAlign: 'center', color: 'rgb(153, 153, 153)'}}>Already have account? </Text>
                        <TouchableOpacity 
                                style={{alignItems: 'center'}}
                                onPress={() => {navigation.navigate('Login')}}
                        >
                        <Text className="text-[14px]" style={{fontFamily: 'PoppinsBold'}}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register