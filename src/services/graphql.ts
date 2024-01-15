import { createApi } from '@reduxjs/toolkit/query/react';
import setHeaders from '../utils/setHeaders';
import getGraphQLDocumentationSchema from '../utils/getGraphQLDocumentationSchema';
import { auth } from '../firebase';
import { getIdToken } from 'firebase/auth';

interface RequestData {
  url: string;
  body: string;
  headers?: string;
  variables?: string;
}

const graphqlbaseQuery =
  () =>
  async ({ url, body, headers, variables }: RequestData) => {
    if (!auth.currentUser) {
      return {
        error: { name: 'Auth Error', message: 'User is not authorized' },
      };
    }

    // force refresh the user's ID token to make sure the user is still valid
    const token: string = await getIdToken(auth.currentUser, true);
    if (!token) {
      return {
        error: {
          name: 'Auth Error',
          message: 'Failed to retrieve a token for the user',
        },
      };
    }

    try {
      const result = await fetch(url, {
        method: 'POST',
        headers: setHeaders(headers ?? ''),
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
            error: { name: error.name, message: error.message },
          };
        }
      }

      return { error: { status: 500, data: error } };
    }
  };

export const getGraphQLData = createApi({
  baseQuery: graphqlbaseQuery(),
  endpoints: (builder) => ({
    getData: builder.query({
      query: ({ url, body, headers, variables }: RequestData) => ({
        url,
        body: body,
        headers,
        variables,
      }),
    }),
    getDocumentationSchema: builder.query({
      query: ({ url }: Omit<RequestData, 'body' | 'headers'>) => ({
        url,
        body: getGraphQLDocumentationSchema(),
      }),
    }),
  }),
});
