import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Layout from '@/components/Layout';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import ProjectPage from '@/pages/ProjectPage';
import Login from '@/pages/Login';
import PublicDashboard from '@/pages/PublicDashboard';
import UserManuals from '@/pages/UserManuals';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nie-i-state" element={<ProjectPage />} />
          <Route path="/nie-i-ministry" element={<ProjectPage />} />
          <Route path="/project-monitoring-input" element={<ProjectPage />} />
          <Route path="/performance-monitoring" element={<ProjectPage />} />
          <Route path="/tpp" element={<ProjectPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/public-dashboard" element={<PublicDashboard />} />
          <Route path="/user-manuals" element={<UserManuals />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
