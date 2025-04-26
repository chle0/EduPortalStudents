import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import CheckBoxWithText from '../components/CheckBoxWithText';
import Snackbar from '../components/Snackbar';
import theme from '../config/theme';
import useLoginState from '../store/useLoginState';

const LoginScreen = () => {
    const { formData, errors, snackbarVisible, snackbarMessage, handleChange, handleLogin, isButtonDisabled, handleForgotPassword } = useLoginState();

    return (
        <Background useImage={false}>
            <SafeAreaView style={styles.SafeAreaView}>
                <View style={styles.container}>
                    <View style={{ flexGrow: 0.2 }} />
                    <Text style={styles.title}>Hello! 👋</Text>
                    <Text style={styles.subtitle}>Welcome Back.</Text>
                    <Text style={styles.subtitle1}>Students & Parents</Text>
                    <View style={{ flexGrow: 0.1 }} />
                    <AppInput
                        label="User Number"
                        placeholder="0300 1234568"
                        keyboardType="number-pad"
                        returnKeyType="next"
                        maxLines={1}
                        value={formData.userNumber}
                        onChangeText={(value) => handleChange('userNumber', value)}
                        error={errors.userNumber} />

                    <AppInput
                        label="Password"
                        placeholder="••••"
                        secureTextEntry={true}
                        keyboardType="default"
                        returnKeyType="done"
                        value={formData.password}
                        onChangeText={(value) => handleChange('password', value)}
                        error={errors.password} />
                    <CheckBoxWithText onForgotPassword={handleForgotPassword} />
                    <View style={{ flexGrow: 0.2 }} />
                    <AppButton
                        title="LOGIN"
                        onPress={handleLogin}
                        width="full"
                        height={50}
                        borderRadius={6}
                        color={theme.colors.secondary}
                        textColor={theme.colors.primary}
                        fontSize={14}
                        letterSpacing={2}
                        font={theme.fonts.dmSansBold}
                        disabled={isButtonDisabled} />

                    <Snackbar message={snackbarMessage} visible={snackbarVisible} />
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
    title: {
        fontSize: 40,
        fontFamily: theme.fonts.dmSansBold,
        color: theme.colors.text,
        fontWeight: 'bold',
        marginTop: 24
    },
    subtitle: {
        fontSize: 32,
        color: theme.colors.text,
        fontFamily: theme.fonts.dmSansExtraBold,
        fontWeight: 'bold'
    },
    subtitle1: {
        fontSize: 16,
        paddingTop: 6,
        color: theme.colors.textLight,
        fontFamily: theme.fonts.dmSansRegular,
        fontWeight: '400',
        marginBottom: 24
    },
});

export default LoginScreen;
