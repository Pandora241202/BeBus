import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import RequestConfirmModal from "../SOS/RequestConfirmModal";

export default function MapDisplay(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [requestMsg, setRequestMsg] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location != null && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.004,
            longitudeDelta: 0.005,
          }}
          region={
            (props.to && {
              latitude: parseFloat(props.to.lat),
              longitude: parseFloat(props.to.lon),
              latitudeDelta: 0.004,
              longitudeDelta: 0.005,
            }) ||
            (props.route && {
              latitude: props.route[props.route.length - 1].latitude,
              longitude: props.route[props.route.length - 1].longitude,
              latitudeDelta: 0.04,
              longitudeDelta: 0.05,
            })
          }
          onUserLocationChange={(e) => {
            setLocation(e.nativeEvent.coordinate);
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          >
            <Image
              source={require("../../assets/img/location-pin.png")}
              style={{ height: 40, width: 40 }}
            />
          </Marker>
          <Marker
            coordinate={{
              latitude: 10.7643582544925,
              longitude: 106.65566927085551,
            }}
            onPress={() => setRequestMsg(true)}
          >
            <Image
              source={require("../../assets/img/bus-stop.png")}
              style={{ height: 40, width: 40 }}
            />
          </Marker>
          <Marker
            coordinate={{
              latitude: 10.765827889324633,
              longitude: 106.6546613174822,
            }}
          >
            <Image
              source={require("../../assets/img/bus-stop.png")}
              style={{ height: 40, width: 40 }}
            />
          </Marker>
          {props.from && (
            <Marker
              coordinate={{
                latitude: parseFloat(props.from.lat),
                longitude: parseFloat(props.from.lon),
              }}
            />
          )}
          {props.to && (
            <Marker
              coordinate={{
                latitude: parseFloat(props.to.lat),
                longitude: parseFloat(props.to.lon),
              }}
            />
          )}
          {props.to && (
            <Polyline
              coordinates={[
                props.from
                  ? {
                      latitude: parseFloat(props.from.lat),
                      longitude: parseFloat(props.from.lon),
                    }
                  : {
                      latitude: location.latitude,
                      longitude: location.longitude,
                    },
                {
                  latitude: parseFloat(props.to.lat),
                  longitude: parseFloat(props.to.lon),
                },
              ]}
              strokeWidth={7}
              strokeColor="#F39500"
            />
          )}
          {props.route && (
            <Polyline
              coordinates={props.route}
              strokeWidth={7}
              strokeColor="#F39500"
            />
          )}
          {props.route && <Marker coordinate={props.route[0]} />}
          {props.route && (
            <Marker coordinate={props.route[props.route.length - 1]} />
          )}
          {/* {requestMsg && (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Modal
                animationType="fade"
                transparent={true}
                visible={requestMsg}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setRequestMsg(!requestMsg);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View>
                      <Text
                        style={{
                          fontSize: 22,
                          fontFamily: "PoppinsRegular",
                          textAlign: "center",
                        }}
                      >
                        Yêu cầu tài xế ghé trạm?
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        onPress={() => setRequestMsg(!requestMsg)}
                        style={{
                          width: "40%",
                          height: 40,
                          backgroundColor: "#F39500",
                          borderRadius: 5,
                        }}
                      >
                        <Text
                          style={{ fontSize: 14, fontFamily: "PoppinsRegular" }}
                        >
                          Xác nhận
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ width: "40%", height: 40 }}
                        onPress={() => {
                          setRequestMsg(!requestMsg);
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: "PoppinsRegular",
                            textAlign: "center",
                          }}
                        >
                          Hủy
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          )} */}
        </MapView>
      )}
      <RequestConfirmModal setRequestMsg = {setRequestMsg} requestMsg = {requestMsg}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -2,
    minHeight: 600,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "#FFF4DF",
    borderRadius: 15,
    height: 150,
    width: 375,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5,
  },
});
