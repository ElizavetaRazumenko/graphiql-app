import * as yup from 'yup';
import { RegisterFormFields } from '../components/Registration';

const registrationFormSchema: yup.ObjectSchema<RegisterFormFields> = yup
  .object()
  .shape({
    name: yup
      .string()
      .required('Name is required')
      .matches(/^[A-Z]+/, 'Must have first letter uppercased'),

    email: yup.string().required('Email is required').email(),

    password: yup
      .string()
      .required('Password is required')
      .matches(/\d/, 'Should have at least one number')
      .matches(/[A-Za-z]/, 'Should have at least one letter')
      .matches(
        /[$&+,:;=?@#|'<>.^*()%!-]/,
        'Should have at least one special character',
      )
      .min(8, 'Must be at least ${min} characters'),

    passwordConfirm: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password'), ''], 'Should match the entered password'),
  });

export default registrationFormSchema;
