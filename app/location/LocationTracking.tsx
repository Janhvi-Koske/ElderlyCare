import React, { useState, useEffect } from 'react';
 import * as Location from 'expo-location';
 import * as TaskManager from 'expo-task-manager';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import { getFirestore, collection, addDoc, FirestoreError } from 'firebase/firestore';
 import { Alert, Platform } from 'react-native';
 

 const LOCATION_TASK_NAME = 'background-location-task';
 const db = getFirestore(); // Initialize Firestore
 

 // Define types for Location data
 interface Coordinate {
  latitude: number;
  longitude: number;
  altitude?: number | null;
  accuracy?: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
 }
 

 interface LocationObject {
  coords: Coordinate;
  timestamp: number;
  mocked?: boolean;
  provider?: string;
 }
 

 // Define the background task
 TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
  console.error('Background location task error:', error);
  return;
  }
  if (data) {
  const { locations } = data as { locations: Location.LocationObject[] }; // Type assertion
  const { coords, timestamp } = locations[0];
  const { latitude, longitude } = coords;
 

  console.log(
  'Background Location:',
  latitude,
  longitude,
  new Date(timestamp).toLocaleTimeString()
  );
  try {
  await saveLocationToFirestore(latitude, longitude, timestamp);
  } catch (e) {
  const err = e as FirestoreError; // Type assertion
  console.error('Error saving location', err.message);
  }
  }
 });
 

 async function saveLocationToFirestore(
  latitude: number,
  longitude: number,
  timestamp: number
 ) {
  try {
  await addDoc(collection(db, 'user_locations'), {
  latitude,
  longitude,
  timestamp,
  userId: 'aZvserdvrsO5DE4nFALuKTUrcfI2', // Replace with actual user ID
  });
  } catch (error) {
  const err = error as FirestoreError; // Type assertion
  console.error('Firestore error saving location:', err.message);
  }
 }
 

 interface UseLocationTrackingResult {
  location: LocationObject | null;
  errorMsg: string | null;
  startBackgroundLocationUpdates: () => Promise<void>;
  stopBackgroundLocationUpdates: () => Promise<void>;
  getCurrentLocation: () => Promise<void>;
  isTracking: boolean;
 }
 

 const useLocationTracking = (): UseLocationTrackingResult => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isTracking, setIsTracking] = useState<boolean>(false);
 

  useEffect(() => {
  (async () => {
  let { status: foregroundStatus } =
  await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus !== 'granted') {
  setErrorMsg('Foreground location permission denied');
  return;
  }
 

  let { status: backgroundStatus } =
  await Location.requestBackgroundPermissionsAsync();
  if (backgroundStatus !== 'granted') {
  setErrorMsg('Background location permission denied');
  return;
  }
 

  let initialLocation = await Location.getCurrentPositionAsync({
  accuracy: Location.Accuracy.High,
  });
  setLocation(initialLocation);
 

  const tracking = (await AsyncStorage.getItem('isTracking')) === 'true';
  setIsTracking(tracking);
 

  if (tracking) {
  startBackgroundLocationUpdates();
  }
  })();
  }, []);
 

  const startBackgroundLocationUpdates = async () => {
  try {
  await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
  accuracy: Location.Accuracy.Balanced, // Adjust for your needs
  timeInterval: 60000, // Minimum 60000 (1 minute) on Android
  distanceInterval: 10, // Minimum 0 meters
  showsBackgroundLocationIndicator: true, // iOS, visual indicator
  foregroundService: {
  notificationTitle: 'Location Tracking',
  notificationBody: 'Tracking your location in the background.',
  },
  });
  await AsyncStorage.setItem('isTracking', 'true');
  setIsTracking(true);
  } catch (e) {
  const err = e as Error; // Type assertion
  console.error('Error starting background updates', err.message);
  Alert.alert('Error', 'Could not start location tracking.');
  }
  };
 

  const stopBackgroundLocationUpdates = async () => {
  await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
  await AsyncStorage.setItem('isTracking', 'false');
  setIsTracking(false);
  };
 

  const getCurrentLocation = async () => {
  try {
  let currentLocation = await Location.getCurrentPositionAsync({
  accuracy: Location.Accuracy.High,
  });
  setLocation(currentLocation);
  } catch (error) {
  const err = error as Error; // Type assertion
  setErrorMsg('Error getting current location: ' + err.message);
  }
  };
 

  return {
  location,
  errorMsg,
  startBackgroundLocationUpdates,
  stopBackgroundLocationUpdates,
  getCurrentLocation,
  isTracking,
  };
 };
 

 export default useLocationTracking;