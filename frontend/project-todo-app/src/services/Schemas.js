import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .min(6, 'too short')
    .max(9, 'too long')
    .required('Please enter your password'),
});

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your e-mail'),
  name: Yup.string()
    .min(3, 'Try a longer name')
    .max(15, 'Must be 15 characters or less')
    .required('Please enter your name'),
  lastname: Yup.string()
    .min(3, 'Must be more than 3 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Please enter your last name'),
  password: Yup.string()
    .min(6, 'too short')
    .max(9, 'too long')
    .required('Please enter a password'),
});
