import React from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/Signin_04';
import Drawer from './index';

const AppNavigator = createStackNavigator({
    
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
          title: "",
          header: null, 
          navigationBar: null
        },
      },
      Drawer: {
        screen: Drawer,
        navigationOptions: {
            title: "",
            header: null, 
            navigationBar: null
        },
        },
    
});
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
