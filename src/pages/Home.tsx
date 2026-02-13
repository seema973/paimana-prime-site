import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Home = () => {
  const heroBannerHeight = '56vh';

  const banners = [
    {
      id: 1,
      image: 'https://www.mospi.gov.in/uploads/OrganizationImage/home_banner_en_1770790289515_vande%20mataram.jpeg',
    },
    {
      id: 2,
      image: '/banner2.png',
    },
  ];

  const [, setCurrentIndex] = useState(0);
  const carouselApiRef = useRef<any>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      // Cleanup interval on unmount
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  const keyInitiatives = [
    {
      title: 'NIE-I State',
      description: 'Monitoring key initiatives at the state level.',
      image: '/project-nie-state.jpg',
      gradient: 'from-blue-600 to-blue-500',
      path: '/nie-i-state',
    },
    {
      title: 'NIE-I Ministry',
      description: 'Tracking key projects at the ministry level.',
      image: '/project-nie-ministry.jpg',
      gradient: 'from-orange-500 to-orange-400',
      path: '/nie-i-ministry',
    },
    {
      title: 'Project Monitoring (Input CUF FORM)',
      description: 'Input CUF form for project monitoring.',
      image: '/project-monitoring.jpg',
      gradient: 'from-green-500 to-green-400',
      path: '/project-monitoring-input',
    },
    {
      title: 'Project Monitoring (Output Flash Reports)',
      description: 'Output flash reports for project monitoring.',
      image: '/project-monitoring.jpg',
      gradient: 'from-green-600 to-green-500',
      path: 'https://ipm.mospi.gov.in/Home/PublicDashboardNew',
    },
    {
      title: 'Performance Monitoring',
      description: 'Assessing & improving project performance.',
      image: '/project-performance.jpg',
      gradient: 'from-blue-400 to-blue-300',
      path: '/performance-monitoring',
    },
    {
      title: 'TPP',
      description: 'Managing technical & professional personnel data.',
      image: '/project-tpp.jpg',
      gradient: 'from-purple-500 to-purple-400',
      path: '/tpp',
    },
  ];

  const quickAccess = [
    {
      title: 'Public Dashboard',
      description: 'View public analytics dashboard, showing project metrics & statistics.',
      image: '/quick-dashboard.jpg',
      path: '/public-dashboard',
    },
    {
      title: 'User Manuals',
      description: 'Download user manuals and guides for various projects.',
      image: '/quick-manuals.jpg',
      path: '/user-manuals',
    },
    {
      title: 'Helpdesk & Support',
      description: 'Contact helpdesk for support and assistance.',
      image: '/quick-helpdesk.jpg',
      path: '/contact',
    },
    {
      title: 'Login Portal',
      description: 'Login to access the PAIMANA platform and its projects.',
      image: '/quick-login.jpg',
      path: '/login',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Banner Carousel */}
      <section className="relative w-full">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          setApi={(api) => {
            carouselApiRef.current = api;
            if (api) {
              api.on('select', () => {
                setCurrentIndex(api.selectedScrollSnap());
              });
              
              // Clear any existing interval
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
              }
              
              // Start auto-play
              intervalRef.current = setInterval(() => {
                if (carouselApiRef.current) {
                  carouselApiRef.current.scrollNext();
                }
              }, 5000); // 5 seconds
            }
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-[56vh] -ml-0">
            {banners.map((banner) => {
              const isBanner2 = banner.image === '/banner2.png';
              return (
                <CarouselItem key={banner.id} className="h-full pl-0 basis-full">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${banner.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: isBanner2 ? 'center 28%' : 'top center',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: isBanner2 ? 'transparent' : '#f5f5f5',
                      minHeight: heroBannerHeight,
                    }}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Project Cards */}
        <div className="container-custom mt-4 relative z-10 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-1">
            {keyInitiatives.map((project) => {
              const isExternal = project.path.startsWith('http');
              const cardClass = 'group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100';
              return isExternal ? (
                <a
                  key={project.title}
                  href={project.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                {/* Image Area */}
                <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-poppins font-semibold text-paimana-dark-blue mb-2 text-base">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
              ) : (
                <Link
                  key={project.title}
                  to={project.path}
                  className={cardClass}
                >
                {/* Image Area */}
                <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-poppins font-semibold text-paimana-dark-blue mb-2 text-base">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-paimana-dark-blue mb-4">
              Quick Access for Projects
            </h2>
          </div>

          {/* Quick Access Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccess.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Area */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-paimana-dark-blue mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
