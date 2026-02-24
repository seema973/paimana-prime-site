import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search, FileInput, ChevronDown } from 'lucide-react';

interface NavbarProps {
  variant?: 'main' | 'project';
}

const aboutUsLinks = [
  { label: 'About the Ministry', path: '/about#about-ministry' },
  { label: 'About IPMD', path: '/about#about-ipmd' },
  { label: 'About PAIMANA', path: '/about#about-paimana' },
  { label: "Who's Who", path: '/about#whos-who' },
];

const frameworkLinks = [
  { label: 'Project Monitoring (Add/Update – Common Upload Form)', path: 'https://iigdev.gaurav.club/home' },
  { label: 'Project Monitoring (Reports/Dashboard)', path: 'https://ipm.mospi.gov.in/Home/PublicDashboardNew' },
  { label: 'Performance Monitoring', path: 'https://app.powerbi.com/view?r=eyJrIjoiM2Y2YmQ4MWYtNWIxNS00ODVhLTkxYTctNzhhMmY2ZjczNTEwIiwidCI6IjliZDllNTJjLWU1MGItNDUzYS04MzA0LTczMjY4NWM4Y2NlOSJ9' },
  { label: 'NIE-I – States', path: 'https://applive.gaurav.club/login' },
  { label: 'NIE-I – Ministry', path: 'https://applive.gaurav.club/login' },
  { label: 'Twenty Point Programme', path: '/tpp', noLink: true },
];

const mainNavLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about', dropdownLinks: aboutUsLinks },
  { label: 'Framework', path: '/framework', dropdownLinks: frameworkLinks },
  { label: 'Documents', path: '/documents' },
  { label: 'Media', path: '/media' },
  { label: 'Connect Us', path: '/contact' },
];

