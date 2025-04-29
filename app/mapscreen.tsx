import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'; // Added TouchableOpacity and Text
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'; // Added useNavigation

function MapScreen() {
  const navigation = useNavigation(); // Initialize navigation

  const initialRegion = {
    latitude: 19.2680,
    longitude: 72.9672,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleGoBack = () => {
    navigation.goBack(); // Use goBack to navigate to the previous screen
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker
          coordinate={{ latitude: 19.2680, longitude: 72.9672 }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 40, // Adjust as needed for spacing from the top
    left: 20, // Adjust for spacing from the left
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MapScreen;