import checkCORSpolicySupport from './checkCORSpolicySupport';
import checkGraphQLSupport from './checkGraphqlSupport';

const checkEndpoint = async (
  endpoint: string,
  setErrorMessage: (value: React.SetStateAction<string>) => void,
) => {
  setErrorMessage('');
  const isEndpointSupportCORS = await checkCORSpolicySupport(endpoint);
  if (!isEndpointSupportCORS) {
    setErrorMessage('Your endpoint does not support CORS');
  } else {
    const isEndpointSupportGraphQL = await checkGraphQLSupport(endpoint);
    if (!isEndpointSupportGraphQL) {
      setErrorMessage('Your endpoint does not support Graph QL requests');
    }
  }
};

export default checkEndpoint;
