import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide a unified platform for monitoring, assessing, and improving government projects and initiatives across India.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the most trusted and comprehensive analytics platform for evidence-based governance in India.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A dedicated team of professionals working together to deliver excellence in government project management.',
    },
    {
      icon: Award,
      title: 'Our Commitment',
      description: 'Committed to transparency, accuracy, and timely delivery of insights for better decision-making.',
    },
  ];

  const stats = [
    { value: '5', label: 'Active Projects', suffix: '' },
    { value: '28', label: 'States Covered', suffix: '+' },
    { value: '150', label: 'Indicators', suffix: '+' },
    { value: '99.9', label: 'Uptime', suffix: '%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white border-b">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-paimana-blue transition-colors">Home</Link>
            <span>/</span>
            <span className="text-paimana-blue font-medium">About</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-paimana-blue to-paimana-accent-blue">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-poppins font-bold text-3xl text-white mb-2">
                About PAIMANA
              </h1>
              <p className="text-white/80">
                Project Analytics, Monitoring & Assessment Platform
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl text-paimana-dark-blue mb-6">
                Transforming Governance Through Data
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  PAIMANA (Project Analytics, Monitoring & Assessment Platform) is an integrated platform 
                  developed by the Government of India under the Ministry of Statistics & Programme Implementation. 
                  It serves as a central hub for monitoring, assessing, and improving key government initiatives 
                  across the country.
                </p>
                <p>
                  The platform brings together multiple projects under one umbrella, providing stakeholders 
                  with real-time insights, comprehensive analytics, and actionable data to drive evidence-based 
                  decision-making at all levels of governance.
                </p>
                <p>
                  From tracking Sustainable Development Goals at the state level to monitoring ministry-level 
                  projects, PAIMANA ensures transparency, accountability, and efficiency in government operations.
                </p>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-paimana-blue hover:bg-paimana-dark-blue text-white font-medium transition-colors shadow-sm"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-bg.jpg"
                  alt="PAIMANA Platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-paimana-blue/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-paimana-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-paimana-dark-blue">150+</p>
                    <p className="text-xs text-gray-500">Projects Monitored</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-poppins font-bold text-3xl text-paimana-dark-blue mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-card transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-paimana-blue/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-paimana-blue" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-paimana-dark-blue mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-paimana-blue to-paimana-accent-blue">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-poppins font-bold text-3xl text-paimana-dark-blue mb-4">
              Our Projects
            </h2>
            <p className="text-gray-600">
              Comprehensive suite of monitoring and analytics platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'NIE-I State',
                description: 'National Infrastructure Enablement Index - monitoring at state level',
                path: '/nie-i-state',
              },
              {
                name: 'NIE-I Ministry',
                description: 'National Infrastructure Enablement Index - tracking at ministry level',
                path: '/nie-i-ministry',
              },
              {
                name: 'Project Monitoring',
                description: 'Comprehensive monitoring of various government projects',
                path: '/project-monitoring',
              },
              {
                name: 'Performance Monitoring',
                description: 'Assessing and improving project performance',
                path: '/performance-monitoring',
              },
              {
                name: 'TPP',
                description: 'Technical & Professional Personnel Management',
                path: '/tpp',
              },
            ].map((project) => (
              <Link
                key={project.name}
                to={project.path}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <h3 className="font-poppins font-semibold text-lg text-paimana-dark-blue mb-2 group-hover:text-paimana-blue transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-paimana-light-blue rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-paimana-dark-blue mb-4">
              Want to Learn More?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Explore our projects, view the public dashboard, or get in touch with our support team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/public-dashboard" className="btn-primary">
                View Public Dashboard
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
