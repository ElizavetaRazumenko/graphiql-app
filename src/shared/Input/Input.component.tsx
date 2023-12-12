import { InputAdornment, TextField } from '@mui/material';
import { TextFieldProps as MaterialTextFieldProps } from '@mui/material/TextField';
import { styled, Theme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export type InputIconType = 'email' | 'pass' | 'user';

export type InputProps = MaterialTextFieldProps & {
  icon: InputIconType;
};

const iconToSVGMap: Record<InputIconType, JSX.Element> = {
  email: <EmailIcon color="primary" fontSize="large" />,
  pass: <LockIcon color="primary" fontSize="large" />,
  user: <PersonIcon color="primary" fontSize="large" />,
};

const TextFieldWithAdornment = (props: InputProps) => {
  const { icon } = props;
  const svgIcon: JSX.Element = iconToSVGMap[icon];
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{svgIcon}</InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

const Input = styled(TextFieldWithAdornment)<InputProps>(
  ({ theme }: { theme: Theme }) => ({
    backgroundColor: 'rgba(24, 10, 46, 0.42)',
    boxShadow: '3px 3px 10px 8px rgba(0, 0, 0, 0.10) inset',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '5px',
    },
    [theme.breakpoints.up('sm')]: {
      borderRadius: '15px',
    },
    '& fieldset': {
      border: 'none',
    },
    '& .MuiInputBase-root': {
      color: theme.palette.primary.main,
    },
    '& .MuiInputAdornment-root': {
      justifyContent: 'center',
      width: '48px',
    },
  }),
);

export default Input;
