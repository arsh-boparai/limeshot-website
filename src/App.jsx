import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import TraveoPage from './pages/TraveoPage';
import TraveoPrivacyPolicy from './pages/TraveoPrivacyPolicy';
import TraveoTermsOfService from './pages/TraveoTermsOfService';
import LocalFlowWidget from './components/ui/LocalFlowWidget';

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Limeshot Digital',
  url: 'https://limeshotdigital.com',
  description: 'Limeshot Digital builds production-grade web apps, mobile apps, and SaaS products. Our team of engineers, architects, and QA specialists deliver software that scales.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Ontario',
    addressCountry: 'CA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@limeshotdigital.com',
  },
};

function App() {
  return (
    <>
      <Helmet>
        <title>Limeshot Digital | Software Development &amp; Product Studio</title>
        <meta
          name="description"
          content="Limeshot Digital builds production-grade web apps, mobile apps, and SaaS products. Our team of engineers, architects, and QA specialists deliver software that scales."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Limeshot Digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#84CC16" />
        <meta
          name="keywords"
          content="software development agency Canada, react development company, mobile app development, AI integration, software studio Ontario, react native development, enterprise software"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Limeshot Digital | Software Development & Product Studio" />
        <meta
          property="og:description"
          content="Limeshot Digital builds production-grade web apps, mobile apps, and SaaS products. Our team of engineers, architects, and QA specialists deliver software that scales."
        />
        <meta property="og:site_name" content="Limeshot Digital" />
        <meta property="og:url" content="https://limeshotdigital.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Limeshot Digital | Software Development & Product Studio" />
        <meta name="twitter:description" content="Production-grade web apps, mobile apps, and SaaS products. Engineers, architects, and QA specialists." />
        <link rel="canonical" href="https://limeshotdigital.com" />
        <script type="application/ld+json">{JSON.stringify(ORG_SCHEMA)}</script>
      </Helmet>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/products/traveo" element={<TraveoPage />} />
          <Route path="/products/traveo/privacy" element={<TraveoPrivacyPolicy />} />
          <Route path="/products/traveo/terms" element={<TraveoTermsOfService />} />
        </Route>
      </Routes>
      <LocalFlowWidget />
    </>
  );
}

export default App;
