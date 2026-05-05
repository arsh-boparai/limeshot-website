import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Smile, CheckCircle, ArrowRight, DollarSign, Calendar, Shield,
  TrendingUp, Zap, Users, Star, ChevronRight,
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

const G = '#06B6D4';
const GL = '#22D3EE';

const HOW_IT_WORKS_PATIENT = [
  { step: '01', title: 'Find a dentist', body: 'Browse Grinly-partner clinics near you and pick a time that works.' },
  { step: '02', title: 'Book in 60 seconds', body: 'Enter your name, email, and phone. No account required.' },
  { step: '03', title: 'Show up & get paid', body: 'Attend your appointment. We send a $25 gift card within 24 hours.' },
];

const HOW_IT_WORKS_DENTIST = [
  { step: '01', title: 'Join as a partner clinic', body: 'We onboard you in minutes — no software to install, no monthly fees.' },
  { step: '02', title: 'Patients show up', body: 'Grinly sends pre-screened, appointment-ready patients directly to you.' },
  { step: '03', title: 'Pay only on arrival', body: 'Mark the patient as arrived in your dashboard. You\'re billed $199 — only then.' },
];

const COMPARE = [
  { label: 'Google Ads', cost: '$130–$700', perWhat: 'per click', highlight: false },
  { label: 'Grinly', cost: '$199', perWhat: 'per patient who shows up', highlight: true },
];

const DENTIST_BENEFITS = [
  { icon: DollarSign, title: 'Zero risk', body: 'You never pay for no-shows, clicks, or unqualified leads. Only for patients who actually walk in.' },
  { icon: Calendar,   title: 'Fill empty slots', body: 'Turn unused chair time into revenue. The average empty slot costs a clinic $350+.' },
  { icon: Shield,     title: 'No contract', body: 'Pilot pricing for the first 20 patients. Cancel any time — no lock-in.' },
  { icon: Zap,        title: 'Real-time dashboard', body: 'See every booking, confirm arrivals, and track your Grinly revenue in one place.' },
];

const STATS = [
  { value: '$0',   label: 'Upfront cost for dentists' },
  { value: '$199', label: 'Flat fee per show-up (Track B)' },
  { value: '$25',  label: 'Gift card for patients' },
  { value: '60s',  label: 'Time to book an appointment' },
];

