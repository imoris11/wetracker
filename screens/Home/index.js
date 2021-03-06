import React, { Component } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {
  StyleSheet,
  View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker }  from 'react-native-maps';
import Header from '../../components/Header';
import { get as getDevicesApi } from '../../extra/api';

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
    componentDidMount () {
        this.getDevices();
    }

    getDevices  = async () => {
        try {
            let markers = await getDevicesApi('https://tranquil-taiga-94046.herokuapp.com/get_devices');
            this.setState({ markers });
        } catch (error) {
            console.log(error);
        }
    }
    _attemptGeocodeAsync = async (coords) => {
        try {
          let result = await Location.geocodeAsync({ latitude: 6.454029, longitude: 3.57926 });
          console.log(result)
          return result;
        } catch (e) {
          console.log(e) 
        } finally {
          return 
        }
      };
    onRegionChange = (region) => {
        this.setState({ region });
      }
    render () {
        return (
            <View style={styles.container}>
               <Header title="WeTracker" />
                <MapView
                showsUserLocation
                followsUserLocation
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
