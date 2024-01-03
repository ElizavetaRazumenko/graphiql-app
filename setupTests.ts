import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import { SetupServer, setupServer } from 'msw/node';
import { rest, graphql } from 'msw';
import { mockDocumentationSchema } from './src/test/mockDocumentationSchema';

expect.extend(matchers);

export const testURL: string = 'https://rickandmortyapi.com/graphql';
export const testNoCORSURL: string = 'https://rickandmortyapi.com/';
export const testCORSNoGQLURL: string = 'https://rickandmortyapi.com/api';
export const testInvalidURL: string = 'https://rickandmoyapi.com/graphql';

export const noop: () => void = () => {};

const server: SetupServer = setupServer(
  rest.options(testURL, (req, res, ctx) => {
    return res(
      ctx.set('Access-Control-Allow-Origin', '*'),
      ctx.set('Access-Control-Allow-Headers', '*'),
    );
  }),

  rest.options(testNoCORSURL, (req, res, ctx) => {
    return res(ctx.set('Access-Control-Allow-Origin', ''));
  }),

  rest.options(testCORSNoGQLURL, (req, res, ctx) => {
    return res(
      ctx.set('Access-Control-Allow-Origin', '*'),
      ctx.set('Access-Control-Allow-Headers', '*'),
    );
  }),

  rest.options(testInvalidURL, (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: 'Page Not Found' }));
  }),

  graphql.link(testURL).query('checkGraphQLSupport', async (req, res, ctx) => {
    return res(
      ctx.data({
        __schema: {
          types: [
            {
              name: 'Query',
            },
            {
              name: 'ID',
            },
            {
              name: 'Character',
            },
          ],
        },
      }),
    );
  }),

  graphql
    .link(testCORSNoGQLURL)
    .query('checkGraphQLSupport', async (req, res, ctx) => {
      return res(ctx.errors([{ message: 'There is nothing here.' }]));
    }),

  graphql
    .link(testInvalidURL)
    .query('checkGraphQLSupport', async (req, res, ctx) => {
      return res(ctx.status(404), ctx.errors([{ message: 'Page Not Found' }]));
    }),

  graphql.link(testURL).query('IntrospectionQuery', async (req, res, ctx) => {
    return res(ctx.data(mockDocumentationSchema));
  }),
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());
