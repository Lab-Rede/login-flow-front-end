/* eslint-disable @typescript-eslint/no-unused-vars */
import extractTokenData from 'utils/extractTokenData';

import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { useAppSelector } from './useAppStore';

const useSession = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { token } = useAppSelector((state) => {
    return state.signer;
  });

  const tokenData = token ? extractTokenData(token) : null;

  const logoffIfExpired = useCallback(async () => {
    console.log('TokenData', tokenData);
    console.log('Date', Date.now());
    const expired = !tokenData || Date.now() / 1000 > tokenData.payload.exp;
    console.log('Expired', expired);
    if (!expired) {
      return;
    }
    enqueueSnackbar('Tempo da sessão expirou. Você será redirecionado em 5 segundos', {
      persist: true,
      variant: 'info',
    });

    setTimeout(() => {
      window.location.href = 'https://labrede.com.br';
    }, 5000);
  }, [token]);

  return { logoffIfExpired };
};

export default useSession;
