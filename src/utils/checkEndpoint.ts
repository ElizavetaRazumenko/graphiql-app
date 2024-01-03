import { MainPageErrors } from '../context/types';
import checkCORSpolicySupport from './checkCORSpolicySupport';
import checkGraphQLSupport from './checkGraphqlSupport';

const checkEndpoint = async (
  endpoint: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  errorMessages: MainPageErrors,
): Promise<boolean> => {
  setErrorMessage('');
  const isEndpointSupportCORS = await checkCORSpolicySupport(
    endpoint,
    setErrorMessage,
    errorMessages,
  );
  if (!isEndpointSupportCORS) {
    return false;
  } else {
    const isEndpointSupportGraphQL = await checkGraphQLSupport(
      endpoint,
      setErrorMessage,
      errorMessages,
    );
    if (!isEndpointSupportGraphQL) {
      return false;
    }
  }
  return true;
};

export default checkEndpoint;
