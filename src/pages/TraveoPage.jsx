import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, MapPin, Heart, Music, Map, Users, BarChart2, ArrowRight,
  Smartphone, Compass, Briefcase, User, Building2, Star, Navigation,
  Camera, Search, Share2, TrendingUp, Tag, DollarSign, List, MessageSquare,
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

const A = '#D94045';
const AL = '#E85954';
const AS = '#F2736B';

const APP_TABS = [
  {
    icon: Compass,
    name: 'Explore',
    description: 'Browse curated places by category, distance, or keyword. Each listing shows ratings, reviews, photos, and live directions.',
  },
  {
    icon: Map,
    name: 'Map',
    description: 'Full-screen interactive MapKit view. See nearby places as pins, filter by category, and tap any pin for a quick preview.',
  },
  {
    icon: Heart,
    name: 'Favourites',
    description: 'Heart the places you love to build your personal Canada bucket list. Unlimited with Premium — 5 on the free tier.',
  },
  {
    icon: Briefcase,
    name: 'Trips',
    description: 'Build complete trip plans with day-by-day itineraries, expense tracking, and packing lists. Share plans with travel partners.',
  },
  {
    icon: User,
    name: 'Profile',
    description: 'Your travel identity. Track your explored places, manage friends, see shared destinations, and control subscription settings.',
  },
];

const FEATURES = [
  {
    icon: MapPin,
    title: 'Curated Place Discovery',
    description: 'Places sourced from MapKit and Google Places, enriched with community ratings, reviews, and photos. Filter by category: Beaches, Mountains, Parks, Museums, Lakes, Historical sites, Wildlife, and more.',
  },
  {
    icon: Music,
    title: 'Local Music by City',
    description: 'Every place surfaces a curated YouTube music feed from that city. Immerse yourself in local culture before and during your visit.',
  },
  {
    icon: Briefcase,
    title: 'Full Trip Planning',
    description: 'Create trips with day-by-day itineraries, expense tracking, and packing lists — all in one place. Share your plan with travel partners.',
  },
  {
    icon: Users,
    title: 'Social Travel Feed',
    description: 'Add friends, share places you\'ve discovered, comment on destinations, and see a live activity feed of what your travel community is exploring.',
  },
  {
    icon: Navigation,
    title: 'Directions & Details',
    description: 'Every place includes address, distance from you, opening hours, website, and one-tap directions via Apple Maps.',
  },
  {
    icon: Camera,
    title: 'Photo Galleries',
    description: 'Rich photo galleries for every destination. Owner-uploaded images and community-contributed photos give you a real preview before you go.',
  },
  {
    icon: Star,
    title: 'Ratings & Comments',
    description: 'Read community reviews and see star ratings before you visit. Premium users can leave comments and ratings to help other explorers.',
  },
  {
    icon: Building2,
    title: 'Business Owner Tools',
    description: 'List your tourism business, run promotions, track visitor analytics, and connect directly with explorers discovering your area.',
  },
];

const CATEGORIES = [
  { label: 'Beaches', emoji: '🏖' },
  { label: 'Mountains', emoji: '🏔' },
  { label: 'Parks', emoji: '🌲' },
  { label: 'Museums', emoji: '🏛' },
  { label: 'Lakes', emoji: '🏞' },
  { label: 'Historical', emoji: '🏰' },
  { label: 'Wildlife', emoji: '🦌' },
  { label: 'Temples', emoji: '⛩' },
];

const TRIP_TOOLS = [
  {
    icon: List,
    title: 'Itinerary',
    description: 'Day-by-day schedule with places, times, and notes.',
  },
  {
    icon: DollarSign,
    title: 'Expense Tracker',
    description: 'Log spend per trip. See totals at a glance.',
  },
  {
    icon: CheckCircle,
    title: 'Packing List',
    description: 'Custom checklist so you never forget gear.',
  },
  {
    icon: Share2,
    title: 'Shared Plans',
    description: 'Invite travel partners to collaborate on the same trip.',
  },
];

