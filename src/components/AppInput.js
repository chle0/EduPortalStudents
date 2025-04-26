import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import theme from '../config/theme';
import EyeIcon from '../assets/svg/ic_password.svg';
import EyeOffIcon from '../assets/svg/ic_password_invisible.svg';

const AppInput = ({
  label,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
  error,
  fontSize = 14,
  fontFamily = theme.fonts.dmSansMedium,
  textColor = theme.colors.text,
  borderRadius = 10,
  keyboardType = 'default',
  returnKeyType = 'done',
  maxLines = 1,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, { fontFamily, fontSize }]}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          { borderColor: error ? theme.colors.errorColor : theme.colors.transparentColor, borderRadius, color: theme.colors.text },
        ]}
      >
        <TextInput
          style={[
            styles.input,
            { fontSize, fontFamily, color: textColor },
          ]}
          placeholder={placeholder}
          secureTextEntry={isPasswordVisible}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={theme.colors.placeholdeColor}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          multiline={maxLines > 1}
          numberOfLines={maxLines}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.icon}
          >
            {isPasswordVisible ? <EyeOffIcon width={24} height={24} /> : <EyeIcon width={24} height={24} />}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontFamily: theme.fonts.dmSansBold,
    marginBottom: 12,
    color: theme.colors.labeColor,
    fontWeight: 'bold'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 12,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      }
    })
  },
  input: {
    flex: 1,
    paddingVertical: 18,
  },
  icon: {
    paddingHorizontal: 12,
  },
  errorText: {
    color: theme.colors.errorColor,
    fontSize: 12,
    marginTop: 5,
    fontFamily: theme.fonts.dmSansRegular,
    fontWeight: '400'
  },
});

export default AppInput;
