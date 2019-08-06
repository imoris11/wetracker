import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
export const get  = async (url) => {
    let response = await fetch(url);
    let data =  await response.json();
    let temp = {};
    let markers = [];
    for (let i = 0; i<data.length; i++ ) {
        let coords = data[i];
        let location = await Location.reverseGeocodeAsync({latitude: coords.lat, longitude: coords.lng });
        temp = {
            latlng:{
                latitude: coords.lat,
                longitude: coords.lng,
            },
            title: "Device " + Number(1 + i),
            description: location[0].name,
            key: coords.lat+i
        }
        markers.push(temp);
    }
    return markers;
}