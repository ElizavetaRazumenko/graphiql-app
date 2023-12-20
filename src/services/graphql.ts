import { createApi } from '@reduxjs/toolkit/query/react';

export let baseUrl = 'https://rickandmortyapi.com/graphql';

export const changeBaseUrl = (newUrl: string) => {
  baseUrl = newUrl;
};

const schemaQuery = `
query {
  __schema {
    types {
      name
    }
  }
}
`;

const graphqlbasequery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body }: { body: string }) => {
    try {
      const result = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: body }),
      });
      const data = await result.json();
      return { data };
    } catch (error) {
      if (error instanceof Error) {
        if (error.name) {
          return {
            error: { name: error, message: error.message },
          };
        }
      }

      return { error: { status: 500, data: error } };
    }
  };

export const getQraphQLData = createApi({
  baseQuery: graphqlbasequery({ baseUrl }),
  endpoints: (builder) => ({
    getSchema: builder.query({
      query: () => ({
        body: schemaQuery,
      }),
    }),
    getData: builder.query({
      query: (queryBody: string) => ({
        body: queryBody,
      }),
    }),
  }),
});
