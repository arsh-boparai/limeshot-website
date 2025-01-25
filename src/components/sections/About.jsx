import React from 'react';
import { ChevronRight, Target, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const achievements = [
    { 
      value: '200+', 
      label: 'Projects Delivered',
      subtext: 'Across various industries'
    },
    { 
      value: '50+', 
      label: 'Team Members',
      subtext: 'Technical experts'
    },
    { 
      value: '99%', 
      label: 'Client Retention',
      subtext: 'Long-term partnerships'
    },
    { 
      value: '24/7', 
      label: 'Support',
      subtext: 'Always available'
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Technical Excellence',
      description: 'We maintain high standards in code quality and architectural decisions'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Working closely with clients to understand and meet their needs'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Consistent track record of on-time project completion'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Implementing robust security measures in all solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Driving Digital Innovation Since 2020
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Limeshot Digital Solutions specializes in developing enterprise-grade 
              software solutions that help businesses scale and innovate. Our expertise 
              spans cloud architecture, custom development, and AI integration.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Full-stack development with modern technologies',
                  'Cloud-native solutions for scalability',
                  'Agile development methodology',
                  'Comprehensive post-launch support'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <ChevronRight className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-900 font-medium mb-1">
                  {achievement.label}
                </div>
                <div className="text-gray-500 text-sm">
                  {achievement.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {coreValues.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;