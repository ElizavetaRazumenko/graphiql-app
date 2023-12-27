interface EndpointData {
  route: string;
  availableHeaders: string[];
}

export const checkedEndpoints: EndpointData[] = [];

const checkCORSpolicySupport = async (currentEndpoint: string) => {
  if (checkedEndpoints.find((endpoint) => endpoint.route === currentEndpoint)) {
    return true;
  }
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

    if (accessControlAllowHeaders && accessControlAllowHeaders[1]) {
      const availableHeaders = accessControlAllowHeaders[1].split(', ');
      checkedEndpoints.push({ route: currentEndpoint, availableHeaders });
      return true;
    }
    return false;
  } catch (error) {
    console.error('An error occurred while checking CORS support:', error);
  }
};

export default checkCORSpolicySupport;
