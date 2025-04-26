import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import { SCREEN_NAMES } from '../config/constants';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAMES.DASHBOARD}>
      <Stack.Screen
        name={SCREEN_NAMES.SPLASH}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={SCREEN_NAMES.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name={SCREEN_NAMES.DASHBOARD} component={DrawerNavigator} options={{ headerShown: false }} />
      {/* <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
