import ExternalRedirect from 'components/ExternalRedirect';
import PaternityTest from 'pages/PaternityTest';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/paternity-test/:token',
    element: <PaternityTest />,
  },
  {
    path: '*',
    element: <ExternalRedirect to="https://labrede.com.br" />,
  },
]);

export default routes;
