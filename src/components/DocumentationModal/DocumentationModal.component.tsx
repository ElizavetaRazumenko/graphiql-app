import { useEffect } from 'react';
import { getGraphQLData } from '../../services/graphql';
import { Spinner } from '../../shared/Spinner';
import { CloseModalButton, ModalContainer, ModalList } from './styled';
import { Box, Typography } from '@mui/material';
import { AccordionItem } from '../../shared/AccordionItem';
import { schemaParts } from '../../utils/getGraphQLDocumentationSchema';

type DocumentationModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  endpointURL: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

const getDocumentationTree = (docItem: unknown): JSX.Element => {
  if (docItem === null || docItem === undefined) return <>N/A</>;

  if (docItem instanceof Array) {
    return (
      <>
        {docItem.length === 0 && <Typography>-</Typography>}
        {docItem.map((item: Record<string, unknown>, index: number) => (
          <AccordionItem key={index} summary={item?.name as string}>
            {getDocumentationTree(item)}
          </AccordionItem>
        ))}
      </>
    );
  }

  if (docItem instanceof Object)
    return (
      <>
        {Object.keys(docItem).map((key: string, index: number) => {
          const value: unknown = (docItem as Record<string, unknown>)[key];
          if (value === null) return null;
          if (value instanceof Object) {
            return (
              <AccordionItem key={index} summary={key}>
                {getDocumentationTree(value)}
              </AccordionItem>
            );
          }
          return (
            <Box key={index}>
              <Typography key={index}>{key}:</Typography>
              {getDocumentationTree(value)}
            </Box>
          );
        })}
      </>
    );

  return <Typography>{String(docItem) || '-'}</Typography>;
};

const DocumentationModal = ({
  isModalOpen,
  setIsModalOpen,
  endpointURL,
  setError,
}: DocumentationModalProps) => {
  const [trigger, result] = getGraphQLData.useLazyGetDocumentationSchemaQuery();
  const { data, isFetching, isError, error } = result;

  useEffect(() => {
    if (isModalOpen)
      trigger({ url: endpointURL }).then(({ data }) => {
        const errorMsg: string = (data?.error && data?.message) ?? '';
        if (errorMsg) {
          setError(errorMsg);
          setIsModalOpen(false);
        }
      });
  }, [isModalOpen, endpointURL]);

  useEffect(() => {
    if (isError && error?.message) {
      setError(error.message);
      setIsModalOpen(false);
    }
  }, [isError, error?.message]);

  return (
    <>
      {!isFetching && !isError && !data?.error && (
        <ModalContainer opened={isModalOpen.toString()}>
          <CloseModalButton
            onClick={() => setIsModalOpen(!isModalOpen)}
          ></CloseModalButton>
          <ModalList>
            <Typography>
              A GraphQL schema provides a root type for each kind of operation.
            </Typography>
            {!!data &&
              schemaParts.map((part: Record<string, string>, index: number) => (
                <AccordionItem key={index} summary={part.title}>
                  {getDocumentationTree(data?.data.__schema[part.name])}
                </AccordionItem>
              ))}
          </ModalList>
        </ModalContainer>
      )}
      <Spinner open={isFetching} />
    </>
  );
};

export default DocumentationModal;
