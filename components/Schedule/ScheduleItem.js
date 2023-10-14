import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ScheduleRoute from './ScheduleRoute';

const ScheduleItem = (props) => {

    const [isEnabled, setIsEnabled] = useState(props.sched.on)
    const [showDetail, setShowDetail] = useState(false)

    return (
        <View elevation={7} style={{borderRadius: 10, backgroundColor: '#FFF4DF', marginBottom: 16}}>
            <TouchableOpacity
                style={{paddingVertical: 5, paddingHorizontal: 15, flexDirection: 'row'}} 
                onPress={() => setShowDetail(true)}
            >
                <View style={{width: 40, paddingTop: 5}}>
                    <Ionicons name="md-bus" size={30} color='#F39500' />
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontFamily: 'PoppinsMedium', fontSize: 17, includeFontPadding: false}} numberOfLines={1}>{props.sched.title}</Text>
                    <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false, paddingBottom: 3}}>{props.sched.to + props.sched.pass.reduce((t, p) => t+' - '+p, '') + ' - ' + props.sched.from}</Text>
                    <Text style={{fontFamily: 'PoppinsRegular', fontSize: 10, includeFontPadding: false}}>{props.sched.date + ' - ' + props.sched.time}</Text>
                </View>
                <View style={{width: 50, justifyContent: 'space-between'}}>
                    <Switch 
                        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                        trackColor={{false: '#FFC66C', true: '#F39500'}}
                        thumbColor={'white'}
                        onValueChange={() => {
                            setIsEnabled(previousState => !previousState);
                            //change on/off 
                        }}
                        value={isEnabled}
                    />
                    <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={() => props.setScheds(pre => pre.filter(e => e != props.sched))}>
                        <Ionicons name="trash" size={24} color="#F39500" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            <ScheduleRoute setShowDetail={setShowDetail} sched={props.sched} showDetail={showDetail} />
        </View>
    )
}

export default ScheduleItem