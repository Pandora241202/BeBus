import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const RouteResult = (props) => {

    return (
        <View elevation={7} style={{borderRadius: 10, backgroundColor: '#FFFFFF', marginBottom: 16}}>
            <TouchableOpacity style={{paddingVertical: 5, paddingHorizontal: 15}} onPress={() => {
                props.setChooseRoute(false);
                props.setAdd(false);
                props.setScheds(pre => [...pre, 
                    {
                        'title': 'Đi học',
                        'from': 'KTX khu A',
                        'to': 'Đại học Bách Khoa',
                        'pass': [],
                        'on': true,
                        'date': '07/06/2023',
                        'time': '12:00',
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
                ])
            }}> 
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {props.route.filter(transport => transport.type=='bus').map((bus, idx) =>
                        <View style={{flexDirection: 'row', alignItems: 'center'}} key={idx}>
                            {idx > 0 && <Text style={{fontFamily: 'PoppinsMedium', fontSize: 15, includeFontPadding: false, textAlign: 'center'}}>{" > "}</Text>}
                            <Ionicons name="md-bus" size={30} color="#F39500" />
                            <View style={{borderWidth: 1, borderColor: '#F39500', backgroundColor: '#FFFFFF', borderRadius: 10, paddingHorizontal: 5}}>
                                <Text style={{fontFamily: 'PoppinsMedium', fontSize: 9, includeFontPadding: false, textAlign: 'center'}}>{bus.name}</Text>
                            </View>
                        </View>
                    )}
                    <Text style={{marginLeft: 'auto', fontFamily: 'PoppinsRegular', fontSize: 13}}>{Math.floor(props.route.reduce((cur, t) => t.time + cur, 0)/60) + " giờ " + Math.floor(props.route.reduce((cur, t) => t.time + cur, 0)%60) + " phút"}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 3}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', width: 70, marginRight: 8}}>
                        <Ionicons name="md-walk-outline" size={19} color="rgba(0,0,0,0.6)" />
                        <Text style={{fontFamily: 'PoppinsMedium', fontSize: 10, includeFontPadding: false, textAlign: 'center', color: 'rgba(0,0,0,0.6)'}}>{props.route.filter(t=>t.type=='walking').reduce((cur, t) => t.travelDis + cur, 0) < 1000?props.route.filter(t=>t.type=='walking').reduce((cur, t) => t.travelDis + cur, 0)+" m":props.route.filter(t=>t.type=='walking').reduce((cur, t) => t.travelDis + cur, 0)/1000+" km"}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="md-bus" size={19} color="rgba(0,0,0,0.6)" />
                        <Text style={{fontFamily: 'PoppinsMedium', fontSize: 10, includeFontPadding: false, textAlign: 'center', color: 'rgba(0,0,0,0.6)'}}>{props.route.filter(t=>t.type=='bus').reduce((cur, t) => t.travelDis + cur, 0) < 1000?props.route.filter(t=>t.type=='bus').reduce((cur, t) => t.travelDis + cur, 0)+" m":props.route.filter(t=>t.type=='bus').reduce((cur, t) => t.travelDis + cur, 0)/1000+" km"}</Text>
                    </View>
                    <Text style={{fontFamily: 'PoppinsMedium', fontSize: 12, color: '#F39500', marginLeft: 'auto'}}>{props.route.filter(t=>t.type=='bus').reduce((cur, t) => t.price + cur, 0).toString().slice(0,-3)+"."+props.route.filter(t=>t.type=='bus').reduce((cur, t) => t.price + cur, 0).toString().slice(-3) + " đ"}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RouteResult