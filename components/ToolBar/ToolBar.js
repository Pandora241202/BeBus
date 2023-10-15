import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ToolBarItem from './ToolBarItem.js';

export default function ToolBar({itemEnable}) {
  //const [itemEnable, setItemEnable] = useState('home');
  const navigation = useNavigation()

  function onPressItemHandler(screen) {
    navigation.navigate(screen)
  }

  return (        
    <View style={styles.toolbar}>
      <ToolBarItem type='bell' name='bell-o' disable={itemEnable === 'Notification'} onPress={() => onPressItemHandler('Home')}/>
      <ToolBarItem type='calendar' name='calendar' disable={itemEnable === 'Calendar'} onPress={() => onPressItemHandler('Schedule')}/>
      <ToolBarItem type='home' name='home' disable={itemEnable === 'Home'} onPress={() => onPressItemHandler('Home')}/>
      <ToolBarItem type='heart' name='heart-o' disable={itemEnable === 'Heart'} onPress={() => onPressItemHandler('Home')}/>
      <ToolBarItem type='user' name='user-circle' disable={itemEnable === 'Settings'} onPress={() => onPressItemHandler('Home')}/>
    </View>
  )
};

const styles = StyleSheet.create({
  toolbar: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#000000',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 65,   
    width: '100%',
    bottom: 0,
  },
});