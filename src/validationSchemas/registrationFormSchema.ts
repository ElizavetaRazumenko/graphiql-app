import * as yup from 'yup';
import { RegisterFormFields } from '../components/Registration';
import { RegisterSchemaErrorMessages } from '../context/types';

const registrationFormSchema = (
  schemaErrorMessages: RegisterSchemaErrorMessages,
): yup.ObjectSchema<RegisterFormFields> =>
  yup.object().shape({
    name: yup
      .string()
      .required(schemaErrorMessages.requiredName)
      .matches(/^[A-Z]+/, schemaErrorMessages.uppercaseFirstLetter),

    email: yup
      .string()
      .required(schemaErrorMessages.requiredEmail)
      .matches(
        /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/,
        schemaErrorMessages.incorrectEmail,
      ),

    password: yup
      .string()
      .required(schemaErrorMessages.requiredPass)
      .matches(/\d/, schemaErrorMessages.oneNumInPass)
      .matches(/[A-Za-z]/, schemaErrorMessages.oneLetterInPass)
      .matches(/[$&+,:;=?@#|'<>.^*()%!-]/, schemaErrorMessages.oneCharInPass)
      .min(8, `${schemaErrorMessages.minCharNum}` + '${min}'),

    passwordConfirm: yup
      .string()
      .required(schemaErrorMessages.requiredConfirmPass)
      .oneOf([yup.ref('password'), ''], schemaErrorMessages.passwordMismatch),
  });

export default registrationFormSchema;
