const defaultHeader = {
  'Content-Type': 'application/json',
};

const setHeaders = (userHeaders: string) => {
  const parsingUserHeaders = JSON.parse(userHeaders || '{}');
  if (
    'Content-Type' in parsingUserHeaders &&
    parsingUserHeaders['Content-Type'] === 'application/json'
  ) {
    return parsingUserHeaders;
  }
  return {
    ...parsingUserHeaders,
    ...defaultHeader,
  };
};

export default setHeaders;
