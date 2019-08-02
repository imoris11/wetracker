'use strict';
import React, {Component} from 'react';
import {
  Scene,
  Router,
  Reducer,
  Overlay,
  Stack,
  Drawer,
  Lightbox
} from 'react-native-router-flux';
//App components
import Login from '../screens/Signin_04';
import DrawerContent from './ControlPanel';
import Home from '../screens/Home';
import History from '../screens/History';
import Assets from '../screens/Assets';
import Settings from '../screens/Settings';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  };
};


export default class App extends Component{
  render() {
    return (
      <Router
        createReducer={reducerCreate}
        >
        <Overlay>
            <Lightbox>
              <Stack
                hideNavBar
                key="root"
              >
                <Scene key='login' component={Login} />
                <Drawer
                  initial
                  hideNavBar
                  key="drawer"
                  contentComponent={DrawerContent}
                >
                <Scene key='home' component={Home} hideNavBar />
                <Scene initial key='history' component={History} hideNavBar />
                <Scene  key='assets' component={Assets} hideNavBar />
                <Scene  key='settings' component={Settings} hideNavBar />
              </Drawer>
              </Stack>
            </Lightbox>
        </Overlay>
      </Router>
    );
  }
}
