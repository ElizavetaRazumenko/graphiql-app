import * as yup from 'yup';
import { graphQLRequestFormFields } from '../pages/Main';
import { GraphQLSchemaErrorMessage } from '../context/types';

const graphQLRequestFormSchema = (
  schemaErrorMessages: GraphQLSchemaErrorMessage,
): yup.ObjectSchema<graphQLRequestFormFields> =>
  yup.object().shape({
    url: yup
      .string()
      .required(schemaErrorMessages.requiredURL)
      .url(schemaErrorMessages.invalidURL),

    query: yup
      .string()
      .required(schemaErrorMessages.requiredQuery)
      .test(
        'is-every-bracked-paired',
        schemaErrorMessages.invalidQuery,
        (value: string): boolean => {
          const brackets: Array<string> = ['{', '}', '(', ')'];
          const bracketCount: Record<string, number> = {};

          for (let i = 0; i < value.length; i++) {
            if (brackets.indexOf(value[i]) > -1)
              bracketCount[value[i]] = (bracketCount[value[i]] ?? 0) + 1;
          }
          return (
            bracketCount['{'] === bracketCount['}'] &&
            bracketCount['('] === bracketCount[')']
          );
        },
      ),

    headers: yup
      .string()
      .test(
        'is-headers-json',
        schemaErrorMessages.invalidHeaders,
        (value: string | undefined): boolean => {
          if (!value) return true;
          try {
            const parsedValue: Record<string, string> = JSON.parse(value);
            return Boolean(parsedValue);
          } catch (err) {
            return false;
          }
        },
      ),

    variables: yup
      .string()
      .test(
        'is-variables-json',
        schemaErrorMessages.invalidVariables,
        (value: string | undefined): boolean => {
          if (!value) return true;
          try {
            const parsedValue: Record<string, string> = JSON.parse(value);
            return Boolean(parsedValue);
          } catch (err) {
            return false;
          }
        },
      ),
  });

export default graphQLRequestFormSchema;
