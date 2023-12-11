import { Wrapper } from '../../components/Wrapper';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Registration } from '../../components/Registration';
import { Login } from '../../components/Login';
import { useEffect } from 'react';

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const action: string = searchParams.get('action') ?? '';
  const isLogin: boolean = action === 'login';
  const isRegister: boolean = action === 'register';

  useEffect(() => {
    if (!isLogin && !isRegister) {
      navigate('/');
    }
  }, [isLogin, isRegister]);

  return (
    <Wrapper>
      {isLogin && <Login />}
      {isRegister && <Registration />}
    </Wrapper>
  );
};

export default AuthPage;
