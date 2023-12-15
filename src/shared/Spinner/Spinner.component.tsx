import { Backdrop, BackdropProps, CircularProgress } from '@mui/material';

const Spinner = (props: BackdropProps) => {
  return (
    <Backdrop {...props}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Spinner;