const OWNER_FEATURES = [
  { icon: Tag, title: 'List Your Business', description: 'Add your tourism destination with photos, contact info, website, and reservation links.' },
  { icon: TrendingUp, title: 'Visitor Analytics', description: 'See how many people view your listing, click through to directions, and engage with your photos.' },
  { icon: MessageSquare, title: 'Promotions & Offers', description: 'Create time-limited promotions and special offers visible to explorers browsing your area.' },
  { icon: Star, title: 'Community Ratings', description: 'Build social proof through authentic community ratings and reviews from verified travellers.' },
];

const PRICING_TIERS = [
  {
    name: 'Explorer',
    price: 'Free',
    sub: 'No card required',
    description: 'Start discovering Canada right away',
    features: [
      'Browse & discover all places',
      'Save up to 5 favourites',
      'View comments & ratings',
      'Local music streaming',
      'Interactive map',
    ],
    cta: 'Download Free',
    highlighted: false,
    audience: 'traveller',
  },
  {
    name: 'Explorer Premium',
    price: '$4.99',
    priceAnnual: '$3.33',
    period: '/mo',
    annual: '$39.99/yr',
    annualSavings: 'Save 33%',
    sub: 'Most popular for travellers',
    description: 'The full Canada travel companion',
    features: [
      'Everything in Free',
      'Unlimited favourites',
      'Comment & rate places',
      'Share places with friends',
      'Ad-free experience',
      'Full trip planning & sharing',
    ],
    cta: 'Download & Upgrade',
    highlighted: true,
    audience: 'traveller',
  },
  {
    name: 'Business',
    price: '$14.99',
    priceAnnual: '$10.00',
    period: '/mo',
    annual: '$119.99/yr',
    annualSavings: 'Save 33%',
    sub: 'For tourism operators',
    description: 'List, promote, and grow your location',
    features: [
      'Unlimited location listings',
      'Run promotions & offers',
      'Detailed visitor analytics',
      'Full commenting & sharing',
      'Location owner dashboard',
    ],
    cta: 'Download & Upgrade',
    highlighted: false,
    audience: 'owner',
  },
  {
    name: 'Enterprise',
    price: '$29.99',
    priceAnnual: '$20.83',
    period: '/mo',
    annual: '$249.99/yr',
    annualSavings: 'Save 31%',
    sub: 'For large operators',
    description: 'Advanced tools for franchise brands',
    features: [
      'Everything in Business',
      'Priority support',
      'Advanced analytics & insights',
    ],
    cta: 'Download & Upgrade',
    highlighted: false,
    audience: 'owner',
  },
];

