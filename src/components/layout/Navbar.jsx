import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsMenu = [
    {
      title: 'Web Development',
      href: '#web-development',
      description: 'Custom web applications and enterprise solutions'
    },
    {
      title: 'Mobile Development',
      href: '#mobile-development',
      description: 'Native and cross-platform mobile apps'
    },
    {
      title: 'Cloud Solutions',
      href: '#cloud-solutions',
      description: 'AWS, Azure, and GCP cloud infrastructure'
    },
    {
      title: 'AI & Machine Learning',
      href: '#ai-ml',
      description: 'Intelligent automation and data analytics'
    }
  ];

  const navLinks = [
    { 
      label: 'Solutions',
      dropdown: solutionsMenu
    },
    { href: '#expertise', label: 'Expertise' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Semi-transparent overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center relative z-50">
              <Logo className="h-8" />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-primary-500 
                             transition-colors duration-200 py-2"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                  
                  {/* Solutions Dropdown */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 w-72 py-3 bg-white rounded-lg shadow-xl
                                 transform translate-y-2 z-50">
                      {item.dropdown.map((solution, idx) => (
                        <a
                          key={idx}
                          href={solution.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="block text-sm font-medium text-gray-900">
                            {solution.title}
                          </span>
                          <span className="block text-sm text-gray-500 mt-0.5">
                            {solution.description}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <a 
                href="#contact" 
                className="px-4 py-2 bg-primary-500 text-white rounded-lg
                         hover:bg-primary-600 transition-colors duration-200"
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden relative z-50 p-2 text-gray-700" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile menu */}
          <div 
            className={`fixed top-20 left-0 w-full bg-white border-t border-gray-100 shadow-lg md:hidden transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            } z-40`}
          >
            <div className="py-4">
              {navLinks.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        className="w-full text-left px-4 py-2 flex items-center justify-between text-gray-700"
                      >
                        {item.label}
                        <ChevronDown className={`transform transition-transform duration-200
                          ${activeDropdown === index ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === index && (
                        <div className="bg-gray-50 py-2">
                          {item.dropdown.map((solution, idx) => (
                            <a
                              key={idx}
                              href={solution.href}
                              className="block px-6 py-2 text-gray-600 hover:text-primary-500"
                            >
                              {solution.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:text-primary-500"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <a 
                  href="#contact"
                  className="block w-full text-center px-4 py-2 bg-primary-500 text-white rounded-lg
                           hover:bg-primary-600 transition-colors duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;