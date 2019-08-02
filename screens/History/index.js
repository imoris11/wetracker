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
      <View style={{margin:20, borderBottomWidth:0.5, borderColor:'lightgrey'}}>
      <Text>07:00 am - 20th Feb, 2019</Text>
      <View style={{flexDirection:'row', marginTop:10}}>
        <View style={{ width: 20, height:20, borderRadius:10, backgroundColor:'#83E06D', justifyContent:'center', alignItems:'center' }} >
          <View style={{ width: 10, height:10, borderRadius:5, backgroundColor:'white' }}></View>
        </View>
          <Text style={{ marginLeft: 10 }}>231, Greek Road, Ilewe ,Iyana Ipaja </Text>
      </View>

      <Text style={{marginLeft:8, fontSize:9, color:'#1481E0'}} >|</Text>
      <Text style={{marginLeft:8, fontSize:9, color:'#1481E0'}} >|</Text>

      <View style={{flexDirection:'row'}}>
        <View style={{ width: 20, height:20, borderRadius:10, backgroundColor:'#E0716D', justifyContent:'center', alignItems:'center' }} >
          <View style={{ width: 10, height:10, borderRadius:5, backgroundColor:'white' }}></View>
        </View>
          <Text style={{ marginLeft: 10 }}>11, Waec Bus Stop, Yaba Sango Lagos </Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', margin:20}}>
        <View>
          <Text style={{fontSize:8}} >Distance Travelled</Text>
          <Text style={{fontSize:12}}>15.50 miles</Text>
        </View>
        <View>
          <Text style={{fontSize:8}} >Trip Time</Text>
          <Text style={{fontSize:12}}>30 - 45 miles</Text>
        </View>
        <View>
          <Text style={{fontSize:8}} >Idle Time</Text>
          <Text style={{fontSize:12}}>15 - 26 minutes</Text>
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
