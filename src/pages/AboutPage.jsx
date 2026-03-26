import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STATS, TECH_STACK, COMPANY } from '../utils/constant';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import ContactCTA from '../components/sections/ContactCTA';

const PHILOSOPHY = [
  {
    title: 'Craft Over Speed',
    body: 'The best architecture is the simplest one that solves the problem. We default to proven solutions and reach for new tech only when it genuinely earns its place.',
  },
  {
    title: 'AI-Augmented Delivery',
    body: 'We integrate AI where it creates real leverage — automated triage, document analysis, agent workflows — not where it creates hype. Every AI feature we ship has a measurable impact.',
  },
  {
    title: 'End-to-End Ownership',
    body: 'Senior means knowing what NOT to build. We push back on scope that slows teams down and focus energy on the 20% of work that delivers 80% of the value.',
  },
];

const TEAM_CAPABILITIES = [
  { label: 'Full-Stack Engineers', sub: 'React, Node, Firebase' },
  { label: 'Mobile Specialists', sub: 'iOS & Android' },
  { label: 'AI/ML Practitioners', sub: 'LLMs, RAG, Agents' },
  { label: 'QA Engineers', sub: 'Automated & exploratory' },
  { label: 'Cloud Architects', sub: 'GCP, Azure, AWS' },
  { label: 'Ontario, Canada', sub: 'Clients across NA' },
];

const HOW_IT_WORKS = [
  {
    title: 'Scoped project or ongoing retainer',
    body: 'We work both ways — fixed-scope deliverables with clear milestones, or a monthly retainer for teams that need ongoing senior technical support. We define it together upfront.',
  },
  {
    title: 'Async-first, weekly syncs',
    body: 'We default to async communication (Slack, Linear, Loom) with a weekly video check-in. Response time is same business day. No chasing, no status meetings that could be an update.',
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Limeshot Digital — Our Team &amp; Mission</title>
        <meta name="description" content="Limeshot Digital is a product-focused software studio. A team of senior engineers, architects, QA engineers, and product strategists building software that scales." />
        <meta name="keywords" content="software development team Ontario Canada, tech agency Canada, react development company, software studio" />
        <meta property="og:url" content="https://limeshotdigital.com/about" />
        <meta property="og:title" content="About Limeshot Digital — Our Team & Mission" />
        <link rel="canonical" href="https://limeshotdigital.com/about" />
      </Helmet>
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-carbon-900 bg-dot-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div>
                <span className="section-label">About Us</span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-2 leading-tight">
                  Who We Are
                </h1>
                <p className="text-lime-500 font-mono text-sm mb-6">
                  Product-Focused Software Studio
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
                  <MapPin className="w-4 h-4" />
                  <span>{COMPANY.location}</span>
                </div>

                <div className="space-y-4 text-gray-400 leading-relaxed mb-8 max-w-3xl">
                  <p>
                    Limeshot Digital is a software studio that partners with startups and
                    enterprises to build production-grade applications. We're not an agency
                    with account managers and bloated delivery teams — we're a group of senior
                    engineers who care deeply about the craft and the outcomes.
                  </p>
                  <p>
                    Our team spans full-stack engineers, mobile specialists, AI/ML practitioners,
                    QA engineers, and cloud architects. We've shipped real-time logistics platforms,
                    React Native apps to warehouse staff and truck drivers across North America,
                    and AI agent pipelines running in production with measurable impact on review time.
                  </p>
                  <p>
                    Alongside client work, we build our own SaaS products. NestCare — our childcare
                    management platform — is our first. We believe in eating our own cooking:
                    the same engineering standards we apply to client projects go into everything
                    we ship under the Limeshot name.
                  </p>
                  <p>
                    We take on a small number of high-impact engagements at a time where we can
                    function as genuine technical partners — owning architecture decisions, mentoring
                    in-house teams, and shipping code that teams can maintain long after we're done.
                  </p>
                </div>

                <Link to="/contact" className="btn-lime">
                  Work With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Stats grid */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="card-dark p-6 text-center border-t-2 border-lime-500">
                    <div className="text-3xl font-heading font-bold text-lime-500 mb-2">
                      {value}
                    </div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                ))}
              </div>

              {/* Team capabilities */}
              <div className="mt-8 flex flex-wrap gap-3">
                {TEAM_CAPABILITIES.map(({ label, sub }) => (
                  <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-carbon-800 border border-white/[0.08]">
                    <span className="text-sm font-medium text-white">{label}</span>
                    <span className="text-xs text-gray-500">— {sub}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 bg-carbon-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="Philosophy"
                title="How We Think About Building"
              />
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PHILOSOPHY.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 100}>
                  <div className="card-dark p-8 h-full">
                    <h3 className="text-lg font-heading font-semibold text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-carbon-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="Our Team"
                title="Senior Engineers, Not Junior Generalists"
              />
              <div className="mt-6 max-w-3xl">
                <p className="text-gray-400 leading-relaxed">
                  Our team spans full-stack engineers, mobile specialists, AI/ML practitioners,
                  QA engineers, and cloud architects. Everyone we work with has shipped real
                  software to real users. No juniors learning on your dime. No offshore churn.
                  Just senior execution from people who've been there before.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* How Consulting Works */}
        <section className="py-20 bg-carbon-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="Engagement"
                title="How We Work With You"
              />
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {HOW_IT_WORKS.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="card-dark p-8 h-full border-l-4 border-lime-500">
                    <h3 className="text-lg font-heading font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-carbon-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <SectionHeading
                label="Tools"
                title="What We Work With"
              />
            </ScrollReveal>

            <div className="mt-10 space-y-6">
              {Object.entries(TECH_STACK).map(([group, techs], i) => (
                <ScrollReveal key={group} delay={i * 70}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-36 flex-shrink-0">
                      <span className={`text-xs font-mono font-medium tracking-widest uppercase ${group === 'AI & Agents' ? 'text-lime-500' : 'text-gray-500'}`}>
                        {group}
                      </span>
                    </div>
                    <div className={`flex flex-wrap gap-2 ${group === 'AI & Agents' ? 'p-3 rounded-lg border border-lime-500/20 bg-lime-500/[0.04]' : ''}`}>
                      {techs.map((t) => (
                        <span key={t} className={`tech-pill ${group === 'AI & Agents' ? 'border-lime-500/20 text-lime-400/80' : ''}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <ContactCTA />
      </main>
    </>
  );
};

export default AboutPage;
