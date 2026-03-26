import { useEffect, useRef, useState } from 'react';
import { CASE_STUDIES } from '../../utils/constant';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const useCountUp = (target, duration = 1500, shouldStart = false) => {
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!shouldStart) return;

    const match = target.match(/^(\d+)(\+|%)?$/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const end = parseInt(match[1], 10);
    const suffix = match[2] || '';
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(eased * end)}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [shouldStart, target, duration]);

  return display;
};

const CaseStudyCard = ({ study, index }) => {
  const cardRef = useRef(null);
  const [started, setStarted] = useState(false);
  const animatedMetric = useCountUp(study.metric, 1400, started);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal delay={index * 100}>
      <div ref={cardRef} className="card-dark p-8 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <span className="tech-pill text-lime-500 border-lime-500/20 bg-lime-500/10">
            {study.tag}
          </span>
          <span className="font-mono text-4xl font-bold text-white/[0.06]">
            0{study.id}
          </span>
        </div>

        <h3 className="text-xl font-heading font-semibold text-white mb-3">
          {study.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {study.brief}
        </p>

        <div className="mb-6 py-4 border-t border-b border-white/[0.06]">
          <div className="text-4xl font-heading font-bold text-lime-500">
            {animatedMetric}
          </div>
          <div className="text-sm text-gray-500 mt-1">{study.metricLabel}</div>
        </div>

        <div className="flex flex-wrap gap-2">
          {study.techs.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-carbon-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            label="Selected Work"
            title="Real Projects. Real Results."
            subtitle="Every engagement we take on has a production user on the other end. Here's a sample of what we've shipped."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
