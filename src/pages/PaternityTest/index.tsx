import { Avatar, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppStore';
import { setToken } from 'store/ducks/Signer';
import labredLoading from '../../assets/load/labred_loading.gif';

const PaternityTest = () => {
  const [showLoading, setShowLoading] = useState(true);
  const { token } = useParams<string>();

  const dispatch = useAppDispatch();

  dispatch(setToken(token || null));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    return () => {
      return clearTimeout(timer);
    };
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '100vh', width: '100wh' }}>
      {showLoading ? (
        <Avatar sx={{ width: '20%', height: '10%' }} src={labredLoading} variant="square" />
      ) : (
        <iframe
          src="https://gde.diagnosticosdobrasil.com.br/GDE_Home/ListaDeExame.aspx?Pesquisa=Hematologia+"
          width="100%"
          height="100%"
          title="Diagnósticos do Brasil"
          style={{ border: 'none' }}
        />
      )}
    </Box>
  );
};

export default PaternityTest;
