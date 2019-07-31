import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  AsyncStorage, 
  Alert,
  Share 
} from 'react-native';
import { Container, Content } from 'native-base';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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

  onShare = () => {
    try {
      const result =   Share.share({
        message:
          'Hi Friend. Get the the iChurch App on playstore now ! https://playstore.com/url',
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
    //  alert(error.message);
    }
  };

logout = async () => {
   AsyncStorage.removeItem('user_id');
   this.setState({ loggedIn: false});
   Alert.alert("Successfully logged out");
}
  
  render() {
    const { loggedIn } = this.state;
    return (
      <Container style={styles.menuContainer}>
        <Content style={styles.menucontrolPanel}>
          <View style={styles.userProfiles}>
             <View style={styles.userDetailsStyle}>
               <Text style={styles.userDetailsText}>WeTracker</Text>
             </View>
          </View>
          <View style={styles.menumainview}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('DrawerSocial');
              this.props.closeDrawer(); 
              } } >
              <View style={styles.listrow}>
                <Ionicons name="md-home" color="#ffffff" size={20} />
                <Text style={styles.rowtxt}>  Home</Text>
              </View>
            </TouchableOpacity>
          

            {loggedIn && <TouchableOpacity onPress={() => this.logout()}>
              <View style={styles.listrow}>
                <SimpleLineIcons name="logout" color='#ffffff' size={20} />
                <Text style={styles.rowtxt}>  Log out</Text>
              </View>
            </TouchableOpacity>}
          </View>
        </Content>
      </Container>
    )
  }

}
