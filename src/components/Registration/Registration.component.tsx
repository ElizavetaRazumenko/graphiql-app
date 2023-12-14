import { Box, Stack } from '@mui/material';
import { AuthDialog } from '../../shared/AuthDialog';
import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { useContext } from 'react';
import { localizationContext } from '../../context/localizationContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerWithEmailAndPassword } from '../../firebase';
import registrationFormSchema from '../../validationSchemas/registrationFormSchema';

export type RegisterFormFields = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const Registration = () => {
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
    reset,
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

  const onSubmitHandler: SubmitHandler<RegisterFormFields> = (
    data: RegisterFormFields,
  ): void => {
    console.log({ data });
    registerWithEmailAndPassword(data.name, data.email, data.password);
    reset();
  };

  return (
    <AuthDialog title={title}>
      <Box component="form" onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack gap={3}>
          <Input
            placeholder={name}
            variant="outlined"
            icon="user"
            {...register('name')}
            error={Boolean(errors.name)}
            helperText={errors.name?.message ?? '\u00A0'}
          />
          <Input
            placeholder={email}
            variant="outlined"
            icon="email"
            {...register('email')}
            error={Boolean(errors.email)}
            helperText={errors.email?.message ?? '\u00A0'}
          />
          <Input
            placeholder={password}
            variant="outlined"
            type="password"
            icon="pass"
            {...register('password')}
            error={Boolean(errors.password)}
            helperText={errors.password?.message ?? '\u00A0'}
          />
          <Input
            placeholder={passwordRepeat}
            variant="outlined"
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
  );
};

export default Registration;
