import { Link } from 'react-router-dom';
import { Code2, Cpu, Smartphone, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../../utils/constant';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const ICON_MAP = {
  Code2,
  Cpu,
  Smartphone,
};

const ServiceCard = ({ service, index }) => {
  const Icon = ICON_MAP[service.icon] || Code2;
  return (
    <ScrollReveal delay={index * 100}>
      <div className="card-dark p-8 h-full flex flex-col">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-lime-500/10 border border-lime-500/20">
          <Icon className="w-6 h-6 text-lime-500" />
        </div>

        <h3 className="text-xl font-heading font-semibold text-white mb-2">
          {service.title}
        </h3>
        <p className="text-sm font-mono text-lime-500 mb-4">{service.tagline}</p>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className="space-y-2 mb-6 flex-grow">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-gray-400">
              <Check className="w-4 h-4 text-lime-500 mt-0.5 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {service.techs.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>

        <Link
          to={`/services#${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-lime-500 hover:text-lime-400 font-medium transition-colors mt-auto"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </ScrollReveal>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-carbon-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            label="What I Do"
            title="Focused. Senior. Production-Ready."
            subtitle="I don't do everything. I do three things exceptionally well — and I've shipped each of them to real users at scale."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
