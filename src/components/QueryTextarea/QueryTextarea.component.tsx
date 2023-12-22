import { useEffect, useRef } from 'react';
import { QueryContent } from './styled';

type QueryTextareaProps = {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  defaultValue?: string;
  readOnly?: boolean;
};

const QueryTextarea = ({
  defaultValue,
  readOnly,
  value,
  onChange,
}: QueryTextareaProps) => {
  const queryRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (queryRef.current) {
      queryRef.current.style.height = queryRef.current.scrollHeight + 'px';
    }
  }, [queryRef.current]);

  return (
    <QueryContent
      onChange={onChange}
      value={value}
      readOnly={readOnly}
      ref={queryRef}
      defaultValue={defaultValue}
    ></QueryContent>
  );
};

export default QueryTextarea;
