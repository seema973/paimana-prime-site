import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Target, 
  FileText, 
  Settings, 
  CheckCircle2, 
  FileCheck,
  Rocket,
  Clock
} from 'lucide-react';

interface ProjectData {
  id: string;
  name: string;
  fullName: string;
  description: string;
  logo: string;
  color: string;
  objective: string;
  scope: string;
  features: string[];
  implementationStatus: {
    planning: boolean;
    uat: boolean;
    goLive: boolean;
  };
}

const projectsData: Record<string, ProjectData> = {
  'nie-i-state': {
    id: 'nie-i-state',
    name: 'NIE-I',
    fullName: 'National Infrastructure Enablement Index - State (NIE-I)',
    description: 'National Infrastructure Enablement Index (NIE-I State) is an initiative under the Government of India\'s PAIMANA platform, designed to monitor and assess infrastructure enablement and development indicators at the state level.',
    logo: '/niei-logo.jpg',
    color: 'blue',
    objective: 'Track progress on Sustainable Development Goals (SDGs) at the state level.',
    scope: 'Collect, monitor, and analyze data for various development indicators across states.',
    features: [
      'State-specific indicator framework',
      'Real-time data collection and reporting',
      'Visual dashboards with detailed analytics',
      'Compliance and assessment reports',
    ],
    implementationStatus: {
      planning: true,
      uat: true,
      goLive: true,
    },
  },
  'nie-i-ministry': {
    id: 'nie-i-ministry',
    name: 'NIE-I',
    fullName: 'National Infrastructure Enablement Index - Ministry (NIE-I)',
    description: 'National Infrastructure Enablement Index (NIE-I Ministry) is an initiative under the Government of India\'s PAIMANA platform, designed to monitor and assess infrastructure enablement and development indicators at the ministry level.',
    logo: '/project-nie-ministry.jpg',
    color: 'orange',
    objective: 'Monitor and evaluate ministry-level initiatives and their impact on national development goals.',
    scope: 'Track performance indicators across all central government ministries and departments.',
    features: [
      'Ministry-wise performance tracking',
      'Inter-ministry collaboration tools',
      'Policy impact assessment',
      'Budget utilization monitoring',
    ],
    implementationStatus: {
      planning: true,
      uat: true,
      goLive: false,
    },
  },
  'project-monitoring': {
    id: 'project-monitoring',
    name: 'Project Monitoring',
    fullName: 'Comprehensive Project Monitoring System',
    description: 'A unified platform for comprehensive monitoring of various government projects, ensuring timely execution and effective resource utilization.',
    logo: '/project-monitoring.jpg',
    color: 'green',
    objective: 'Provide end-to-end monitoring of government projects from inception to completion.',
    scope: 'Cover all major government projects across sectors including infrastructure, social welfare, and development.',
    features: [
      'Project lifecycle tracking',
      'Milestone and deadline monitoring',
      'Resource allocation management',
      'Risk assessment and mitigation',
    ],
    implementationStatus: {
      planning: true,
      uat: false,
      goLive: false,
    },
  },
  'performance-monitoring': {
    id: 'performance-monitoring',
    name: 'Performance Monitoring',
    fullName: 'Performance Assessment & Monitoring System',
    description: 'Advanced analytics platform for assessing and improving project performance through data-driven insights and benchmarking.',
    logo: '/project-performance.jpg',
    color: 'blue',
    objective: 'Assess and improve project performance through continuous monitoring and evaluation.',
    scope: 'Analyze performance metrics across all PAIMANA projects and provide actionable insights.',
    features: [
      'KPI tracking and analysis',
      'Performance benchmarking',
      'Predictive analytics',
      'Automated reporting system',
    ],
    implementationStatus: {
      planning: true,
      uat: true,
      goLive: true,
    },
  },
  'tpp': {
    id: 'tpp',
    name: 'TPP',
    fullName: 'Technical & Professional Personnel Management',
    description: 'Comprehensive platform for managing technical and professional personnel data across government organizations.',
    logo: '/project-tpp.jpg',
    color: 'purple',
    objective: 'Streamline management of technical and professional personnel across government sectors.',
    scope: 'Maintain comprehensive database of skilled personnel, their qualifications, and deployment.',
    features: [
      'Personnel database management',
      'Skills and certification tracking',
      'Deployment and assignment system',
      'Training and development records',
    ],
    implementationStatus: {
      planning: true,
      uat: false,
      goLive: false,
    },
  },
};

