import Logo from '../ui/Logo-white';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../../utils/constant';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const services = [
    'React & React Native Dev',
    'AI & Agent Integration',
    'Web & Mobile Development',
  ];

  return (
    <footer className="bg-carbon-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <Logo className="h-9" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Senior technical consultant specialising in React, React Native,
              and AI integration. I build production-grade applications that ship
              on time and scale with your business.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-carbon-800 text-gray-400 hover:text-lime-400
                           hover:bg-carbon-700 border border-white/[0.06] transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-carbon-800 text-gray-400 hover:text-lime-400
                           hover:bg-carbon-700 border border-white/[0.06] transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links + Services */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">Navigate</h3>
              <ul className="space-y-3">
                {quickLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="footer-link text-sm">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s}>
                    <Link to="/services" className="footer-link text-sm">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-lime-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <span className="text-sm">{COMPANY.location}</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
              </span>
              <span className="text-xs text-gray-400">{COMPANY.availability}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-12 pt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
