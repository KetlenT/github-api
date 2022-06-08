import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/index';

import Repository from './pages/Repository';
import NotFound from './pages/Page404';
import Favorites from './pages/Favorites';


export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Repository /> },
        { path: 'repositories', element: <Repository /> },
        { path: 'favorites', element: <Favorites /> },
      ],
    },
    {
      path: '/',
      children: [
        
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
