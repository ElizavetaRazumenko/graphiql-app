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
import { getQraphQLData } from '../../services/graphql';
import checkGraphQLSupport from '../../utils/checkGraphqlSupport';
import { ErrorSnackbar } from '../../shared/ErrorSnackbar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { inputSelector } from '../../store/selectors';
import {
  setEndpointValue,
  setQueryValue,
  setResultValue,
} from '../../store/slices';

const Main = () => {
  const dispatch = useAppDispatch();
  const { endpoint, query, result } = useAppSelector(inputSelector);

  const [isInputOpened, setIsInputOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [error, setError] = useState('');

  const { data: schema } = getQraphQLData.useGetSchemaQuery(endpoint);
  const { data: responseData } = getQraphQLData.useGetDataQuery({
    url: endpoint,
    queryBody: query,
  });

  useEffect(() => {
    if (schema) console.log(schema);
  }, [schema]);

  useEffect(() => {
    if (responseData) {
      dispatch(setResultValue(JSON.stringify(responseData)));
    }
  }, [responseData]);

  const changeEndpointHandle = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setEndpointValue(e.target.value));

  const changeQueryHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(setQueryValue(e.target.value));

  const changeInputOpenedHandle = () => setIsInputOpened(!isInputOpened);

  const sendRequest = async () => {
    setIsInputOpened(false);
    setError('');
    const isCorrectEndpoint = await checkGraphQLSupport(endpoint);
    if (!isCorrectEndpoint) {
      setError('Your endpoint does not support Graph QL requests');
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
