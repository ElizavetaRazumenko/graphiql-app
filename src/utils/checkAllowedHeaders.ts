import { checkedEndpointsWithHeaders } from './checkCORSpolicySupport';

const checkAllowedHeaders = (
  endpoint: string,
  headers: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  try {
    const parseHeadersEntries = JSON.parse(headers) as Record<string, string>;
    const parseHeaders = Object.keys(parseHeadersEntries);
    const allowedHeaders = checkedEndpointsWithHeaders[endpoint];
    if (allowedHeaders) {
      if (allowedHeaders.includes('*')) return true;
      const unacceptableHeaders = parseHeaders.filter(
        (header) => !allowedHeaders.includes(header),
      );
      if (unacceptableHeaders.length) {
        setErrorMessage(
          `${unacceptableHeaders} headers are not allowed for the specified endpoint`,
        );
        return false;
      }
      return true;
    } else {
      setErrorMessage('Something went wrong, please try again');
      return false;
    }
  } catch {
    setErrorMessage('Please provide headers in JSON format');
  }
};

export default checkAllowedHeaders;
