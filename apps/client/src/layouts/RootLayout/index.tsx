import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/shop');
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
