import { Box, Stack } from '@mui/material';
import { AuthDialog } from '../../shared/AuthDialog';
import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { useContext } from 'react';
import { localizationContext } from '../../context/localizationContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterWithEmailAndPassword } from '../../firebase';
import registrationFormSchema from '../../validationSchemas/registrationFormSchema';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../shared/Spinner';
import { ErrorSnackbar } from '../../shared/ErrorSnackbar';
import { useEffect } from 'react';
import { PasswordStrengthMeter } from '../../shared/PasswordStrengthMeter';

export type RegisterFormFields = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const Registration = () => {
  const [registerWithEmailAndPassword, user, loading, error] =
    useRegisterWithEmailAndPassword();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/main');
    }
  }, [user]);

  const {
    currentLocalization: {
      registrationPage: {
        title,
        name,
        email,
        password,
        passwordRepeat,
        submit,
      },
    },
  } = useContext(localizationContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<RegisterFormFields>({
    mode: 'onChange',
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const curPassword: string = watch('password');

  const onSubmitHandler: SubmitHandler<RegisterFormFields> = (
    data: RegisterFormFields,
  ): void => {
    registerWithEmailAndPassword(data.name, data.email, data.password.trim());
  };

  return (
    <>
      <AuthDialog title={title}>
        <Box component="form" onSubmit={handleSubmit(onSubmitHandler)}>
          <Stack gap={2}>
            <Input
              placeholder={name}
              icon="user"
              {...register('name')}
              error={Boolean(errors.name)}
              helperText={errors.name?.message ?? '\u00A0'}
            />
            <Input
              placeholder={email}
              icon="email"
              {...register('email')}
              error={Boolean(errors.email)}
              helperText={errors.email?.message ?? '\u00A0'}
            />
            <PasswordStrengthMeter password={curPassword} />
            <Input
              placeholder={password}
              type="password"
              icon="pass"
              {...register('password')}
              error={Boolean(errors.password)}
              helperText={errors.password?.message ?? '\u00A0'}
            />
            <Input
              placeholder={passwordRepeat}
              type="password"
              icon="pass"
              {...register('passwordConfirm')}
              error={Boolean(errors.passwordConfirm)}
              helperText={errors.passwordConfirm?.message ?? '\u00A0'}
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

export default Registration;
