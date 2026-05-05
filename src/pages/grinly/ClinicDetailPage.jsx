import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Globe, Stethoscope, Calendar, Clock, Loader2, ChevronLeft } from 'lucide-react';
import GrinlyLayout from '../../components/grinly/GrinlyLayout';
import { useClinic } from '../../hooks/grinly/useClinic';
import { useTimeSlots } from '../../hooks/grinly/useTimeSlots';

const G = '#06B6D4';

const formatSlot = (isoString) => {
  const d = new Date(isoString);
  const date = d.toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric' });
  const time = d.toLocaleTimeString('en-CA', { hour: 'numeric', minute: '2-digit', hour12: true });
  return { date, time };
};

const groupByDate = (slots) => {
  const groups = {};
  for (const slot of slots) {
    const { date } = formatSlot(slot.starts_at);
    if (!groups[date]) groups[date] = [];
    groups[date].push(slot);
  }
  return groups;
};

const ClinicDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedSlotId, setSelectedSlotId] = useState(null);

  const { data: clinic, isLoading: clinicLoading, isError: clinicError } = useClinic(slug);
  const { data: slots, isLoading: slotsLoading } = useTimeSlots(clinic?.id);

  const handleBook = () => {
    if (!selectedSlotId) return;
    const slot = slots.find((s) => s.id === selectedSlotId);
    navigate(`/grinly/book/${slug}`, { state: { slot, clinic } });
  };

  if (clinicLoading) {
    return (
      <GrinlyLayout>
        <div className="flex items-center justify-center py-32 gap-3 text-gray-500">
          <Loader2 className="w-5 h-5 animate-spin" style={{ color: G }} />
          <span className="text-sm">Loading clinic…</span>
        </div>
      </GrinlyLayout>
    );
  }

  if (clinicError || !clinic) {
    return (
      <GrinlyLayout>
        <div className="py-32 text-center">
          <p className="text-gray-400 mb-4">Clinic not found.</p>
          <button onClick={() => navigate('/grinly/clinics')} className="text-sm" style={{ color: G }}>
            ← Back to clinics
          </button>
        </div>
      </GrinlyLayout>
    );
  }

  const grouped = slots ? groupByDate(slots) : {};
  const selectedSlot = slots?.find((s) => s.id === selectedSlotId);

  return (
    <GrinlyLayout>
      <Helmet>
        <title>{clinic.name} — Book on Grinly</title>
        <meta name="description" content={`Book a dental appointment at ${clinic.name} in ${clinic.city}. Get a $25 gift card when you show up.`} />
      </Helmet>

      {/* Back */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">
        <button
          onClick={() => navigate('/grinly/clinics')}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-6"
        >
          <ChevronLeft className="w-4 h-4" /> All clinics
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left: Clinic info */}
          <div className="lg:col-span-1">
            <div className="card-dark p-8 sticky top-20" style={{ borderTop: `3px solid ${G}` }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${G}15`, border: `1px solid ${G}30` }}>
                <Stethoscope className="w-8 h-8" style={{ color: G }} />
              </div>

              <h1 className="text-2xl font-heading font-bold text-white mb-1">{clinic.name}</h1>
              <p className="text-sm font-mono mb-5" style={{ color: G }}>Grinly Partner Clinic</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: G }} />
                  <span>{clinic.address}, {clinic.city}</span>
                </div>
                {clinic.phone && (
                  <div className="flex items-center gap-2.5 text-sm text-gray-400">
                    <Phone className="w-4 h-4 flex-shrink-0" style={{ color: G }} />
                    <span>{clinic.phone}</span>
                  </div>
                )}
                {clinic.website && (
                  <div className="flex items-center gap-2.5 text-sm text-gray-400">
                    <Globe className="w-4 h-4 flex-shrink-0" style={{ color: G }} />
                    <a href={clinic.website} target="_blank" rel="noopener noreferrer"
                      className="hover:text-white transition-colors truncate">{clinic.website}</a>
                  </div>
                )}
              </div>

              {clinic.description && (
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{clinic.description}</p>
              )}

              {clinic.specialties?.length > 0 && (
                <div>
                  <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">Specialties</p>
                  <div className="flex flex-wrap gap-1.5">
                    {clinic.specialties.map((s) => (
                      <span key={s} className="tech-pill text-xs">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 p-4 rounded-lg" style={{ background: `${G}10`, border: `1px solid ${G}20` }}>
                <p className="text-xs font-mono" style={{ color: G }}>🎁 Show up = $25 gift card</p>
                <p className="text-xs text-gray-500 mt-1">Gift card delivered within 24h of your appointment.</p>
              </div>
            </div>
          </div>

          {/* Right: Slot picker */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: G }} />
              Available Appointments
            </h2>

            {slotsLoading && (
              <div className="flex items-center gap-3 text-gray-500 py-10">
                <Loader2 className="w-4 h-4 animate-spin" style={{ color: G }} />
                <span className="text-sm">Loading availability…</span>
              </div>
            )}

            {!slotsLoading && Object.keys(grouped).length === 0 && (
              <div className="card-dark p-10 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 opacity-20" style={{ color: G }} />
                <p className="text-gray-400 font-heading font-semibold mb-1">No slots available</p>
                <p className="text-gray-600 text-sm">This clinic hasn't posted availability yet. Check back soon.</p>
              </div>
            )}

            {!slotsLoading && Object.entries(grouped).map(([date, dateSlots]) => (
              <div key={date} className="mb-8">
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">{date}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {dateSlots.map((slot) => {
                    const { time } = formatSlot(slot.starts_at);
                    const isSelected = selectedSlotId === slot.id;
                    return (
                      <button
                        key={slot.id}
                        onClick={() => setSelectedSlotId(isSelected ? null : slot.id)}
                        className="p-3 rounded-lg border text-sm font-mono transition-all duration-200"
                        style={{
                          background: isSelected ? `${G}20` : 'rgba(255,255,255,0.03)',
                          borderColor: isSelected ? G : 'rgba(255,255,255,0.08)',
                          color: isSelected ? G : '#9ca3af',
                          boxShadow: isSelected ? `0 0 12px ${G}20` : 'none',
                        }}
                      >
                        {time}
                        {slot.duration_minutes && (
                          <span className="block text-xs opacity-60 mt-0.5">{slot.duration_minutes} min</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Book CTA */}
            {selectedSlot && (
              <div className="sticky bottom-4 mt-4">
                <div className="card-dark p-4 flex items-center justify-between gap-4"
                  style={{ borderColor: `${G}40`, boxShadow: `0 0 30px rgba(0,0,0,0.6), 0 0 15px ${G}15` }}>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {formatSlot(selectedSlot.starts_at).date} at {formatSlot(selectedSlot.starts_at).time}
                    </p>
                    <p className="text-xs text-gray-500">{clinic.name}</p>
                  </div>
                  <button
                    onClick={handleBook}
                    className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-lg text-carbon-950 transition-all flex-shrink-0"
                    style={{ background: G }}>
                    Book this slot
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </GrinlyLayout>
  );
};

export default ClinicDetailPage;
