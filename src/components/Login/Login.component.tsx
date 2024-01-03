import { Box, Stack } from '@mui/material';
import { useContext, useEffect } from 'react';
import { localizationContext } from '../../context/localizationContext';
import { AuthDialog } from '../../shared/AuthDialog';
import { Button } from '../../shared/Button';
import { Input } from '../../shared/Input';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Spinner } from '../../shared/Spinner';
import { ErrorSnackbar } from '../../shared/ErrorSnackbar';
import { auth } from '../../firebase';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginFormSchema from '../../validationSchemas/loginFormSchema';

export type LoginFormFields = {
  email: string;
  password: string;
};

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/main');
    }
  }, [user]);

  const {
    currentLocalization: {
      loginPage: {
        title,
        email,
        password,
        submit,
        requiredEmail,
        incorrectEmail,
        requiredPass,
      },
    },
  } = useContext(localizationContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormFields>({
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema),
    context: { requiredEmail, incorrectEmail, requiredPass },
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler: SubmitHandler<LoginFormFields> = (
    data: LoginFormFields,
  ): void => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <>
      <AuthDialog title={title}>
        <Box component="form" onSubmit={handleSubmit(onSubmitHandler)}>
          <Stack gap={4}>
            <Input
              placeholder={email}
              autoComplete="new-password"
              icon="email"
              {...register('email')}
              error={Boolean(errors.email)}
              helperText={errors.email?.message ?? '\u00A0'}
            />
            <Input
              placeholder={password}
              type="password"
              autoComplete="new-password"
              icon="pass"
              {...register('password')}
              error={Boolean(errors.password)}
              helperText={errors.password?.message ?? '\u00A0'}
            />
          </Stack>
          <Button type="submit" variant="contained" disabled={!isValid}>
            {submit}
          </Button>
        </Box>
      </AuthDialog>
      <Spinner open={loading} />
      <ErrorSnackbar message={error?.message} />
    </>
  );
};

export default Login;
