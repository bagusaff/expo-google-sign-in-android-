import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import LoadingScreen from './screens/LoadingScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import * as firebase from 'firebase'
import initialize, {initalize} from './firebaseConfig'

initialize

export default function App() {
  return (
    <AppNavigator/>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)
