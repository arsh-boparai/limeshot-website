import { Link, useLocation } from 'react-router-dom';
import { Smile, LayoutDashboard, Stethoscope, ArrowLeft } from 'lucide-react';
import { useGrinlyAuth } from '../../hooks/grinly/useGrinlyAuth';

const G = '#06B6D4';

const GrinlyLayout = ({ children }) => {
  const { session, signOut } = useGrinlyAuth();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/grinly/dashboard');

  return (
    <div className="min-h-screen bg-carbon-900 flex flex-col">
      <header className="border-b border-white/[0.06] bg-carbon-800/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/products/grinly" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${G}20`, border: `1px solid ${G}40` }}>
              <Smile className="w-4 h-4" style={{ color: G }} />
            </div>
            <span className="font-heading font-bold text-white text-sm">Grinly</span>
            <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: `${G}15`, color: G }}>beta</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              to="/grinly/clinics"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Stethoscope className="w-3.5 h-3.5" />
              Find a Dentist
            </Link>

            {session ? (
              <>
                <Link
                  to="/grinly/dashboard"
                  className="flex items-center gap-1.5 text-sm transition-colors"
                  style={{ color: isDashboard ? G : '#9ca3af' }}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  Dashboard
                </Link>
                <button
                  onClick={signOut}
                  className="text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                to="/grinly/auth"
                className="text-xs font-mono px-3 py-1.5 rounded-lg border transition-all"
                style={{ borderColor: `${G}40`, color: G }}
              >
                Clinic Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="border-t border-white/[0.06] py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© 2026 Grinly · A Limeshot Digital product</p>
          <Link to="/" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-400 transition-colors">
            <ArrowLeft className="w-3 h-3" />
            limeshotdigital.com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default GrinlyLayout;
