import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LocalFlowWidget from './components/ui/LocalFlowWidget';

function App() {
  useEffect(() => {
    emailjs.init("h5y1lHlzO7O4mXQB-");
  }, []);

  return (
    <>
      <Helmet>
        <title>Limeshot Digital Solutions | Senior Technical Consultant</title>
        <meta
          name="description"
          content="Arsh Boparai — Senior Frontend Technical Lead. I build production-grade React, React Native, and AI-powered applications. 8+ years experience, North America."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Limeshot Digital Solutions | Senior Technical Consultant" />
        <meta
          property="og:description"
          content="Senior technical consultant specialising in React, React Native, and AI agent integration. Production-grade apps that scale."
        />
        <meta property="og:site_name" content="Limeshot Digital Solutions" />
        <meta
          name="keywords"
          content="React developer, React Native, TypeScript, AI integration, senior consultant, frontend lead, Firebase, GCP, Azure, tech consultant Canada"
        />
        <meta name="author" content="Arsh Boparai" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#84CC16" />
        <link rel="canonical" href="https://limeshotdigital.com" />
      </Helmet>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Route>
      </Routes>
      <LocalFlowWidget />
    </>
  );
}

export default App;
