import { PROCESS } from '../../utils/constant';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const Process = () => {
  return (
    <section id="process" className="py-24 bg-carbon-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            label="How We Work"
            title="From Brief to Production"
            subtitle="A repeatable process that reduces surprises and ships on time."
            centered
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {PROCESS.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 120}>
              <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
                {/* Connector line — desktop only */}
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-[-50%] h-px bg-lime-500/20" />
                )}
                <div className="w-12 h-12 rounded-full border-2 border-lime-500 flex items-center justify-center mb-4 bg-lime-500/10 relative z-10">
                  <span className="font-mono text-sm font-bold text-lime-500">{step.step}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
