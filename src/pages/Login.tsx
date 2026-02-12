import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, ChevronDown, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [project, setProject] = useState('');
  const [role, setRole] = useState('State');
  const [captcha, setCaptcha] = useState('');
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const projects = [
    { id: 'nie-i-state', name: 'NIE-I State' },
    { id: 'nie-i-ministry', name: 'NIE-I Ministry' },
    { id: 'project-monitoring', name: 'Project Monitoring' },
    { id: 'performance-monitoring', name: 'Performance Monitoring' },
    { id: 'tpp', name: 'TPP' },
  ];

  const roles = ['State', 'Ministry', 'Admin', 'Viewer'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login attempted for ${project || 'PAIMANA'} as ${role}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white border-b">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-paimana-blue transition-colors">Home</Link>
            <span>/</span>
            <span className="text-paimana-blue font-medium">Login</span>
          </nav>
        </div>
      </div>

      {/* Login Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-paimana-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Login Card */}
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-paimana-blue to-paimana-accent-blue p-8 text-white text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="12" r="8" strokeDasharray="4 4" />
                    <circle cx="12" cy="12" r="11" strokeDasharray="2 2" opacity="0.5" />
                  </svg>
                </div>
                <h1 className="font-poppins font-bold text-2xl mb-2">
                  Login to PAIMANA
                </h1>
                <p className="text-white/80 text-sm">
                  Access your project dashboard
                </p>
              </div>

              {/* Form */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Project Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="project" className="text-sm font-medium text-gray-700">
                      Select Project
                    </Label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}
                        className="w-full h-11 px-4 border border-gray-200 rounded-lg flex items-center justify-between bg-white hover:border-gray-300 transition-colors text-left"
                      >
                        <span className={project ? 'text-gray-900' : 'text-gray-400'}>
                          {project ? projects.find(p => p.id === project)?.name : 'Select a project'}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isProjectDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isProjectDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-auto">
                          {projects.map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => {
                                setProject(p.id);
                                setIsProjectDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left hover:bg-paimana-light-blue transition-colors ${
                                project === p.id ? 'bg-paimana-light-blue text-paimana-blue' : 'text-gray-700'
                              }`}
                            >
                              {p.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Username */}
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                      Username
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="pl-11 h-11 border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-11 h-11 border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20"
                      />
                    </div>
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Role</Label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                        className="w-full h-11 px-4 border border-gray-200 rounded-lg flex items-center justify-between bg-white hover:border-gray-300 transition-colors"
                      >
                        <span className="text-gray-700">{role}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isRoleDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isRoleDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                          {roles.map((r) => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => {
                                setRole(r);
                                setIsRoleDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-2 text-left hover:bg-paimana-light-blue transition-colors ${
                                role === r ? 'bg-paimana-light-blue text-paimana-blue' : 'text-gray-700'
                              }`}
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Captcha */}
                  <div className="space-y-2">
                    <Label htmlFor="captcha" className="text-sm font-medium text-gray-700">
                      Verify: 9 + 1 =
                    </Label>
                    <Input
                      id="captcha"
                      type="text"
                      placeholder="Enter answer"
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      className="h-11 border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary py-3.5"
                  >
                    Login
                  </button>

                  {/* Forgot Password */}
                  <div className="text-center">
                    <a href="#" className="text-sm text-paimana-blue hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </form>

                {/* Helpdesk */}
                <div className="mt-6 pt-6 border-t text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm text-paimana-blue hover:underline"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Need help? Contact Helpdesk Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
