import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../../components/Header';
import styles from './styles';
export default function Assets () {
  return (
    <Container style={styles.container}>
      <Header title="Tracking History" />
      <Content>
        <View>
          <Text>History of tracking</Text>
        </View>
      </Content>
    </Container>
  );
}