import React from 'react';
import { ArrowRight, Code, Rocket, Shield } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: '98%', label: 'Success Rate' },
    { value: '50+', label: 'Solutions Delivered' },
    { value: '10+', label: 'Enterprise Clients' },
    { value: '24/7', label: 'Technical Support' }
  ];

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Build Your Next 
          <span className="block">Digital Success with
            <span className="text-primary-500"> Expert Engineers</span>
          </span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center text-gray-600">
            <Code className="w-5 h-5 mr-2 text-primary-500" />
            <span>Custom Development</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Rocket className="w-5 h-5 mr-2 text-primary-500" />
            <span>Scalable Solutions</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Shield className="w-5 h-5 mr-2 text-primary-500" />
            <span>Enterprise Security</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Transform your ideas into powerful digital solutions. We specialize in custom 
          software development, enterprise applications, and cutting-edge AI integration 
          that drives real business growth.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold 
                         hover:bg-primary-600 transition-all duration-200 inline-flex items-center
                         shadow-lg hover:shadow-xl">
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold 
                         border border-gray-200 hover:border-primary-500 hover:text-primary-500 
                         transition-all duration-200 inline-flex items-center">
            View Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Stats with enhanced presentation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl 
                                      transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;