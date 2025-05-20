import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { reset } from '../navigation/NavigationService';
import { SCREEN_NAMES } from '../config/constants';
import Background from '../components/Background';
import SplashLogo from '../assets/images/SplashLogo.png';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      reset(SCREEN_NAMES.LOGIN);
    }, 3000);
  }, []);

  return (
    <Background useImage={true}>
      <View style={styles.container}>
        <Image source={SplashLogo} style={styles.logo} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 1,
    height: height * 1,
    resizeMode: "contain"
  },
});

export default SplashScreen;
