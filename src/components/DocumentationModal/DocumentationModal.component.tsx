import { useContext, useEffect, useState } from 'react';
import { getGraphQLData } from '../../services/graphql';
import { Spinner } from '../../shared/Spinner';
import { CloseModalButton, ModalContainer, ModalList } from './styled';
import { Box, Typography } from '@mui/material';
import { AccordionItem } from '../../shared/AccordionItem';
import { localizationContext } from '../../context/localizationContext';

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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [trigger, result] = getGraphQLData.useLazyGetDocumentationSchemaQuery();
  const { data, isFetching, isError, error } = result;

  useEffect(() => {
    if (isModalOpen)
      trigger({ url: endpointURL }).then(({ data }) => {
        const errorMsg: string = (data?.error && data?.message) ?? '';
        if (errorMsg) {
          setError(errorMsg);
          setIsModalOpen(false);
          setIsVisible(false);
        }
        if (data?.data.__schema) {
          setIsVisible(true);
        }
      });
  }, [isModalOpen, endpointURL]);

  useEffect(() => {
    if (isError && error?.message) {
      setError(error.message);
      setIsModalOpen(false);
      setIsVisible(false);
    }
  }, [isError, error?.message]);

  const {
    currentLocalization: {
      documentation: { title, schemaParts },
    },
  } = useContext(localizationContext);

  return (
    <>
      {!isFetching && isVisible && (
        <ModalContainer>
          <CloseModalButton
            onClick={() => setIsModalOpen(!isModalOpen)}
          ></CloseModalButton>
          <ModalList>
            <Typography>{title}</Typography>
            {!!data &&
              schemaParts.map((part, index: number) => (
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
