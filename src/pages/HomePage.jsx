import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Expertise from '../components/sections/Expertise';
import CaseStudies from '../components/sections/CaseStudies';
import Technologies from '../components/sections/Technologies';
import Solutions from '../components/sections/Solutions';

const HomePage = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Solutions />
      <Services />
      <Expertise />
      <CaseStudies />
      <Technologies />
      <About />
      <Contact />
    </main>
  );
};

export default HomePage;