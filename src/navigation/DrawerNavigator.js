import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AppBar from '../components/AppBar';
import CustomDrawer from '../components/CustomDrawer';
import { SCREEN_NAMES } from '../config/constants';
import { useNotifications } from '../utils/NotificationsContext';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
     const { hasUnreadNotifications, setHasUnreadNotifications } = useNotifications();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={({ navigation }) => ({
                header: () => <AppBar navigation={navigation} hasUnreadNotifications={hasUnreadNotifications} />,
                    drawerStyle: {
                      width: '100%',
                      top:30
                    },
            })
        }
        >
            <Drawer.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
