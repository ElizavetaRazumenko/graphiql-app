import { InputAdornment, TextField } from '@mui/material';
import { TextFieldProps as MaterialTextFieldProps } from '@mui/material/TextField';
import { styled, Theme } from '@mui/material/styles';
import convertImg from '../../assets/convert.png';
import passImg from '../../assets/pass.png';
import userImg from '../../assets/user.png';

export type InputIconType = 'email' | 'pass' | 'user';

export type InputProps = MaterialTextFieldProps & {
  icon: InputIconType;
};

const iconToImgMap: Record<InputIconType, string> = {
  email: convertImg,
  pass: passImg,
  user: userImg,
};

const TextFieldWithAdornment = (props: InputProps) => {
  const { icon } = props;
  const iconImg: string = iconToImgMap[icon];
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={iconImg} />
          </InputAdornment>
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
    '& img': {
      objectFit: 'contain',
    },
    '& .MuiInputAdornment-root': {
      justifyContent: 'center',
      width: '48px',
    },
  }),
);

export default Input;
