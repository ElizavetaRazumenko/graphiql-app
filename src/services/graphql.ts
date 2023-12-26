import { createApi } from '@reduxjs/toolkit/query/react';

interface RequestData {
  url: string;
  body: string;
  headers?: string;
  variables?: string;
}
const schemaQuery = `
query {
  __schema {
    types {
      name
    }
  }
}
`;

const graphqlbaseQuery =
  () =>
  async ({ url, body, headers = '' }: RequestData) => {
    try {
      const result = await fetch(url, {
        method: 'POST',
        headers: JSON.parse(headers),
        body: JSON.stringify({ query: body }),
      });
      const data = await result.json();
      console.log('data:');
      console.log(data);
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
  baseQuery: graphqlbaseQuery(),
  endpoints: (builder) => ({
    getSchema: builder.query({
      query: (url: string) => ({
        url,
        body: schemaQuery,
      }),
    }),
    getData: builder.query({
      query: ({ url, body, headers, variables }: RequestData) => ({
        url,
        body,
        headers,
        variables,
      }),
    }),
  }),
});
