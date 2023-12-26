import { useEffect, useRef } from 'react';
import { QueryContent } from './styled';

type QueryTextareaProps = {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  readOnly?: boolean;
};

const QueryTextarea = ({ readOnly, value, onChange }: QueryTextareaProps) => {
  const queryRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (queryRef.current) {
      // queryRef.current.style.height = queryRef.current.scrollHeight + 'px';
      queryRef.current.style.height = '450px';
    }
  }, [queryRef.current]);

  return (
    <QueryContent
      onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Tab') {
          e.preventDefault();
        }
      }}
      onChange={onChange}
      value={value}
      readOnly={readOnly}
      ref={queryRef}
    ></QueryContent>
  );
};

export default QueryTextarea;
