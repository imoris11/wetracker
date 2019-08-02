import React, { Component } from 'react';
import {
  TouchableOpacity,
  I18nManager,
  View,
} from 'react-native';
import { AppLoading } from 'expo';
import { Container, Content, Item, Input, Text, Form, Textarea } from 'native-base';
import Header from '../../components/Header';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

export default class Assets extends Component {
  constructor (){
    super();
    this.state = {
      fontLoaded:false,
      name:'',
      type:'',
      model:'',
      description:''
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
    const { name, type, model, description } = this.state;
    let data = {
      name,
      type,
      model,
      description
    }
    console.log(data);
    Actions.home();
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
        <Header title="Add Device" />
        <Content>
          <View style={styles.container}>
          <Form style={[styles.form, { marginTop:30}]}>
            <Text style={styles.title} >Device Information</Text>
            <Item regular style={styles.inputStyle}>
                <Input
                  placeholderTextColor="grey"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Device Name"
                  onChangeText={(name) => this.setState({ name })}
                  style={styles.inputmain}
                />
            </Item>
            <Item regular style={styles.inputStyle}>
                <Input
                  placeholderTextColor="grey"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Device Type"
                  onChangeText={(type) => this.setState({ type })}
                  style={styles.inputmain}
                />
            </Item>
            <Item regular style={styles.inputStyle}>
                <Input
                  placeholderTextColor="grey"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Device Model"
                  onChangeText={(model) => this.setState({ model })}
                  style={styles.inputmain}
                />
            </Item>
            <Textarea 
              style={styles.inputStyle}
              placeholderTextColor="grey"
              rowSpan={5} 
              bordered 
              placeholder="Device Description"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              onChangeText={(description) => this.setState({ description })}
               />
            <TouchableOpacity
              info
              style={styles.signInbtn}
              onPress={this.submit}
            >
              <Text autoCapitalize="words" style={styles.buttongetstarted}>
                Add Device
              </Text>
            </TouchableOpacity>
          </Form>
          </View>
        </Content>
      </Container>
    );
  }
  
}
