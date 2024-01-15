import { Error404, ErrorContainer, ErrorMessage, WelcomeLink } from './styled';

const NotFound = () => {
  return (
    <ErrorContainer spacing={2}>
      <Error404>404</Error404>
      <ErrorMessage>Page not found</ErrorMessage>
      <WelcomeLink to={'/'}>Go to the welcome page ?</WelcomeLink>
    </ErrorContainer>
  );
};

export default NotFound;
