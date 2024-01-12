import React, { FC } from 'react';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import { ServiceRoutes } from './Enums';
import { HomePage, LaminateFlooringPage } from './Pages';

const Routes: FC = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: `/${ServiceRoutes.laminateFlooring}`,
      element: <LaminateFlooringPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Routes;
