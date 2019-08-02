import React,  { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { Container, Text } from 'native-base';
import Header from '../../components/Header';
import styles from './styles';
import ScrollableTabView, { ScrollableTabBar, } from '../../react-native-scrollable-tab-view';

export default class History extends Component {
  constructor(){
    super();
    this.state = {
      data:[{key:'1', name:'Ford'}, {key:'2', name:'Generator'}],
      data2:[{key:'1', name:'Ford'}, {key:'2', name:'Generator'}, {key:'3', name:'Truck'}]
    }
  }

  _renderItem = ({item, index }) => {
    return (
      <View style={styles.rowContainer}>
      <Text>07:00 am - 20th Feb, 2019</Text>
      <View style={styles.secondaryContainer}>
        <View style={styles.outerCircle} >
          <View style={styles.innerCircle}></View>
        </View>
          <Text style={{ marginLeft: 10 }}>231, Greek Road, Ilewe ,Iyana Ipaja </Text>
      </View>

      <Text style={styles.marker} >|</Text>
      <Text style={styles.marker} >|</Text>

      <View style={{flexDirection:'row'}}>
        <View style={styles.secondaryCircle} >
          <View style={styles.innerCircle}></View>
        </View>
          <Text style={{ marginLeft: 10 }}>11, Waec Bus Stop, Yaba Sango Lagos </Text>
      </View>
      <View style={styles.timeInfo}>
        <View>
          <Text style={styles.timeHint} >Distance Travelled</Text>
          <Text style={styles.time}>15.50 miles</Text>
        </View>
        <View>
          <Text style={styles.timeHint} >Trip Time</Text>
          <Text style={styles.time}>30 - 45 miles</Text>
        </View>
        <View>
          <Text style={styles.timeHint} >Idle Time</Text>
          <Text style={styles.time}>15 - 26 minutes</Text>
        </View>

      </View>
    </View>
    )
  }
  render () {
    return (
      <Container style={styles.container}>
        <Header title="Tracking History" />
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tabUnderLine}
          tabBarActiveTextColor={'#1481E0'}
          tabBarInactiveTextColor={'rgba(20,129,224,0.4)'}
          tabBarTextStyle={styles.tabText}
          renderTabBar={() => <ScrollableTabBar />} >
          <View tabLabel='Ford Edge'>
            <FlatList
              data={this.state.data}
              extraData={this.state.data}
              renderItem={this._renderItem}
             />
            </View>
            <View tabLabel='Truck'>
              <FlatList
                data={this.state.data2}
                extraData={this.state.data2}
                renderItem={this._renderItem}
              />
            </View>
            <View tabLabel='Generator'>
              <FlatList
                data={this.state.data}
                extraData={this.state.data}
                renderItem={this._renderItem}
              />
            </View>
        </ScrollableTabView>
      </Container>
    );
  }
  
}
