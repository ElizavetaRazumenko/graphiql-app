import { describe, expect, it } from 'vitest';

import prettifyGraphQL from './prettifyGraphQL';
import setHeaders from './setHeaders';
import checkAllowedHeaders from './checkAllowedHeaders';
import checkCORSpolicySupport from './checkCORSpolicySupport';
import checkEndpoint from './checkEndpoint';
import checkGraphQLSupport from './checkGraphqlSupport';
import {
  noop,
  testCORSNoGQLURL,
  testInvalidURL,
  testNoCORSURL,
  testURL,
} from '../../setupTests';

describe('prettifyGraphQL', () => {
  it('should prettify user value', () => {
    const userValue = `{episodes {info {count pages next prev}}}`;
    const expectedValue = `{
  episodes {
    info {
      count pages next prev
    }
  }
}`;

    expect(prettifyGraphQL(userValue)).toBe(expectedValue);
  });

  it('should prettify user value if comma exists', () => {
    const userValue = `{episodes {info {count,pages,next,prev}}}`;
    const expectedValue = `{
  episodes {
    info {
      count,
      pages,
      next,
      prev
    }
  }
}`;

    expect(prettifyGraphQL(userValue)).toBe(expectedValue);
  });
});

describe('setHeaders', () => {
  it('should setHeaders default header', () => {
    const userValue = ``;
    const expectedValue = {
      'Content-Type': 'application/json',
    };

    expect(setHeaders(userValue)).toStrictEqual(expectedValue);
  });

  it('should setHeaders value from user headers', () => {
    const userValue = `{"X-Custom-Header": "12345"}`;
    const expectedValue = {
      'X-Custom-Header': '12345',
      'Content-Type': 'application/json',
    };

    expect(setHeaders(userValue)).toStrictEqual(expectedValue);
  });
});

describe('checkCORSpolicySupport', () => {
  it('should return true if endpoint has CORS policy support', async () => {
    const endpoint = testURL;
    expect(await checkCORSpolicySupport(endpoint, noop)).toBe(true);
  });

  it("should return false if endpoint doesn't have CORS policy support", async () => {
    const endpoint = testNoCORSURL;
    expect(await checkCORSpolicySupport(endpoint, noop)).toBe(false);
  });

  it('should return false if endpoint is invalid', async () => {
    const endpoint = testInvalidURL;
    expect(await checkCORSpolicySupport(endpoint, noop)).toBe(false);
  });
});

describe('checkAllowedHeaders', () => {
  it('should return true as every header is allowed', () => {
    const headers = `{"X-Custom-Header": "12345"}`;

    expect(checkAllowedHeaders(testURL, headers, noop)).toBe(true);
  });

  it('should return true if headers are empty', () => {
    expect(checkAllowedHeaders(testURL, '', noop)).toBe(true);
  });
});

describe('checkGraphQLSupport', () => {
  it('should return true if endpoint has GraphQL support', async () => {
    const endpoint = testURL;
    expect(await checkGraphQLSupport(endpoint, noop)).toBe(true);
  });

  it("should return false if endpoint doesn't have GraphQL support", async () => {
    const endpoint = testCORSNoGQLURL;
    expect(await checkGraphQLSupport(endpoint, noop)).toBe(false);
  });

  it('should return false if endpoint is invalid', async () => {
    const endpoint = testInvalidURL;
    expect(await checkGraphQLSupport(endpoint, noop)).toBe(false);
  });
});

describe('checkEndpoint', () => {
  it('should return true if endpoint has CORS policy support and GraphQL support', async () => {
    const endpoint = testURL;
    expect(await checkEndpoint(endpoint, noop)).toBe(true);
  });

  it("should return false if endpoint doesn't support CORS policy support", async () => {
    const endpoint = testNoCORSURL;
    expect(await checkEndpoint(endpoint, noop)).toBe(false);
  });

  it("should return false if endpoint has CORS policy support and doesn't support GraphQL", async () => {
    const endpoint = testCORSNoGQLURL;
    expect(await checkEndpoint(endpoint, noop)).toBe(false);
  });
});