const ProjectPage = () => {
  const location = useLocation();
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    // Extract project ID from pathname
    const pathname = location.pathname;
    const projectId = pathname.replace('/', '');
    
    if (projectId && projectsData[projectId]) {
      setProject(projectsData[projectId]);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-paimana-dark-blue mb-4">Project Not Found</h1>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <section className="pt-24 py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Logo and Title */}
            <div className="flex items-start gap-6 mb-10 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              {/* Large Blue Circular Icon */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-paimana-blue to-paimana-accent-blue flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
                  <circle cx="12" cy="12" r="9" strokeDasharray="1 1" opacity="0.5" />
                  <line x1="12" y1="3" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="21" y2="12" />
                  <line x1="5.64" y1="5.64" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="18.36" y2="18.36" />
                  <line x1="5.64" y1="18.36" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="18.36" y2="5.64" />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-paimana-dark-blue mb-3">
                  {project.name}
                </h1>
                <p className="text-xl md:text-2xl text-paimana-blue font-medium">
                  {project.fullName}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl max-w-4xl">
                {project.description}
              </p>
            </div>

            {/* About Section */}
            <div className="mb-10 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <h2 className="font-poppins font-semibold text-2xl md:text-3xl text-paimana-dark-blue mb-8">
                About {project.name}
              </h2>

              <div className="space-y-8">
                {/* Objective */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-paimana-light-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Target className="w-7 h-7 text-paimana-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-paimana-dark-blue mb-3 text-xl">Objective</h3>
                    <p className="text-gray-700 text-base leading-relaxed">{project.objective}</p>
                  </div>
                </div>

                {/* Scope */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-paimana-light-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                    <FileText className="w-7 h-7 text-paimana-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-paimana-dark-blue mb-3 text-xl">Scope</h3>
                    <p className="text-gray-700 text-base leading-relaxed">{project.scope}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-paimana-light-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Settings className="w-7 h-7 text-paimana-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-paimana-dark-blue mb-4 text-xl">Key Features</h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle2 className="w-6 h-6 text-paimana-green mt-0.5 flex-shrink-0" />
                          <span className="text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Status */}
            <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-paimana-light-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Settings className="w-7 h-7 text-paimana-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-paimana-dark-blue mb-6 text-xl">Implementation Status</h3>
                  <div className="flex flex-wrap gap-8 md:gap-12">
                    {/* Planning */}
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-md transition-all ${
                        project.implementationStatus.planning 
                          ? 'bg-blue-100 scale-105' 
                          : 'bg-gray-100'
                      }`}>
                        <FileCheck className={`w-10 h-10 ${
                          project.implementationStatus.planning 
                            ? 'text-paimana-blue' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <span className="text-base font-semibold text-gray-700">Planning</span>
                    </div>

                    {/* UAT */}
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-md transition-all ${
                        project.implementationStatus.uat 
                          ? 'bg-orange-100 scale-105' 
                          : 'bg-gray-100'
                      }`}>
                        <Clock className={`w-10 h-10 ${
                          project.implementationStatus.uat 
                            ? 'text-orange-500' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <span className="text-base font-semibold text-gray-700">UAT</span>
                    </div>

                    {/* Go Live */}
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-md transition-all ${
                        project.implementationStatus.goLive 
                          ? 'bg-green-100 scale-105' 
                          : 'bg-gray-100'
                      }`}>
                        <Rocket className={`w-10 h-10 ${
                          project.implementationStatus.goLive 
                            ? 'text-paimana-green' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <span className="text-base font-semibold text-gray-700">Go Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        .reveal-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default ProjectPage;
