import { TextFieldProps } from '@mui/material';
import { ForwardedRef, forwardRef } from 'react';
import { QueryContent } from './styled';

type QueryTextareaProps = TextFieldProps & {
  readOnly?: boolean;
};

const QueryTextarea = forwardRef(
  (props: QueryTextareaProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { readOnly, defaultValue } = props;
    const minRows: number = 10;
    const rowsInValue: number = defaultValue
      ? String(defaultValue).split('\n').length + 5
      : 0;
    const maxRows: number = rowsInValue > minRows ? rowsInValue : minRows;

    return (
      <QueryContent
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Tab') {
            e.preventDefault();
          }
        }}
        ref={ref}
        multiline
        minRows={minRows}
        maxRows={maxRows}
        InputProps={{ readOnly }}
        {...props}
      ></QueryContent>
    );
  },
);

export default QueryTextarea;
