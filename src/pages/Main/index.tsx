import {
  ChangeEndpoint,
  ChangeEndpointContainer,
  DocumentationButton,
  MainWrapper,
  PlayButton,
  QueryButtons,
  QueryEditor,
  QueryEditorWrapper,
  QueryTitle,
  PrettifyButton,
} from './styled';

import { Input } from '../../shared/Input';
import { useEffect, useState } from 'react';
import { DocumentationModal } from '../../components/DocumentationModal';
import { QueryResultContainer } from './styled/QueryResultContainer';
import { Endpoint } from './styled/Endpoint';
import QueryTabs from '../../components/QueryTabs/QueryTabs.component';
import QueryTextarea from '../../components/QueryTextarea/QueryTextarea.component';
import { Stack } from '@mui/material';
import { baseUrl, changeBaseUrl, getQraphQLData } from '../../services/graphql';
import checkGraphQLSupport from '../../utils/checkGraphqlSupport';

const Main = () => {
  const [isInputOpened, setIsInputOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [endpointValue, setEndpointValue] = useState(baseUrl);

  const { data } = getQraphQLData.useGetSchemaQuery();

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  const changeEndpointHandle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEndpointValue(e.target.value);

  const changeInputOpenedHandle = () => setIsInputOpened(!isInputOpened);

  const sendRequest = async () => {
    setIsInputOpened(false);
    const isCorrectEndpoint = await checkGraphQLSupport(endpointValue);
    if (!isCorrectEndpoint) {
      console.log('Your endpoint does not support Graph QL requests');
    } else {
      changeBaseUrl(endpointValue);
    }
  };

  return (
    <MainWrapper>
      <QueryEditorWrapper>
        <QueryEditor>
          <QueryTitle>Query editor</QueryTitle>
          <QueryButtons direction="row">
            <ChangeEndpoint
              variant="contained"
              onClick={changeInputOpenedHandle}
            >
              {isInputOpened ? 'Hide Endpoint' : 'Change endpoint'}
            </ChangeEndpoint>
            <ChangeEndpointContainer direction="row" spacing="20px">
              {isInputOpened ? (
                <Input
                  placeholder="Your endpoint"
                  value={endpointValue}
                  onChange={changeEndpointHandle}
                  icon="endpoint"
                />
              ) : (
                <Endpoint title={endpointValue}>{endpointValue}</Endpoint>
              )}
            </ChangeEndpointContainer>
            <Stack direction="row" spacing="20px">
              <PlayButton onClick={sendRequest} />
              <PrettifyButton />
            </Stack>
          </QueryButtons>
          <QueryTextarea
            defaultValue={`# Welcome to GraphiQL
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
`}
          />
        </QueryEditor>
        <QueryTabs />
      </QueryEditorWrapper>
      <QueryResultContainer>
        <QueryTextarea
          readOnly
          defaultValue={`{
  "errors": [
    {
      "message": "Syntax Error: Unexpected <EOF>",
      "locations": [
        {
          "line": 32,
          "column": 1
        }
      ]
    }
  ]
}`}
        ></QueryTextarea>
        <DocumentationButton onClick={() => setIsModalOpen(true)} />
      </QueryResultContainer>
      <DocumentationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </MainWrapper>
  );
};

export default Main;