const TraveoPage = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <Helmet>
        <title>Traveo — Discover Canada's Best Tourism Spots | Limeshot Digital</title>
        <meta name="description" content="Traveo is your personal travel companion for exploring Canada. Discover places, save favourites, plan trips, listen to local music, and connect with your travel community. Available on iPhone." />
        <meta property="og:url" content="https://limeshotdigital.com/products/traveo" />
        <meta property="og:title" content="Traveo — Discover Canada's Best Tourism Spots" />
        <meta property="og:description" content="Your personal travel companion for exploring Canada. Available on iPhone, iOS 17+." />
        <meta name="keywords" content="Traveo, Canada travel app, tourism app, discover Canada, trip planning, iOS travel app, Canadian tourism, travel companion" />
        <link rel="canonical" href="https://limeshotdigital.com/products/traveo" />
      </Helmet>
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="pt-32 pb-20 bg-carbon-900 bg-dot-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left */}
                <div>
                  {/* Brand */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                      style={{ background: `${A}18`, border: `1px solid ${A}35` }}>
                      🍁
                    </div>
                    <div>
                      <h1 className="text-4xl font-heading font-bold text-white tracking-tight">Traveo</h1>
                      <p className="text-sm font-mono" style={{ color: A }}>by Limeshot Digital</p>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-2xl font-heading font-semibold text-white leading-snug mb-3">
                    Discover Canada's best<br />tourism spots.
                  </p>
                  <p className="text-base text-gray-400 leading-relaxed mb-6">
                    Your personal travel companion — places, local music, trip planning, and your travel community, all in your pocket.
                  </p>

                  {/* Status badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                    style={{ background: `${A}15`, border: `1px solid ${A}30` }}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: A }} />
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: A }} />
                    </span>
                    <span className="text-sm font-mono" style={{ color: A }}>Available on the App Store</span>
                  </div>

                  {/* Platform */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <Smartphone className="w-4 h-4" />
                    <span>iPhone · iOS 17.0 or later</span>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-3 mb-8">
                    {[
                      'Places powered by MapKit & Google Places',
                      'Curated local music for every city you explore',
                      'Trips with itineraries, expenses & packing lists',
                      'Friend feed — see where your community is going',
                    ].map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: A }} />
                        <span className="text-gray-300 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                      style={{ background: A }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      Download on App Store
                    </a>
                  </div>
                </div>

                {/* Right — value prop card */}
                <div className="card-dark p-10" style={{ borderLeft: `4px solid ${A}` }}>
                  <h3 className="text-xs font-mono font-medium uppercase tracking-widest mb-5"
                    style={{ color: A }}>
                    Explore. Save. Share.
                  </h3>
                  <p className="text-white text-xl font-heading font-semibold leading-relaxed mb-5">
                    Canada has over 10,000 tourism destinations. Most travellers discover fewer than 30.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Guidebooks are outdated. Google searches surface the same top-10 lists. Traveo surfaces hidden gems, local hotspots, and community-curated destinations — tailored to where you are and where you want to go.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Plan a weekend trip, discover live music scenes in every city, or list your own tourism business and connect directly with thousands of explorers.
                  </p>
                  {/* Mini stat row */}
                  <div className="flex gap-8 pt-6 border-t border-white/[0.06]">
                    <div>
                      <div className="text-2xl font-heading font-bold" style={{ color: A }}>8</div>
                      <div className="text-xs text-gray-500 mt-0.5">Place categories</div>
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold" style={{ color: AL }}>5</div>
                      <div className="text-xs text-gray-500 mt-0.5">App tabs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold" style={{ color: AS }}>Free</div>
                      <div className="text-xs text-gray-500 mt-0.5">To start</div>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── App at a Glance ──────────────────────────────────────── */}
        <section className="py-20 bg-carbon-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="App Overview"
                title="Five Tabs. One Complete Experience."
                subtitle="Traveo is built around five focused tabs — each one a dedicated tool for a different part of your travel experience."
              />
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {APP_TABS.map((tab, i) => (
                <ScrollReveal key={tab.name} delay={i * 70}>
                  <div className="card-dark p-6 h-full border-t-2" style={{ borderTopColor: `${A}${['99','77','55','44','33'][i]}` }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: `${A}12`, border: `1px solid ${A}25` }}>
                      <tab.icon className="w-5 h-5" style={{ color: A }} />
                    </div>
                    <h3 className="text-sm font-heading font-bold text-white mb-2">{tab.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{tab.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────── */}
        <section className="py-20 bg-carbon-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="Features"
                title="Everything You Need to Explore Canada"
              />
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 70}>
                  <div className="card-dark p-6 h-full">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: `${A}15`, border: `1px solid ${A}28` }}>
                      <feature.icon className="w-5 h-5" style={{ color: A }} />
                    </div>
                    <h3 className="text-base font-heading font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Place Categories ─────────────────────────────────────── */}
        <section className="py-14 bg-carbon-800 border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 text-center mb-8">
                Place categories
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium text-gray-300 transition-colors hover:text-white"
                    style={{ borderColor: `${A}30`, background: `${A}08` }}
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Trip Planning Deep Dive ───────────────────────────────── */}
        <section className="py-20 bg-carbon-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest" style={{ color: A }}>Trip Planning</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-5 leading-tight">
                    Plan your next adventure — every detail, one app.
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    From the moment you decide to go to the moment you're back home, Traveo keeps your trip organised. Build a day-by-day itinerary, track every expense, and never forget gear with a smart packing list. Invite travel partners to collaborate in real time.
                  </p>
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: A }}
                  >
                    Start planning free <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {TRIP_TOOLS.map((tool, i) => (
                    <ScrollReveal key={tool.title} delay={i * 80}>
                      <div className="card-dark p-6">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                          style={{ background: `${A}15`, border: `1px solid ${A}25` }}>
                          <tool.icon className="w-4 h-4" style={{ color: A }} />
                        </div>
                        <h3 className="text-sm font-heading font-bold text-white mb-1">{tool.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{tool.description}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── For Location Owners ──────────────────────────────────── */}
        <section className="py-20 bg-carbon-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="For Location Owners"
                title="Grow Your Tourism Business on Traveo"
                subtitle="List your destination, run promotions, and track real visitor engagement — all from the Owner tab on your phone."
              />
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {OWNER_FEATURES.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 80}>
                  <div className="card-dark p-6 h-full border-t-2" style={{ borderTopColor: `${A}50` }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: `${A}15`, border: `1px solid ${A}28` }}>
                      <f.icon className="w-5 h-5" style={{ color: A }} />
                    </div>
                    <h3 className="text-base font-heading font-semibold text-white mb-2">{f.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who It's For ─────────────────────────────────────────── */}
        <section className="py-20 bg-carbon-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading label="Who It's For" title="Built for Every Kind of Explorer" />
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  emoji: '🏕',
                  title: 'Weekend Explorers',
                  items: ['Discover new spots close to home', 'Quick trip plans with packing lists', 'Save and revisit favourite places', 'Share discoveries with friends'],
                },
                {
                  emoji: '✈️',
                  title: 'Seasoned Travellers',
                  items: ['Deep multi-city trip itineraries', 'Expense tracking across provinces', 'Local music for every destination', 'Community ratings to find hidden gems'],
                },
                {
                  emoji: '🏢',
                  title: 'Tourism Businesses',
                  items: ['List attractions, hotels & restaurants', 'Run promotions for visiting explorers', 'Track views, clicks & engagement', 'Build social proof through reviews'],
                },
              ].map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 100}>
                  <div className="card-dark p-8 h-full border-t-2" style={{ borderTopColor: i === 0 ? `${A}` : i === 1 ? `${AL}` : `${AS}` }}>
                    <div className="text-3xl mb-4">{card.emoji}</div>
                    <h3 className="text-lg font-heading font-semibold text-white mb-4">{card.title}</h3>
                    <ul className="space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: A }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────────────── */}
        <section className="py-20 bg-carbon-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="Pricing"
                title="Simple Plans for Travellers & Businesses"
                subtitle="Start free. Upgrade when you need more."
              />

              {/* Monthly / Annual toggle */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <span className={`text-sm font-mono ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
                <button
                  onClick={() => setAnnual(!annual)}
                  className="relative w-12 h-6 rounded-full transition-colors"
                  style={{ background: annual ? A : '#2a2a2a', border: '1px solid rgba(255,255,255,0.1)' }}
                  aria-label="Toggle annual billing"
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform"
                    style={{ transform: annual ? 'translateX(24px)' : 'translateX(0)' }}
                  />
                </button>
                <span className={`text-sm font-mono ${annual ? 'text-white' : 'text-gray-500'}`}>
                  Annual
                </span>
                {annual && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full text-white" style={{ background: A }}>
                    Save up to 33%
                  </span>
                )}
              </div>
            </ScrollReveal>

            {/* Traveller tiers */}
            <div className="mt-10">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-5">For Travellers</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {PRICING_TIERS.filter((t) => t.audience === 'traveller').map((tier, i) => (
                  <ScrollReveal key={tier.name} delay={i * 100}>
                    <div
                      className={`card-dark p-8 h-full flex flex-col relative ${tier.highlighted ? 'ring-1' : ''}`}
                      style={tier.highlighted ? { borderColor: `${A}60`, '--tw-ring-color': `${A}30`, boxShadow: `0 0 0 1px ${A}30` } : {}}
                    >
                      {tier.highlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="px-3 py-1 rounded-full text-white text-xs font-mono font-bold uppercase tracking-widest" style={{ background: A }}>
                            Popular
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-heading font-bold text-white mb-1">{tier.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-heading font-bold" style={{ color: A }}>
                          {tier.price === 'Free' ? 'Free' : annual ? tier.priceAnnual : tier.price}
                        </span>
                        {tier.price !== 'Free' && (
                          <span className="text-gray-500 text-sm">{annual ? '/mo billed yearly' : tier.period}</span>
                        )}
                      </div>
                      {tier.price !== 'Free' && annual && (
                        <div className="text-sm font-mono mt-0.5" style={{ color: `${A}99` }}>{tier.annual} · {tier.annualSavings}</div>
                      )}
                      {tier.price !== 'Free' && !annual && tier.annual && (
                        <div className="text-xs font-mono mt-0.5 text-gray-600">or {tier.annual} annually</div>
                      )}
                      <div className="inline-flex mt-2 mb-5">
                        <span className="text-xs font-mono text-gray-600 bg-white/[0.04] border border-white/[0.07] px-2 py-0.5 rounded">{tier.sub}</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-6">{tier.description}</p>
                      <ul className="space-y-2 mb-8 flex-grow">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-gray-400 text-sm">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: A }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="https://apps.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 text-white"
                        style={tier.highlighted ? { background: A } : { border: `1px solid ${A}50`, color: A }}
                      >
                        {tier.cta}
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Owner tiers */}
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-5">For Location Owners</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRICING_TIERS.filter((t) => t.audience === 'owner').map((tier, i) => (
                  <ScrollReveal key={tier.name} delay={i * 100}>
                    <div className="card-dark p-8 h-full flex flex-col">
                      <h3 className="text-xl font-heading font-bold text-white mb-1">{tier.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-heading font-bold" style={{ color: A }}>
                          {annual ? tier.priceAnnual : tier.price}
                        </span>
                        <span className="text-gray-500 text-sm">{annual ? '/mo billed yearly' : tier.period}</span>
                      </div>
                      {annual && (
                        <div className="text-sm font-mono mt-0.5" style={{ color: `${A}99` }}>{tier.annual} · {tier.annualSavings}</div>
                      )}
                      {!annual && (
                        <div className="text-xs font-mono mt-0.5 text-gray-600">or {tier.annual} annually</div>
                      )}
                      <div className="inline-flex mt-2 mb-5">
                        <span className="text-xs font-mono text-gray-600 bg-white/[0.04] border border-white/[0.07] px-2 py-0.5 rounded">{tier.sub}</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-6">{tier.description}</p>
                      <ul className="space-y-2 mb-8 flex-grow">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-gray-400 text-sm">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: A }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="https://apps.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                        style={{ border: `1px solid ${A}50`, color: A }}
                      >
                        {tier.cta}
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Subscription Terms ───────────────────────────────────── */}
        <section className="py-16 bg-carbon-900 border-y border-white/[0.06]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <h2 className="text-base font-heading font-semibold text-white mb-5">Subscription Terms</h2>
              <ul className="space-y-3">
                {[
                  'Payment will be charged to your Apple ID account at confirmation of purchase.',
                  'Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.',
                  'Your account will be charged for renewal within 24 hours prior to the end of the current period.',
                  'You can manage and cancel your subscriptions by going to your App Store account settings after purchase.',
                  'Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription.',
                ].map((term) => (
                  <li key={term} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: A }} />
                    {term}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Privacy & Legal ──────────────────────────────────────── */}
        <section className="py-14 bg-carbon-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <ScrollReveal>
              <p className="text-xs font-mono uppercase tracking-widest text-gray-600 mb-5">Privacy & Legal</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Link
                  to="/products/traveo/privacy"
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: A }}
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-700">·</span>
                <Link
                  to="/products/traveo/terms"
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: A }}
                >
                  Terms of Service
                </Link>
                <span className="text-gray-700">·</span>
                <a
                  href="mailto:contact@limeshotdigital.com"
                  className="text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors"
                >
                  contact@limeshotdigital.com
                </a>
              </div>
              <p className="text-gray-700 text-xs mt-6">
                Available on iPhone. Requires iOS 17.0 or later. Developed by Limeshot Digital.
              </p>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
};

export default TraveoPage;
