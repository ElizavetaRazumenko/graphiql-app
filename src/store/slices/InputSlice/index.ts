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
  query: `# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that start
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
#
# Keyboard shortcuts:
#
#   Prettify query:  Shift-Ctrl-P (or press the prettify button)
#
#  Merge fragments:  Shift-Ctrl-M (or press the merge button)
#
#        Run Query:  Ctrl-Enter (or press the play button)
#
#    Auto Complete:  Ctrl-Space (or just start typing)
#
`,
  result: '',
  headers: `{
    "header1": "header",
    "header2": "corsign"
}`,
  variables: `{
    "header3": "header",
    "header4": "corsign"
}`,
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
