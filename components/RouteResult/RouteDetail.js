import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";

const bus = {
    "des": "Bến xe Buýt quận 8",
    "timeBetween": 8,
    "stations": ["KTX Khu A ĐH Quốc Gia TPHCM","ĐH Khoa học tự nhiên","Khu DL Suối Tiên","Cầu vượt Trạm 2","Khu Công nghệ cao Q9","Công ty Cocacola","Trường Đại học Sư phạm Kỹ thuật","Siêu thị Nguyễn Kim","Nhà thiếu nhi Thủ Đức","Cao đẳng xây dựng 2","Ngã ba Chương Dương","Nhà Sách Thủ Đức","Đình thần Bình Quới Đông","Nút giao Linh Đông -PVĐ","Chùa An Lạc","Cá sấu Hoa Cà","Đường số 20","Ngã tư Bình Triệu","Cổng vào-Bến xe Miền Đông","Ngã Tư Nguyễn Xí","Ngã Tư Chu Văn An","Cầu Đinh Bộ Lĩnh","Trạm xăng dầu","Nhà thờ Hàng Xanh","Chùa Bồ Đề","Tòa Án nhân dân Quận Bình Thạnh","Chợ Bà Chiểu","UBND Quận Bình Thạnh","Bệnh Viện Gia Định","PCCC quận Bình Thạnh","Bệnh viện Phước An","Đại học Văn Hiến","Ngã Tư Thích Quảng Đức","Ngã tư Phan Xích Long","Ngã tư Phú Nhuận","Công An Phú Nhuận","Siêu thị Big C","Cổng trước SVĐ Quân Khu 7","Công viên Hoàng Văn Thụ","Vòng xoay Lăng Cha Cả","Vòng xoay Lăng Cha Cả","Công an Quận Tân Bình","Hội Chợ Triển lãm Tân Bình","Trường Phạm Ngũ Lão","Cây xăng Đôi","Bệnh viện Thống Nhất","Bệnh viện chỉnh hình và phục hồi chức năng","Chợ Tân Bình","Siêu thị Nguyễn Kim - CMC Tân Bình","Trường Nguyễn Thái Bình","Bưu Điện Phú Thọ","Đại Học Bách Khoa(cổng trước)"],
    "times": [0,1,4,6,8,10,15,16,17,18,19,21,24,27,31,32,35,37,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,60,61,62,64,64,66,66,67,68,69,70,71,72,73,74,75],
}

