import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker }  from 'react-native-maps';
import Header from '../../components/Header';

export default class HomeScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            markers:[]
        }
    }
   componentDidMount () {
    let { markers } = this.state;
    markers.push(this.props.device);
    this.setState({ markers });
   }
    onRegionChange = (region) => {
        this.setState({ region });
      }
    render () {
        return (
            <View style={styles.container}>
               <Header back={true} title="WeTracker" />
                <MapView
                region={this.props.device.latlng}
                showsUserLocation
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
