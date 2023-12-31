import { describe, expect, it } from 'vitest';

import prettifyGraphQL from './prettifyGraphQL';
import setHeaders from './setHeaders';
import checkAllowedHeaders from './checkAllowedHeaders';
import checkCORSpolicySupport from './checkCORSpolicySupport';
import checkEndpoint from './checkEndpoint';
import checkGraphQLSupport from './checkGraphqlSupport';

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
    const userValue = `{"Access-Control-Allow-Headers": "*"}`;
    const expectedValue = {
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
    };

    expect(setHeaders(userValue)).toStrictEqual(expectedValue);
  });
});
describe('checkAllowedHeaders', () => {
  it("should return false if headers don't allow", () => {
    const headers = `{"Access-Control-Allow-Headers": "*"}`;

    expect(
      checkAllowedHeaders(
        'https://rickandmortyapi.com/graphql',
        headers,
        () => {},
      ),
    ).toBe(false);
  });
  it('should return true if headers empty', () => {
    expect(
      checkAllowedHeaders('https://rickandmortyapi.com/graphql', '', () => {}),
    ).toBe(true);
  });
});
describe('checkCORSpolicySupport', () => {
  it('should return true if endpoint has CORS policy support', async () => {
    const endpoint = 'https://rickandmortyapi.com/graphql';
    expect(await checkCORSpolicySupport(endpoint, () => {})).toBe(true);
  });
  it("should return false if endpoint hasn't CORS policy support", async () => {
    const endpoint = 'https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8';
    expect(await checkCORSpolicySupport(endpoint, () => {})).toBe(false);
  });
  it('should return false if endpoint is invalid', async () => {
    const endpoint = 'https://rickandmoyapi.com/graphql';
    expect(await checkCORSpolicySupport(endpoint, () => {})).toBe(false);
  });
});
describe('checkEndpoint', () => {
  it('should return true if endpoint has CORS policy support and GraphQL support', async () => {
    const endpoint = 'https://rickandmortyapi.com/graphql';
    expect(await checkEndpoint(endpoint, () => {})).toBe(true);
  });
  it("should return false if endpoint hasn't CORS policy support and GraphQL support", async () => {
    const endpoint = 'https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8';
    expect(await checkEndpoint(endpoint, () => {})).toBe(false);
  });
});
describe('checkGraphQLSupport', () => {
  it('should return true if endpoint has GraphQL support', async () => {
    const endpoint = 'https://rickandmortyapi.com/graphql';
    expect(await checkGraphQLSupport(endpoint, () => {})).toBe(true);
  });
  it("should return false if endpoint hasn't GraphQL support", async () => {
    const endpoint = 'https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8';
    expect(await checkGraphQLSupport(endpoint, () => {})).toBe(false);
  });
  it('should return false if endpoint is invalid', async () => {
    const endpoint = 'https://rickandmoyapi.com/graphql';
    expect(await checkGraphQLSupport(endpoint, () => {})).toBe(false);
  });
});
