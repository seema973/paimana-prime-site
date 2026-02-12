import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Layout = () => {
  const location = useLocation();
  
  // Determine navbar variant based on route
  const getNavbarVariant = (): 'main' | 'project' => {
    // Project pages use 'project' variant, others use 'main'
    const projectRoutes = [
      '/nie-i-state',
      '/nie-i-ministry',
      '/project-monitoring',
      '/performance-monitoring',
      '/tpp',
    ];
    
    return projectRoutes.includes(location.pathname) ? 'project' : 'main';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar variant={getNavbarVariant()} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
