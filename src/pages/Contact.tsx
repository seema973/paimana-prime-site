import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['support@paimana.gov.in', 'info@paimana.gov.in'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 11 2306 1234', '+91 11 2306 5678'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Ministry of Statistics & PI',
        'Sardar Patel Bhavan',
        'New Delhi - 110001',
      ],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday', '9:00 AM - 5:30 PM IST'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white border-b">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-paimana-blue transition-colors">Home</Link>
            <span>/</span>
            <span className="text-paimana-blue font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-paimana-blue to-paimana-accent-blue">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-poppins font-bold text-3xl text-white mb-2">
                Contact Us
              </h1>
              <p className="text-white/80">
                Get in touch with our support team for assistance
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

      {/* Contact Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="font-poppins font-semibold text-2xl text-paimana-dark-blue mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-xl text-paimana-dark-blue mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      We will get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-11 border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-11 border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-11 border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Enter subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="h-11 border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border-gray-200 focus:border-paimana-blue focus:ring-paimana-blue/20 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-white rounded-2xl shadow-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-paimana-light-blue flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-paimana-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-paimana-dark-blue mb-2">{info.title}</h3>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-paimana-blue mx-auto mb-4" />
                <p className="text-gray-600">Ministry of Statistics & Programme Implementation</p>
                <p className="text-sm text-gray-400">Sardar Patel Bhavan, New Delhi - 110001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="font-poppins font-bold text-2xl text-white mb-2">
                  24/7 Emergency Support
                </h2>
                <p className="text-white/80">
                  For critical issues requiring immediate assistance, contact our emergency helpline.
                </p>
              </div>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-orange-500 font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 123 456 7890
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
