import React from 'react';
import { Code, Cloud, Database, Shield, Cog, Rocket } from 'lucide-react';

const EXPERTISE = [
  {
    icon: Code,
    title: "Technical Excellence",
    description: "Full-stack development expertise with modern frameworks and languages",
    areas: ["React & Node.js", "Python & Django", "Java & Spring Boot"]
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable and resilient cloud infrastructure solutions",
    areas: ["AWS & Azure", "Kubernetes", "Microservices"]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data solutions for enterprise applications",
    areas: ["Big Data Processing", "Data Analytics", "ETL Pipelines"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security practices and standards",
    areas: ["GDPR Compliance", "Data Protection", "Security Audits"]
  },
  {
    icon: Cog,
    title: "DevOps Practices",
    description: "Automated deployment and continuous integration",
    areas: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring"]
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "High-performance applications at scale",
    areas: ["Load Balancing", "Caching Strategies", "Database Optimization"]
  }
];

const ExpertiseCard = ({ icon: Icon, title, description, areas }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-primary-50 rounded-lg">
        <Icon className="w-6 h-6 text-primary-500" />
      </div>
      <h3 className="text-xl font-semibold ml-3 text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {areas.map((area, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
          {area}
        </li>
      ))}
    </ul>
  </div>
);

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Technical Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies and industry best practices to 
            deliver exceptional software solutions that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTISE.map((item, index) => (
            <ExpertiseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;