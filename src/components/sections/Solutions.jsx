import React from 'react';
import { Server, ShoppingBag, Activity, Building2, Briefcase, Microscope } from 'lucide-react';

const SOLUTIONS = [
  {
    icon: Server,
    title: "Enterprise Systems",
    description: "Custom enterprise software solutions that streamline operations and boost efficiency.",
    features: [
      "ERP Systems Integration",
      "Business Process Automation",
      "Legacy System Modernization"
    ]
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description: "Scalable e-commerce platforms that deliver exceptional shopping experiences.",
    features: [
      "Custom E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management Systems"
    ]
  },
  {
    icon: Activity,
    title: "HealthTech Solutions",
    description: "Digital healthcare solutions that improve patient care and operational efficiency.",
    features: [
      "Patient Management Systems",
      "Medical Data Analytics",
      "Healthcare API Integration"
    ]
  },
  {
    icon: Building2,
    title: "Real Estate Tech",
    description: "Digital solutions for modern real estate business operations and management.",
    features: [
      "Property Management Systems",
      "Virtual Tour Platforms",
      "Real Estate Analytics"
    ]
  },
  {
    icon: Briefcase,
    title: "FinTech Solutions",
    description: "Secure and compliant financial technology solutions for modern banking needs.",
    features: [
      "Banking Platforms",
      "Payment Processing",
      "Financial Analytics"
    ]
  },
  {
    icon: Microscope,
    title: "Research & Analytics",
    description: "Data-driven solutions for research, analysis, and business intelligence.",
    features: [
      "Big Data Analytics",
      "Research Platforms",
      "Predictive Analytics"
    ]
  }
];

const SolutionCard = ({ icon: Icon, title, description, features }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-primary-500" />
    </div>
    
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start text-gray-600">
          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2"></div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Industry-Specific Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver tailored digital solutions across various industries, helping 
            businesses overcome unique challenges and achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 
                     border-2 border-primary-500 text-primary-500 rounded-lg 
                     font-semibold hover:bg-primary-500 hover:text-white 
                     transition-all duration-300"
          >
            Explore Custom Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;