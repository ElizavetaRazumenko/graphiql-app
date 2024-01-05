import { describe, expect, it } from 'vitest';

import prettifyGraphQL from './prettifyGraphQL';
import setHeaders from './setHeaders';
import checkGraphQLSupport from './checkGraphqlSupport';
import {
  noop,
  testCORSNoGQLURL,
  testInvalidURL,
  testURL,
} from '../../setupTests';
import localization from '../context/localization';
import { MainPageErrors } from '../context/types';
import checkUserHeaders from './checkUserHeaders';

const errorMessages: MainPageErrors =
  localization.english.mainPage.errorsMessages;

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

describe('checkGraphQLSupport', () => {
  it('should return true if endpoint has GraphQL support', async () => {
    const endpoint = testURL;
    expect(await checkGraphQLSupport(endpoint, noop, errorMessages)).toBe(true);
  });

  it("should return false if endpoint doesn't have GraphQL support", async () => {
    const endpoint = testCORSNoGQLURL;
    expect(await checkGraphQLSupport(endpoint, noop, errorMessages)).toBe(
      false,
    );
  });

  it('should return false if endpoint is invalid', async () => {
    const endpoint = testInvalidURL;
    expect(await checkGraphQLSupport(endpoint, noop, errorMessages)).toBe(
      false,
    );
  });
});

describe('checkUserHeaders', () => {
  it('should return true if the header matches the CORS policy', () => {
    const userHeader = JSON.stringify({
      'some-allowed-header': 'info',
    });
    expect(checkUserHeaders(userHeader, noop, errorMessages)).toBe(true);
  });

  it("should return false if the header start with 'proxy-'", () => {
    const userHeader = JSON.stringify({
      'proxy-header': 'info',
    });
    expect(checkUserHeaders(userHeader, noop, errorMessages)).toBe(false);
  });

  it("should return false if the header start with 'sec-'", () => {
    const userHeader = JSON.stringify({
      'sec-header': 'info',
    });
    expect(checkUserHeaders(userHeader, noop, errorMessages)).toBe(false);
  });

  it('should return false if the header contains in the prohibited headers list', async () => {
    const userHeader = JSON.stringify({
      'Accept-Charset': 'info',
    });
    expect(checkUserHeaders(userHeader, noop, errorMessages)).toBe(false);
  });
});
