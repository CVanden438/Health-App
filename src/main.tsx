import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './Routes/Root';
import { Landing } from './Routes/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: '/', element: <Landing /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
