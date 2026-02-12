import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, BookOpen, Video, ExternalLink } from 'lucide-react';

const UserManuals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const manuals = [
    {
      project: 'NIE-I State',
      documents: [
        { title: 'User Guide - NIE-I State', type: 'PDF', size: '2.4 MB' },
        { title: 'Data Entry Manual', type: 'PDF', size: '1.8 MB' },
        { title: 'Report Generation Guide', type: 'PDF', size: '1.2 MB' },
        { title: 'Quick Start Video', type: 'Video', size: '45 MB' },
      ],
    },
    {
      project: 'NIE-I Ministry',
      documents: [
        { title: 'User Guide - NIE-I Ministry', type: 'PDF', size: '2.1 MB' },
        { title: 'Ministry Dashboard Manual', type: 'PDF', size: '1.5 MB' },
        { title: 'Performance Tracking Guide', type: 'PDF', size: '1.3 MB' },
      ],
    },
    {
      project: 'Project Monitoring',
      documents: [
        { title: 'Project Monitoring User Manual', type: 'PDF', size: '3.2 MB' },
        { title: 'Milestone Tracking Guide', type: 'PDF', size: '1.9 MB' },
        { title: 'Risk Management Manual', type: 'PDF', size: '2.1 MB' },
        { title: 'Tutorial Videos', type: 'Video', size: '120 MB' },
      ],
    },
    {
      project: 'Performance Monitoring',
      documents: [
        { title: 'Performance Monitoring Guide', type: 'PDF', size: '2.8 MB' },
        { title: 'KPI Setup Manual', type: 'PDF', size: '1.6 MB' },
        { title: 'Analytics Dashboard Guide', type: 'PDF', size: '2.3 MB' },
      ],
    },
    {
      project: 'TPP',
      documents: [
        { title: 'TPP User Manual', type: 'PDF', size: '2.5 MB' },
        { title: 'Personnel Management Guide', type: 'PDF', size: '1.7 MB' },
        { title: 'Training Records Manual', type: 'PDF', size: '1.4 MB' },
      ],
    },
  ];

  const getIcon = (type: string) => {
    if (type === 'PDF') return FileText;
    if (type === 'Video') return Video;
    return BookOpen;
  };

  const getColorClass = (type: string) => {
    if (type === 'PDF') return 'text-red-500 bg-red-50';
    if (type === 'Video') return 'text-purple-500 bg-purple-50';
    return 'text-blue-500 bg-blue-50';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white border-b">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-paimana-blue transition-colors">Home</Link>
            <span>/</span>
            <span className="text-paimana-blue font-medium">User Manuals</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-paimana-blue to-paimana-accent-blue">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-poppins font-bold text-3xl text-white mb-2">
                User Manuals
              </h1>
              <p className="text-white/80">
                Download guides, manuals, and documentation for PAIMANA projects
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

      {/* Manuals Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {manuals.map((manual) => (
              <div key={manual.project} className="bg-white rounded-2xl shadow-card p-6">
                <h2 className="font-poppins font-semibold text-xl text-paimana-dark-blue mb-4">
                  {manual.project}
                </h2>
                <div className="space-y-3">
                  {manual.documents.map((doc, index) => {
                    const Icon = getIcon(doc.type);
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-paimana-light-blue transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${getColorClass(doc.type)} flex items-center justify-center`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-700 text-sm">{doc.title}</p>
                            <p className="text-xs text-gray-400">{doc.type} • {doc.size}</p>
                          </div>
                        </div>
                        <button className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                          <Download className="w-4 h-4 text-paimana-blue" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="font-poppins font-semibold text-2xl text-paimana-dark-blue mb-8">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-paimana-light-blue rounded-2xl p-6">
              <div className="w-12 h-12 rounded-lg bg-paimana-blue/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-paimana-blue" />
              </div>
              <h3 className="font-semibold text-paimana-dark-blue mb-2">FAQs</h3>
              <p className="text-sm text-gray-600 mb-4">
                Find answers to commonly asked questions about PAIMANA platforms.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm text-paimana-blue hover:underline">
                View FAQs
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-paimana-light-blue rounded-2xl p-6">
              <div className="w-12 h-12 rounded-lg bg-paimana-blue/10 flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-paimana-blue" />
              </div>
              <h3 className="font-semibold text-paimana-dark-blue mb-2">Video Tutorials</h3>
              <p className="text-sm text-gray-600 mb-4">
                Watch step-by-step video tutorials for all PAIMANA projects.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm text-paimana-blue hover:underline">
                Watch Videos
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-paimana-light-blue rounded-2xl p-6">
              <div className="w-12 h-12 rounded-lg bg-paimana-blue/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-paimana-blue" />
              </div>
              <h3 className="font-semibold text-paimana-dark-blue mb-2">API Documentation</h3>
              <p className="text-sm text-gray-600 mb-4">
                Technical documentation for developers and system integrators.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm text-paimana-blue hover:underline">
                View Docs
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-paimana-blue to-paimana-accent-blue rounded-2xl p-8 text-center">
            <h2 className="font-poppins font-bold text-2xl text-white mb-4">
              Need Additional Help?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Our support team is available to assist you with any questions or issues.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-paimana-blue font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Support
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserManuals;
