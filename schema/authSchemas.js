import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  username_or_email: Yup.string().required('Username or Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export const signUpValidationSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  username: Yup.string().required('Usename is required'),
  gender: Yup.string().required('Gender is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  age: Yup.string().required('Age is required'),
  date_of_birth: Yup.string().required('Age is required'),
  phone: Yup.string().required('Phone number is required'),
  referral_code: Yup.string(),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Retype password is required'),
  termsAccepted: Yup.boolean().oneOf([true], 'You must accept the terms'),
});

export const forgotPassSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  retypePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Retype password is required'),
});
