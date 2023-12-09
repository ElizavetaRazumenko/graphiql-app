import {
  PreloadedStateShapeFromReducersMapObject,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
});

export function setupStore(
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>,
) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
