import { createApi } from '@reduxjs/toolkit/query/react';
import setHeaders from '../utils/setHeaders';
import getGraphQLDocumentationSchema from '../utils/getGraphQLDocumentationSchema';

interface RequestData {
  url: string;
  body: string;
  headers: string;
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
  async ({ url, body, headers, variables }: RequestData) => {
    try {
      const result = await fetch(url, {
        method: 'POST',
        headers: setHeaders(headers),
        body: JSON.stringify({
          query: body,
          variables: JSON.parse(variables || '{}'),
        }),
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

export const getGraphQLData = createApi({
  baseQuery: graphqlbaseQuery(),
  endpoints: (builder) => ({
    getSchema: builder.query({
      query: ({ url, headers }: Omit<RequestData, 'body'>) => ({
        url,
        body: schemaQuery,
        headers,
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
    getDocumentationSchema: builder.query({
      query: ({ url, headers }: Omit<RequestData, 'body'>) => ({
        url,
        body: getGraphQLDocumentationSchema(),
        headers,
      }),
    }),
  }),
});
