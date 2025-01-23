import { useEffect, useRef } from 'react';
import Logo from '../ui/Logo';
import { COMPANY } from '../../utils/constant';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <footer ref={footerRef} className="footer-section">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient"></div>

      {/* Main Footer Content */}
      <div className="footer-content pt-16 pb-8">
        <div className="container-padding">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <Logo className="h-8 mb-6 transform hover:scale-105 transition-transform duration-300" />
              <p className="text-gray-400 mb-8 leading-relaxed">
                Transforming businesses through innovative digital solutions since 2019. 
                We specialize in web development, mobile apps, and AI-driven services.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                {Object.entries(COMPANY.social).map(([platform, url]) => {
                  const Icon = socialIcons[platform.toLowerCase()];
                  return (
                    <a
                      key={platform}
                      href={url}
                      className="bg-gray-800 p-2 rounded-lg social-link hover:bg-primary-500/20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="relative">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="space-y-4">
                {['About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '')}`} 
                      className="footer-link flex items-center group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="relative">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="space-y-6">
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="footer-contact-item group">
                    <Mail className="w-5 h-5 text-primary-500 mt-1 group-hover:scale-110 transition-transform" />
                    <span>{COMPANY.email}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${COMPANY.phone}`} className="footer-contact-item group">
                    <Phone className="w-5 h-5 text-primary-500 mt-1 group-hover:scale-110 transition-transform" />
                    <span>{COMPANY.phone}</span>
                  </a>
                </li>
                <li className="footer-contact-item">
                  <MapPin className="w-5 h-5 text-primary-500 mt-1" />
                  <span>
                    403 Delrex Blvd<br />
                    Georgetown, ON L7G 4H8
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <p className="text-gray-400 text-center md:text-left">
                &copy; {currentYear} {COMPANY.name}. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-6 text-gray-400">
                <a href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;