import useSession from 'hooks/useSession';
import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from 'routes';

const App = () => {
  const session = useSession();

  useEffect(() => {
    const interval = setInterval(() => {
      session.logoffIfExpired();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [session]);

  return <RouterProvider router={routes} />;
};

export default App;
