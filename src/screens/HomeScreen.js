import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Background from '../components/Background';

const HomeScreen = () => {
  return (
    <Background useImage={false}>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>

        </View>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    width: '100%'
},
container: {
    flex: 1,
    width: '100%',
    justifyContent: 'top',
    paddingHorizontal: 20
},

});

export default HomeScreen;
