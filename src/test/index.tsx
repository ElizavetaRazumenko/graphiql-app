import { PreloadedStateShapeFromReducersMapObject } from '@reduxjs/toolkit';
import { RenderOptions, render, renderHook } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import type { AppStore, RootState } from '../store';
import { setupStore } from '../store';
import { appTheme } from '../theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import ErrorBoundary from '../components/ErrorBoundary';
import { MainWrapper } from '../pages/Main/styled';
import LocalizationContext from '../context/localizationContext';

const defaultState: PreloadedStateShapeFromReducersMapObject<RootState> =
  {} as PreloadedStateShapeFromReducersMapObject<RootState>;

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = defaultState,
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren) {
    return (
      <ThemeProvider theme={appTheme}>
        <CssBaseline />

        <LocalizationContext>
          <ErrorBoundary>
            <Provider store={store}>
              <MainWrapper>{children}</MainWrapper>
            </Provider>
          </ErrorBoundary>
        </LocalizationContext>
      </ThemeProvider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderHookWithProviders<Result, Props = undefined>(
  callback: (initialProps: Props) => Result,
  {
    preloadedState = defaultState,
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren) {
    return (
      <ThemeProvider theme={appTheme}>
        <CssBaseline />

        <LocalizationContext>
          <ErrorBoundary>
            <Provider store={store}>
              <MainWrapper>{children}</MainWrapper>
            </Provider>
          </ErrorBoundary>
        </LocalizationContext>
      </ThemeProvider>
    );
  }

  return {
    store,
    ...renderHook<Result, Props>(callback, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
}
