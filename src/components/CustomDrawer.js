import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        {/* Drawer Items */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Logout')}>
        <Icon name="logout" size={24} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default CustomDrawer;
