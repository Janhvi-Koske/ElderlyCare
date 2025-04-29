import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import LocationDisplay from './LocationDisplay';
 import SettingsScreen from './SettingScreen'; // If you include it
 

 const Stack = createStackNavigator();
 

 function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Location" component={LocationDisplay} />
  <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
  </NavigationContainer>
  );
 }
 

 export default App;