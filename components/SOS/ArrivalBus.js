import { View, Text, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import ConfirmMsgModal from "./ConfirmMsgModal";

const ArrivalBus = (props) => {
  return (
    <View>
      <View
        elevation={7}
        style={{
          borderRadius: 10,
          backgroundColor: "#FFFFFF",
          marginBottom: 16,
        }}
      >
        <TouchableOpacity
          style={{ paddingVertical: 5, paddingHorizontal: 15 }}
          onPress={() => {
            props.setChooseBus(props.route.busId);
            props.setConfirmMsg(true);
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                flex: "1",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name="md-bus" size={30} color="#F39500" />
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#F39500",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 10,
                    paddingHorizontal: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "PoppinsMedium",
                      fontSize: 9,
                      includeFontPadding: false,
                      textAlign: "center",
                    }}
                  >
                    {props.route.name}
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "PoppinsMedium",
                    fontSize: 18,
                    color: "#F39500",
                    marginLeft: "auto",
                  }}
                >
                  {props.route.price.toString().slice(0, -3) +
                    "." +
                    props.route.price.toString().slice(-3) +
                    " đ"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name="md-time" size={19} color="rgba(0,0,0,0.6)" />
                <Text
                  style={{
                    fontFamily: "PoppinsMedium",
                    fontSize: 10,
                    includeFontPadding: false,
                    textAlign: "center",
                    color: "rgba(0,0,0,0.6)",
                  }}
                >
                  {props.route.arrivalTime}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <ConfirmMsgModal
        setConfirmMsg={props.setConfirmMsg}
        confirmMsg={props.confirmMsg}
        setRequestMsg={props.setRequestMsg}
      ></ConfirmMsgModal>
    </View>
  );
};

export default ArrivalBus;
