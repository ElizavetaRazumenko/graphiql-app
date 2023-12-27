const checkedEndpoints: string[] = [];

const checkCORSpolicySupport = async (currentEndpoint: string) => {
  if (checkedEndpoints.find((endpoint) => endpoint === currentEndpoint)) {
    return true;
  }
  try {
    const response = await fetch(currentEndpoint, {
      method: 'OPTIONS',
    });

    const headers = [...response.headers];
    const accessControlAllowHeaders = headers.find(
      (header) => header[0] === 'access-control-allow-headers',
    );

    const accessControlAllowMethods = headers.find(
      (header) => header[0] === 'access-control-allow-methods',
    );
    if (
      accessControlAllowHeaders &&
      accessControlAllowMethods &&
      accessControlAllowMethods[1].length
    ) {
      checkedEndpoints.push(currentEndpoint);
      return true;
    }
    return false;
  } catch (error) {
    console.error('An error occurred while checking CORS support:', error);
  }
};

export default checkCORSpolicySupport;
