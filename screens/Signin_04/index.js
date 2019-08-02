import React, { Component } from "react";
import { AppLoading } from 'expo';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  View,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  I18nManager
} from "react-native";
import {
  Container,
  Right,
  Item,
  Input,
  Header,
  Left,
  Body,
  Form
} from "native-base";
// Screen Styles
import styles from "./styles";

export default class Signin extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
     fontLoaded: false,
      email:'',
      password:''
    };
  }


   loadResourcesAsync = async () => {
    await Expo.Font.loadAsync({
      'SFUIDisplay-Medium': require('../../Fonts/SF-UI-Display-Medium.ttf'),
      'SFUIDisplay-Light': require('../../Fonts/SFUIDisplay-Light.ttf'),
      'SFUIDisplay-Regular': require('../../Fonts/SF-UI-Text-Regular.ttf'),
      'SFUIDisplay-Semibold': require('../../Fonts/SFUIDisplay-Semibold.ttf'),

    });
    this.setState({ fontLoaded: true });
  }

  handleLoadingError = async (error) => {
    console.warn(error);
  }

  login () {  
    const { email, password } = this.state;
    let data = {
      email,
      password
    };
    //Call login API and redirect on success
    AsyncStorage.setItem('user_id', '1');
    Actions.drawer();
  }
  render() {

    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }


    if(!this.state.fontLoaded) 
    {

      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={() => this.setState({ fontLoaded: true})}
        />
      );
     
    }

    return (
      <Container>
        <ImageBackground source={require('../../assets/images/login.png')} style={styles.backgroundImage} >
          <View style={{flex:2}}></View>
          <Form style={styles.form}>
          <View style={styles.logosec}>
             <Text style={{color:"#000", fontSize:25, fontWeight: "bold"}}>Account Login</Text>
          </View>
            <Item regular style={styles.inputStyle}>
              <Input
                placeholderTextColor="grey"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="user@example.com"
                onChangeText={(email) => this.setState({ email })}
                style={styles.inputmain}
              />
            </Item>
            <Item regular style={styles.inputStyle}>
              <Input
                placeholderTextColor="grey"
                placeholder="********"
                secureTextEntry={true}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                onChangeText={(password) => this.setState({ password})}
                style={styles.inputmain}
              />
            </Item>
            <TouchableOpacity
              info
              style={styles.signInbtn}
              onPress={() => this.login()}
            >
              <Text autoCapitalize="words" style={styles.buttongetstarted}>
                Log In
              </Text>
            </TouchableOpacity>
          </Form>
        </ImageBackground>
      </Container>
    );
  }
}
