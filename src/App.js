import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { navigationRef } from './navigation/NavigationService';
import { NotificationsProvider } from './utils/NotificationsContext';
import 'react-native-gesture-handler'

const App = () => {
  return (
    <NotificationsProvider>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </NotificationsProvider>
  );
};

export default App;
