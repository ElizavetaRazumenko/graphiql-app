import {
  PreloadedStateShapeFromReducersMapObject,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { getGraphQLData } from '../services/graphql';
import inputReducer from './slices/InputSlice';

const rootReducer = combineReducers({
  input: inputReducer,
  [getGraphQLData.reducerPath]: getGraphQLData.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getGraphQLData.middleware),
});

export function setupStore(
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>,
) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getGraphQLData.middleware),
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
