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
import { getGraphQLData } from '../../services/graphql';
import { ErrorSnackbar } from '../../shared/ErrorSnackbar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { inputSelector } from '../../store/selectors';
import {
  setEndpointValue,
  setHeadersValue,
  setQueryValue,
  setResultValue,
  setVariablesValue,
} from '../../store/slices';
import checkEndpoint from '../../utils/checkEndpoint';
import prettifyGraphQL from '../../utils/prettifyGraphQL';
import checkAllowedHeaders from '../../utils/checkAllowedHeaders';

const Main = () => {
  const dispatch = useAppDispatch();
  const { endpoint, query, result, headers, variables } =
    useAppSelector(inputSelector);

  const [isInputOpened, setIsInputOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentEndpoint, setCurrentEndpointValue] = useState(endpoint);
  const [currentQuery, setCurrentQueryValue] = useState(query);
  const [currentHeaders, setCurrentHeadersValue] = useState(headers);
  const [currentVariables, setCurrentVariablesValue] = useState(variables);

  const [error, setError] = useState('');

  const { data: responseData } = getGraphQLData.useGetDataQuery({
    url: endpoint,
    body: query,
    headers,
    variables,
  });

  useEffect(() => {
    if (responseData) {
      dispatch(setResultValue(JSON.stringify(responseData, null, 2)));
    }
  }, [responseData]);

  const changeEndpointHandle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentEndpointValue(e.target.value);

  const changeQueryHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCurrentQueryValue(e.target.value);

  const changeInputOpenedHandle = () => setIsInputOpened(!isInputOpened);

  const sendRequest = async () => {
    setIsInputOpened(false);
    const isCorrectEndpoint = await checkEndpoint(endpoint, setError);
    const isAllowedHeaders = checkAllowedHeaders(
      endpoint,
      currentHeaders,
      setError,
    );
    if (isCorrectEndpoint && isAllowedHeaders) {
      dispatch(setEndpointValue(currentEndpoint));
      dispatch(setQueryValue(currentQuery));
      dispatch(setHeadersValue(currentHeaders));
      dispatch(setVariablesValue(currentVariables));
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
                  value={currentEndpoint}
                  onChange={changeEndpointHandle}
                  icon="endpoint"
                />
              ) : (
                <Endpoint title={endpoint}>{currentEndpoint}</Endpoint>
              )}
            </ChangeEndpointContainer>
            <Stack direction="row" spacing="20px">
              <PlayButton onClick={sendRequest} />
              <PrettifyButton
                onClick={() => {
                  dispatch(setQueryValue(prettifyGraphQL(query)));
                  dispatch(setHeadersValue(prettifyGraphQL(headers)));
                  dispatch(setVariablesValue(prettifyGraphQL(variables)));
                }}
              />
            </Stack>
          </QueryButtons>
          <QueryTextarea value={currentQuery} onChange={changeQueryHandle} />
        </QueryEditor>
        <QueryTabs
          {...{
            currentHeaders,
            setCurrentHeadersValue,
            currentVariables,
            setCurrentVariablesValue,
          }}
        />
      </QueryEditorWrapper>
      <QueryResultContainer>
        <QueryTextarea isResult value={result} readOnly></QueryTextarea>
        <DocumentationButton onClick={() => setIsModalOpen(true)} />
      </QueryResultContainer>
      <DocumentationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <ErrorSnackbar message={error} />
    </MainWrapper>
  );
};

export default Main;
