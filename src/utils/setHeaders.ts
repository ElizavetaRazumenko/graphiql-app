const defaultHeader = {
  'Content-Type': 'application/json',
};

const setHeaders = (userHeaders: string) => {
  const parsingUserHeaders = JSON.parse(userHeaders || '{}');

  return {
    ...parsingUserHeaders,
    ...defaultHeader,
  };
};

export default setHeaders;
