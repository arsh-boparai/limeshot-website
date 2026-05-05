import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, MapPin, Phone, ArrowRight, Stethoscope, Loader2 } from 'lucide-react';
import GrinlyLayout from '../../components/grinly/GrinlyLayout';
import { useClinics } from '../../hooks/grinly/useClinics';

const G = '#06B6D4';

const ClinicCard = ({ clinic }) => (
  <div className="card-dark p-6 flex flex-col h-full" style={{ borderTop: `2px solid ${G}30` }}>
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${G}15`, border: `1px solid ${G}25` }}>
        <Stethoscope className="w-6 h-6" style={{ color: G }} />
      </div>
      <div className="min-w-0">
        <h3 className="text-base font-heading font-semibold text-white truncate">{clinic.name}</h3>
        <div className="flex items-center gap-1.5 mt-0.5 text-xs text-gray-500">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{clinic.address}, {clinic.city}</span>
        </div>
      </div>
    </div>

    {clinic.description && (
      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{clinic.description}</p>
    )}

    {clinic.specialties?.length > 0 && (
      <div className="flex flex-wrap gap-1.5 mb-4">
        {clinic.specialties.slice(0, 3).map((s) => (
          <span key={s} className="tech-pill text-xs">{s}</span>
        ))}
        {clinic.specialties.length > 3 && (
          <span className="tech-pill text-xs">+{clinic.specialties.length - 3}</span>
        )}
      </div>
    )}

    {clinic.phone && (
      <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
        <Phone className="w-3 h-3" />
        <span>{clinic.phone}</span>
      </div>
    )}

    <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-center justify-between">
      <span className="text-xs font-mono px-2 py-1 rounded-full"
        style={{ background: `${G}10`, color: G }}>
        $25 gift card on visit
      </span>
      <Link to={`/grinly/clinics/${clinic.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
        style={{ color: G }}>
        Book <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  </div>
);

const ClinicsPage = () => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
    clearTimeout(window._grinlySearchTimer);
    window._grinlySearchTimer = setTimeout(() => setDebouncedSearch(val), 300);
  };

  const { data: clinics, isLoading, isError } = useClinics(debouncedSearch);

  return (
    <GrinlyLayout>
      <Helmet>
        <title>Find a Dentist — Grinly</title>
        <meta name="description" content="Browse Grinly partner clinics in Toronto. Book in 60 seconds and earn a $25 gift card when you show up." />
      </Helmet>

      {/* Header */}
      <section className="pt-16 pb-10 bg-carbon-900 bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <span className="inline-block text-xs font-mono font-medium tracking-widest uppercase mb-3" style={{ color: G }}>
              Partner Clinics
            </span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Find a dentist near you
            </h1>
            <p className="text-gray-400 mt-2">All bookings earn a $25 gift card on arrival.</p>
          </div>

          <div className="relative max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search by clinic name…"
              className="w-full pl-10 pr-4 py-3 bg-carbon-800 border border-white/[0.08] rounded-xl text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:ring-1 transition-all"
              style={{ '--tw-ring-color': G }}
              onFocus={(e) => e.target.style.borderColor = `${G}60`}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>
        </div>
      </section>

      {/* Clinic grid */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {isLoading && (
            <div className="flex items-center justify-center py-24 gap-3 text-gray-500">
              <Loader2 className="w-5 h-5 animate-spin" style={{ color: G }} />
              <span className="text-sm">Loading clinics…</span>
            </div>
          )}

          {isError && (
            <div className="py-16 text-center">
              <p className="text-gray-500 text-sm">Couldn't load clinics right now. Please try again.</p>
            </div>
          )}

          {!isLoading && !isError && clinics?.length === 0 && (
            <div className="py-24 text-center">
              <Stethoscope className="w-10 h-10 mx-auto mb-4 opacity-20" style={{ color: G }} />
              <p className="text-gray-400 font-heading font-semibold mb-1">No clinics found</p>
              <p className="text-gray-600 text-sm">
                {debouncedSearch ? 'Try a different search.' : 'We\'re onboarding our first clinics — check back soon.'}
              </p>
            </div>
          )}

          {!isLoading && !isError && clinics?.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinics.map((clinic) => (
                <ClinicCard key={clinic.id} clinic={clinic} />
              ))}
            </div>
          )}
        </div>
      </section>
    </GrinlyLayout>
  );
};

export default ClinicsPage;
