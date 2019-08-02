import React, { Component } from 'react';
import {TouchableOpacity, Image } from 'react-native';
import { Header, Body, Icon, Button, Left, Right, Text} from 'native-base';
import styles from './styles';
import { Metrics } from '../Themes';
import { Actions } from 'react-native-router-flux';
import { openSmsUrl } from '../extra/sms';

export default class CustomHeader extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return(
            <Header style={styles.headerSec}>
            <Left style={styles.left}>
                <TouchableOpacity
                onPress={Actions.drawerOpen}
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
                <Text style={styles.textTitle}>{this.props.title}</Text> 
            </Body>
            <Right style={styles.right}>
                <Button onPress={()=> openSmsUrl('0937233559','This is the text message for me.')}  transparent>
                <Icon type="MaterialIcons" style={styles.headerIcon} name="message"  />
                </Button>
            </Right>
            </Header>
        )
    }
}