import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker }  from 'react-native-maps';
import Header from '../../components/Header';
export default class HomeScreen extends Component {
    constructor () {
        super();
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers:[]
        }
    }
    onRegionChange = (region) => {
        
        this.setState({ region });
      }
    onRegionChangeComplete = (region) => {
        let { markers } = this.state;
        if (markers.length < 3 ) {
            let temp = {
                latlng:{
                    latitude: region.latitude + 0.0002,
                    longitude: region.longitude + 0.0001,
                },
                title: "Ford Edge 2019",
                description: 'Current location of car'
            }
            markers.push(temp);
                
        }
        this.setState({ markers, region });
    }
    render () {
        return (
            <View style={styles.container}>
               <Header title="WeTracker" />
                <MapView
                region={this.state.region}
                showsUserLocation
                followsUserLocation	
                onRegionChangeComplete={this.onRegionChangeComplete}
                loadingEnabled
                onRegionChange={this.onRegionChange}
                style={{flex: 1}}>
                    {this.state.markers.map((marker, key) => (
                        <Marker
                            key={key}
                            image={require('../../assets/images/carIcon.png')}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
            </View>
            );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
