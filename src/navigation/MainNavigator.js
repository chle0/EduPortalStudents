import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import { SCREEN_NAMES } from '../config/constants';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';
import NotificationScreen from '../screens/NotificationScreen';
import FeeHistory from '../screens/FeeHistoryScreen';
import FeeHistoryDetail from '../screens/FeeHistoryDetail';
import DiaryScreen from '../screens/DiaryScreen';
import DiaryDetail from '../screens/DiaryDetail';
import NotificationDetail from '../screens/NotificationDetail';
import ResultScreen from '../screens/ResultScreen';
import ResultDetail from '../screens/ResultDetail';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAMES.SPLASH}>
      <Stack.Screen
        name={SCREEN_NAMES.SPLASH}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={SCREEN_NAMES.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name={SCREEN_NAMES.DASHBOARD} component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="FeeHistory" component={FeeHistory}/>
      <Stack.Screen name="FeeHistoryDetail" component={FeeHistoryDetail}/>
      <Stack.Screen name="DiaryScreen" component={DiaryScreen}/>
      <Stack.Screen name="DiaryDetail" component={DiaryDetail}/>
      <Stack.Screen name='NotificationDetail' component={NotificationDetail} options={{ headerShown: false }} />
      <Stack.Screen name="ResultScreen" component={ResultScreen}/>
      <Stack.Screen name="ResultDetail" component={ResultDetail}/>

      {/* <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
