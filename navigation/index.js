import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Image
} from "react-native";
import {
  Right,
  Header,
  Left,
  Icon,
  Body,
  Button
} from "native-base";
const drawerStyles = {
  drawer: {
    shadowColor: "red",
    shadowOpacity: 0.8,
    shadowRadius: 20
  }

};
import Drawer from "react-native-drawer";
import MyControlPanel from "./ControlPanel";
import tweens from "./tweens";
import styles from "./styles";
import { Metrics } from '../Themes';
import Home from '../screens/Home';
import { openSmsUrl } from '../extra/sms';

export default class DrawerSocial extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: "static",
      openDrawerOffset: 100,
      closedDrawerOffset: 0,
      panOpenMask: 0.1,
      relativeDrag: false,
      panThreshold: 0.25,
      tweenHandlerOn: false,
      tweenDuration: 300,
      tweenEasing: "linear",
      acceptPan: true,
      tapToClose: true,
      side: "left"
    };
  }
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", function() {
      return true;
    });
  }

  setDrawerType(type) {
    this.setState({
      drawerType: type
    });
  }

  tweenHandler(ratio) {
    if (!this.state.tweenHandlerPreset) {
      return {};
    }
    return tweens[this.state.tweenHandlerPreset](ratio);
  }

  noopChange() {
    this.setState({
      changeVal: Math.random()
    });
  }

  openDrawer() {
    this.drawer.open();
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  render() {
    const { navigation } = this.props;
    
    var controlPanel = (
      <MyControlPanel
        closeDrawer={() => {
          this.drawer.close();
        }}

        navigation={navigation}
      
      />
    );
    return (
      <View style={styles.container}>
        <Drawer
          ref={c => (this.drawer = c)}
          type={this.state.drawerType}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          panThreshold={this.state.panThreshold}
          content={controlPanel}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            mainOverlay: {
              opacity: ratio * 0.7,
              backgroundColor: 'black'
            }
          })}
          tweenDuration={this.state.tweenDuration}
          tweenEasing={this.state.tweenEasing}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptTap={this.state.acceptTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}
          negotiatePan={this.state.negotiatePan}
          changeVal={this.state.changeVal}
          side={this.state.side}
        >
          <View style={styles.drawercontainer}>
            <Header style={styles.headerSec}>
              <Left style={styles.left}>
                <TouchableOpacity
                  onPress={() => this.openDrawer()}
                  style={styles.backArrow}
                >
                  <Image source={require("../assets/images/menu.png")}
                  style={{
                    height: Metrics.HEIGHT * 0.07,
                    width: Metrics.WIDTH * 0.07,  
                    resizeMode: "contain"
                  }}
                  /> 
                </TouchableOpacity>
              </Left>
              <Body style={styles.body}>
                <Text style={styles.textTitle}>WeTracker</Text> 
              </Body>
              <Right style={styles.right}>
                <Button onPress={()=> openSmsUrl('0937233559','This is the text message for me.')}  transparent>
                  <Icon type="MaterialIcons" style={styles.headerIcon} name="message"  />
                </Button>
              </Right>
            </Header>
            <Home />
          </View>
        </Drawer>
      </View>
    );
  }
}
