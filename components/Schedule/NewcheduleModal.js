import { View, Text, Modal, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import ChooseRouteModal from './ChooseRouteModal';

const NewcheduleModal = (props) => {

    const [title, setTitle] = useState("")
    const [addrs, setAddrs] = useState(["", ""])
    const [chooseRoute, setChooseRoute] = useState(false)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.add}
            onRequestClose={() => props.setAdd(false)}
            statusBarTranslucent
        >
            <View style={{backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{backgroundColor: '#FFF4DF', width: '90%', borderRadius: 15, alignItems: 'center', paddingHorizontal: '5%', paddingVertical: 12}}>
                    <Text style={{fontFamily: 'PoppinsBold', fontSize: 20, includeFontPadding: false, width: '70%', textAlign: 'center'}}>Lịch trình mới</Text>
                    <View style={{width: '100%', height: 300, marginTop: 15}}>
                        <ScrollView>
                            <View elevation={5} style={{flexDirection: 'row', paddingHorizontal: 10, borderRadius: 10, width: '100%', height: 43, backgroundColor: '#FFFFFF', gap: 13, alignItems: 'center', marginBottom: 10}}>
                                <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', color: "#F39500", width: 80, includeFontPadding: false}}>Tiêu đề</Text>
                                <TextInput 
                                    autoFocus
                                    style={{fontFamily: 'PoppinsLight', fontSize: 13, includeFontPadding: false, width: '65%'}} 
                                    value={title}
                                    onChangeText={(v) => setTitle(v)}
                                    placeholder='Tiêu đề'
                                />
                            </View>
                            <View elevation={5} style={{flexDirection: 'row', paddingHorizontal: 10, borderRadius: 10, width: '100%', height: 43, backgroundColor: '#FFFFFF', gap: 13, alignItems: 'center', marginBottom: 10}}>
                                <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', color: "#F39500", width: 80, includeFontPadding: false}}>Điểm đi</Text>
                                <FontAwesome5 name="map-marker-alt" size={16} color="#F39500" style={{paddingBottom: 8}}/>
                                <TextInput 
                                    style={{fontFamily: 'PoppinsLight', fontSize: 13, includeFontPadding: false, width: '50%'}} 
                                    value={addrs[0]}
                                    onChangeText={(v) => setAddrs([v, ...addrs.slice(1)])}
                                    placeholder='Vị trí hiện tại'
                                />
                            </View>
                            {addrs.slice(1).map((a, i) => 
                                <View key={i}>
                                    <View elevation={5} style={{flexDirection: 'row', paddingHorizontal: 10, borderRadius: 10, width: '100%', height: 43, backgroundColor: '#FFFFFF', gap: 13, alignItems: 'center', marginBottom: 10}}>
                                        <Text style={{fontSize: 13, fontFamily: 'PoppinsRegular', color: "#F39500", width: 80, includeFontPadding: false}}>Điểm đến</Text>
                                        <FontAwesome5 name="map-marker-alt" size={16} color="#F39500" style={{paddingBottom: 8}}/>
                                        <TextInput 
                                            style={{fontFamily: 'PoppinsLight', fontSize: 13, includeFontPadding: false, width: '50%'}} 
                                            value={a}
                                            onChangeText={(v) => setAddrs(i == addrs.length-2?[...addrs.slice(0,-1),v]:[...addrs.slice(0,i),v,...addrs.slice(i+1,-1)])}
                                            placeholder='Bạn muốn đi đâu'
                                        />
                                    </View>
                                    <View style={{width: 35, height: 35, backgroundColor: '#FFF4DF', position: 'absolute', right: 0, top: -23, alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}>
                                        <Image 
                                            source={require('../../assets/img/connect.png')}
                                            style={{width: 20, height: 20, resizeMode: 'contain'}}
                                        />
                                    </View>
                                </View>
                            )}
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity 
                                    style={{borderRadius: 100, backgroundColor: '#F39500', alignItems: 'center', justifyContent: 'center', width: 25, height: 25, marginRight: 10}}
                                    onPress={() => setAddrs([...addrs, ""])}
                                >
                                    <Text style={{includeFontPadding: false, fontSize: 15, color: 'white'}}>+</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize: 14, fontFamily: 'PoppinsRegular', includeFontPadding: false, color: 'rgba(0,0,0,0.8)'}}>Thêm điểm dừng</Text>
                                {addrs.length > 2 && <TouchableOpacity 
                                    style={{marginLeft: 'auto'}}
                                    onPress={() => setAddrs(addrs.slice(0,-1))}
                                >
                                    <FontAwesome5 name="trash-alt" size={24} color="#F39500"/>
                                </TouchableOpacity>}
                            </View>
                            <View elevation={5} style={{backgroundColor: 'white', borderRadius: 10, marginTop: 10, paddingHorizontal: 3, paddingVertical: 10}}>
                                <View style={{flexDirection: 'row', paddingHorizontal: 7, borderColor: '#F39500', paddingBottom: 10, borderBottomWidth: 1}}>
                                    <FontAwesome5 name="clock" size={24} color="#F39500" style={{marginRight: 9}}/>
                                    <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false, width: '50%', color: '#F39500'}}>Ngày</Text>
                                </View>
                                <View style={{flexDirection: 'row', paddingHorizontal: 7, paddingTop: 10}}>
                                <FontAwesome5 name="calendar-alt" size={24} color="#F39500" style={{marginRight: 9}} />
                                    <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false, width: '50%', color: '#F39500'}}>Thời gian</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <TouchableOpacity 
                        style={{borderRadius: 5, backgroundColor: '#F39500', alignItems: 'center', justifyContent: 'center', width: 180, height: 35, alignSelf: 'center', marginTop: 20}}
                        onPress={() => setChooseRoute(true)}
                    >
                        <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false}}>Chọn tuyến đường</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{ alignItems: 'center', justifyContent: 'center', width: 50, height: 35, alignSelf: 'center', marginTop: 10}}
                        onPress={() => props.setAdd(false)}
                    >
                        <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false}}>Hủy</Text>
                    </TouchableOpacity>
                </View>        
            </View>
            {chooseRoute && <ChooseRouteModal chooseRoute={chooseRoute} setChooseRoute={setChooseRoute} setAdd={props.setAdd} setScheds={props.setScheds}/>}
        </Modal>
    )
}

export default NewcheduleModal