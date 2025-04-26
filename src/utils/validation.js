export const validateLogin = (values) => {
    let errors = {};
  
    if (!values.userNumber) {
      errors.userNumber = 'User number is required';
    } else if (!/^\d{11}$/.test(values.userNumber)) {
      errors.userNumber = 'Enter a valid 11-digit number';
    }
  
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
  
    return errors;
  };
  