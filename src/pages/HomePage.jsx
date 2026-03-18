import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import CaseStudies from '../components/sections/CaseStudies';
import TechStack from '../components/sections/TechStack';
import Process from '../components/sections/Process';
import ContactCTA from '../components/sections/ContactCTA';

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <CaseStudies />
      <TechStack />
      <Process />
      <ContactCTA />
    </main>
  );
};

export default HomePage;
