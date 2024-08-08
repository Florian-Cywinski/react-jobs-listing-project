import { Outlet } from 'react-router-dom';  // All pages come through this outlet (parent route -> child routes)
import Navbar from '../components/Navbar';  // Every page has the Navbar
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};
export default MainLayout;
