import * as yup from 'yup';
import { LoginFormFields } from '../components/Login';

const loginFormSchema: yup.ObjectSchema<LoginFormFields> = yup.object().shape({
  email: yup.string().required('Email is required').email(),
  password: yup.string().required('Password is required'),
});

export default loginFormSchema;
