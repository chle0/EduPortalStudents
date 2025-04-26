import { useState } from 'react';
import { validateLogin } from '../utils/validation';
import { reset } from '../navigation/NavigationService';
import { SCREEN_NAMES } from '../config/constants';

const useLoginState = () => {
  const [formData, setFormData] = useState({ userNumber: '', password: '' });
  const [errors, setErrors] = useState({});
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleLogin = () => {

    const validationErrors = validateLogin(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Logging in...', formData);

    reset(SCREEN_NAMES.DASHBOARD);
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password Clicked!');
    // Add navigation or logic here

    console.log('Forgot Password Clicked!');
    setSnackbarMessage('Work in progress...');
    setSnackbarVisible(true);
  
    setTimeout(() => setSnackbarVisible(false), 2000);
  };

  const isButtonDisabled = !formData.userNumber || !formData.password;

  return {
    formData,
    errors,
    snackbarVisible,
    snackbarMessage,
    handleChange,
    handleLogin,
    isButtonDisabled,
    handleForgotPassword,
  };
};

export default useLoginState;