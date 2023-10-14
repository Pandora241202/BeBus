import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const RouteOverviewInfo = (props) => {
  const [favor, setFavor] = useState(false);

  const changeFavorState = () => {
    setFavor(!favor);
  }

  return (
      <TouchableOpacity style={styles.touchable}>
        <View style={styles.routeLogo}>
          <FontAwesome name="bus" size={30} color="#F39500" />
        </View>
        <View style={styles.routeOverviewInfo}>
          <Text style={styles.routeNum}>Tuyến số {props.id}</Text>
          <Text style={styles.routeName}>{props.name}</Text>
          <View style={styles.routeTime}>
            <FontAwesome name="clock-o" size={16} color="#F39500" />
            <Text style={styles.routeTimeText}>{props.start} - {props.end}</Text>
          </View>            
        </View>
        <View style={styles.buttonContainer}>
          <FontAwesome.Button
            name={favor ? "heart" : "heart-o"}
            color="#F39500"
            size={24}
            iconStyle={styles.icon}
            onPress={changeFavorState}
            backgroundColor={'#FFF4DF'}
          >              
          </FontAwesome.Button>
        </View>
      </TouchableOpacity> 
  )
}

export default RouteOverviewInfo

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
  },

  routeLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  routeOverviewInfo: {
    flex: 8,
    justifyContent: 'space-around',
  },
  routeNum: {
    fontSize: 23,
  },
  routeName: {
    fontSize: 14,
  },
  routeTime: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  routeTimeText: {
    marginLeft: 5,
  },

  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 0,
  },
})