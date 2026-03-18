import { TECH_STACK } from '../../utils/constant';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-carbon-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            label="Tech Stack"
            title="Tools I Ship With"
            subtitle="A focused set of technologies I know deeply — not a laundry list."
          />
        </ScrollReveal>

        <div className="mt-12 space-y-8">
          {Object.entries(TECH_STACK).map(([group, techs], i) => (
            <ScrollReveal key={group} delay={i * 80}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-36 flex-shrink-0">
                  <span
                    className={`text-xs font-mono font-medium tracking-widest uppercase ${
                      group === 'AI & Agents' ? 'text-lime-500' : 'text-gray-500'
                    }`}
                  >
                    {group}
                  </span>
                </div>
                <div
                  className={`flex flex-wrap gap-2 ${
                    group === 'AI & Agents'
                      ? 'p-3 rounded-lg border border-lime-500/20 bg-lime-500/[0.04]'
                      : ''
                  }`}
                >
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className={`tech-pill ${
                        group === 'AI & Agents'
                          ? 'border-lime-500/20 text-lime-400/80'
                          : ''
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
