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
    return false;
  } else {
    const isEndpointSupportGraphQL = await checkGraphQLSupport(
      endpoint,
      setErrorMessage,
    );
    if (!isEndpointSupportGraphQL) {
      return false;
    }
  }
  return true;
};

export default checkEndpoint;
