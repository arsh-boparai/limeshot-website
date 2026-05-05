import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Smile, Loader2, ArrowRight } from 'lucide-react';
import GrinlyLayout from '../../components/grinly/GrinlyLayout';
import { useGrinlyAuth } from '../../hooks/grinly/useGrinlyAuth';

const G = '#06B6D4';

const AuthPage = () => {
  const navigate = useNavigate();
  const { signIn, session } = useGrinlyAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (session) {
    navigate('/grinly/dashboard', { replace: true });
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: authError } = await signIn(email, password);

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      navigate('/grinly/dashboard', { replace: true });
    }
  };

  return (
    <GrinlyLayout>
      <Helmet>
        <title>Clinic Login — Grinly</title>
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: `${G}15`, border: `1px solid ${G}30` }}>
              <Smile className="w-7 h-7" style={{ color: G }} />
            </div>
            <h1 className="text-2xl font-heading font-bold text-white mb-1">Clinic Dashboard</h1>
            <p className="text-gray-500 text-sm">Sign in to manage your bookings.</p>
          </div>

          <div className="card-dark p-8" style={{ borderTop: `2px solid ${G}40` }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="clinic@example.com"
                  className="w-full px-4 py-3 bg-carbon-900 border border-white/[0.08] rounded-lg text-gray-100 text-sm placeholder-gray-600 focus:outline-none transition-all"
                  onFocus={(e) => { e.target.style.borderColor = `${G}60`; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-carbon-900 border border-white/[0.08] rounded-lg text-gray-100 text-sm placeholder-gray-600 focus:outline-none transition-all"
                  onFocus={(e) => { e.target.style.borderColor = `${G}60`; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 font-semibold py-3 rounded-lg text-carbon-950 transition-all disabled:opacity-60"
                style={{ background: G }}>
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Signing in…</>
                ) : (
                  <>Sign In <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>

          <p className="text-center text-xs text-gray-600 mt-6">
            Not onboarded yet?{' '}
            <a href="/contact" className="hover:text-gray-400 transition-colors" style={{ color: G }}>
              Contact us
            </a>{' '}
            to become a partner clinic.
          </p>
        </div>
      </div>
    </GrinlyLayout>
  );
};

export default AuthPage;
