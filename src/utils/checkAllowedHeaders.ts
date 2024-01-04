import { MainPageErrors } from '../context/types';
import { checkedEndpointsWithHeaders } from './checkCORSpolicySupport';

const checkAllowedHeaders = (
  endpoint: string,
  headers: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  errorMessages: MainPageErrors,
): boolean => {
  if (!headers) return true;

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
        `${unacceptableHeaders} ${errorMessages.notAllowedHeaders}`,
      );
      return false;
    }
    return true;
  }

  setErrorMessage(errorMessages.somethingWentWrong);
  return false;
};

export default checkAllowedHeaders;
