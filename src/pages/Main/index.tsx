import {
  ChangeEndpoint,
  ChangeEndpointContainer,
  DocumentationButton,
  MainWrapper,
  PlayButton,
  QueryButtons,
  QueryEdit,
  QueryEditor,
  QueryEditorWrapper,
  QueryResult,
  QueryTitle,
} from './styled';

import { Input } from '../../shared/Input';
import { useEffect, useRef, useState } from 'react';
import { DocumentationModal } from '../../components/DocumentationModal';
import { QueryResultContainer } from './styled/QueryResultContainer';
import { Endpoint } from './styled/Endpoint';
import QueryTabs from '../../components/QueryTabs/QueryTabs.component';

const Main = () => {
  const [isInputOpened, setIsInputOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [endpointValue, setEndpointValue] = useState('');

  const changeEndpointHandle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEndpointValue(e.target.value);

  const queryEditRef = useRef<HTMLTextAreaElement>(null);
  const resultRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (queryEditRef.current) {
      queryEditRef.current.style.height =
        queryEditRef.current.scrollHeight + 'px';
    }
  }, [queryEditRef.current]);

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.style.height = resultRef.current.scrollHeight + 'px';
    }
  }, [resultRef.current]);

  const changeInputOpenedHandle = () => setIsInputOpened(!isInputOpened);

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
            <ChangeEndpointContainer direction="row" spacing="5px">
              {isInputOpened ? (
                <Input
                  placeholder="Your endpoint"
                  value={endpointValue}
                  onChange={changeEndpointHandle}
                  icon="endpoint"
                />
              ) : (
                <Endpoint>{endpointValue}</Endpoint>
              )}
            </ChangeEndpointContainer>
            <PlayButton onClick={() => setIsInputOpened(false)} />
          </QueryButtons>
          <QueryEdit
            ref={queryEditRef}
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
          ></QueryEdit>
        </QueryEditor>
        <QueryTabs />
      </QueryEditorWrapper>
      <QueryResultContainer>
        <QueryResult
          readOnly
          ref={resultRef}
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
        ></QueryResult>
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
