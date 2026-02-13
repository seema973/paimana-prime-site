import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown, Search, Printer, Globe } from 'lucide-react';

interface NavbarProps {
  variant?: 'main' | 'project';
}

const projectLinks = [
  { label: 'NIE-I State', path: '/nie-i-state' },
  { label: 'NIE-I Ministry', path: '/nie-i-ministry' },
  { label: 'Project Monitoring (Input CUF FORM)', path: '/project-monitoring-input' },
  { label: 'Project Monitoring (Output Flash Reports)', path: 'https://ipm.mospi.gov.in/Home/PublicDashboardNew' },
  { label: 'Performance Monitoring', path: '/performance-monitoring' },
  { label: 'TPP', path: '/tpp' },
];

const ministryLinks = [
  { label: 'Meet the Secretary', path: '/about#meet-the-secretary' },
  { label: 'Organization Structure', path: '/about#organization-structure' },
  { label: "Who's Who", path: '/about#whos-who' },
];

const Navbar = ({ variant = 'main' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [isMobileMinistryOpen, setIsMobileMinistryOpen] = useState(false);
  const [isMinistryOpen, setIsMinistryOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setIsMinistryOpen(false);
        setIsOfferingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path.startsWith('#')) return false;
    return location.pathname === path;
  };

  const closeAllDesktopDropdowns = () => {
    setIsMinistryOpen(false);
    setIsOfferingsOpen(false);
  };

  const toggleDesktopDropdown = (dropdown: 'ministry' | 'offerings') => {
    setIsMinistryOpen((prev) => (dropdown === 'ministry' ? !prev : false));
    setIsOfferingsOpen((prev) => (dropdown === 'offerings' ? !prev : false));
  };

  const handleLogin = () => {
    window.location.href = 'https://applive.gaurav.club/';
  };

  return (
    <>
      {/* Top Header Bar (Global Header) */}
      <header className="bg-white border-b border-gray-200 py-2 z-50 relative">
        <div className="container-custom">
          <div className="flex items-center justify-between gap-4 relative">
            {/* Left Side - Government Emblem & Text */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <img
                src="https://www.mospi.gov.in/uploads/primaryLogo/primaryLogo-1dee0dd9-99fd-4b8f-a352-7a53e0655404.svg"
                alt="Government of India - Ministry of Statistics and Programme Implementation"
                className="h-10 w-10 object-contain"
                style={{
                  backgroundColor: 'transparent',
                  background: 'transparent',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="hidden md:block">
                <div className="text-xs font-semibold text-gray-800">Government Of India</div>
                <div className="text-xs text-gray-600">Ministry of Statistics and Programme Implementation</div>
              </div>
            </div>

            {/* Center - Logos (Absolutely Centered) */}
            <div className="hidden lg:flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
              <img
                src="https://www.mospi.gov.in/uploads/secondaryLogo/1.webp"
                alt="Secondary Logo"
                className="h-12 w-auto object-contain"
                style={{
                  backgroundColor: 'transparent',
                  background: 'transparent',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="h-12 w-px bg-gray-300"></div>
              <img
                src="https://ipm.mospi.gov.in/Content/img/logo3.svg"
                alt="IPM Logo"
                className="h-12 w-auto object-contain"
                style={{
                  backgroundColor: 'transparent',
                  background: 'transparent',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            {/* Right Side - Utility Icons */}
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:block" aria-label="Print">
                <Printer className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Language">
                <span className="text-lg font-semibold text-gray-700">अ</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Accessibility">
                <Globe className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation Bar */}
      <nav className={`bg-paimana-dark-blue text-white sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container-custom">
          <div className="flex items-center justify-center relative">
            <div className="flex items-center gap-1 lg:gap-2" ref={desktopNavRef}>
              <Link
                to="/"
                onClick={closeAllDesktopDropdowns}
                className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive('/') ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                Home
              </Link>

              {/* Projects Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDesktopDropdown('offerings')}
                  className="px-4 py-3 text-sm font-medium transition-colors flex items-center gap-1 text-white/90 hover:bg-white/10 hover:text-white"
                >
                  Projects
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOfferingsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOfferingsOpen && (
                  <div className="absolute top-full left-0 mt-1 py-1 min-w-[200px] bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                    {projectLinks.map((p) =>
                      p.path.startsWith('http') ? (
                        <a
                          key={p.path}
                          href={p.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeAllDesktopDropdowns}
                          className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          {p.label}
                        </a>
                      ) : (
                        <Link
                          key={p.path}
                          to={p.path}
                          onClick={closeAllDesktopDropdowns}
                          className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          {p.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Ministry Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDesktopDropdown('ministry')}
                  className="px-4 py-3 text-sm font-medium transition-colors flex items-center gap-1 text-white/90 hover:bg-white/10 hover:text-white"
                >
                  Ministry
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMinistryOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMinistryOpen && (
                  <div className="absolute top-full left-0 mt-1 py-1 min-w-[200px] bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                    {ministryLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={closeAllDesktopDropdowns}
                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={closeAllDesktopDropdowns}
                className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive('/about') ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/public-dashboard"
                onClick={closeAllDesktopDropdowns}
                className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive('/public-dashboard') ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/user-manuals"
                onClick={closeAllDesktopDropdowns}
                className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive('/user-manuals') ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                User Manual
              </Link>

              {/* Login Button - Only show on project pages */}
              {variant === 'project' && (
                <button
                  onClick={handleLogin}
                  className="ml-4 px-4 py-2 rounded-lg bg-white text-paimana-blue font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white absolute right-0"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-paimana-dark-blue text-white border-t border-white/10">
          <div className="container-custom py-4">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/') ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                Home
              </Link>
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10"
                >
                  Projects
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProjectsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProjectsOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {projectLinks.map((p) =>
                      p.path.startsWith('http') ? (
                        <a
                          key={p.path}
                          href={p.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileProjectsOpen(false);
                          }}
                          className="px-4 py-2.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10"
                        >
                          {p.label}
                        </a>
                      ) : (
                        <Link
                          key={p.path}
                          to={p.path}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileProjectsOpen(false);
                          }}
                          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            isActive(p.path) ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10'
                          }`}
                        >
                          {p.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileMinistryOpen(!isMobileMinistryOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10"
                >
                  Ministry
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileMinistryOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileMinistryOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {ministryLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileMinistryOpen(false);
                        }}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive(item.path) ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/about') ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/public-dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/public-dashboard') ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/user-manuals"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/user-manuals') ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                User Manual
              </Link>
              {variant === 'project' && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLogin();
                  }}
                  className="px-4 py-3 rounded-lg text-sm font-medium bg-white text-paimana-blue hover:bg-gray-100 transition-colors mt-2"
                >
                  <User className="w-4 h-4 inline mr-2" />
                  Login
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
