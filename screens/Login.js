import React, { useEffect, useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { auth } from "../firebase-config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const set = async (user) => {
    if (user) {
      await AsyncStorage.setItem("email", user.email);
      setEmail("");
      setPassword("");
    }
  };

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView
      className="bg-main  px-[8%] py-[5%]"
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="h-[10%] justify-evenly">
        <View className="flex-row items-center">
          <Text className="text-xl" style={{ fontFamily: "PoppinsBold" }}>
            Login{" "}
          </Text>
          <Octicons name="person" size={24} />
        </View>
        <View>
          <Text
            className="text-lg"
            style={{ color: "#5B5B5B", fontFamily: "PoppinsMedium" }}
          >
            Welcome back!!!
          </Text>
        </View>
      </View>
      <View className="flex-col h-[40%] justify-end items-center ">
        <View>
          <View className="flex-row mb-[10px]">
            <View className="w-[50%] mr-3">
              <Image source={require("../assets/img/logo.png")} />
            </View>
            <Text
              className="text-5xl"
              style={{
                fontFamily: "PoppinsBold",
                includeFontPadding: false,
                textAlignVertical: "bottom",
              }}
            >{`Be\nBus`}</Text>
          </View>
          <Text
            className="text-4xl"
            style={{ fontFamily: "PoppinsSemiBold" }}
          >{`Be With Us!`}</Text>
        </View>
      </View>
      <View className="h-[50%] justify-evenly">
        <View className="h-[60%]">
          <TextInput
            onChangeText={(val) => setEmail(val)}
            value={email}
            placeholder="Enter Email"
            className="border-[1px] p-[12px] text-base my-[2%] rounded-lg"
            style={{ fontFamily: "PoppinsLight" }}
          />
          <TextInput
            onChangeText={(val) => setPassword(val)}
            value={password}
            secureTextEntry={true}
            placeholder="Enter Password"
            className="border-[1px] p-[12px] text-base my-[2%] rounded-lg"
            style={{ fontFamily: "PoppinsLight" }}
          />
          <Text
            style={{
              color: "rgb(153, 153, 153)",
              fontSize: 13,
              fontFamily: "PoppinsLight",
              textAlign: "right",
            }}
            className="mb-[10px]"
          >
            Forgot Password?
          </Text>
          <TouchableOpacity
            className="h-[50px] justify-center items-center rounded-[10px] bg-black"
            onPress={handleLogin}
          >
            <Text
              className="text-white text-[19px] text-align"
              style={{ fontFamily: "PoppinsBold" }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="h-[40%] justify-between">
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <AntDesign name="google" size={24} />
            <Text style={{ fontSize: 16, fontFamily: "PoppinsMedium" }}>
              {" "}
              Google
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "PoppinsLight",
                textAlign: "center",
                color: "rgb(153, 153, 153)",
              }}
            >
              Don't have any account yet?{" "}
            </Text>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text
                className="text-[14px]"
                style={{ fontFamily: "PoppinsBold" }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
