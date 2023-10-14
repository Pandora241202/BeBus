import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { set } from '../../redux/startRoute';

const RouteResult = ({route}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <View elevation={7} style={{borderRadius: 10, backgroundColor: '#FFF4DF', marginBottom: 16}}>
            <TouchableOpacity style={{paddingVertical: 5, paddingHorizontal: 15}} onPress={() => {
                dispatch(set({
                    "from": route[0].from,
                    "to": route[route.length-1].to,
                    "route": route
                }))  
                navigation.navigate("StartRoute")
            }}> 
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {route.filter(transport => transport.type=='bus').map((bus, idx) =>
                        <View style={{flexDirection: 'row', alignItems: 'center'}} key={idx}>
                            {idx > 0 && <Text style={{fontFamily: 'PoppinsMedium', fontSize: 15, includeFontPadding: false, textAlign: 'center'}}>{" > "}</Text>}
                            <Ionicons name="md-bus" size={30} color="#F39500" />
                            <View style={{borderWidth: 1, borderColor: '#F39500', backgroundColor: '#FFFFFF', borderRadius: 10, paddingHorizontal: 5}}>
                                <Text style={{fontFamily: 'PoppinsMedium', fontSize: 9, includeFontPadding: false, textAlign: 'center'}}>{bus.name}</Text>
                            </View>
                        </View>
                    )}
                    <Text style={{marginLeft: 'auto', fontFamily: 'PoppinsRegular', fontSize: 13}}>{Math.floor(route.reduce((cur, t) => t.time + cur, 0)/60) + " giờ " + Math.floor(route.reduce((cur, t) => t.time + cur, 0)%60) + " phút"}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 3}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', width: 70, marginRight: 8}}>
                        <Ionicons name="md-walk-outline" size={19} color="rgba(0,0,0,0.6)" />
                        <Text style={{fontFamily: 'PoppinsMedium', fontSize: 10, includeFontPadding: false, textAlign: 'center', color: 'rgba(0,0,0,0.6)'}}>{route.filter(t=>t.type=='walking').reduce((cur, t) => t.travelDis + cur, 0) < 1000?route.filter(t=>t.type=='walking').reduce((cur, t) => t.travelDis + cur, 0)+" m":route.filter(t=>t.type=='walking').reduce((cur, t) => t.travelDis + cur, 0)/1000+" km"}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="md-bus" size={19} color="rgba(0,0,0,0.6)" />
                        <Text style={{fontFamily: 'PoppinsMedium', fontSize: 10, includeFontPadding: false, textAlign: 'center', color: 'rgba(0,0,0,0.6)'}}>{route.filter(t=>t.type=='bus').reduce((cur, t) => t.travelDis + cur, 0) < 1000?route.filter(t=>t.type=='bus').reduce((cur, t) => t.travelDis + cur, 0)+" m":route.filter(t=>t.type=='bus').reduce((cur, t) => t.travelDis + cur, 0)/1000+" km"}</Text>
                    </View>
                    <Text style={{fontFamily: 'PoppinsMedium', fontSize: 12, color: '#F39500', marginLeft: 'auto'}}>{route.filter(t=>t.type=='bus').reduce((cur, t) => t.price + cur, 0).toString().slice(0,-3)+"."+route.filter(t=>t.type=='bus').reduce((cur, t) => t.price + cur, 0).toString().slice(-3) + " đ"}</Text>
                </View>
                <View style={{marginTop: 3}}>
                    <Text style={{fontFamily: 'PoppinsRegular', fontSize: 11}} numberOfLines={1}>
                        Xe đến trong <Text style={{fontFamily: 'PoppinsMedium', color: '#F39500'}}>{route.find(t=>t.type=='bus').arrivalTime}</Text> phút <Text style={{color:'rgba(0,0,0,0.6)'}}>tại {route.find(t=>t.type=='bus').from}</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RouteResult