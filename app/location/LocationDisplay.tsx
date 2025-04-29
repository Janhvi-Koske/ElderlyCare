import React from 'react';
 import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
  Dimensions,
 } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
 import useLocationTracking from './LocationTracking';
 

 interface LocationDisplayProps {}
 

 const { width, height } = Dimensions.get('window');
 const ASPECT_RATIO = width / height;
 const LATITUDE_DELTA = 0.02; // Increased for better zoom
 const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
 

 const LocationDisplay: React.FC<LocationDisplayProps> = () => {
  const { location, errorMsg, getCurrentLocation } = useLocationTracking();
 

  if (errorMsg) {
  return (
  <View style={styles.container}>
  <Text>{errorMsg}</Text>
  </View>
  );
  }
 

  if (!location) {
  return (
  <View style={styles.container}>
  <ActivityIndicator size="large" />
  <Text>Loading location...</Text>
  </View>
  );
  }
 

  const { latitude, longitude } = location.coords;
 

  const initialRegion: Region = {
  latitude,
  longitude,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
  };
 

  return (
  <View style={styles.container}>
  <MapView
  style={styles.map}
  initialRegion={initialRegion}
  showsUserLocation={true}
  >
  <Marker coordinate={{ latitude, longitude }} title="Current Location" />
  </MapView>
  <Text style={styles.locationText}>
  Latitude: {latitude.toFixed(6)}, Longitude: {longitude.toFixed(6)}
  </Text>
  <Button title="Refresh Location" onPress={getCurrentLocation} />
  </View>
  );
 };
 

 const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  map: {
  width: '90%',
  height: '70%',
  },
  locationText: {
  marginTop: 20,
  fontSize: 16,
  },
 });
 

 export default LocationDisplay;