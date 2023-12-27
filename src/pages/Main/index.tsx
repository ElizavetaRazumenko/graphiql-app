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
  setQueryValue,
  setResultValue,
} from '../../store/slices';
import checkEndpoint from '../../utils/checkEndpoint';

const Main = () => {
  const dispatch = useAppDispatch();
  const { endpoint, query, result, headers, variables } =
    useAppSelector(inputSelector);

  const [isInputOpened, setIsInputOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    dispatch(setEndpointValue(e.target.value));

  const changeQueryHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(setQueryValue(e.target.value));

  const changeInputOpenedHandle = () => setIsInputOpened(!isInputOpened);

  const sendRequest = async () => {
    setIsInputOpened(false);
    await checkEndpoint(endpoint, setError);
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
                  value={endpoint}
                  onChange={changeEndpointHandle}
                  icon="endpoint"
                />
              ) : (
                <Endpoint title={endpoint}>{endpoint}</Endpoint>
              )}
            </ChangeEndpointContainer>
            <Stack direction="row" spacing="20px">
              <PlayButton onClick={sendRequest} />
              <PrettifyButton />
            </Stack>
          </QueryButtons>
          <QueryTextarea value={query} onChange={changeQueryHandle} />
        </QueryEditor>
        <QueryTabs />
      </QueryEditorWrapper>
      <QueryResultContainer>
        <QueryTextarea value={result} readOnly></QueryTextarea>
        <DocumentationButton onClick={() => setIsModalOpen(true)} />
      </QueryResultContainer>
      <DocumentationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <ErrorSnackbar open={Boolean(error)} message={error} />
    </MainWrapper>
  );
};

export default Main;
