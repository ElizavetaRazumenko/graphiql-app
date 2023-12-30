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
import { QueryTabs } from '../../components/QueryTabs';
import { QueryTextarea } from '../../components/QueryTextarea';
import { Box, Stack } from '@mui/material';
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
import { SubmitHandler, useForm } from 'react-hook-form';
import graphQLRequestFormSchema from '../../validationSchemas/graphQLRequestFormSchema';
import { yupResolver } from '@hookform/resolvers/yup';

export type graphQLRequestFormFields = {
  url: string;
  query: string;
  headers?: string;
  variables?: string;
};

const Main = () => {
  const dispatch = useAppDispatch();
  const { endpoint, query, result, headers, variables } =
    useAppSelector(inputSelector);

  const [isInputOpened, setIsInputOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm<graphQLRequestFormFields>({
    mode: 'onChange',
    resolver: yupResolver(graphQLRequestFormSchema),
    defaultValues: {
      url: endpoint,
      query: query,
      headers: headers,
      variables: variables,
    },
  });

  const endpointURL: string = watch('url');

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

  const changeInputOpenedHandle = () => setIsInputOpened(!isInputOpened);

  const onSubmit: SubmitHandler<graphQLRequestFormFields> = async (
    data: graphQLRequestFormFields,
  ): Promise<void> => {
    setIsInputOpened(false);
    const isCorrectEndpoint = await checkEndpoint(endpoint, setError);

    if (isCorrectEndpoint) {
      const isAllowedHeaders = checkAllowedHeaders(
        endpoint,
        data.headers ?? '',
        setError,
      );

      if (isAllowedHeaders) {
        dispatch(setEndpointValue(data.url));
        dispatch(setQueryValue(data.query));
        dispatch(setHeadersValue(data.headers ?? ''));
        dispatch(setVariablesValue(data.variables ?? ''));
      }
    }
  };

  return (
    <MainWrapper>
      <QueryEditorWrapper>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <QueryEditor>
            <QueryTitle>Query editor</QueryTitle>
            <QueryButtons direction="row">
              <ChangeEndpoint
                variant="contained"
                onClick={changeInputOpenedHandle}
                disabled={Boolean(errors.url)}
              >
                {isInputOpened ? 'Accept Endpoint' : 'Change Endpoint'}
              </ChangeEndpoint>
              <ChangeEndpointContainer>
                {isInputOpened ? (
                  <Input
                    placeholder="Your endpoint"
                    defaultValue={endpoint}
                    icon="endpoint"
                    {...register('url')}
                    error={Boolean(errors.url)}
                    helperText={errors.url?.message ?? '\u00A0'}
                  />
                ) : (
                  <Endpoint title={endpointURL}>{endpointURL}</Endpoint>
                )}
              </ChangeEndpointContainer>
              <Stack direction="row" spacing="20px">
                <PlayButton type="submit" disabled={!isValid} />
                <PrettifyButton
                  onClick={() => {
                    setValue('query', prettifyGraphQL(getValues('query')));
                    setValue(
                      'headers',
                      prettifyGraphQL(getValues('headers') || ''),
                    );
                    setValue(
                      'variables',
                      prettifyGraphQL(getValues('variables') || ''),
                    );
                  }}
                />
              </Stack>
            </QueryButtons>
            <QueryTextarea
              defaultValue={query}
              {...register('query')}
              error={Boolean(errors.query)}
              helperText={errors.query?.message ?? '\u00A0'}
            />
          </QueryEditor>
          <QueryTabs>
            <QueryTextarea
              defaultValue={variables}
              {...register('variables')}
              error={Boolean(errors.variables)}
              helperText={errors.variables?.message ?? '\u00A0'}
            ></QueryTextarea>
            <QueryTextarea
              defaultValue={headers}
              {...register('headers')}
              error={Boolean(errors.headers)}
              helperText={errors.headers?.message ?? '\u00A0'}
            ></QueryTextarea>
          </QueryTabs>
        </Box>
      </QueryEditorWrapper>
      <QueryResultContainer>
        <QueryTextarea defaultValue={result} readOnly></QueryTextarea>
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
