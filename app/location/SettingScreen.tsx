import React from 'react';
 import { View, Text, Switch, StyleSheet } from 'react-native';
 import useLocationTracking from './LocationTracking';
 

 interface SettingsScreenProps {}
 

 const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  const {
  isTracking,
  startBackgroundLocationUpdates,
  stopBackgroundLocationUpdates,
  } = useLocationTracking();
 

  return (
  <View style={styles.container}>
  <Text style={styles.title}>Location Tracking Settings</Text>
  <View style={styles.settingItem}>
  <Text>Track Location in Background</Text>
  <Switch
  value={isTracking}
  onValueChange={(newValue) => {
  if (newValue) {
  startBackgroundLocationUpdates();
  } else {
  stopBackgroundLocationUpdates();
  }
  }}
  />
  </View>
  </View>
  );
 };
 

 const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  },
  title: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
  },
  settingItem: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 15,
  },
 });
 

 export default SettingsScreen;