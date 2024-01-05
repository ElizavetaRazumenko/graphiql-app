import { MainPageErrors } from '../context/types';

const prohibitedHeaders = [
  'Accept-Charset',
  'Accept-Encoding',
  'Access-Control-Request-Headers',
  'Access-Control-Request-Method',
  'Connection',
  'Content-Length',
  'Cookie',
  'Cookie2',
  'Date',
  'DNT',
  'Expect',
  'Host',
  'Keep-Alive',
  'Origin',
  'Referer',
  'Set-Cookie',
  'TE',
  'Trailer',
  'Transfer-Encoding',
  'Upgrade',
  'Via',
  'X-HTTP-Method',
  'X-HTTP-Method-Override',
  'X-Method-Override',
];

const checkUserHeaders = (
  userHeaders: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  errorMessages: MainPageErrors,
): boolean => {
  if (!userHeaders) return true;
  const chekingHeaders = JSON.parse(userHeaders) as Record<string, string>;

  for (const headerName of Object.keys(chekingHeaders)) {
    if (headerName.startsWith('proxy-') || headerName.startsWith('sec-')) {
      setErrorMessage(`${errorMessages.notAllowedHeaders} ${headerName}`);
      return false;
    }
    if (
      prohibitedHeaders.find(
        (prohibitedHeader) =>
          prohibitedHeader.toLowerCase() === headerName.toLowerCase().trim(),
      )
    ) {
      setErrorMessage(`${errorMessages.notAllowedHeaders} ${headerName}`);
      return false;
    }
  }
  return true;
};

export default checkUserHeaders;
