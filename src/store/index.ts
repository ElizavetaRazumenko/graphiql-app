import {
  PreloadedStateShapeFromReducersMapObject,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { getQraphQLData } from '../services/graphql';
import inputReducer from './slices/InputSlice';

const rootReducer = combineReducers({
  input: inputReducer,
  [getQraphQLData.reducerPath]: getQraphQLData.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getQraphQLData.middleware),
});

export function setupStore(
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>,
) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getQraphQLData.middleware),
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