const RouteDetail = (props) => {

    const { route } = useSelector(state => state.startRoute);

    return (
        <View style={{position: 'absolute', width: '100%', bottom: 0, top: 500, backgroundColor: '#FFFFFF'}} elevation={9}> 
            <View style={{backgroundColor: '#A4A4A4', height: 4, width: '30%', alignSelf: 'center', borderRadius: 50, marginTop: 5}}></View>
            <ScrollView style={{width: '100%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: '2%', borderBottomColor: '#F39500', borderBottomWidth: 1, paddingVertical: 10}}>
                    {(route.route?route:props.route).route.map((t, idx) => 
                        <View key={idx} style={{flexDirection: 'row', alignItems: 'center'}}>
                            {idx > 0 && <Text style={{fontFamily: 'PoppinsMedium', fontSize: 15, includeFontPadding: false, textAlign: 'center'}}>{" > "}</Text>}
                            {t.type == 'walking' && 
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Ionicons name="md-walk-outline" size={30} color='#F39500' />
                                    <Text style={{fontFamily: 'PoppinsMedium', fontSize: 9, includeFontPadding: false, marginTop: 28, marginLeft: -6}}>{t.time}</Text>
                                </View>
                            }
                            {t.type == 'bus' && 
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Ionicons name="md-bus" size={30} color='#F39500' />
                                    <View style={{borderWidth: 1, borderColor: '#F39500', backgroundColor: '#FFFFFF', borderRadius: 10, paddingHorizontal: 5, marginRight: 5}}>
                                        <Text style={{fontFamily: 'PoppinsMedium', fontSize: 9, includeFontPadding: false, textAlign: 'center'}}>{t.name}</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontFamily: 'PoppinsMedium', fontSize: 7, includeFontPadding: false}}>{t.time} phút</Text>
                                        <View style={{backgroundColor: '#B2B2B2', height: 2, width: 42}}></View>
                                    </View>  
                                </View>
                            }
                        </View>
                    )}
                    <View style={{borderWidth: 1, borderColor: '#F39500', backgroundColor: '#FFFFFF', paddingHorizontal: 8, marginLeft: 'auto', paddingVertical: 3}}>
                        <Text style={{fontFamily: 'PoppinsMedium', fontSize: 13, includeFontPadding: false, textAlign: 'center'}}>{(route.route?route:props.route).route.reduce((cur, t) => t.time + cur, 0)} phút</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal: '5%', paddingVertical: 10}}>
                    {(route.route?route:props.route).route.map((t, idx) =>
                        t.type == 'walking'
                        ?<View key={idx} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:5}}>
                            <View style={{width:'10%'}}>
                                <View style={{alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#FFFFFF', width: 30, height: 30}} elevation={2}>
                                    <Ionicons name="md-walk-outline" size={25} color='#F39500' />
                                </View>
                                <View style={{borderStyle: 'dotted', borderRightWidth: 8, width: 19, marginVertical: 5, borderColor: '#D9D9D9', flex:1}}></View>
                            </View>
                            <View style={{width:'90%'}}>
                                <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View style={{width: '80%', borderBottomColor: '#F39500', borderBottomWidth: 1, paddingBottom: 5}}>
                                        <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false}}>{t.from}</Text>
                                        <Text style={{fontFamily: 'PoppinsLight', fontSize: 11, includeFontPadding: false}}>{t.address}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontFamily: 'PoppinsMedium', fontSize:13, color: '#F39500'}}>{idx == 0?(new Date().getHours() < 10?'0':'') + new Date().getHours() +':'+ (new Date().getMinutes() < 10?'0':'') + new Date().getMinutes():(new Date(new Date().getTime()+(route.route?route:props.route).route.slice(0,idx+1).reduce((cur, t) => t.time + cur, 0)*60000).getHours() < 10?'0':'') + new Date(new Date().getTime()+(route.route?route:props.route).route.slice(0,idx+1).reduce((cur, t) => t.time + cur, 0)*60000).getHours() +':'+ (new Date(new Date().getTime()+(route.route?route:props.route).route.slice(0,idx+1).reduce((cur, t) => t.time + cur, 0)*60000).getMinutes() < 10?'0':'') + new Date(new Date().getTime()+(route.route?route:props.route).route.slice(0,idx+1).reduce((cur, t) => t.time + cur, 0)*60000).getMinutes()}</Text>
                                    </View>
                                </View>
                                <View style={{flex: 1, borderBottomColor: '#F39500', borderBottomWidth: 1, paddingVertical: 7, flexDirection:'row', justifyContent: 'space-between'}}>
                                    <View style={{width: '80%'}}>
                                        <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false}}>Đi bộ {t.time} phút {"("+t.travelDis+" m)"}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontFamily: 'PoppinsMedium', fontSize: 12, includeFontPadding: false, color: '#C6C6C6'}}>+{t.time} phút</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        :<View key={idx} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:5}}>
                            <View style={{width:'10%'}}>
                                <View style={{alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#FFFFFF', width: 30, height: 30}} elevation={2}>
                                    <Ionicons name="md-bus" size={25} color='#F39500' />
                                </View>
                                <View style={{borderRightWidth: 8, width: 19, marginVertical: 5, borderColor: '#D9D9D9', flex:1}}></View>
                            </View>
                            <View style={{width:'90%'}}>
                                <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View style={{width: '80%', borderBottomColor: '#F39500', borderBottomWidth: 1, paddingBottom: 5}}>
                                        <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false}}>{t.from}</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{borderWidth: 1, borderColor: '#F39500', backgroundColor: '#FFFFFF', borderRadius: 10, paddingHorizontal: 5, marginRight: 15}}>
                                                <Text style={{fontFamily: 'PoppinsMedium', fontSize: 9, includeFontPadding: false, textAlign: 'center'}}>{t.name}</Text>
                                            </View>
                                            <Text style={{fontFamily: 'PoppinsLight', fontSize: 11, includeFontPadding: false}}>{bus.des}</Text>
                                        </View>
                                        <Text style={{fontFamily: 'PoppinsLight', fontSize: 11, includeFontPadding: false}}>Mỗi {bus.timeBetween} phút</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontFamily: 'PoppinsMedium', fontSize:13, color: '#F39500'}}>{idx == 0?(new Date().getHours() < 10?'0':'') + new Date().getHours() +':'+ (new Date().getMinutes() < 10?'0':'') + new Date().getMinutes():(new Date(new Date().getTime()+(route.route?route:props.route).route.slice(0,idx).reduce((cur, t) => t.time + cur, 0)*60000).getHours() < 10?'0':'') + new Date(new Date().getTime()+(route.route?route:props.route).route.slice(0,idx).reduce((cur, t) => t.time + cur, 0)*60000).getHours() +':'+ (new Date(new Date().getTime()+(route.route?route:props.route).route.slice(0,idx).reduce((cur, t) => t.time + cur, 0)*60000).getMinutes() < 10?'0':'') + new Date(new Date().getTime()+(route.route?route:props.route).route.slice(0,idx).reduce((cur, t) => t.time + cur, 0)*60000).getMinutes()}</Text>
                                    </View>
                                </View>
                                {bus.stations.slice(1).map((s, idx) =>
                                    <View key={idx} style={{flex: 1, paddingVertical: 7, flexDirection:'row', justifyContent: 'space-between', borderBottomColor: '#F39500', borderBottomWidth: idx!=bus.stations.length-2?0:1}}>
                                        <View style={idx!=bus.stations.length-2?{width: '80%', borderBottomColor: '#F39500', borderBottomWidth: 1, paddingBottom: 5}:{width: '80%', paddingBottom: 5}}>
                                            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false}}>{s}</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontFamily: 'PoppinsMedium', fontSize: 12, includeFontPadding: false, color: '#C6C6C6'}}>+{bus.times[idx+1]} phút</Text>
                                        </View>
                                    </View>
                                )}
                            </View>
                        </View>
                    )}
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:5}}>
                        <View style={{width:'10%'}}>
                            <View style={{alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#FFFFFF', width: 30, height: 30}} elevation={2}>
                                <Ionicons name="location-sharp" size={25} color='#F39500' />
                            </View>
                        </View>
                        <View style={{width:'90%'}}>
                            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false}}>{(route.route?route:props.route).route[(route.route?route:props.route).route.length-1].to}</Text>
                            </View> 
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default RouteDetail