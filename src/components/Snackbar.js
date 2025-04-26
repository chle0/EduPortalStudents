import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import theme from '../config/theme';

const Snackbar = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <Animated.View style={styles.snackbar}>
      <Text style={styles.snackbarText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: theme.colors.text,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  snackbarText: {
    color: theme.colors.primary,
    fontSize: 12,
    fontFamily: theme.fonts.dmSansMedium,
    alignSelf:'flex-start'
  },
});

export default Snackbar;
