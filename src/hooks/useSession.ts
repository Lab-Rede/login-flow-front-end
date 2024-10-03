import extractTokenData from 'utils/extractTokenData';

import { useCallback } from 'react';
import { useSnackbar } from 'notistack';

const useSession = () => {
  const { enqueueSnackbar } = useSnackbar();

  // const tokenData = currentRefreshToken
  //   ? extractTokenData(currentRefreshToken)
  //   : null;

  // const logoffIfExpired = useCallback(async () => {
  //   const expired = !tokenData || Date.now() / 1000 > tokenData.payload.exp;
  //   if (!signed || !expired) {
  //     return;
  //   }
  //   enqueueSnackbar('Tempo da sessão expirou, logue novamente!', {
  //     persist: true,
  //     variant: 'customAlert',
  //     severity: 'info',
  //   });
  // }, [tokenData, dispatch, enqueueSnackbar, signed]);

  // return { logoffIfExpired };
};

export default useSession;
