import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  AsyncStorage, 
  Alert,
  Image 
} from 'react-native';
import { Container, Content, Icon } from 'native-base';
import styles from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { openSmsUrl } from '../extra/sms';
import { Actions } from 'react-native-router-flux';

export default class ControlPanel extends Component {
  constructor (props){
    super(props);
    this.state = {
      loggedIn:false
    }
  }
  componentDidMount () {
    this.confirmStatus();
  }

  async confirmStatus  () {
    let userId = await AsyncStorage.getItem('user_id');
     if (userId) {
       this.setState({ loggedIn:true });
     }
  }


logout = async () => {
   AsyncStorage.removeItem('user_id');
   this.setState({ loggedIn: false});
   Actions.login();
}
  
  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.menucontrolPanel}>
          <TouchableOpacity onPress={Actions.home}>
            <View style={styles.userProfiles}>
              <Image style={styles.userImageStyle} resizeMode={'cover'} source={require('../assets/images/richard.jpeg')} />
              <View style={styles.userDetailsStyle}>
                <Text style={styles.userDetailsText}>John Smith</Text>
                <Text style={styles.userId}>ID: John123</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.deviceAdded}>
              <Text style={styles.userDetailsText}>Device Added</Text>
          </View>
          <View style={styles.device}>
            <Text>Ford Edge 2019</Text>
            <View style={[styles.circle, styles.inactive]}></View>
          </View>
          <View style={styles.device}>
            <Text>Truck</Text>
            <View style={[styles.circle, styles.sleeping]}></View>
          </View>
          <View style={styles.device}>
            <Text>Power Bike</Text>
            <View style={[styles.circle, styles.success]}></View>
          </View>
          <TouchableOpacity onPress={Actions.assets} >
            <View style={[styles.listrow, styles.addBorder]}>
              <View style={styles.addContainer}>
              <Icon name="ios-add" style={styles.addIcon} />
              </View>
              <Text style={styles.add}>Add Asset</Text>
            </View>
          </TouchableOpacity>

          <View style={{marginLeft:10}}>
            <TouchableOpacity onPress={()=> openSmsUrl('09037233559', 'This is another messaging')}>
              <View style={styles.listrow}>
                <Icon type="MaterialIcons" style={styles.icons} name="message"  />
               <Text style={styles.rowtxt}>  Messaging</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.settings}>
              <View style={styles.listrow}>
                  <Icon type="FontAwesome" name="cog" style={styles.icons} />
                  <Text style={styles.rowtxt}>  Settings</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={Actions.history} >
                <View style={styles.listrow}>
                  <SimpleLineIcons name="chart" style={styles.icons} />
                  <Text style={styles.rowtxt}>  Tracking History</Text>
                </View>
            </TouchableOpacity>
 
          <TouchableOpacity onPress={() => alert('Alert device')} >
            <View style={styles.listrow}>
              <Icon type='FontAwesome5' name="bell" style={styles.icons} />
              <Text style={styles.rowtxt}>  Alert</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.logout()} >
            <View style={styles.listrow}>
              <Icon type="MaterialCommunityIcons" name="logout" style={styles.icons} />
              <Text style={styles.rowtxt}>  Logout</Text>
            </View>
          </TouchableOpacity>

         
          </View>
        </Content>
      </Container>
    )
  }

}
