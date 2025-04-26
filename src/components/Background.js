import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import theme from '../config/theme';

const Background = ({ children, useImage = false }) => {
  return useImage ? (
    <ImageBackground source={require('../assets/images/Splash_Bg.png')} style={styles.background}>
      {children}
    </ImageBackground>
  ) : (
    <View style={[styles.background, { backgroundColor: theme.colors.background }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Background;
