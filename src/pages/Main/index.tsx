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
import { useContext, useEffect, useState } from 'react';
import { DocumentationModal } from '../../components/DocumentationModal';
import { lazy, useEffect, useState } from 'react';
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
import { localizationContext } from '../../context/localizationContext';

export type graphQLRequestFormFields = {
  url: string;
  query: string;
  headers?: string;
  variables?: string;
};

const DocumentationModal = lazy(
  () =>
    import('../../components/DocumentationModal/DocumentationModal.component'),
);

const Main = () => {
  const dispatch = useAppDispatch();
  const { endpoint, query, result, headers, variables } =
    useAppSelector(inputSelector);

  const {
    currentLocalization: {
      mainPage: {
        queryEditor,
        changeEndpoint,
        acceptEndpoint,
        errorsMessages,
        schemaErrorMessages,
      },
    },
  } = useContext(localizationContext);

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
    resolver: yupResolver(graphQLRequestFormSchema(schemaErrorMessages)),
    defaultValues: {
      url: endpoint,
      query: query,
      headers: headers,
      variables: variables,
    },
  });

  const endpointURL: string = watch('url');

  const [error, setError] = useState('');
  const [skip, setSkip] = useState(true);

  const { data: responseData, error: responseError } =
    getGraphQLData.useGetDataQuery(
      {
        url: endpoint,
        body: query,
        headers,
        variables,
      },
      { skip },
    );

  useEffect(() => {
    if (responseError && responseError.message) {
      setError(responseError.message);
    }
    if (responseData && responseData.errors && responseData.errors.length > 0) {
      setError(responseData.errors[0].message);
    }
    if (responseData) {
      dispatch(setResultValue(JSON.stringify(responseData, null, 2)));
    }
  }, [responseData, responseError]);

  const changeInputOpenedHandle = () => setIsInputOpened(!isInputOpened);

  const onSubmit: SubmitHandler<graphQLRequestFormFields> = async (
    data: graphQLRequestFormFields,
  ): Promise<void> => {
    setIsInputOpened(false);
    const isCorrectEndpoint = await checkEndpoint(
      data.url,
      setError,
      errorsMessages,
    );

    if (isCorrectEndpoint) {
      const isAllowedHeaders = checkAllowedHeaders(
        data.url,
        data.headers ?? '',
        setError,
        errorsMessages,
      );

      if (isAllowedHeaders) {
        dispatch(setEndpointValue(data.url));
        dispatch(setQueryValue(data.query));
        dispatch(setHeadersValue(data.headers ?? ''));
        dispatch(setVariablesValue(data.variables ?? ''));

        setSkip(false);
      }
    }
  };

  return (
    <MainWrapper>
      <QueryEditorWrapper>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <QueryEditor>
            <QueryTitle>{queryEditor}</QueryTitle>
            <QueryButtons direction="row">
              <ChangeEndpoint
                variant="contained"
                onClick={changeInputOpenedHandle}
                disabled={Boolean(errors.url)}
              >
                {isInputOpened ? acceptEndpoint : changeEndpoint}
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
                <PlayButton title="submit" type="submit" disabled={!isValid} />
                <PrettifyButton
                  title="Prettify"
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
        {!!endpointURL && (
          <DocumentationButton
            onClick={() => {
              setError('');
              setIsModalOpen(true);
            }}
          />
        )}
      </QueryResultContainer>
      <DocumentationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        endpointURL={endpointURL}
        setError={setError}
      />

      <ErrorSnackbar message={error} />
    </MainWrapper>
  );
};

export default Main;
