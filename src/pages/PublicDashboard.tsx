import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Building2, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const PublicDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Total Projects', value: '156', icon: Building2, color: 'blue' },
    { label: 'Active Projects', value: '89', icon: CheckCircle, color: 'green' },
    { label: 'In Progress', value: '45', icon: Clock, color: 'orange' },
    { label: 'Delayed', value: '22', icon: AlertCircle, color: 'red' },
  ];

  const projectStatus = [
    { name: 'NIE-I State', completed: 85, total: 100, status: 'On Track' },
    { name: 'NIE-I Ministry', completed: 72, total: 100, status: 'On Track' },
    { name: 'Project Monitoring', completed: 45, total: 80, status: 'At Risk' },
    { name: 'Performance Monitoring', completed: 92, total: 100, status: 'On Track' },
    { name: 'TPP', completed: 30, total: 60, status: 'Delayed' },
  ];

  const recentUpdates = [
    { date: '2024-01-15', project: 'NIE-I State', update: 'Data collection completed for Q4 2023' },
    { date: '2024-01-12', project: 'NIE-I Ministry', update: 'New dashboard features deployed' },
    { date: '2024-01-10', project: 'Project Monitoring', update: 'UAT phase initiated' },
    { date: '2024-01-08', project: 'Performance Monitoring', update: 'Monthly reports published' },
    { date: '2024-01-05', project: 'TPP', update: 'Personnel database updated' },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'On Track': 'bg-green-100 text-green-700',
      'At Risk': 'bg-orange-100 text-orange-700',
      'Delayed': 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white border-b">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-paimana-blue transition-colors">Home</Link>
            <span>/</span>
            <span className="text-paimana-blue font-medium">Public Dashboard</span>
          </nav>
        </div>
      </div>

      {/* Dashboard Header */}
      <section className="py-8 bg-gradient-to-r from-paimana-blue to-paimana-accent-blue">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-poppins font-bold text-3xl text-white mb-2">
                Public Dashboard
              </h1>
              <p className="text-white/80">
                Real-time insights into PAIMANA projects and initiatives
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

      {/* Stats Grid */}
      <section className="py-8 -mt-4">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <TrendingUp className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-3xl font-bold text-paimana-dark-blue">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Project Status */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-card p-6">
              <h2 className="font-poppins font-semibold text-xl text-paimana-dark-blue mb-6">
                Project Status Overview
              </h2>
              <div className="space-y-6">
                {projectStatus.map((project) => (
                  <div key={project.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700">{project.name}</span>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className="text-sm text-gray-500">
                          {project.completed}/{project.total}
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-paimana-blue to-paimana-accent-blue rounded-full transition-all duration-500"
                        style={{ width: `${(project.completed / project.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Updates */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h2 className="font-poppins font-semibold text-xl text-paimana-dark-blue mb-6">
                Recent Updates
              </h2>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="border-l-2 border-paimana-blue pl-4">
                    <p className="text-xs text-gray-400 mb-1">{update.date}</p>
                    <p className="text-sm font-medium text-paimana-dark-blue">{update.project}</p>
                    <p className="text-sm text-gray-600">{update.update}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Project Distribution */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h2 className="font-poppins font-semibold text-xl text-paimana-dark-blue mb-6">
                Project Distribution by Sector
              </h2>
              <div className="space-y-4">
                {[
                  { sector: 'Infrastructure', count: 45, percentage: 29 },
                  { sector: 'Social Welfare', count: 38, percentage: 24 },
                  { sector: 'Healthcare', count: 32, percentage: 21 },
                  { sector: 'Education', count: 28, percentage: 18 },
                  { sector: 'Others', count: 13, percentage: 8 },
                ].map((item) => (
                  <div key={item.sector} className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-600">{item.sector}</div>
                    <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-paimana-blue to-paimana-accent-blue rounded-lg flex items-center justify-end px-2"
                        style={{ width: `${item.percentage}%` }}
                      >
                        <span className="text-xs text-white font-medium">{item.count}</span>
                      </div>
                    </div>
                    <div className="w-12 text-right text-sm text-gray-500">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Progress */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h2 className="font-poppins font-semibold text-xl text-paimana-dark-blue mb-6">
                Monthly Progress Trend
              </h2>
              <div className="flex items-end justify-between h-48 gap-2">
                {[
                  { month: 'Aug', value: 65 },
                  { month: 'Sep', value: 72 },
                  { month: 'Oct', value: 68 },
                  { month: 'Nov', value: 78 },
                  { month: 'Dec', value: 85 },
                  { month: 'Jan', value: 89 },
                ].map((item) => (
                  <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-paimana-blue to-paimana-accent-blue rounded-t-lg transition-all duration-500"
                      style={{ height: `${item.value}%` }}
                    />
                    <span className="text-xs text-gray-500">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-paimana-blue to-paimana-accent-blue rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
              Want Detailed Analytics?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Login to access comprehensive dashboards, detailed reports, and project management tools.
            </p>
            <Link to="/login" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-paimana-blue font-semibold hover:bg-gray-100 transition-colors">
              Login to Access Full Dashboard
              <TrendingUp className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicDashboard;
