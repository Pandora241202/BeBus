import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react'
import Lottie from 'lottie-react-native'
import { Octicons } from '@expo/vector-icons'; 

const Onboarding = ({navigation}) => {
    const pages = [
        {
            image: require('../assets/img/onboard1.json'),
            title: "Travel",
            text: "Travel by bus for a fresh environment",
        },
        {
            image: require('../assets/img/onboard2.json'),
            title: "Efficient",
            text: "Discover the best bus routes near you",
        },
        {
            image: require('../assets/img/onboard3.json'),
            title: "Reliable",
            text: "Be on time, be with us\nYour ultimate bus map app!",
        }
    ]
    
    const [index, setIndex] = useState(0)
    return (
        <View className="bg-main  px-[8%] py-[5%]">
            <View className="h-[10%] justify-center">
                <Image className="h-[80%] aspect-[1]" source={require('../assets/img/logo_black.png')}/>
            </View>
            <View className="h-[40%] justify-around items-center">
                <Lottie
                    className="w-[100%] h-[90%] items-center"
                            autoPlay
                            loop
                            source={pages[index]?.image}
                />
                <View className="flex-row">
                    {[0,1,2].map((number) =>
                        <TouchableOpacity key={number} onPress={() => {setIndex(number)}}  className={`mx-[10px] ${number !== index} ? 'text-red' : ''  `}>
                            <Octicons style={{opacity: number === index ? 1 : 0.5}} name="dot-fill" size={20} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <View className="h-[50%] justify-evenly items-center">
                <Text className="text-[30px]" style={{fontFamily: 'PoppinsMedium'}}>{pages[index]?.title}</Text>
                <Text className="text-[18px]" style={{fontFamily: 'PoppinsMedium'}}>{pages[index]?.text}</Text>
                <TouchableOpacity onPress={() => 
                    {index + 1 !== pages.length ? setIndex(index + 1) : navigation.navigate('Login')}} 
                    className="bg-f39500 items-center w-[90%] py-[20px] rounded-[40px]"
                >
                    <Text className="text-[23px]">Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text className="text-[23px]">Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Onboarding