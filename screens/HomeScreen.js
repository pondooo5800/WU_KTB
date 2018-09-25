import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions: {
      tabBarBabel: 'Home',
      tabBarIcon: ({tintColor}) =>(
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Settings: {
    screen:SettingsScreen,
    navigationOptions: {
      tabBarBabel: 'Setting',
      tabBarIcon: ({tintColor}) =>(
        <Icon name="ios-settings" color={tintColor} size={24}/>
      )
    }
  },

},{//## router config
  // initialRouteName:'Home',
  // order:['Settings','Home'],
  //## navigation for complete tab navigator
  navigationOptions: {
    tabBarVisible:true
},
tabBarOptions:{
  activeTintColor: '#451660',
  inactiveTintColor: 'grey'
}
});