import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

import ArrivalBus from "./ArrivalBus";

const routes = [
  {
    BusId: "bus08",
    name: "08",
    arrivalTime: "Xe sẽ đến trong 2 phút",
    price: 7000,
  },
  {
    BusId: "bus10",
    name: "10",
    arrivalTime: "Xe sẽ đến trong 3 phút",
    price: 7000,
  },
  {
    BusId: "bus33",
    name: "33",
    arrivalTime: "Xe sẽ đến trong 5 phút",
    price: 7000,
  },
  {
    BusId: "bus35",
    name: "35",
    arrivalTime: "Xe sẽ đến trong 8 phút",
    price: 7000,
  },
  {
    BusId: "bus65",
    name: "65",
    arrivalTime: "Xe sẽ đến trong 10 phút",
    price: 7000,
  },
  {
    BusId: "bus99",
    name: "99",
    arrivalTime: "Xe sẽ đến trong 15 phút",
    price: 7000,
  },
  {
    BusId: "bus602",
    name: "602",
    arrivalTime: "Xe sẽ đến trong 28 phút",
    price: 13000,
  },
];

const RequestConfirmModal = (props) => {
  const [chooseBus, setChooseBus] = useState("0");
  const [confirmMsg, setConfirmMsg] = useState(false);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.requestMsg}
      onRequestClose={() => props.setRequestMsg(false)}
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
            Yêu cầu tài xế ghé trạm?
          </Text>
          <View
            style={{
              width: "100%",
              height: 400,
              marginTop: 15,
              borderWidth: 1,
              borderColor: "#F39500",
              padding: 10,
            }}
          >
            <ScrollView>
              {routes.map((route, idx) => (
                <ArrivalBus
                  route={route}
                  key={idx}
                  setChooseBus={setChooseBus}
                  setRequestMsg={props.setRequestMsg}
                  setConfirmMsg={setConfirmMsg}
                  confirmMsg={confirmMsg}
                />
              ))}
            </ScrollView>
          </View>
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
              onPress={() => props.setRequestMsg(false)}
            >
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                  fontSize: 13,
                  includeFontPadding: false,
                }}
              >
                Hủy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RequestConfirmModal;
