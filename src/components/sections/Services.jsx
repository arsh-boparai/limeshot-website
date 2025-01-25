import React from 'react';
import { Monitor, Smartphone, Cpu, Database, Cloud, Shield } from 'lucide-react';

const SERVICES = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Single Page Applications",
      "Progressive Web Apps",
      "E-commerce Solutions"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    features: [
      "iOS & Android Apps",
      "Cross-platform Solutions",
      "Mobile-first Design"
    ]
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Intelligent automation and data-driven insights to transform your business operations.",
    features: [
      "Machine Learning",
      "Predictive Analytics",
      "Natural Language Processing"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and solutions that grow with your business needs.",
    features: [
      "Cloud Migration",
      "Serverless Architecture",
      "Cloud Optimization"
    ]
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Comprehensive data management and analytics solutions for informed decision-making.",
    features: [
      "Big Data Processing",
      "Real-time Analytics",
      "Data Warehousing"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets and data.",
    features: [
      "Security Audits",
      "Threat Protection",
      "Compliance Solutions"
    ]
  }
];

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-primary-500" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600 text-sm">
          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            End-to-end software development services that transform ideas into 
            powerful, scalable solutions for the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;