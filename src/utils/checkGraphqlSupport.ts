const query = `
query {
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

    setErrorMessage('Entered endpoint does not support Graph QL requests');
    return false;
  } catch (err) {
    if (err instanceof Error) {
      setErrorMessage(
        `An error occurred while checking GraphQL support: ${
          err?.message ?? ''
        }`,
      );
    } else {
      setErrorMessage(
        `An unknown error occurred while checking GraphQL support.`,
      );
    }
    return false;
  }
};

export default checkGraphQLSupport;
