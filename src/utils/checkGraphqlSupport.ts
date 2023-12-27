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

const checkGraphQLSupport = async (graphqlEndpoint: string) => {
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
    return false;
  } catch (error) {
    console.error('An error occurred while checking GraphQL support:', error);
  }
};

export default checkGraphQLSupport;
