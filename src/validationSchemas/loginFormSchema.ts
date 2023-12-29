import * as yup from 'yup';
import { LoginFormFields } from '../components/Login';

const loginFormSchema: yup.ObjectSchema<LoginFormFields> = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/,
      'Please enter correct email',
    ),

  password: yup.string().required('Password is required'),
});

export default loginFormSchema;
