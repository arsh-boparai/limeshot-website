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
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center justify-between h-14 px-4">
          <Link to="/" className="flex items-center relative z-[60]">
            <Logo className="h-12" />
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[60] p-1.5 -mr-1.5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X size={24} className="text-gray-800" /> : 
              <Menu size={24} className="text-gray-800" />
            }
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" 
               onClick={() => setIsMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-x-0 top-14 bottom-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="h-full overflow-y-auto px-4 py-4">
            {navLinks.map((item, index) => (
              <div key={index} className="mb-4">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      className="w-full text-left py-2 flex items-center justify-between text-gray-800"
                    >
                      <span className="text-lg">{item.label}</span>
                      <ChevronDown className={`transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === index && (
                      <div className="mt-2 space-y-2">
                        {item.dropdown.map((solution, idx) => (
                          <a
                            key={idx}
                            href={solution.href}
                            className="block py-2 pl-4 text-gray-600"
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
                    className="block py-2 text-lg text-gray-800"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-6">
              <a
                href="#contact"
                className="block w-full py-3 text-center bg-primary-500 text-white rounded-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <Logo className="h-16" />
            </Link>
            
            <div className="flex items-center space-x-8">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;