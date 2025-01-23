import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import { Helmet } from 'react-helmet';

function App() {
  // Update scroll position on hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash if present
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Helmet>
        <title>Limeshot Digital Solutions | Web, Mobile & AI Services</title>
        <meta name="description" content="Transform your business with Limeshot Digital Solutions. Expert web development, mobile apps, and AI-driven marketing services. 5+ years of digital excellence." />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Limeshot Digital Solutions | Digital Transformation Experts" />
        <meta property="og:description" content="Transform your business with our expert web development, mobile apps, and AI-driven solutions. 5+ years of digital excellence." />
        <meta property="og:site_name" content="Limeshot Digital Solutions" />
        
        {/* Keywords and additional SEO meta tags */}
        <meta name="keywords" content="web development, mobile apps, AI solutions, digital transformation, custom software, digital marketing, tech solutions" />
        <meta name="author" content="Limeshot Digital Solutions" />
        
        {/* Viewport and other technical meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#84cc16" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://limeshot.com" />
      </Helmet>

      <Layout>
        <main className="overflow-hidden">
          {/* Hero Section */}
          <Hero />

          {/* Services Section - What we offer */}
          <Services />

          {/* About Section - Our story and achievements */}
          <About />

          {/* Contact Section - Get in touch */}
          <Contact />
        </main>
      </Layout>
    </>
  );
}

export default App;