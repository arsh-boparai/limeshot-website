import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TerminalBlock from '../ui/TerminalBlock';
import { STATS } from '../../utils/constant';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_560px] gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <span className="section-label">Senior Technical Consultant</span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mt-3 mb-6">
              I Build{' '}
              <span className="text-lime-500">Production-Grade</span>
              <br className="hidden sm:block" />
              {' '}Apps That Scale
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-8">
              8+ years shipping React, React Native, and AI-powered applications
              for logistics, mobility, and enterprise clients across North America.
              No agency bloat — just senior execution.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="btn-lime">
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/work" className="btn-ghost">
                See My Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/[0.06]">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-heading font-bold text-lime-500">
                    {value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Terminal */}
          <div className="w-full hidden sm:block">
            <div className="max-h-[400px] sm:max-h-none overflow-hidden">
              <TerminalBlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
