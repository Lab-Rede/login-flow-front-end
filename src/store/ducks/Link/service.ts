/* eslint-disable import/prefer-default-export */
import { linkResponse } from 'interfaces/services/link';
import api from 'services';

const path = '/link';

export const getLinkExpiration = async (): Promise<linkResponse> => {
  const response = await api.get(`${path}/link_expiration`);
  return response.data;
};
