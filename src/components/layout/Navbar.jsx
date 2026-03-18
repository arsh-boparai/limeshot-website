import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo-white';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-carbon-900/95 backdrop-blur-md border-b border-white/[0.06] shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <Logo className="h-8 md:h-10" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link text-sm font-medium pb-0.5 ${isActive(to) ? 'nav-link-active' : ''}`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link to="/contact" className="btn-lime text-sm">
                Let's Talk
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-carbon-900 border-l border-white/[0.06] z-50 md:hidden
                    transform transition-transform duration-300 ease-in-out ${
                      isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/[0.06]">
          <span className="text-sm font-mono text-lime-500">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-6">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-lg font-medium transition-colors duration-200 ${
                isActive(to) ? 'text-lime-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/[0.06]">
            <Link to="/contact" className="btn-lime w-full justify-center text-sm">
              Let's Talk
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
