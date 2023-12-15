import { InputAdornment, TextField } from '@mui/material';
import { TextFieldProps as MaterialTextFieldProps } from '@mui/material/TextField';
import { styled, Theme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { ForwardedRef, forwardRef } from 'react';

export type InputIconType = 'email' | 'pass' | 'user';

export type InputProps = MaterialTextFieldProps & {
  icon: InputIconType;
};

const iconToSVGMap: Record<InputIconType, JSX.Element> = {
  email: <EmailIcon color="primary" fontSize="large" />,
  pass: <LockIcon color="primary" fontSize="large" />,
  user: <PersonIcon color="primary" fontSize="large" />,
};

const TextFieldWithAdornment = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { icon } = props;
    const svgIcon: JSX.Element = iconToSVGMap[icon];
    return (
      <TextField
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{svgIcon}</InputAdornment>
          ),
        }}
        {...props}
        ref={ref}
      />
    );
  },
);

const Input = styled(TextFieldWithAdornment)<InputProps>(
  ({ theme }: { theme: Theme }) => ({
    '& .MuiInputBase-root': {
      color: theme.palette.primary.main,
      border: '1px solid transparent',
      backgroundColor: 'rgba(24, 10, 46, 0.42)',
      boxShadow: '3px 3px 10px 8px rgba(0, 0, 0, 0.10) inset',
      [theme.breakpoints.down('sm')]: {
        borderRadius: '5px',
      },
      [theme.breakpoints.up('sm')]: {
        borderRadius: '15px',
      },
    },
    '& fieldset': {
      border: 'none',
    },
    '& .MuiInputAdornment-root': {
      justifyContent: 'center',
      width: '48px',
    },
    '& .MuiInputBase-root.Mui-error': {
      border: '1px solid red',
      boxShadow:
        '3px 3px 10px 8px rgba(0, 0, 0, 0.10) inset, 0px 0px 20px 15px rgba(255, 16, 16, 0.15)',
    },
  }),
);

export default Input;
