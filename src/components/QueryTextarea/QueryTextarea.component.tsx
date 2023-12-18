import { useEffect, useRef } from 'react';
import { QueryContent } from './styled';

type QueryTextareaProps = {
  defaultValue: string;
  readOnly?: boolean;
};

const QueryTextarea = ({ defaultValue, readOnly }: QueryTextareaProps) => {
  const queryRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (queryRef.current) {
      queryRef.current.style.height = queryRef.current.scrollHeight + 'px';
    }
  }, [queryRef.current]);

  return (
    <QueryContent
      readOnly={readOnly}
      ref={queryRef}
      defaultValue={defaultValue}
    ></QueryContent>
  );
};

export default QueryTextarea;
