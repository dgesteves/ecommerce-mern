import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: '/register',
        element: <h1>Register</h1>,
      },
      {
        path: '/login',
        element: <h1>Login</h1>,
      },
      {
        path: '/shop',
        element: <h1>Shop</h1>,
      },
      {
        path: '/checkout',
        element: <h1>Checkout</h1>,
      },
      {
        path: '/purchase-history',
        element: <h1>Purchase History</h1>,
      },
    ],
  },
]);
