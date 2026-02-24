import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const frameworkLinks = [
  { label: 'Project Monitoring (Add/Update – Common Upload Form)', path: 'https://iigdev.gaurav.club/home', external: true },
  { label: 'Project Monitoring (Reports/Dashboard)', path: 'https://ipm.mospi.gov.in/Home/PublicDashboardNew', external: true },
  { label: 'Performance Monitoring', path: 'https://app.powerbi.com/view?r=eyJrIjoiM2Y2YmQ4MWYtNWIxNS00ODVhLTkxYTctNzhhMmY2ZjczNTEwIiwidCI6IjliZDllNTJjLWU1MGItNDUzYS04MzA0LTczMjY4NWM4Y2NlOSJ9', external: true },
  { label: 'NIE-I – States', path: 'https://applive.gaurav.club/login', external: true },
  { label: 'NIE-I – Ministry', path: 'https://applive.gaurav.club/login', external: true },
  { label: 'Twenty Point Programme', path: '/tpp', noLink: true },
];

const Framework = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Framework</h1>
      <p className="text-gray-600 mb-8">Select a framework to view details and access the platform.</p>
      <nav className="flex flex-col gap-2 max-w-xl">
        {frameworkLinks.map((item) =>
          item.noLink ? (
            <div
              key={item.label}
              className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 font-medium cursor-default"
            >
              {item.label}
            </div>
          ) : item.external ? (
            <a
              key={item.path}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-paimana-blue text-gray-800 font-medium transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              className="px-4 py-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-paimana-blue text-gray-800 font-medium transition-colors"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

export default Framework;
