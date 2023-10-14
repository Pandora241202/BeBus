import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TopBar({title}) {
  const navigation = useNavigation()
  return (
    <View style={styles.topbar}>
      <ImageBackground source={require("../../assets/img/bg.jpg")} resizeMode="stretch" style={styles.bg}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          {title &&
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="#F39500" />
            </TouchableOpacity>
          }
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.logoContainer}>          
              <Image source={require("../../assets/img/logo_black.png")} style={styles.logo}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Be</Text>
              <Text style={{...styles.text, marginTop: -9}}>Bus</Text>
            </View>
          </View>
        </View>
        <Text style={{color: "#F39500", fontWeight: '500', fontSize: 30}}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    height: '100%'
  },
  bg: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 5,
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 15,
    includeFontPadding: false,
  },
  textContainer: {
    marginLeft: 2, 
    marginTop: 10,
    width: 40
  },
  backBtn: {
    marginTop: 10,
    marginLeft: 15,
  }
});