import { View, ScrollView, RefreshControl } from 'react-native';
import { useState, useCallback } from 'react';
import RouteResult from './RouteResult';

const routes = [
    [
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
    [
        {
            "type": 'walking',
            "travelDis": 609,
            "time": 7,
            "from": "Ký túc xá Khu A ĐH Quốc Gia TP. Hồ Chí Minh",
            "to": "trạm Đầu bến Đại học Bách Khoa - Cơ sở 2",
            "address": "Đường Tạ Quang Bửu, Khu phố 6, Thủ Đức, Bình Dương",
        },
        {
            "type": 'bus',
            "name": "50",
            "travelDis": 26400,
            "time": 75,
            "from": "trạm Đầu bến Đại học Bách Khoa - Cơ sở 2",
            "to": "trạm Đại Học Bách Khoa (cổng trước)",
            "price": 7000, 
            "arrivalTime": 3,
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
    [
        {
            "type": 'walking',
            "travelDis": 400,
            "time": 4,
            "from": "Ký túc xá Khu A ĐH Quốc Gia TP. Hồ Chí Minh",
            "to": "trạm KTX Khu A ĐHQG",
            "address": "Đường Tạ Quang Bửu, Khu phố 6, Thủ Đức, Bình Dương",
        },
        {
            "type": 'bus',
            "name": "08",
            "travelDis": 22000,
            "time": 62,
            "from": "trạm KTX Khu A ĐHQG",
            "price": 7000, 
            "arrivalTime": 3,
            "to": "trạm Vòng xoay Lăng Cha Cả",
            "back": true
        },
        {
            "type": 'bus',
            "name": "63-1",
            "travelDis": 4000,
            "time": 11,
            "from": "trạm Vòng xoay Lăng Cha Cả",
            "price": 12000, 
            "arrivalTime": 6,
            "to": "trạm Đại Học Bách Khoa (cổng trước)",
            "back": false
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
    [
        {
            "type": 'walking',
            "travelDis": 400,
            "time": 4,
            "from": "Ký túc xá Khu A ĐH Quốc Gia TP. Hồ Chí Minh",
            "to": "trạm KTX Khu A ĐHQG",
            "address": "Đường Tạ Quang Bửu, Khu phố 6, Thủ Đức, Bình Dương",
        },
        {
            "type": 'bus',
            "name": "08",
            "travelDis": 24400,
            "time": 69,
            "from": "trạm KTX Khu A ĐHQG",
            "price": 7000, 
            "arrivalTime": 3,
            "to": "trạm Bệnh viện chỉnh hình và phục hồi chức năng",
            "back": true
        },
        {
            "type": 'bus',
            "name": "59",
            "travelDis": 2100,
            "time": 5,
            "from": "trạm Bệnh viện chỉnh hình và phục hồi chức năng",
            "price": 6000, 
            "arrivalTime": 6,
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
    [
        {
            "type": 'walking',
            "travelDis": 400,
            "time": 4,
            "from": "Ký túc xá Khu A ĐH Quốc Gia TP. Hồ Chí Minh",
            "to": "trạm KTX Khu A ĐHQG",
            "address": "Đường Tạ Quang Bửu, Khu phố 6, Thủ Đức, Bình Dương",
        },
        {
            "type": 'bus',
            "name": "99",
            "travelDis": 280,
            "time": 1,
            "from": "trạm KTX Khu A ĐHQG",
            "price": 6000, 
            "arrivalTime": 3,
            "to": "trạm ĐH Khoa học tự nhiên",
            "back": true
        },
        {
            "type": 'bus',
            "name": "08",
            "travelDis": 26200,
            "time": 74,
            "from": "trạm ĐH Khoa học tự nhiên",
            "price": 7000, 
            "arrivalTime": 6,
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
]

const AllRouteResult = (props) => {

    const [refresh, setRefresh] = useState(false)

    const onRefresh = useCallback(() => {
        setRefresh(true);
        setTimeout(() => {
            // api
            setRefresh(false);
        }, 2000);
    }, []);

    return (
        <View style={{flex: 1, width: '100%'}}>
            <ScrollView 
                refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
                }
                contentContainerStyle={{paddingTop: 15, paddingBottom: 80, paddingHorizontal: '4%'}}
            >
                {routes.map((route, idx) => 
                    <RouteResult route={route} key={idx}/>
                )}
            </ScrollView>
        </View>
    )
}

export default AllRouteResult