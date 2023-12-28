import checkCORSpolicySupport from './checkCORSpolicySupport';
import checkGraphQLSupport from './checkGraphqlSupport';

const checkEndpoint = async (
  endpoint: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
): Promise<boolean> => {
  setErrorMessage('');
  const isEndpointSupportCORS = await checkCORSpolicySupport(
    endpoint,
    setErrorMessage,
  );
  if (!isEndpointSupportCORS) {
    setErrorMessage('Entered endpoint does not support CORS');
    return false;
  } else {
    const isEndpointSupportGraphQL = await checkGraphQLSupport(
      endpoint,
      setErrorMessage,
    );
    if (!isEndpointSupportGraphQL) {
      setErrorMessage('Entered endpoint does not support Graph QL requests');
      return false;
    }
  }
  return true;
};

export default checkEndpoint;
