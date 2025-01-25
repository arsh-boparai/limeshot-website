import React from 'react';
import { ArrowUpRight, Code, Globe, CpuIcon} from 'lucide-react';

const PORTFOLIO_CATEGORIES = [
  {
    title: "Web Applications",
    icon: Globe,
    examples: [
      {
        type: "Enterprise Portal",
        techs: ["React", "Node.js", "GraphQL"],
        features: ["Real-time Updates", "Multi-tenant Architecture", "Advanced Analytics"]
      },
      {
        type: "E-commerce Platform",
        techs: ["Next.js", "PostgreSQL", "Redis"],
        features: ["High Performance", "Scalable Infrastructure", "Payment Integration"]
      }
    ]
  },
  {
    title: "Mobile Solutions",
    icon: Code,
    examples: [
      {
        type: "Cross-platform App",
        techs: ["React Native", "Firebase", "Redux"],
        features: ["Offline Support", "Push Notifications", "Social Integration"]
      },
      {
        type: "Native Applications",
        techs: ["Swift", "Kotlin", "REST APIs"],
        features: ["Native Performance", "Device Features", "Secure Storage"]
      }
    ]
  },
  {
    title: "AI & Analytics",
    icon: CpuIcon,
    examples: [
      {
        type: "ML Platform",
        techs: ["Python", "TensorFlow", "AWS"],
        features: ["Predictive Models", "Data Processing", "API Integration"]
      },
      {
        type: "Analytics Dashboard",
        techs: ["D3.js", "Python", "PostgreSQL"],
        features: ["Real-time Analytics", "Custom Reports", "Data Visualization"]
      }
    ]
  }
];

const PortfolioCategory = ({ title, icon: Icon, examples }) => (
  <div className="bg-white rounded-xl p-8 shadow-lg">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-primary-50 rounded-xl">
        <Icon className="w-6 h-6 text-primary-500" />
      </div>
      <h3 className="text-xl font-semibold ml-4 text-gray-900">{title}</h3>
    </div>

    <div className="space-y-8">
      {examples.map((example, index) => (
        <div key={index} className="relative">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-medium text-gray-900">{example.type}</h4>
            <ArrowUpRight className="w-4 h-4 text-primary-500" />
          </div>
          
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {example.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-50 text-gray-600 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <ul className="space-y-2">
              {example.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600 text-sm flex items-center">
                  <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CaseStudies = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our diverse portfolio of successful projects and solutions 
            that showcase our technical expertise and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_CATEGORIES.map((category, index) => (
            <PortfolioCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;