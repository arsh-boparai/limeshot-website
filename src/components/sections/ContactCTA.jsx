import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '../../utils/constant';
import ScrollReveal from '../ui/ScrollReveal';

const ContactCTA = () => {
  return (
    <section className="py-24 bg-dot-grid">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <span className="section-label">Ready to Start?</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 mb-6 leading-tight">
            Let's Build Something Real
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            I'm selective about the projects I take on — which means the ones I do
            take on get my full focus. If you have a serious product challenge, let's talk.
          </p>

          {/* Availability */}
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-white/[0.08] bg-carbon-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
            </span>
            <span className="text-sm text-gray-400">{COMPANY.availability}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-lime">
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`mailto:${COMPANY.email}`} className="btn-ghost">
              {COMPANY.email}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactCTA;
