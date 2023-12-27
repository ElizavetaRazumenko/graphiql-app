import { useEffect, useRef } from 'react';
import { QueryContent } from './styled';

type QueryTextareaProps = {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  readOnly?: boolean;
  isResult?: boolean;
};

const QueryTextarea = ({
  readOnly,
  value,
  onChange,
  isResult,
}: QueryTextareaProps) => {
  const queryRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (queryRef.current) {
      queryRef.current.style.height = isResult
        ? '100%'
        : queryRef.current.scrollHeight + 'px';
    }
  }, [queryRef.current]);

  return (
    <QueryContent
      onChange={onChange}
      value={value}
      readOnly={readOnly}
      ref={queryRef}
    ></QueryContent>
  );
};

export default QueryTextarea;
