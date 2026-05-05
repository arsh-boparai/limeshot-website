import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, CheckCircle, Smartphone, Globe, Apple, Building2, Dog,
  Zap, MessageSquare, DollarSign, QrCode, BookOpen, AlertTriangle,
  ShoppingBag, Camera, Smile,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

/* ── NestCare data ─────────────────────────────────────────────── */
const NESTCARE_FEATURES = [
  { icon: QrCode,        title: 'Digital Check-In / Out',  description: 'One-tap attendance for staff with real-time timestamps. No paper logs, no manual sign-in sheets.' },
  { icon: Zap,           title: 'Real-Time Activity Feed',  description: 'Meals, naps, milestones, and notes pushed live to parent devices throughout the day via Supabase Realtime.' },
  { icon: BookOpen,      title: 'Daily Logs',               description: "Staff log meals, naps, diapers, and mood per child with structured forms — parents see it the moment it's saved." },
  { icon: AlertTriangle, title: 'Incident Reports',         description: 'Severity-graded incident filing (minor / moderate / serious) with action taken notes and parent-notified status.' },
  { icon: ShoppingBag,   title: 'Essentials Tracker',       description: 'Staff request supplies or medication from parents in-app. Parents mark items as fulfilled with a single tap.' },
  { icon: Camera,        title: 'Moments & Photos',         description: 'Staff upload photos from mobile; parents see a private photo grid for their child, stored securely in the cloud.' },
  { icon: MessageSquare, title: 'Secure Messaging',         description: 'Real-time threaded conversations between staff and parents. Sub-second delivery, no WhatsApp group chats needed.' },
  { icon: DollarSign,    title: 'Billing & Invoices',       description: 'Full invoice lifecycle — Draft → Sent → Paid — with overdue tracking and Canadian tax receipts.' },
];

const PLATFORM_SURFACES = [
  {
    icon: Globe,
    label: 'Web Portal',
    tech: 'Next.js 16 · Supabase',
    audience: 'Admin & Staff',
    capabilities: [
      'Dashboard with live attendance stats',
      'Children profiles with allergy alerts',
      'Schedule management & timetables',
      'Documents, billing & staff management',
      'Real-time messaging inbox',
    ],
  },
  {
    icon: Smartphone,
    label: 'Staff Mobile App',
    tech: 'Expo / React Native',
    audience: 'Teachers',
    capabilities: [
      'Check children in and out',
      'Log meals, naps, diapers & mood',
      'File incident reports on the go',
      'Request essentials from parents',
      'Upload moments directly from camera',
    ],
  },
  {
    icon: Apple,
    label: 'Parent Mobile App',
    tech: 'Expo / React Native',
    audience: 'Families',
    capabilities: [
      'Real-time activity feed for each child',
      'Photo moments gallery (private per child)',
      'Direct messaging with teachers',
      'Essentials fulfilment tracker',
      'View invoices & billing history',
    ],
  },
];

const NESTCARE_PRICING = [
  {
    name: 'Home Care',
    price: '$29',
    period: '/mo',
    sub: 'up to 25 children flat',
    description: 'For home-based and small licensed daycares',
    features: ['All features', '1 location', '2 staff accounts', 'Standard support'],
    cta: 'Join Waitlist',
    highlighted: false,
  },
  {
    name: 'Centre',
    price: '$69',
    period: '/mo base',
    overage: '+ $2/child over 25',
    sub: 'scales with enrolment',
    description: 'For established group childcare centres',
    features: ['All features', '1 location', 'Unlimited staff', 'Priority support'],
    cta: 'Join Waitlist',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    sub: 'multi-location · volume',
    description: 'For multi-location operations and franchises',
    features: ['Multi-centre', 'Custom branding', 'Dedicated support', 'SLA + API'],
    cta: 'Contact Us',
    highlighted: false,
  },
];

