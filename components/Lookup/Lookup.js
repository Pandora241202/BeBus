import { FlatList, StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RouteOverviewInfo from './RouteOverviewInfo'
import TopBar from '../TopBar/TopBar';
import ToolBar from '../ToolBar/ToolBar';

const routes = require('../routes_data.json');

const LookUp = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%', width: '100%'}}>
      <View style={{height: 150}}>
        <TopBar />
      </View>
      <FlatList 
        data={routes}
        renderItem={(itemData) => {
          return (
            <View elevation={10} style={styles.containerItem}>
              <RouteOverviewInfo
                id={itemData.item.route}
                name={itemData.item.route_name}
                start={itemData.item.route_time_start}
                end={itemData.item.route_time_end}
              />
            </View>
          );
        }}
        alwaysBounceVertical={false}
      />
      <ToolBar />
    </SafeAreaView>
  )
}

export default LookUp

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#FFF4DF',
    borderRadius: 10,    
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 5.0,
    marginHorizontal: 15,
    marginVertical: 10,
  },
})