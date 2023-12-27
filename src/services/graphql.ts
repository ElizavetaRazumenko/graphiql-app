import { createApi } from '@reduxjs/toolkit/query/react';
import removeCommentLines from '../utils/removeCommentLines';

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

const defaultHeader = `{
  "Content-Type": "application/json"
}`;

const graphqlbaseQuery =
  () =>
  async ({ url, body, headers, variables }: RequestData) => {
    try {
      const result = await fetch(url, {
        method: 'POST',
        headers: JSON.parse(headers || defaultHeader),
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
        body: removeCommentLines(body),
        headers,
        variables,
      }),
    }),
  }),
});
