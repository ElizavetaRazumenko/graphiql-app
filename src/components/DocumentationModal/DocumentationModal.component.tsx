import { useEffect } from 'react';
import { getGraphQLData } from '../../services/graphql';
import { Spinner } from '../../shared/Spinner';
import { CloseModalButton, ModalContainer, ModalList } from './styled';
import { Box, Typography } from '@mui/material';
import { AccordionItem } from '../../shared/AccordionItem';
import { schemaParts } from '../../utils/getGraphQLDocumentationSchema';
import { useAppSelector } from '../../hooks';
import { inputSelector } from '../../store/selectors';

type DocumentationModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
}: DocumentationModalProps) => {
  const [trigger, result] = getGraphQLData.useLazyGetDocumentationSchemaQuery();
  const { data, isLoading } = result;
  const schema: Record<string, unknown> = data?.data.__schema;

  const { endpoint, headers } = useAppSelector(inputSelector);

  useEffect(() => {
    if (isModalOpen)
      trigger({
        url: endpoint,
        headers,
      });
  }, [isModalOpen]);

  return (
    <>
      {!isLoading && (
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
                  {getDocumentationTree(schema[part.name])}
                </AccordionItem>
              ))}
          </ModalList>
        </ModalContainer>
      )}
      <Spinner open={isLoading} />
    </>
  );
};

export default DocumentationModal;