const Navbar = ({ variant = 'main' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFrameworkOpen, setIsFrameworkOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileFrameworkOpen, setIsMobileFrameworkOpen] = useState(false);
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
        setIsAboutOpen(false);
        setIsFrameworkOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const frameworkPaths = frameworkLinks.map((l) => (l.path.startsWith('http') ? '' : l.path)).filter(Boolean);
  const isActive = (path: string) => {
    if (path.startsWith('#')) return false;
    if (path === '/framework') return frameworkPaths.includes(location.pathname);
    return location.pathname === path;
  };

  const closeAllDesktopDropdowns = () => {
    setIsAboutOpen(false);
    setIsFrameworkOpen(false);
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
                className="h-8 w-8 object-contain"
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
                className="h-11 w-auto object-contain"
                style={{
                  backgroundColor: 'transparent',
                  background: 'transparent',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="h-9 w-px bg-gray-300"></div>
              <img
                src="https://www.mospi.gov.in/uploads/secondaryLogo/2.webp"
                alt="MOSPI Secondary Logo"
                className="h-9 w-auto object-contain"
                style={{
                  backgroundColor: 'transparent',
                  background: 'transparent',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="h-9 w-px bg-gray-300"></div>
              <img
                src="https://www.mospi.gov.in/uploads/secondaryLogo/3.webp"
                alt="MOSPI Logo"
                className="h-11 w-auto object-contain"
                style={{
                  backgroundColor: 'transparent',
                  background: 'transparent',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="h-9 w-px bg-gray-300"></div>
              <img
                src="/paimana.png"
                alt="PAIMANA Logo"
                className="h-9 w-auto object-contain"
                style={{
                  backgroundColor: 'transparent',
                  background: 'transparent',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            {/* Right Side - Utility Icons (same as reference) */}
            <div className="flex items-center gap-0">
              <button
                type="button"
                className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-px h-6 bg-gray-300 flex-shrink-0" aria-hidden />
              <a
                href="#main-content"
                className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
                aria-label="Skip to main content"
              >
                <FileInput className="w-5 h-5 text-gray-600" />
              </a>
              <div className="w-px h-6 bg-gray-300 flex-shrink-0" aria-hidden />
              <button
                type="button"
                className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
                aria-label="Language / Translate"
                title="Language"
              >
                <span className="text-sm font-semibold text-gray-700">अ</span>
                <span className="text-gray-400 mx-0.5">/</span>
                <span className="text-sm font-semibold text-gray-700">A</span>
              </button>
              <div className="w-px h-6 bg-gray-300 flex-shrink-0" aria-hidden />
              <button
                type="button"
                className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
                aria-label="User"
              >
                <User className="w-5 h-5 text-gray-600" />
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
              {mainNavLinks.map((item) =>
                'dropdownLinks' in item && item.dropdownLinks ? (
                  <div key={item.path} className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        const isAbout = item.path === '/about';
                        setIsAboutOpen(isAbout ? (prev) => !prev : false);
                        setIsFrameworkOpen(!isAbout ? (prev) => !prev : false);
                      }}
                      className={`px-4 py-3 text-sm font-medium transition-colors flex items-center gap-1 whitespace-nowrap ${
                        isActive(item.path) ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${(item.path === '/about' ? isAboutOpen : isFrameworkOpen) ? 'rotate-180' : ''}`} />
                    </button>
                    {(item.path === '/about' ? isAboutOpen : isFrameworkOpen) && (
                      <div className="absolute top-full left-0 mt-1 py-1 min-w-[220px] max-w-[280px] bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                        {item.dropdownLinks.map((sub) =>
                          (sub as { noLink?: boolean }).noLink ? (
                            <span
                              key={(sub as { label: string }).label}
                              className="block px-4 py-2.5 text-sm font-medium text-gray-500 cursor-default"
                            >
                              {(sub as { label: string }).label}
                            </span>
                          ) : (sub as { path: string }).path.startsWith('http') ? (
                            <a
                              key={(sub as { path: string }).path}
                              href={(sub as { path: string }).path}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeAllDesktopDropdowns}
                              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                              {(sub as { label: string }).label}
                            </a>
                          ) : (
                            <Link
                              key={(sub as { path: string }).path}
                              to={(sub as { path: string }).path}
                              onClick={closeAllDesktopDropdowns}
                              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                              {(sub as { label: string }).label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeAllDesktopDropdowns}
                    className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive(item.path) ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}

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
              {mainNavLinks.map((item) =>
                'dropdownLinks' in item && item.dropdownLinks ? (
                  <div key={item.path}>
                    <button
                      type="button"
                      onClick={() => {
                        const isAbout = item.path === '/about';
                        setIsMobileAboutOpen(isAbout ? (prev) => !prev : false);
                        setIsMobileFrameworkOpen(!isAbout ? (prev) => !prev : false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.path) ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${(item.path === '/about' ? isMobileAboutOpen : isMobileFrameworkOpen) ? 'rotate-180' : ''}`} />
                    </button>
                    {(item.path === '/about' ? isMobileAboutOpen : isMobileFrameworkOpen) && (
                      <div className="pl-4 mt-1 flex flex-col gap-1">
                        {item.dropdownLinks.map((sub) =>
                          (sub as { noLink?: boolean }).noLink ? (
                            <span
                              key={(sub as { label: string }).label}
                              className="px-4 py-2.5 rounded-lg text-sm font-medium text-white/70 cursor-default"
                            >
                              {(sub as { label: string }).label}
                            </span>
                          ) : (sub as { path: string }).path.startsWith('http') ? (
                            <a
                              key={(sub as { path: string }).path}
                              href={(sub as { path: string }).path}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileAboutOpen(false);
                                setIsMobileFrameworkOpen(false);
                              }}
                              className="px-4 py-2.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10"
                            >
                              {(sub as { label: string }).label}
                            </a>
                          ) : (
                            <Link
                              key={(sub as { path: string }).path}
                              to={(sub as { path: string }).path}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileAboutOpen(false);
                                setIsMobileFrameworkOpen(false);
                              }}
                              className="px-4 py-2.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10"
                            >
                              {(sub as { label: string }).label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path) ? 'bg-paimana-blue text-white' : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
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
