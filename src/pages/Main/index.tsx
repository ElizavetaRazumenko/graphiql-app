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
import { useContext, useEffect, useState, lazy } from 'react';
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
import prettifyGraphQL from '../../utils/prettifyGraphQL';
import { SubmitHandler, useForm } from 'react-hook-form';
import graphQLRequestFormSchema from '../../validationSchemas/graphQLRequestFormSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { localizationContext } from '../../context/localizationContext';
import { auth, logout } from '../../firebase';
import { useIdToken } from 'react-firebase-hooks/auth';
import checkUserHeaders from '../../utils/checkUserHeaders';
import checkGraphQLSupport from '../../utils/checkGraphqlSupport';

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
    currentLanguage,
    currentLocalization: {
      mainPage: {
        queryEditor,
        changeEndpoint,
        acceptEndpoint,
        errorsMessages,
        schemaErrorMessages,
        queryPlaceholder,
      },
    },
  } = useContext(localizationContext);

  const [user] = useIdToken(auth);
  const { stsTokenManager } = (user?.toJSON() ?? {}) as {
    stsTokenManager?: Record<string, number>;
  };

  const expirationTime: number = stsTokenManager?.expirationTime ?? 0;
  const isExpired: boolean = expirationTime < new Date().getTime();

  useEffect(() => {
    if (Boolean(user) && isExpired) {
      logout();
    }
  }, [user, isExpired]);

  const [isInputOpened, setIsInputOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    clearErrors,
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

  useEffect(() => {
    clearErrors();
  }, [currentLanguage]);

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
    const isEndpointSupportGraphQL = await checkGraphQLSupport(
      data.url,
      setError,
      errorsMessages,
    );

    if (isEndpointSupportGraphQL) {
      const isAllowedHeaders = checkUserHeaders(
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
                    placeholder={queryPlaceholder}
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
      {isModalOpen && (
        <DocumentationModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          endpointURL={endpointURL}
          setError={setError}
        />
      )}

      <ErrorSnackbar message={error} />
    </MainWrapper>
  );
};

export default Main;
