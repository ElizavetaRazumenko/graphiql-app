import { createApi } from '@reduxjs/toolkit/query/react';

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
  () =>
  async ({ url, body }: { url: string; body: string }) => {
    try {
      const result = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
  baseQuery: graphqlbasequery(),
  endpoints: (builder) => ({
    getSchema: builder.query({
      query: (url: string) => ({
        url,
        body: schemaQuery,
      }),
    }),
    getData: builder.query({
      query: ({ url, queryBody }: { url: string; queryBody: string }) => ({
        url,
        body: queryBody,
      }),
    }),
  }),
});
