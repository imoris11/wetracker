import React, { Component } from 'react';
import {
  TouchableOpacity,
  I18nManager,
  View,
  Image
} from 'react-native';
import { AppLoading } from 'expo';
import { Container, Content, Item, Input, Text, Form, Textarea } from 'native-base';
import Header from '../../components/Header';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

export default class Geofencing extends Component {
  constructor (){
    super();
    this.state = {
      fontLoaded:false,
      location:'',
      area:'',
    }
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

  submit = () => {
    const { area, location } = this.state;
    let data = {
      area,
      location
    }
    Actions.pop();
  }
 render () {
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
      <Container style={styles.container}>
        <Header back={true} title="Geofencing" />
        <Content>
          <View style={styles.container}>
          <Form style={[styles.form, { marginTop:30}]}>
              <Image source={require('../../assets/images/geofencing.png')} style={{height:137}} />
            <Text style={styles.title} >Set Geofencing</Text>
            <Item regular style={styles.inputStyle}>
                <Input
                  placeholderTextColor="grey"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Present Device  Location"
                  onChangeText={(location) => this.setState({ location })}
                  style={styles.inputmain}
                />
            </Item>
            <Item regular style={styles.inputStyle}>
                <Input
                  placeholderTextColor="grey"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="232km"
                  onChangeText={(area) => this.setState({ area })}
                  style={styles.inputmain}
                />
            </Item>
            <TouchableOpacity
              info
              style={styles.signInbtn}
              onPress={this.submit}
            >
              <Text autoCapitalize="words" style={styles.buttongetstarted}>
               Set Geofencing
              </Text>
            </TouchableOpacity>
          </Form>
          </View>
        </Content>
      </Container>
    );
  }
  
}
