import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Onboarding from "./screens/Onboarding";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Notification from "./screens/Notification";
import Heart from "./screens/Heart";
import Booking from "./screens/Booking";
import FindRoute from "./screens/FindRoute";
import StartRoute from "./screens/StartRoute";
import { Provider } from "react-redux";
import Support from "./screens/Support";
import LookUp from "./components/Lookup/Lookup";
import Settings from "./screens/Settings";
import store from "./redux/store";
import Schedule from "./screens/Schedule";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [email, setEmail] = useState("");
  const [loaded] = useFonts({
    Poppins: require("./assets/font/Poppins/Poppins-Black.ttf"),
    PoppinsBold: require("./assets/font/Poppins/Poppins-Bold.ttf"),
    PoppinsMedium: require("./assets/font/Poppins/Poppins-Medium.ttf"),
    PoppinsLight: require("./assets/font/Poppins/Poppins-Light.ttf"),
    PoppinsSemiBold: require("./assets/font/Poppins/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("./assets/font/Poppins/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    const getEmail = async () => {
      const email = await AsyncStorage.getItem("email");
      setEmail(email);
    };
    getEmail();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar></StatusBar>
      <SafeAreaView className="flex-1 bg-main">
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                presentation: "modal",
                animation: "slide_from_right",
                animationTypeForReplace: "push",
              }}
            />
            <Stack.Screen
              name="Schedule"
              component={Schedule}
              options={{
                presentation: "modal",
                animation: "slide_from_right",
                animationTypeForReplace: "push",
              }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{
                presentation: "modal",
                animation: "slide_from_right",
                animationTypeForReplace: "push",
              }}
            />
            <Stack.Screen
              name="Heart"
              component={Heart}
              options={{
                presentation: "modal",
                animation: "slide_from_right",
                animationTypeForReplace: "push",
              }}
            />
            <Stack.Screen
              name="FindRoute"
              component={FindRoute}
              options={{
                presentation: "modal",
                animation: "slide_from_right",
                animationTypeForReplace: "push",
              }}
            />
            <Stack.Screen
              name="StartRoute"
              component={StartRoute}
              options={{
                presentation: "modal",
                animation: "slide_from_right",
                animationTypeForReplace: "push",
              }}
            />
            <Stack.Screen
              name="Support"
              component={Support}
              options={{
                presentation: "modal",
                animation: "slide_from_right",
                animationTypeForReplace: "push",
              }}
            />
            <Stack.Screen
              name="Booking"
              component={Booking}
              options={{
                presentation: "modal",
                animation: "slide_from_right",
                animationTypeForReplace: "push",
              }}
            />
            <Stack.Screen
              name="LookUp"
              component={LookUp}
              options={{
                presentation: "modal",
                animation: "slide_from_right",
                animationTypeForReplace: "push",
              }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{
                presentation: "modal",
                animation: "slide_from_right",
                animationTypeForReplace: "push",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
