import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'User Manuals', path: '/user-manuals' },
    { label: 'Projects', path: '/#key-initiatives' },
  ];

  const projects = [
    { label: 'NIE-I State', path: '/nie-i-state' },
    { label: 'NIE-I Ministry', path: '/nie-i-ministry' },
    { label: 'Project Monitoring (Input CUF FORM)', path: '/project-monitoring-input' },
    { label: 'Project Monitoring (Output Flash Reports)', path: 'https://ipm.mospi.gov.in/Home/PublicDashboardNew' },
    { label: 'Performance Monitoring', path: '/performance-monitoring' },
    { label: 'TPP', path: '/tpp' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-paimana-dark-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Government Info - Left Column */}
          <div>
            <div className="mb-4">
              <img
                src="https://www.mospi.gov.in/uploads/primaryLogo/primaryLogo-1dee0dd9-99fd-4b8f-a352-7a53e0655404.svg"
                alt="Government of India - Ministry of Statistics and Programme Implementation"
                className="h-12 md:h-14 w-auto"
                style={{
                  backgroundColor: 'transparent',
                  background: 'transparent',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-white font-bold text-lg">GOI</span>';
                }}
              />
            </div>
            <p className="text-sm text-white/80 mb-4">
              Ministry of Statistics & Programme Implementation
            </p>
            <a
              href="mailto:support@paimana.gov.in"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-paimana-blue hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              support@paimana.gov.in
            </a>
          </div>

          {/* Quick Links - Middle Column */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects - Middle Column */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Projects</h4>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.path}>
                  {project.path.startsWith('http') ? (
                    <a
                      href={project.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                      {project.label}
                    </a>
                  ) : (
                    <Link
                      to={project.path}
                      className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                      {project.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us - Right Column */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@regiuiale.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">info@regiuiale.com</span>
              </a>
              <a
                href="tel:+1234667990"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+123-466-7990</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container-custom py-6">
          <p className="text-center text-white/60 text-sm">
            © 2026 PAIMANA All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
