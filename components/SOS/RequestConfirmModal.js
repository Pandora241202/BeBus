import { View, Text, Modal, TouchableOpacity } from 'react-native';

const RequestConfirmModal = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.requestMsg}
            onRequestClose={() => props.setRequestMsg(false)}
            statusBarTranslucent
        >
            <View style={{backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{backgroundColor: '#FFF4DF', width: '90%', borderRadius: 15, alignItems: 'center', paddingHorizontal: '5%', paddingVertical: 12}}>
                    <Text style={{fontFamily: 'PoppinsRegular', fontSize: 20, includeFontPadding: false, width: '100%', textAlign: 'center'}}>Yêu cầu tài xế ghé trạm?</Text>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 15, padding: 10}}>
                        <TouchableOpacity 
                            style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 35, alignSelf: 'center', marginTop: 10, backgroundColor: "#F39500"}}
                            onPress={() => props.setRequestMsg(false)}
                        >
                            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false}}>Xác nhận</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 35, alignSelf: 'center', marginTop: 10}}
                            onPress={() => props.setRequestMsg(false)}
                        >
                            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, includeFontPadding: false}}>Hủy</Text>
                        </TouchableOpacity>
                    </View>
                </View>        
            </View>
        </Modal>
    )
}

export default RequestConfirmModal