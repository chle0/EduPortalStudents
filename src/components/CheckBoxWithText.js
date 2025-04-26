import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../config/theme';

const CheckBoxWithText = ({ onForgotPassword }) => {
    const [isChecked, setIsChecked] = useState(false);
  
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setIsChecked(!isChecked)}
          style={[styles.checkbox, isChecked && styles.checkedBox]}>
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
  
        <Text style={[styles.label]}>Remember me</Text>

        <TouchableOpacity onPress={onForgotPassword} style={styles.forgotButton}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    },
    checkbox: {
      width: 24,
      height: 24,
      borderRadius: 5,
      backgroundColor: theme.colors.disableColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkedBox: {
      backgroundColor: theme.colors.secondary
    },
    checkmark: {
      color: theme.colors.primary,
      fontSize: 12,
      fontWeight: '400',
      fontFamily:theme.fonts.dmSansRegular
    },
    label: {
      fontSize: 12,
      color:theme.colors.disableTextColor,
      fontFamily:theme.fonts.dmSansRegular,
      marginLeft: 10,
      flex: 1,
    },
    
    forgotText: {
      color: theme.colors.textButtonColor,
      fontSize: 12,
      fontWeight: '400',
      fontFamily:theme.fonts.dmSansRegular
    },
  });
  
  export default CheckBoxWithText;