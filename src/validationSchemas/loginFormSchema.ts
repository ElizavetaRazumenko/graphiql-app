import * as yup from 'yup';
import { LoginFormFields } from '../components/Login';
import { LoginSchemaErrorMessages } from '../context/types';

const loginFormSchema = (
  schemaErrorMessages: LoginSchemaErrorMessages,
): yup.ObjectSchema<LoginFormFields> =>
  yup.object().shape({
    email: yup
      .string()
      .required(schemaErrorMessages.requiredEmail)
      .matches(
        /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/,
        schemaErrorMessages.incorrectEmail,
      ),

    password: yup.string().required(schemaErrorMessages.requiredPass),
  });

export default loginFormSchema;
