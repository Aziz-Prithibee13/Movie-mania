import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';





const Map = (props) =>
{
    const {detaile} = props;
    console.log(detaile);


    const latData = detaile?.release_country_data?.lat
    const longData = detaile?.release_country_data?.long
    const lat = parseFloat(latData);
    const long = parseFloat(longData)

    console.log(lat);

    const regionChange = (region) => {
        console.log(region);
    }
    return (
        <View style={styles.mapView}>
            { detaile && <MapView style={styles.map}
                initialRegion={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }}
                onRegionChange={regionChange}
            />}

        </View>
    );
};

export default Map;


const styles = StyleSheet.create({
    mapView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin : 20
    },
    map:
    {
        width: 400,
        height: 400,
    }
})