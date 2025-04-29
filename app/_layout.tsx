import React from 'react';
import { Stack } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'white' },
          animation: 'slide_from_right',
          navigationBarHidden: true,
        }}
      >
        <Stack.Screen
          name="location/LocationTracking"
          options={{ headerShown: false, headerBackTitle: '', title: '' }}
        />
        <Stack.Screen name="mapscreen" options={{ headerShown: false }} />
        <Stack.Screen name="app/login" options={{ headerShown: false }} />
        <Stack.Screen name="app/home" options={{ headerShown: false }} />
        <Stack.Screen
          name="medications/add"
          options={{ headerShown: false, headerBackTitle: '', title: '' }}
        />
        <Stack.Screen
          name="refills/index"
          options={{ headerShown: false, headerBackTitle: '', title: '' }}
        />
        <Stack.Screen
          name="calendar/index"
          options={{ headerShown: false, headerBackTitle: '', title: '' }}
        />
        <Stack.Screen
          name="history/index"
          options={{ headerShown: false, headerBackTitle: '', title: '' }}
        />
        <Stack.Screen
          name="location/SettingScreen"
          options={{ headerShown: false, headerBackTitle: '', title: '' }}
        />
        <Stack.Screen
          name="location/LocationDisplay"
          options={{ headerShown: false, headerBackTitle: '', title: '' }}
        />
      </Stack>
    </>
  );
}
``


