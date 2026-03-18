import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Github, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { STATS, TECH_STACK, COMPANY } from '../utils/constant';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import ContactCTA from '../components/sections/ContactCTA';

const PHILOSOPHY = [
  {
    title: 'Pragmatic Engineering',
    body: 'The best architecture is the simplest one that solves the problem. I default to boring, proven solutions and reach for new tech only when it genuinely earns its place.',
  },
  {
    title: 'AI as Multiplier',
    body: 'I integrate AI where it creates real leverage — automated triage, document analysis, agent workflows — not where it creates hype. Every AI feature I ship has a measurable impact.',
  },
  {
    title: 'Senior Execution',
    body: 'Senior means knowing what NOT to build. I push back on scope that slows teams down and focus energy on the 20% of work that delivers 80% of the value.',
  },
];

const CAREER_SNAPSHOT = [
  { label: 'Frontend Lead', sub: 'Logistics SaaS' },
  { label: 'React Native', sub: 'Shipped to field workers' },
  { label: 'AI Agent pipeline', sub: 'In production' },
  { label: 'Ontario', sub: 'Clients across NA' },
];

const HOW_IT_WORKS = [
  {
    title: 'Scoped project or ongoing retainer',
    body: 'I work both ways — fixed-scope deliverables with clear milestones, or a monthly retainer for teams that need ongoing senior technical support. We define it together upfront.',
  },
  {
    title: 'Async-first, weekly syncs',
    body: 'I default to async communication (Slack, Linear, Loom) with a weekly video check-in. Response time is same business day. No chasing, no status meetings that could be an update.',
  },
];

const AboutPage = () => {
  return (
    <>
    <Helmet>
      <title>About Arsh Boparai — Senior Frontend Technical Lead</title>
      <meta name="description" content="8+ years building production React, React Native, and AI-powered apps. Senior technical lead available for consulting in Ontario, Canada." />
      <meta property="og:url" content="https://limeshotdigital.com/about" />
      <link rel="canonical" href="https://limeshotdigital.com/about" />
    </Helmet>
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-carbon-900 bg-dot-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            {/* Bio + social links */}
            <div>
              <span className="section-label">About</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-2 leading-tight">
                Arsh Boparai
              </h1>
              <p className="text-lime-500 font-mono text-sm mb-6">
                Senior Frontend Technical Lead
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
                <MapPin className="w-4 h-4" />
                <span>{COMPANY.location}</span>
              </div>

              <div className="space-y-4 text-gray-400 leading-relaxed mb-8 max-w-3xl">
                <p>
                  I got into development the way most people do — curiosity and a project that
                  needed building. What started as building small web tools grew into a career
                  that's taken me from early-stage startups to production systems handling
                  hundreds of daily active users. The thread throughout has been a preference
                  for shipping over theorising.
                </p>
                <p>
                  My first senior role was leading the frontend team at a logistics SaaS company.
                  That's where the foundations got built under real pressure: AG Grid with live
                  WebSocket feeds, SharedWorker architectures for browser performance at scale,
                  and eventually leading a team of up to 15 engineers through a full product
                  rebuild. I learned how much of the job is decisions about what <em>not</em> to build.
                </p>
                <p>
                  From there I went deep on mobile — building React Native apps shipped to
                  warehouse staff and truck drivers across North America. Offline-first sync,
                  barcode scanning, GPS check-ins, real-world edge cases that unit tests don't
                  catch. Most recently I've been architecting AI agent pipelines for an intake and
                  triage platform — Google ADK, RAG, agent-to-agent escalation, the whole stack
                  running in production with measurable impact on review time.
                </p>
                <p>
                  Today I consult independently. I take on a small number of high-impact
                  engagements where I can function as a genuine technical partner — owning
                  architecture decisions, mentoring in-house teams, and shipping code that the
                  team can maintain long after I'm gone.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href={COMPANY.social.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Stats grid — below bio on all screens */}
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

            {/* Career Snapshot */}
            <div className="mt-8 flex flex-wrap gap-3">
              {CAREER_SNAPSHOT.map(({ label, sub }) => (
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
              title="How I Think About Building"
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

      {/* How Consulting Works */}
      <section className="py-20 bg-carbon-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              label="Engagement"
              title="How Consulting Works"
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
      <section className="py-20 bg-carbon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              label="Tools"
              title="What I Work With"
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
