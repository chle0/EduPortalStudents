import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import theme from '../config/theme';

const AppButton = ({
  title,
  onPress,
  width = 'auto',
  color = theme.colors.primary,
  textColor = theme.colors.text,
  font = theme.fonts.bold,
  fontSize = 16,
  lineHeight = 0,
  disabled = false,
  borderRadius = 10,
  letterSpacing = 0,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? theme.colors.disableColor : color,
          width: width, borderRadius: borderRadius,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: textColor,
            fontFamily: font,
            fontSize: fontSize,
            lineHeight: lineHeight,
            letterSpacing: letterSpacing
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    marginTop:36
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default AppButton;
