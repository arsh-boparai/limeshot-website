import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CASE_STUDIES } from '../utils/constant';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import ContactCTA from '../components/sections/ContactCTA';

const FILTERS = ['All', 'Logistics', 'Mobile', 'AI', 'IoT'];

const TAG_FILTER_MAP = {
  All: () => true,
  Logistics: (s) => s.tag.toLowerCase().includes('logistics'),
  Mobile: (s) => s.tag.toLowerCase().includes('mobile'),
  AI: (s) => s.tag.toLowerCase().includes('ai'),
  IoT: (s) => s.tag.toLowerCase().includes('iot'),
};

const GRADIENT_MAP = [
  'from-lime-900/40 to-carbon-900',
  'from-blue-900/30 to-carbon-900',
  'from-purple-900/30 to-carbon-900',
  'from-amber-900/30 to-carbon-900',
];

const WorkCard = ({ study, index }) => (
  <ScrollReveal delay={index * 80}>
    <div className="card-dark overflow-hidden h-full flex flex-col">
      {/* Abstract gradient header */}
      <div className={`h-32 bg-gradient-to-br ${GRADIENT_MAP[study.id - 1] || GRADIENT_MAP[0]} flex items-end p-5`}>
        <span className="tech-pill text-lime-400 border-lime-500/20 bg-lime-500/10 text-xs">
          {study.tag}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-heading font-semibold text-white leading-tight">
            {study.title}
          </h3>
          <span className="font-mono text-3xl font-bold text-white/[0.05] flex-shrink-0 ml-4">
            0{study.id}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {study.brief}
        </p>

        <div className="py-4 border-t border-b border-white/[0.06] mb-4">
          <div className="text-3xl font-heading font-bold text-lime-500">
            {study.metric}
          </div>
          <div className="text-xs text-gray-500 mt-1">{study.metricLabel}</div>
        </div>

        <div className="flex flex-wrap gap-2">
          {study.techs.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </ScrollReveal>
);

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');


  const filtered = CASE_STUDIES.filter(TAG_FILTER_MAP[activeFilter] || TAG_FILTER_MAP.All);

  return (
    <>
    <Helmet>
      <title>Client Work &amp; Case Studies | Limeshot Digital</title>
      <meta name="description" content="Production applications across logistics, mobile, AI intake, and IoT device management. Real projects with real metrics from the Limeshot Digital team." />
      <meta name="keywords" content="software case studies, enterprise app development, react native case study, AI development Canada" />
      <meta property="og:url" content="https://limeshotdigital.com/work" />
      <meta property="og:title" content="Client Work & Case Studies | Limeshot Digital" />
      <link rel="canonical" href="https://limeshotdigital.com/work" />
    </Helmet>
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-carbon-900 bg-dot-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              label="Selected Work"
              title="Projects We're Proud to Have Shipped"
              subtitle="Four production applications across logistics, mobile, AI, and IoT. Every one of these has real users on the other end."
            />
          </ScrollReveal>

          {/* Filter Row */}
          <div className="mt-10 flex flex-wrap gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-lime-500 text-carbon-950'
                    : 'bg-carbon-800 text-gray-400 border border-white/[0.06] hover:text-white hover:border-lime-500/30'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-carbon-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <p className="text-gray-400 text-center py-20">No projects match this filter.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((study, i) => (
                <WorkCard key={study.id} study={study} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </main>
    </>
  );
};

export default WorkPage;
