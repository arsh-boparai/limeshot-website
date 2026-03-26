import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import TerminalBlock from '../ui/TerminalBlock';
import { STATS } from '../../utils/constant';

const CYCLING_WORDS = ['Production Apps', 'Mobile Products', 'AI Systems'];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
        setFading(false);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMagneticMove = (e, ref) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMagneticLeave = (ref) => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <section className="relative min-h-screen flex items-center bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none animate-mesh-shift" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_560px] gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <span className="section-label">Software Development Studio</span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mt-3 mb-6">
              We Build{' '}
              <span
                className="text-lime-500 inline-block transition-opacity duration-300"
                style={{ opacity: fading ? 0 : 1 }}
              >
                {CYCLING_WORDS[wordIndex]}
              </span>
              <br className="hidden sm:block" />
              {' '}That Scale
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-8">
              A team of senior engineers, architects, and QA specialists building
              production-grade React, React Native, and AI-powered applications
              for startups and enterprise clients across North America.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/contact"
                ref={btn1Ref}
                className="btn-lime transition-transform duration-150"
                onMouseMove={(e) => handleMagneticMove(e, btn1Ref)}
                onMouseLeave={() => handleMagneticLeave(btn1Ref)}
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                ref={btn2Ref}
                className="btn-ghost transition-transform duration-150"
                onMouseMove={(e) => handleMagneticMove(e, btn2Ref)}
                onMouseLeave={() => handleMagneticLeave(btn2Ref)}
              >
                See Our Work
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float pointer-events-none">
        <span className="text-xs font-mono text-gray-600 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </div>
    </section>
  );
};

export default Hero;
