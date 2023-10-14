import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useLayoutEffect, useState } from 'react';
import ToolBar from "../components/ToolBar/ToolBar";
import TopBar from "../components/TopBar/TopBar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ScheduleItem from '../components/Schedule/ScheduleItem';
import NewcheduleModal from '../components/Schedule/NewcheduleModal';

const Schedule = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const [scheds, setScheds] = useState (
        [
            {
                'title': 'Báo cáo đồ án',
                'from': 'KTX khu A',
                'to': 'Đại học Bách Khoa',
                'pass': [],
                'on': true,
                'date': '03/06/2023',
                'time': '08:00',
                'route': [
                    {
                        "type": 'walking',
                        "travelDis": 400,
                        "time": 4,
                        "from": "Ký túc xá Khu A ĐH Quốc Gia TP. Hồ Chí Minh",
                        "address": "Đường Tạ Quang Bửu, Khu phố 6, Thủ Đức, Bình Dương",
                        "to": "trạm KTX Khu A ĐHQG"
                    },
                    {
                        "type": 'bus',
                        "name": "08",
                        "travelDis": 26500,
                        "time": 75,
                        "from": "trạm KTX Khu A ĐHQG",
                        "price": 7000, 
                        "arrivalTime": 3,
                        "to": "trạm Đại Học Bách Khoa (cổng trước)",
                        "back": true
                    },
                    {
                        "type": 'walking',
                        "travelDis": 89,
                        "time": 1,
                        "from": "trạm Đại Học Bách Khoa (cổng trước)",
                        "to": "Đại Học Bách Khoa (cổng trước)",
                        "address": "trạm Đại Học Bách Khoa (cổng trước)"
                    }
                ], 
            }
        ]
    )

    const [add, setAdd] = useState(false)

    return (
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
            <View style={{height: 150}}>
                <TopBar />
            </View>
            <Text style={{position: 'absolute', width: '100%', top: 140, color: '#F39500', fontFamily: 'PoppinsSemiBold', fontSize: 30, textAlign: 'center', includeFontPadding: false}}>
                Lịch Trình
            </Text>
            <View style={{flex: 1, width: '100%'}}> 
                <ScrollView contentContainerStyle={{paddingTop: 15, paddingBottom: 80, paddingHorizontal: '4%'}}>
                    {scheds.map((s, idx) => 
                        <ScheduleItem sched={s} key={idx} setScheds={setScheds}/>
                    )}
                </ScrollView>
            </View>        
            <ToolBar itemEnable='calendar'/>
            <StatusBar style="light" backgroundColor='black'/>
            <TouchableOpacity 
                style={{borderRadius: 100, backgroundColor: '#FFF4DF', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, position: 'absolute', bottom: 90, right: '4%'}}
                onPress={() => setAdd(true)}
            >
                <Text style={{includeFontPadding: false, fontSize: 40}}>+</Text>
            </TouchableOpacity>
            {add && <NewcheduleModal add={add} setAdd={setAdd} setScheds={setScheds}/>}
        </SafeAreaView>
    )
}

export default Schedule