interface tokenData {
  payload: {
    user: string;
    iat: number;
    exp: number;
  };
  signature: string;
  metadata: {
    alg: string;
    typ: string;
  };
}

const parseData = <T>(data: string): T => {
  const string = atob(data);
  return JSON.parse(string);
};

const extractTokenData = (token: string): tokenData => {
  const [metadataBase64, payloadBase64, signature] = token.split('.');
  console.log('metadataBase64', metadataBase64);
  console.log('payloadBase64', payloadBase64);
  console.log('signature', signature);
  const payload = parseData<tokenData['payload']>(payloadBase64);
  const metadata = parseData<tokenData['metadata']>(metadataBase64);
  return {
    signature,
    payload,
    metadata,
  };
};

export default extractTokenData;