/* ── Products overview cards ───────────────────────────────────── */
const PRODUCT_CARDS = [
  {
    emoji: '🌿',
    name: 'NestCare',
    tagline: 'Modern childcare management for daycare professionals.',
    status: 'Demo Available',
    statusColor: '#84cc16',
    platforms: ['iOS', 'Android', 'Web'],
    tags: ['Childcare', 'SaaS', 'Canada'],
    href: '#nestcare',
    accent: '#84cc16',
  },
  {
    emoji: '🍁',
    name: 'Traveo',
    tagline: 'Discover Canada\'s best tourism spots.',
    status: 'Available on App Store',
    statusColor: '#D94045',
    platforms: ['iPhone · iOS 17+'],
    tags: ['Travel', 'iOS App', 'Tourism'],
    href: '/products/traveo',
    accent: '#D94045',
    external: false,
  },
  {
    emoji: '😁',
    name: 'Grinly',
    tagline: 'The dental marketplace that pays patients to show up.',
    status: 'Pilot — GTA',
    statusColor: '#06B6D4',
    platforms: ['Web', 'Mobile Web'],
    tags: ['Dental', 'Marketplace', 'Toronto'],
    href: '/products/grinly',
    accent: '#06B6D4',
    external: false,
  },
];

/* ── Component ─────────────────────────────────────────────────── */
const ProductsPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <>
      <Helmet>
        <title>Our Products — NestCare & Traveo | Limeshot Digital</title>
        <meta name="description" content="Limeshot Digital builds original SaaS products. NestCare is modern childcare management for Canadian daycares. Traveo is a Canada tourism discovery app for iPhone." />
        <meta property="og:url" content="https://limeshotdigital.com/products" />
        <meta property="og:title" content="Our Products — NestCare & Traveo | Limeshot Digital" />
        <meta property="og:description" content="Original software products built by Limeshot Digital. NestCare for daycare management. Traveo for discovering Canada." />
        <meta name="keywords" content="daycare management software Canada, childcare app, NestCare, Traveo, Canada travel app, dog daycare software, childcare SaaS, iOS travel app" />
        <link rel="canonical" href="https://limeshotdigital.com/products" />
      </Helmet>
      <main>

        {/* ── Page Hero ────────────────────────────────────────────── */}
        <section className="pt-32 pb-20 bg-carbon-900 bg-dot-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="Products"
                title="Software We're Building for the World"
                subtitle="Alongside client work, our team builds original products. We eat our own cooking — the same engineering standards we apply to client projects go into every product we ship."
              />
            </ScrollReveal>

            {/* Product overview grid */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRODUCT_CARDS.map((p, i) => (
                <ScrollReveal key={p.name} delay={i * 100}>
                  <div
                    className="card-dark p-8 h-full flex flex-col"
                    style={{ borderTop: `2px solid ${p.accent}60` }}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                          style={{ background: `${p.accent}15`, border: `1px solid ${p.accent}30` }}
                        >
                          {p.emoji}
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-bold text-white">{p.name}</h3>
                          <p className="text-xs font-mono mt-0.5" style={{ color: p.accent }}>{p.status}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.tagline}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((tag) => (
                        <span key={tag} className="tech-pill">{tag}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.platforms.map((pl) => (
                        <span
                          key={pl}
                          className="text-xs font-mono px-2.5 py-1 rounded-full border"
                          style={{ borderColor: `${p.accent}30`, color: `${p.accent}99`, background: `${p.accent}08` }}
                        >
                          {pl}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      {p.href.startsWith('#') ? (
                        <a href={p.href} className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: p.accent }}>
                          View Details <ArrowRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link to={p.href} className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: p.accent }}>
                          View Details <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            NESTCARE
        ════════════════════════════════════════════════════════════ */}
        <div id="nestcare">

          {/* NestCare Hero */}
          <section className="py-20 bg-carbon-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <ScrollReveal>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center">
                        <span className="text-3xl">🌿</span>
                      </div>
                      <div>
                        <h2 className="text-3xl font-heading font-bold text-white">NestCare</h2>
                        <p className="text-lime-500 font-mono text-sm">by Limeshot Digital</p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                      The modern childcare management platform for daycare professionals.
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 mb-8">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
                      </span>
                      <span className="text-sm font-mono text-lime-400">Demo Available</span>
                    </div>

                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center gap-2 text-gray-400 text-sm"><Apple className="w-4 h-4" /><span>iOS</span></div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm"><Smartphone className="w-4 h-4" /><span>Android</span></div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm"><Globe className="w-4 h-4" /><span>Web</span></div>
                    </div>

                    <div className="space-y-3">
                      {[
                        'Real-time parent feed — meals, naps, moments, all day long',
                        'Staff web portal + parent & staff mobile apps, one platform',
                        'Canadian compliance built-in (ELCC subsidy, tax receipts)',
                      ].map((b) => (
                        <div key={b} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card-dark p-10 border-l-4 border-lime-500">
                    <h3 className="text-sm font-mono font-medium text-lime-500 mb-4 uppercase tracking-wider">
                      The Problem We're Solving
                    </h3>
                    <p className="text-white text-xl font-heading font-semibold leading-relaxed mb-6">
                      Most daycare software is built for admins, not parents.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Existing tools are clunky desktop apps designed for directors filling out paperwork — not for the parents who drop off their kids every morning and want a real-time update before their 9am meeting.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      NestCare flips the model: a beautiful, mobile-native parent experience backed by a powerful operations layer for staff. No more WhatsApp photo dumps. No more paper sign-in sheets.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* NestCare Features */}
          <section className="py-20 bg-carbon-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <ScrollReveal>
                <SectionHeading label="Features" title="Built for How Daycares Actually Work" />
              </ScrollReveal>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {NESTCARE_FEATURES.map((feature, i) => (
                  <ScrollReveal key={feature.title} delay={i * 80}>
                    <div className="card-dark p-6 h-full">
                      <div className="w-10 h-10 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center mb-4">
                        <feature.icon className="w-5 h-5 text-lime-500" />
                      </div>
                      <h3 className="text-base font-heading font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Platform Surfaces */}
          <section className="py-20 bg-carbon-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <ScrollReveal>
                <SectionHeading
                  label="Platform"
                  title="One Platform, Three Surfaces"
                  subtitle="A shared Supabase backend with row-level security — every centre sees only its own data."
                />
              </ScrollReveal>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {PLATFORM_SURFACES.map((surface, i) => (
                  <ScrollReveal key={surface.label} delay={i * 100}>
                    <div className="card-dark p-8 h-full border-t-2 border-lime-500/40">
                      <div className="flex items-center gap-3 mb-1">
                        <surface.icon className="w-5 h-5 text-lime-500" />
                        <h3 className="text-lg font-heading font-semibold text-white">{surface.label}</h3>
                      </div>
                      <p className="text-xs font-mono text-gray-500 mb-1">{surface.tech}</p>
                      <p className="text-xs text-lime-500/70 mb-5">{surface.audience}</p>
                      <ul className="space-y-2">
                        {surface.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-lime-500/60 flex-shrink-0 mt-1.5" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-20 bg-carbon-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <ScrollReveal>
                <SectionHeading label="Who It's For" title="Two Markets, One Platform" />
              </ScrollReveal>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollReveal delay={0}>
                  <div className="card-dark p-8 border-t-2 border-lime-500">
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className="w-6 h-6 text-lime-500" />
                      <h3 className="text-lg font-heading font-semibold text-white">Childcare Centres</h3>
                    </div>
                    <ul className="space-y-2">
                      {['Licensed home daycares (1–8 children)', 'Group childcare centres (up to 100+)', 'ELCC-subsidized programs', 'Multi-location operations'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <div className="card-dark p-8 border-t-2 border-lime-500/50">
                    <div className="flex items-center gap-3 mb-4">
                      <Dog className="w-6 h-6 text-lime-500" />
                      <h3 className="text-lg font-heading font-semibold text-white">Dog Daycares</h3>
                    </div>
                    <ul className="space-y-2">
                      {['Independent dog daycare operators', 'Multi-dog boarding facilities', 'Grooming centres with daycare', 'Franchise dog care brands'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-500/50 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Market Context */}
          <section className="py-12 bg-carbon-900 border-y border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
                <div>
                  <div className="text-3xl font-heading font-bold text-lime-500">27,000+</div>
                  <div className="text-sm text-gray-500 mt-1">Licensed childcare centres in Canada</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/[0.06]" />
                <div>
                  <div className="text-3xl font-heading font-bold text-lime-500">8% YoY</div>
                  <div className="text-sm text-gray-500 mt-1">Sector growth rate</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/[0.06]" />
                <div>
                  <div className="text-3xl font-heading font-bold text-lime-500">$8B+</div>
                  <div className="text-sm text-gray-500 mt-1">Federal childcare investment (2021–2026)</div>
                </div>
              </div>
            </div>
          </section>

          {/* NestCare Pricing */}
          <section className="py-20 bg-carbon-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <ScrollReveal>
                <SectionHeading
                  label="Pricing Preview"
                  title="Simple, Transparent Pricing"
                  subtitle="Flat monthly base + per-child overage after the threshold. Predictable for small centres, scales reasonably as you grow. Early waitlist members lock in founding-member rates."
                />
              </ScrollReveal>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {NESTCARE_PRICING.map((tier, i) => (
                  <ScrollReveal key={tier.name} delay={i * 100}>
                    <div className={`card-dark p-8 h-full flex flex-col relative ${tier.highlighted ? 'border-lime-500/50 ring-1 ring-lime-500/20' : ''}`}>
                      {tier.highlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="px-3 py-1 rounded-full bg-lime-500 text-carbon-900 text-xs font-mono font-bold uppercase tracking-widest">Popular</span>
                        </div>
                      )}
                      <h3 className="text-xl font-heading font-bold text-white mb-1">{tier.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-heading font-bold text-lime-500">{tier.price}</span>
                        {tier.period && <span className="text-gray-500 text-sm">{tier.period}</span>}
                      </div>
                      {tier.overage && <div className="text-lime-400/80 text-sm font-mono mt-0.5">{tier.overage}</div>}
                      <div className="inline-flex mt-2 mb-5">
                        <span className="text-xs font-mono text-gray-600 bg-white/[0.04] border border-white/[0.07] px-2 py-0.5 rounded">{tier.sub}</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-6">{tier.description}</p>
                      <ul className="space-y-2 mb-8 flex-grow">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-gray-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-lime-500 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button className={`${tier.highlighted ? 'btn-lime' : 'btn-ghost'} justify-center`}>
                        {tier.cta}
                      </button>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Book a Demo */}
          <section className="py-20 bg-carbon-900 border-y border-white/[0.06]">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
              <ScrollReveal>
                <span className="section-label">Live Demo</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-4">
                  See NestCare in Action
                </h2>
                <p className="text-gray-400 mb-8">
                  Sunny Sprouts Daycare is live in our demo environment. Watch the full admin portal, staff mobile app, and parent experience — end to end.
                </p>
                <Link to="/contact" className="btn-lime inline-flex">
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>
          </section>

          {/* Waitlist */}
          <section className="py-20 bg-carbon-800">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
              <ScrollReveal>
                <span className="section-label">Early Access</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-4">
                  Get Early Access
                </h2>
                <p className="text-gray-400 mb-8">
                  NestCare is in private demo. Join the waitlist to be considered for our early adopter cohort and lock in founding-member pricing.
                </p>
                {submitted ? (
                  <div className="p-4 rounded-lg bg-lime-500/10 border border-lime-500/20 text-lime-400">
                    You're on the list! We'll reach out when NestCare is ready for early access.
                  </div>
                ) : (
                  <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 px-4 py-3 bg-carbon-900 border border-white/[0.08] rounded-lg text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/30 transition-all duration-200"
                    />
                    <button type="submit" className="btn-lime whitespace-nowrap">
                      Join Waitlist
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </section>

        </div>{/* end #nestcare */}

        {/* ════════════════════════════════════════════════════════════
            TRAVEO — featured product card
        ════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-carbon-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              {/* Section divider label */}
              <div className="flex items-center gap-4 mb-12">
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-600">Also from Limeshot Digital</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="card-dark overflow-hidden" style={{ borderLeft: '4px solid #D94045' }}>
                <div className="p-10 grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                        style={{ background: '#D9404515', border: '1px solid #D9404530' }}>
                        🍁
                      </div>
                      <div>
                        <h2 className="text-3xl font-heading font-bold text-white">Traveo</h2>
                        <p className="text-sm font-mono" style={{ color: '#D94045' }}>iOS App · Available on App Store</p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-300 leading-relaxed mb-4">
                      Discover Canada's best tourism spots.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      Your personal travel companion — curated places powered by MapKit & Google Places, local music for every city, full trip planning, and a social feed to share discoveries with friends.
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                      style={{ background: '#D9404515', border: '1px solid #D9404530' }}>
                      <Smartphone className="w-3.5 h-3.5" style={{ color: '#D94045' }} />
                      <span className="text-sm font-mono" style={{ color: '#D94045' }}>iPhone · iOS 17.0+</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {['Discover Places', 'Trip Planning', 'Social Feed', 'Local Music', 'Location Owners'].map((tag) => (
                        <span key={tag} className="tech-pill">{tag}</span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link to="/products/traveo" className="btn-ghost text-sm" style={{ borderColor: '#D9404550', color: '#D94045' }}>
                        View Full Page
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="https://apps.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: '#D94045' }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        App Store
                      </a>
                    </div>
                  </div>

                  {/* Right — feature bullets */}
                  <div className="space-y-3">
                    {[
                      'Browse & discover places across 8 categories',
                      'Full interactive MapKit map with category filters',
                      'Trip planning: itineraries, expenses & packing lists',
                      'Local music curated by city via YouTube integration',
                      'Friend system — share places & see community activity',
                      'Location owners: list, promote & track analytics',
                      'Free to start · Premium from $4.99/mo',
                    ].map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#D94045' }} />
                        <span className="text-gray-400 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            GRINLY
        ════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-carbon-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-12">
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-600">Also from Limeshot Digital</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="card-dark overflow-hidden" style={{ borderLeft: '4px solid #06B6D4' }}>
                <div className="p-10 grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                        style={{ background: '#06B6D415', border: '1px solid #06B6D430' }}>
                        😁
                      </div>
                      <div>
                        <h2 className="text-3xl font-heading font-bold text-white">Grinly</h2>
                        <p className="text-sm font-mono" style={{ color: '#06B6D4' }}>Web · Pilot in GTA</p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-300 leading-relaxed mb-4">
                      The dental marketplace that pays patients to show up.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      Patients book local dentists for free and earn a $25 gift card on arrival.
                      Dentists pay a flat $199 only when the patient walks in — zero risk, zero upfront cost.
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                      style={{ background: '#06B6D415', border: '1px solid #06B6D430' }}>
                      <Smile className="w-3.5 h-3.5" style={{ color: '#06B6D4' }} />
                      <span className="text-sm font-mono" style={{ color: '#06B6D4' }}>Pilot — Greater Toronto Area</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {['Performance-Based', 'Dental Marketplace', 'Gift Cards', 'GTA Pilot'].map((tag) => (
                        <span key={tag} className="tech-pill">{tag}</span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link to="/products/grinly" className="btn-ghost text-sm"
                        style={{ borderColor: '#06B6D450', color: '#06B6D4' }}>
                        View Full Page
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link to="/grinly/clinics"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-carbon-950 transition-opacity hover:opacity-90"
                        style={{ background: '#06B6D4' }}>
                        Find a Dentist
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Book a dentist in under 60 seconds — no account needed',
                      '$25 gift card delivered within 24h of your visit',
                      'Dentists pay $199 flat only on patient arrival',
                      'Performance-based: zero cost for no-shows or clicks',
                      'Real-time clinic dashboard for booking management',
                      'PIPEDA-compliant patient data handling',
                      'Pilot pricing: $99/patient for founding clinics',
                    ].map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#06B6D4' }} />
                        <span className="text-gray-400 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── More Products Teaser ─────────────────────────────────── */}
        <section className="py-12 bg-carbon-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="card-dark p-8 text-center border border-dashed border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-carbon-700 border border-white/[0.06] flex items-center justify-center mx-auto mb-3 text-xl">
                  +
                </div>
                <h3 className="text-lg font-heading font-semibold text-white mb-2">More Products in the Pipeline</h3>
                <p className="text-gray-500 text-sm max-w-sm mx-auto mb-4">
                  We're always building across healthcare, logistics, and professional tools.
                </p>
                <Link to="/contact" className="btn-ghost text-sm">
                  Follow Our Progress
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
};

export default ProductsPage;
