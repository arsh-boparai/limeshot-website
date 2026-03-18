import React from 'react';
import { FileText, ShieldCheck, AlertCircle, Scale } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "January 20, 2024";

  const sections = [
    {
      title: "Service Agreement",
      icon: FileText,
      content: [
        "These Terms of Service ('Terms') govern your use of services provided by Limeshot Digital Solutions ('we', 'us', or 'our').",
        "By accessing or using our services, you agree to be bound by these Terms.",
        "We reserve the right to modify these Terms at any time, with notice provided on our website.",
        "Your continued use of our services following any changes constitutes acceptance of those changes."
      ]
    },
    {
      title: "Service Usage",
      icon: ShieldCheck,
      subsections: [
        {
          subtitle: "Account Responsibilities",
          points: [
            "You are responsible for maintaining the confidentiality of your account",
            "You must provide accurate and complete information",
            "You must notify us of any unauthorized account access",
            "We reserve the right to suspend or terminate accounts for violations"
          ]
        },
        {
          subtitle: "Acceptable Use",
          points: [
            "Services must be used in compliance with all applicable laws",
            "No unauthorized access or interference with our systems",
            "No distribution of malware or harmful code",
            "No engagement in fraudulent or deceptive practices"
          ]
        }
      ]
    },
    {
      title: "Intellectual Property",
      icon: Scale,
      subsections: [
        {
          subtitle: "Ownership",
          points: [
            "We retain all rights to our services and technology",
            "Custom development work ownership as specified in contracts",
            "You retain ownership of your data and content",
            "License grants as specified in service agreements"
          ]
        },
        {
          subtitle: "Restrictions",
          points: [
            "No reverse engineering of our software",
            "No unauthorized copying or distribution",
            "No removal of proprietary notices",
            "No unauthorized use of our trademarks"
          ]
        }
      ]
    },
    {
      title: "Limitation of Liability",
      icon: AlertCircle,
      content: [
        "Our services are provided 'as is' without any warranties",
        "We are not liable for indirect, incidental, or consequential damages",
        "Maximum liability limited to fees paid for services",
        "Force majeure events excluded from liability"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-carbon-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-carbon-800 rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="text-gray-400 mb-8">
            <p>Last updated: {lastUpdated}</p>
            <p className="mt-4">
              Please read these Terms of Service carefully before using our services. 
              These terms contain important information about your legal rights and obligations.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="border-t border-white/[0.06] pt-8 first:border-t border-white/[0.06]-0 first:pt-0">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-lime-500/10 rounded-lg mr-4">
                    <section.icon className="w-6 h-6 text-lime-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    {section.title}
                  </h2>
                </div>

                {section.content && (
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-400">
                        <div className="w-1.5 h-1.5 bg-lime-500/100 rounded-full mt-2 mr-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-lg font-medium text-white mb-3">
                          {subsection.subtitle}
                        </h3>
                        <ul className="space-y-2">
                          {subsection.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start text-gray-400">
                              <div className="w-1.5 h-1.5 bg-lime-500/100 rounded-full mt-2 mr-2"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:contact@limeshotdigital.com" className="text-lime-500 hover:text-lime-400">
              contact@limeshotdigital.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;