import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Code2, Cpu, Smartphone, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../utils/constant';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import ContactCTA from '../components/sections/ContactCTA';

const ICON_MAP = { Code2, Cpu, Smartphone };

const ServiceSection = ({ service, index }) => {
  const Icon = ICON_MAP[service.icon] || Code2;
  const isEven = index % 2 === 0;

  return (
    <section id={service.slug} className={`py-20 ${isEven ? 'bg-carbon-900' : 'bg-carbon-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>

            {/* Text */}
            <div className={!isEven ? 'lg:col-start-2' : ''}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-lime-500/10 border border-lime-500/20">
                <Icon className="w-7 h-7 text-lime-500" />
              </div>
              <span className="section-label">{service.tagline}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lime-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.techs.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

              <Link to="/contact" className="btn-lime">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Ideal For */}
            <div className={!isEven ? 'lg:col-start-1' : ''}>
              <div className="card-dark p-8 border-l-4 border-lime-500">
                <h3 className="text-sm font-mono font-medium text-lime-500 mb-3 uppercase tracking-wider">
                  Ideal For
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">{service.idealFor}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <>
    <Helmet>
      <title>Services — React, AI &amp; Mobile Dev | Limeshot</title>
      <meta name="description" content="Senior technical consulting in React & React Native development, AI agent integration, and full-stack web & mobile builds." />
      <meta property="og:url" content="https://limeshotdigital.com/services" />
      <link rel="canonical" href="https://limeshotdigital.com/services" />
    </Helmet>
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-carbon-900 bg-dot-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              label="Services"
              title="Three Things I Do Exceptionally Well"
              subtitle="I'm not a generalist agency. I'm a senior engineer who has spent 8+ years going deep on specific problem domains. Here's where I can deliver the most value."
            />
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="btn-ghost text-sm px-4 py-2"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {SERVICES.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}

      <ContactCTA />
    </main>
    </>
  );
};

export default ServicesPage;
