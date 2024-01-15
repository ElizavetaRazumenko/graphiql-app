import { describe, expect, it } from 'vitest';
import inputReducer, {
  setEndpointValue,
  setHeadersValue,
  setQueryValue,
  setResultValue,
  setVariablesValue,
} from '.';
import { setupStore } from '../..';

describe('inputSlice', () => {
  const initialState = {
    endpoint: '',
    query: '',
    result: '',
    headers: ``,
    variables: ``,
  };

  it('should return initial state', () => {
    const result = inputReducer(undefined, { type: '' });
    expect(result).toStrictEqual(initialState);
  });

  it('should set endpoint value ', () => {
    const store = setupStore();
    store.dispatch(setEndpointValue('https://rickandmortyapi.com/graphql'));

    const expectedValue = 'https://rickandmortyapi.com/graphql';

    expect(store.getState().input.endpoint).toBe(expectedValue);
  });
  it('should set query value ', () => {
    const store = setupStore();
    store.dispatch(
      setQueryValue(`{
        episodes {
          info {
            count
            pages
            next
            prev
          }
        }
      }`),
    );

    const expectedValue = `{
        episodes {
          info {
            count
            pages
            next
            prev
          }
        }
      }`;

    expect(store.getState().input.query).toBe(expectedValue);
  });
  it('should set result value ', () => {
    const store = setupStore();
    store.dispatch(
      setResultValue(`{
        "data": {
          "episodes": {
            "info": {
              "count": 51,
              "pages": 3,
              "next": 2,
              "prev": null
            }
          }
        }
      }`),
    );

    const expectedValue = `{
        "data": {
          "episodes": {
            "info": {
              "count": 51,
              "pages": 3,
              "next": 2,
              "prev": null
            }
          }
        }
      }`;

    expect(store.getState().input.result).toBe(expectedValue);
  });
  it('should set headers value ', () => {
    const store = setupStore();
    store.dispatch(setHeadersValue('{"Access-Control-Allow-Headers": "*"}'));

    const expectedValue = '{"Access-Control-Allow-Headers": "*"}';

    expect(store.getState().input.headers).toBe(expectedValue);
  });
  it('should set variables value ', () => {
    const store = setupStore();
    store.dispatch(
      setVariablesValue(`{
        "episode": "JEDI"
      }`),
    );

    const expectedValue = `{
        "episode": "JEDI"
      }`;

    expect(store.getState().input.variables).toBe(expectedValue);
  });
});
