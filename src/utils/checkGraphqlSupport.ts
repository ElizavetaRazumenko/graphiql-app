import { MainPageErrors } from '../context/types';

const query: string = `
query checkGraphQLSupport {
  __schema {
    types {
      name
    }
  }
}
`;

const checkedEndpoints: string[] = [];

const checkGraphQLSupport = async (
  graphqlEndpoint: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  errorMessages: MainPageErrors,
) => {
  if (checkedEndpoints.find((endpoint) => endpoint === graphqlEndpoint)) {
    return true;
  }
  try {
    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const responseJSON = await response.json();

    if (
      responseJSON &&
      responseJSON.data &&
      responseJSON.data.__schema &&
      responseJSON.data.__schema.types
    ) {
      checkedEndpoints.push(graphqlEndpoint);
      return true;
    }

    setErrorMessage(errorMessages.notSupportGraphQL);
    return false;
  } catch (err) {
    if (err instanceof Error) {
      setErrorMessage(
        `${errorMessages.errorWhileCheckingGraphQL} ${err?.message ?? ''}`,
      );
    } else {
      setErrorMessage(errorMessages.unknownGraphQLerror);
    }
    return false;
  }
};

export default checkGraphQLSupport;
