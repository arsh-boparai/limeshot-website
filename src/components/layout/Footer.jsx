import { useEffect, useRef } from 'react';
import Logo from '../ui/Logo';
import { MailIcon, Phone, MapPin, Github, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const COMPANY = {
    name: 'Limeshot Digital',
    email: 'contact@limeshotdigital.com',
    phone: '+1 (647) 967-1672',
    social: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/limeshotdigital', icon: Linkedin },
      { platform: 'GitHub', url: 'https://github.com/limeshotdigital', icon: Github },
      { platform: 'Facebook', url: 'https://facebook.com/limeshotdigital', icon: Facebook }
    ]
  };

  const services = [
    'Software Development',
    'Cloud Solutions',
    'Mobile App Development',
    'AI & Machine Learning',
  ];

  const resources = [
    'Documentation',
    'API Reference',
    'Tech Stack',
    'System Architecture',
    'Case Studies',
    'Client Portal'
  ];

  return (
    <footer ref={footerRef} className="bg-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
          <Link to="/" className="inline-block">
            <Logo className="h-8 mb-6" variant="light" />
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Enterprise-grade software development solutions that transform businesses. 
              Specializing in custom development, cloud architecture, and AI integration 
              with a focus on scalability and security.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {COMPANY.social.map(({ platform, url, icon: Icon }) => (
                <a
                  key={platform}
                  href={url}
                  className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-primary-400 
                           hover:bg-gray-700 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${COMPANY.email}`} 
                   className="flex items-start text-gray-400 hover:text-primary-400 transition-colors group">
                  <MailIcon className="w-5 h-5 mr-2 mt-1 group-hover:text-primary-400" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone}`} 
                   className="flex items-start text-gray-400 hover:text-primary-400 transition-colors group">
                  <Phone className="w-5 h-5 mr-2 mt-1 group-hover:text-primary-400" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-gray-500" />
                <span>
                  403 Delrex Blvd<br />
                  Georgetown, ON L7G 4H8
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Gradient Border */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="pt-8 grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-start md:justify-end gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="/security" className="text-gray-400 hover:text-primary-400 transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;