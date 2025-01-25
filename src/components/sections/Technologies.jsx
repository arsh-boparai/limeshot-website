import React from 'react';
import { Cloud, Database, Shield, Workflow } from 'lucide-react';

const CloudPlatform = ({ name, features }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-500 
                  transition-all duration-300 hover:shadow-lg">
    <h3 className="text-xl font-semibold mb-4 text-gray-900">{name}</h3>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start text-gray-600">
          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2"></div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const DatabaseFeature = ({ title, description }) => (
  <div className="flex items-start">
    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2"></div>
    <div>
      <h4 className="font-medium text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Technologies = () => {
  const cloudFeatures = {
    'AWS': [
      'EC2 & ECS for Containerization',
      'S3 for Cloud Storage',
      'RDS & DynamoDB',
      'Lambda Functions'
    ],
    'Azure': [
      'Azure Kubernetes Service',
      'Azure Functions',
      'Cosmos DB',
      'Azure DevOps'
    ],
    'GCP': [
      'Google Kubernetes Engine',
      'Cloud Functions',
      'BigQuery',
      'Cloud Storage'
    ]
  };

  const mongoDBFeatures = [
    {
      title: 'High Scalability',
      description: 'Horizontal scaling with automatic sharding'
    },
    {
      title: 'Real-time Analytics',
      description: 'Aggregation pipeline for complex data analysis'
    },
    {
      title: 'Multi-cloud Deployment',
      description: 'MongoDB Atlas for AWS, Azure, and GCP'
    },
    {
      title: 'Advanced Security',
      description: 'Field-level encryption and role-based access'
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Cloud & Database Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in cloud-native development and NoSQL solutions, leveraging 
            cutting-edge technologies to build scalable applications.
          </p>
        </div>

        {/* Cloud Platforms */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-gray-900">
            Cloud Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(cloudFeatures).map(([platform, features]) => (
              <CloudPlatform key={platform} name={platform} features={features} />
            ))}
          </div>
        </div>

        {/* MongoDB Expertise */}
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-primary-50 rounded-lg">
              <Database className="w-6 h-6 text-primary-500" />
            </div>
            <h3 className="text-2xl font-semibold ml-3 text-gray-900">MongoDB Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mongoDBFeatures.map((feature, index) => (
              <DatabaseFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;