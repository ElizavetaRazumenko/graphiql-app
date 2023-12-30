type EndpointData = Record<string, Array<string>>;

export const checkedEndpointsWithHeaders: EndpointData = {};

const checkCORSpolicySupport = async (
  currentEndpoint: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (checkedEndpointsWithHeaders[currentEndpoint]) return true;

  try {
    const response = await fetch(currentEndpoint, {
      method: 'OPTIONS',
      headers: {
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'X-PINGOTHER, Content-Type',
      },
    });

    const headers = [...response.headers];
    const accessControlAllowHeaders = headers.find(
      (header) => header[0] === 'access-control-allow-headers',
    );

    const accessControlAllowOrigin = headers.find(
      (header) => header[0] === 'access-control-allow-origin',
    );

    if (
      accessControlAllowOrigin &&
      accessControlAllowOrigin[1] &&
      accessControlAllowHeaders &&
      accessControlAllowHeaders[1]
    ) {
      const availableHeaders = accessControlAllowHeaders[1].split(', ');
      checkedEndpointsWithHeaders[currentEndpoint] = availableHeaders;

      if (
        accessControlAllowOrigin[1] === '*' ||
        accessControlAllowOrigin[1] === window.location.origin
      ) {
        return true;
      }
    }
    setErrorMessage('Entered endpoint does not support CORS');
    return false;
  } catch (err) {
    if (err instanceof Error) {
      setErrorMessage(
        `An error occurred while checking CORS support: ${err?.message ?? ''}`,
      );
    } else {
      setErrorMessage(`An unknown error occurred while checking CORS support.`);
    }
    return false;
  }
};

export default checkCORSpolicySupport;
