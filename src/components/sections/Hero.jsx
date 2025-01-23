
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: '5+', label: 'Years of Excellence' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '50+', label: 'Team Members' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="min-h-screen flex items-center pt-16 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 z-0"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full py-24">
        <h1 className="hero-heading">
          Transform Your Digital<br />
          Presence with Innovation
        </h1>
        <p className="hero-subtext">
          Award-winning digital solutions that drive growth and innovation. 
          5 years of excellence in web, mobile, and AI development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#portfolio" className="btn-secondary">
            View Our Work <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Stats */}
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-item">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;