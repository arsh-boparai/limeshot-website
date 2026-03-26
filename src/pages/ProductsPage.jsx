import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Smartphone, Globe, Apple, Building2, Dog, Zap, MessageSquare, DollarSign, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

const NESTCARE_FEATURES = [
  {
    icon: QrCode,
    title: 'Digital Check-In / Out',
    description: 'QR code and Face ID-powered check-in for parents. No paper logs, no manual sign-ins. Real-time timestamps and attendance records.',
  },
  {
    icon: Zap,
    title: 'Real-Time Activity Feed',
    description: 'Parents see photos, nap times, meals, and milestones throughout the day — pushed live from staff devices.',
  },
  {
    icon: DollarSign,
    title: 'Tuition Billing & Invoicing',
    description: 'Automated monthly invoicing, subsidy tracking, and payment collection. Canadian tax receipts generated automatically.',
  },
  {
    icon: MessageSquare,
    title: 'Parent ↔ Teacher Messaging',
    description: 'In-app secure messaging between parents and staff. Broadcast announcements, incident reports, and allergy alerts.',
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For small home daycares getting started',
    features: ['Up to 10 children', 'Digital check-in/out', 'Activity feed', 'Email support'],
    cta: 'Join Waitlist',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$79',
    period: '/mo',
    description: 'For established childcare centres',
    features: ['Up to 50 children', 'Billing & invoicing', 'Parent messaging', 'Canadian tax receipts', 'Priority support'],
    cta: 'Join Waitlist',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    description: 'For multi-location operations',
    features: ['Unlimited children', 'Multi-location dashboard', 'Custom reporting', 'API access', 'Dedicated onboarding'],
    cta: 'Join Waitlist',
    highlighted: false,
  },
];

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
        <title>Our Products — NestCare & More | Limeshot Digital</title>
        <meta name="description" content="Limeshot Digital builds its own SaaS products alongside client work. Meet NestCare — modern childcare management software for Canadian daycares." />
        <meta property="og:url" content="https://limeshotdigital.com/products" />
        <meta property="og:title" content="Our Products — NestCare & More | Limeshot Digital" />
        <meta property="og:description" content="Modern childcare management software for Canadian daycares. Built by Limeshot Digital." />
        <meta name="keywords" content="daycare management software Canada, childcare app, NestCare, dog daycare software, childcare SaaS" />
        <link rel="canonical" href="https://limeshotdigital.com/products" />
      </Helmet>
      <main>

        {/* Page Hero */}
        <section className="pt-32 pb-20 bg-carbon-900 bg-dot-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="Products"
                title="Software We're Building for the World"
                subtitle="Alongside client work, our team builds original SaaS products. We eat our own cooking — the same engineering standards we apply to client projects go into every product we ship."
              />
            </ScrollReveal>
          </div>
        </section>

        {/* NestCare Hero */}
        <section className="py-20 bg-carbon-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  {/* Brand */}
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
                    Modern Childcare Management for Canadian Daycares
                  </p>

                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                    </span>
                    <span className="text-sm font-mono text-amber-400">In Development</span>
                  </div>

                  {/* Platforms */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Apple className="w-4 h-4" />
                      <span>iOS</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Smartphone className="w-4 h-4" />
                      <span>Android</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Globe className="w-4 h-4" />
                      <span>Web</span>
                    </div>
                  </div>

                  {/* Hero bullets */}
                  <div className="space-y-3">
                    {[
                      'Parent-first mobile experience — not another admin tool',
                      'Canadian compliance built-in (ELCC subsidy, tax receipts)',
                      'Works for childcare centres and dog daycares',
                    ].map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — Problem card */}
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

        {/* Key Features */}
        <section className="py-20 bg-carbon-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="Features"
                title="Built for How Daycares Actually Work"
              />
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {NESTCARE_FEATURES.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 100}>
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

        {/* Who It's For */}
        <section className="py-20 bg-carbon-800">
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

        {/* Pricing */}
        <section className="py-20 bg-carbon-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="Pricing Preview"
                title="Simple, Transparent Pricing"
                subtitle="Pricing is indicative and may change before launch. Early waitlist members get locked-in early-adopter rates."
              />
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRICING_TIERS.map((tier, i) => (
                <ScrollReveal key={tier.name} delay={i * 100}>
                  <div className={`card-dark p-8 h-full flex flex-col ${tier.highlighted ? 'border-lime-500/50 ring-1 ring-lime-500/20' : ''}`}>
                    {tier.highlighted && (
                      <div className="text-xs font-mono text-lime-500 uppercase tracking-widest mb-4">Most Popular</div>
                    )}
                    <h3 className="text-xl font-heading font-bold text-white mb-1">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-heading font-bold text-lime-500">{tier.price}</span>
                      {tier.period && <span className="text-gray-500 text-sm">{tier.period}</span>}
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

        {/* Waitlist CTA */}
        <section className="py-20 bg-carbon-900">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <ScrollReveal>
              <span className="section-label">Early Access</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-4">
                Be the First to Know When NestCare Launches
              </h2>
              <p className="text-gray-400 mb-8">
                We're building NestCare in the open. Join the waitlist for early access, exclusive pricing, and a direct line to the founding team.
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
                    className="flex-1 px-4 py-3 bg-carbon-800 border border-white/[0.08] rounded-lg text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/30 transition-all duration-200"
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

        {/* More Products Teaser */}
        <section className="py-16 bg-carbon-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="card-dark p-10 text-center border border-dashed border-white/[0.1]">
                <div className="w-12 h-12 rounded-xl bg-carbon-700 border border-white/[0.06] flex items-center justify-center mx-auto mb-4 text-2xl">
                  +
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">More Products Coming</h3>
                <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">
                  We're always building. More Limeshot-owned products are in the pipeline across healthcare, logistics, and professional tools.
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
