import { Outlet } from 'react-router-dom';  // All pages come through this outlet (parent route -> child routes)
import Navbar from '../components/Navbar';  // Every page has the Navbar

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default MainLayout;
