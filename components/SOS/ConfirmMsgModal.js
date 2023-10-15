import { View, Text, Modal, TouchableOpacity } from "react-native";

const ConfirmMsgModal = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.confirmMsg}
      onRequestClose={() => {
        props.setConfirmMsg(false);
        props.setRequestMsg(false);
      }}
      statusBarTranslucent
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FFF4DF",
            width: "90%",
            borderRadius: 15,
            alignItems: "center",
            paddingHorizontal: "5%",
            paddingVertical: 12,
          }}
        >
          <Text
            style={{
              fontFamily: "PoppinsRegular",
              fontSize: 20,
              includeFontPadding: false,
              width: "100%",
              textAlign: "center",
            }}
          >
            Đã gửi thông báo đến tài xế
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingVertical: 10,
              paddingHorizontal: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 100,
                height: 35,
                alignSelf: "center",
                marginTop: 10,
                borderRadius: "5px",
                backgroundColor: "#F39500",
              }}
              onPress={() => {
                props.setConfirmMsg(false);
                props.setRequestMsg(false);
              }}
            >
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                  fontSize: 13,
                  includeFontPadding: false,
                }}
              >
                Xác nhận
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmMsgModal;
