import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LocalFlowWidget from './components/ui/LocalFlowWidget';
function App() {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("h5y1lHlzO7O4mXQB-");
  }, []);

  return (
    <>
      <Helmet>
        <title>Limeshot Digital Solutions | Enterprise Software Development</title>
        <meta 
          name="description" 
          content="Transform your enterprise with custom software solutions. Specializing in web development, cloud architecture, AI integration, and digital transformation." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Limeshot Digital Solutions | Enterprise Software Development" />
        <meta 
          property="og:description" 
          content="Enterprise-grade software development solutions for digital transformation. Experts in custom development, cloud architecture, and AI integration." 
        />
        <meta property="og:site_name" content="Limeshot Digital Solutions" />
        <meta 
          name="keywords" 
          content="enterprise software, custom development, cloud solutions, AI integration, digital transformation, web development, mobile apps, cybersecurity" 
        />
        <meta name="author" content="Limeshot Digital Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="canonical" href="https://limeshotdigital.com" />
      </Helmet>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Route>
      </Routes>
      <LocalFlowWidget />

    </>
  );
}

export default App;