const GrinlyPage = () => (
  <>
    <Helmet>
      <title>Grinly — The Dental Marketplace That Pays You to Show Up</title>
      <meta name="description" content="Grinly matches patients with local dentists in Toronto. Book a visit, show up, and earn a $25 gift card. Dentists pay only when patients arrive — not per click." />
      <meta property="og:url" content="https://limeshotdigital.com/products/grinly" />
      <meta property="og:title" content="Grinly — Performance-Based Dental Marketplace" />
      <meta property="og:description" content="Book a dentist. Get paid to show up. Dentists pay only on arrival — no clicks, no contracts." />
      <meta name="keywords" content="dental marketplace Toronto, book dentist online, dentist gift card, dental appointment GTA, find dentist Toronto" />
      <link rel="canonical" href="https://limeshotdigital.com/products/grinly" />
    </Helmet>

    <main>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-24 bg-carbon-900 bg-dot-grid relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${G}18, transparent)`
        }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
              style={{ background: `${G}10`, borderColor: `${G}30` }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: G }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: G }} />
              </span>
              <span className="text-sm font-mono" style={{ color: G }}>Now taking pilot clinics in Greater Toronto Area</span>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${G}15`, border: `1px solid ${G}30` }}>
                <Smile className="w-7 h-7" style={{ color: G }} />
              </div>
              <h1 className="text-6xl md:text-7xl font-heading font-bold text-white">Grinly</h1>
            </div>

            <p className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">
              Book a dentist.{' '}
              <span style={{ color: G }}>Get paid to show up.</span>
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Grinly connects Toronto patients with local dentists — for free.
              Show up to your appointment and receive a $25 gift card within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/grinly/clinics"
                className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-carbon-950 transition-all duration-200 hover:opacity-90"
                style={{ background: G, boxShadow: `0 0 30px ${G}40` }}>
                Find a Dentist Near You
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#for-dentists"
                className="inline-flex items-center gap-2 border border-white/20 text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-white/40 hover:text-white transition-all duration-200">
                I'm a Dentist
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="py-10 bg-carbon-800 border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-heading font-bold mb-1" style={{ color: G }}>{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — Patients ───────────────────────────────────────── */}
      <section className="py-24 bg-carbon-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              label="For Patients"
              title="Three steps to a free dental visit"
              subtitle="No insurance needed. No hidden fees. Just book, show up, and pocket your reward."
            />
          </ScrollReveal>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_PATIENT.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="card-dark p-8 h-full" style={{ borderTop: `2px solid ${G}40` }}>
                  <div className="text-4xl font-heading font-bold mb-4 opacity-20" style={{ color: G }}>{step.step}</div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-10 text-center">
              <Link to="/grinly/clinics"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                style={{ color: G, border: `1px solid ${G}40` }}>
                Browse Available Clinics
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── For Dentists ──────────────────────────────────────────────────── */}
      <section id="for-dentists" className="py-24 bg-carbon-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              label="For Dentists"
              title="Patients who show up. Nothing else."
              subtitle="Google Ads charges you $130–$700 per click whether the patient walks in or not. Grinly charges $199 only when they arrive."
            />
          </ScrollReveal>

          {/* Pricing comparison */}
          <ScrollReveal delay={100}>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-lg">
              {COMPARE.map((c) => (
                <div key={c.label} className="card-dark p-6 text-center"
                  style={c.highlight ? { borderColor: `${G}50`, boxShadow: `0 0 20px ${G}15` } : {}}>
                  <div className="text-xs font-mono text-gray-500 mb-2">{c.label}</div>
                  <div className="text-2xl font-heading font-bold mb-1"
                    style={{ color: c.highlight ? G : '#9ca3af' }}>{c.cost}</div>
                  <div className="text-xs text-gray-500">{c.perWhat}</div>
                  {c.highlight && (
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded-full"
                      style={{ background: `${G}15`, color: G }}>
                      <CheckCircle className="w-3 h-3" /> Performance-based
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* How it works for dentists */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_DENTIST.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="card-dark p-8 h-full" style={{ borderTop: `2px solid ${G}25` }}>
                  <div className="text-4xl font-heading font-bold mb-4 opacity-20" style={{ color: G }}>{step.step}</div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Benefits grid */}
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {DENTIST_BENEFITS.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 80}>
                <div className="card-dark p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${G}15`, border: `1px solid ${G}25` }}>
                    <b.icon className="w-5 h-5" style={{ color: G }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-white mb-1">{b.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{b.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Pilot offer callout */}
          <ScrollReveal delay={200}>
            <div className="mt-12 card-dark p-8 border-l-4" style={{ borderLeftColor: G }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: G }}>Pilot Offer</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    First 20 patients at $99 flat — guaranteed.
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Founding clinics lock in $99/patient for their first 20 bookings.
                    No contract, cancel any time. We're signing 3–5 GTA clinics right now.
                  </p>
                </div>
                <Link to="/contact"
                  className="flex-shrink-0 inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-carbon-950 transition-all"
                  style={{ background: G }}>
                  Get Onboarded
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Social proof / trust ──────────────────────────────────────────── */}
      <section className="py-16 bg-carbon-900 border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-mono text-gray-600 mb-8 uppercase tracking-widest">Why patients trust Grinly</p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { icon: Shield, text: 'PIPEDA-compliant patient data handling' },
                { icon: Star,   text: 'No hidden upsells — the gift card is guaranteed' },
                { icon: Users,  text: 'Only partner with verified, licensed GTA clinics' },
              ].map((t) => (
                <div key={t.text} className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${G}10`, border: `1px solid ${G}20` }}>
                    <t.icon className="w-5 h-5" style={{ color: G }} />
                  </div>
                  <p className="text-gray-400 text-sm">{t.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-carbon-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: `${G}15`, border: `1px solid ${G}30` }}>
              <TrendingUp className="w-8 h-8" style={{ color: G }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to grin?
            </h2>
            <p className="text-gray-400 mb-8">
              Browse partner clinics in Toronto and book your first visit in under 60 seconds.
            </p>
            <Link to="/grinly/clinics"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-carbon-950 transition-all duration-200"
              style={{ background: G, boxShadow: `0 0 30px ${G}35` }}>
              Find a Dentist
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </main>
  </>
);

export default GrinlyPage;
