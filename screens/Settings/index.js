import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Content, Icon, Text } from 'native-base';
import Header from '../../components/Header';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

export default function Assets () {
  return (
    <Container style={styles.container}>
      <Header title="Settings" />
      <Content>
        <View style={styles.container}>
        <View style={{marginLeft:20, marginTop:30}}>
            <TouchableOpacity onPress={Actions.geofencing}>
              <View style={styles.listrow}>
                  <Icon type="FontAwesome" name="map" style={styles.icons} />
                  <Text style={styles.rowtxt}>Geofencing</Text>
            </View>
            </TouchableOpacity>
 
          <TouchableOpacity onPress={Actions.speed} >
            <View style={styles.listrow}>
              <Icon type='FontAwesome' name="dashboard" style={styles.icons} />
              <Text style={styles.rowtxt}>Speed limit</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => alert('Alert device')} >
            <View style={styles.listrow}>
              <Icon type="MaterialCommunityIcons" name="bell" style={styles.icons} />
              <Text style={styles.rowtxt}>SOS alert</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.logout()} >
            <View style={styles.listrow}>
              <Icon type="MaterialCommunityIcons" name="thermometer" style={styles.icons} />
              <Text style={styles.rowtxt}>Temperature Monitor</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.logout()} >
            <View style={styles.listrow}>
              <Icon type="MaterialCommunityIcons" name="logout" style={styles.icons} />
              <Text style={styles.rowtxt}>SMS Engine Control</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.logout()} >
            <View style={styles.listrow}>
              <Icon type="MaterialCommunityIcons" name="logout" style={styles.icons} />
              <Text style={styles.rowtxt}>Voice Monitoring</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
}
