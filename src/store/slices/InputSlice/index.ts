import { createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../../services/graphql';

type InputState = {
  endpoint: string;
  query: string;
  result: string;
  headers: string;
  variables: string;
};

const initialState: InputState = {
  endpoint: baseUrl,
  query: '',
  result: '',
  headers: '',
  variables: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setEndpointValue(state, action) {
      state.endpoint = action.payload;
    },
    setQueryValue(state, action) {
      state.query = action.payload;
    },
    setHeadersValue(state, action) {
      state.headers = action.payload;
    },
    setVariablesValue(state, action) {
      state.variables = action.payload;
    },
  },
});

export const {
  setEndpointValue,
  setQueryValue,
  setHeadersValue,
  setVariablesValue,
} = inputSlice.actions;

export default inputSlice.reducer;
