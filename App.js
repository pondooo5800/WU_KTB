import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator  } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}


const AppStackNavigator = createStackNavigator({
  Home:HomeScreen
  }
);
