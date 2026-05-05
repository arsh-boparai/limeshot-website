import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CheckCircle, Loader2, Smile, Calendar, Clock, ChevronLeft } from 'lucide-react';
import GrinlyLayout from '../../components/grinly/GrinlyLayout';
import { useCreateBooking } from '../../hooks/grinly/useCreateBooking';

const G = '#06B6D4';

const formatSlot = (isoString) => {
  const d = new Date(isoString);
  return d.toLocaleDateString('en-CA', {
    weekday: 'long', month: 'long', day: 'numeric',
  }) + ' at ' + d.toLocaleTimeString('en-CA', { hour: 'numeric', minute: '2-digit', hour12: true });
};

const Field = ({ label, type = 'text', value, onChange, required, placeholder }) => (
  <div>
    <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-carbon-800 border border-white/[0.08] rounded-lg text-gray-100 text-sm placeholder-gray-600 focus:outline-none transition-all"
      onFocus={(e) => { e.target.style.borderColor = `${G}60`; }}
      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
    />
  </div>
);

const BookingPage = () => {
  const { slug } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', notes: '' });
  const [confirmed, setConfirmed] = useState(false);

  const { mutate: createBooking, isPending, isError, error } = useCreateBooking();

  const slot = state?.slot;
  const clinic = state?.clinic;

  if (!slot || !clinic) {
    return (
      <GrinlyLayout>
        <div className="py-32 text-center">
          <p className="text-gray-400 mb-4">No slot selected.</p>
          <button onClick={() => navigate(`/grinly/clinics/${slug}`)} className="text-sm" style={{ color: G }}>
            ← Pick a time slot
          </button>
        </div>
      </GrinlyLayout>
    );
  }

  const set = (field) => (val) => setForm((f) => ({ ...f, [field]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    createBooking({
      clinicId: clinic.id,
      slotId: slot.id,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      notes: form.notes,
    }, {
      onSuccess: () => setConfirmed(true),
    });
  };

  if (confirmed) {
    return (
      <GrinlyLayout>
        <Helmet><title>Booking Confirmed — Grinly</title></Helmet>
        <div className="max-w-lg mx-auto px-4 sm:px-6 py-24 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: `${G}20`, border: `2px solid ${G}40` }}>
            <CheckCircle className="w-10 h-10" style={{ color: G }} />
          </div>
          <h1 className="text-3xl font-heading font-bold text-white mb-3">You're booked!</h1>
          <p className="text-gray-400 mb-2">
            <span className="text-white font-semibold">{clinic.name}</span>
          </p>
          <p className="text-gray-500 text-sm mb-8">{formatSlot(slot.starts_at)}</p>

          <div className="card-dark p-6 mb-8 text-left" style={{ borderLeft: `3px solid ${G}` }}>
            <p className="text-sm font-mono mb-2" style={{ color: G }}>What happens next</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span style={{ color: G }}>1.</span>
                We'll send a confirmation to <span className="text-white ml-1">{form.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: G }}>2.</span>
                Show up to your appointment on time.
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: G }}>3.</span>
                Your $25 gift card arrives within 24 hours of your visit.
              </li>
            </ul>
          </div>

          <button
            onClick={() => navigate('/grinly/clinics')}
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-carbon-950"
            style={{ background: G }}>
            <Smile className="w-4 h-4" />
            Find another dentist
          </button>
        </div>
      </GrinlyLayout>
    );
  }

  return (
    <GrinlyLayout>
      <Helmet>
        <title>Book at {clinic.name} — Grinly</title>
        <meta name="description" content={`Confirm your dental appointment at ${clinic.name}.`} />
      </Helmet>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        {/* Appointment summary */}
        <div className="card-dark p-6 mb-8 flex items-start gap-4"
          style={{ borderLeft: `3px solid ${G}` }}>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: G }}>Your appointment</p>
            <p className="text-white font-heading font-semibold">{clinic.name}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <span className="flex items-center gap-1.5 text-sm text-gray-400">
                <Calendar className="w-3.5 h-3.5" style={{ color: G }} />
                {formatSlot(slot.starts_at)}
              </span>
              {slot.duration_minutes && (
                <span className="flex items-center gap-1.5 text-sm text-gray-400">
                  <Clock className="w-3.5 h-3.5" style={{ color: G }} />
                  {slot.duration_minutes} min
                </span>
              )}
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-heading font-bold text-white mb-2">Confirm your booking</h1>
        <p className="text-gray-400 text-sm mb-8">
          Enter your details below. No account needed. Show up and earn your $25 gift card.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="First Name" value={form.firstName} onChange={set('firstName')} required placeholder="Jane" />
            <Field label="Last Name" value={form.lastName} onChange={set('lastName')} required placeholder="Smith" />
          </div>
          <Field label="Email" type="email" value={form.email} onChange={set('email')} required placeholder="jane@email.com" />
          <Field label="Phone" type="tel" value={form.phone} onChange={set('phone')} required placeholder="416-555-0100" />

          <div>
            <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5">
              Notes for the clinic <span className="normal-case">(optional)</span>
            </label>
            <textarea
              value={form.notes}
              onChange={(e) => set('notes')(e.target.value)}
              placeholder="Any concerns, allergies, or first-visit info…"
              rows={3}
              className="w-full px-4 py-3 bg-carbon-800 border border-white/[0.08] rounded-lg text-gray-100 text-sm placeholder-gray-600 focus:outline-none resize-none transition-all"
              onFocus={(e) => { e.target.style.borderColor = `${G}60`; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            />
          </div>

          {isError && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error?.message || 'Something went wrong. Please try again.'}
            </div>
          )}

          <div className="p-4 rounded-lg text-sm text-gray-500"
            style={{ background: `${G}08`, border: `1px solid ${G}15` }}>
            By booking you agree to Grinly's terms. Your data is handled per PIPEDA.
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full inline-flex items-center justify-center gap-2 font-semibold py-4 rounded-xl text-carbon-950 transition-all disabled:opacity-60"
            style={{ background: G }}>
            {isPending ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Confirming…</>
            ) : (
              <><CheckCircle className="w-4 h-4" /> Confirm Appointment</>
            )}
          </button>
        </form>
      </div>
    </GrinlyLayout>
  );
};

export default BookingPage;
