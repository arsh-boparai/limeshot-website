import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  const lastUpdated = "January 20, 2024";

  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information",
          details: [
            "Name and contact information",
            "Email address and phone number",
            "Business information if applicable",
            "Payment information when services are purchased"
          ]
        },
        {
          subtitle: "Technical Information",
          details: [
            "IP address and browser type",
            "Device information",
            "Cookies and usage data",
            "Log files and analytics data"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Service Provision",
          details: [
            "To provide and maintain our services",
            "To notify you about changes to our services",
            "To provide customer support",
            "To process transactions"
          ]
        },
        {
          subtitle: "Improvement and Analysis",
          details: [
            "To improve our services",
            "To analyze usage patterns",
            "To develop new features",
            "To measure service effectiveness"
          ]
        }
      ]
    },
    {
      title: "Data Protection",
      icon: Shield,
      content: [
        {
          subtitle: "Security Measures",
          details: [
            "SSL/TLS encryption for data transmission",
            "Secure data storage systems",
            "Regular security audits",
            "Access control and authentication"
          ]
        },
        {
          subtitle: "Data Retention",
          details: [
            "Data retained only as long as necessary",
            "Regular data review and cleanup",
            "Option to request data deletion",
            "Compliance with data protection laws"
          ]
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Limeshot Digital Solutions</title>
        <meta 
          name="description" 
          content="Our privacy policy outlines how we collect, use, and protect your personal information." 
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg">
          {/* Header Section */}
          <div className="p-8 border-b border-gray-100">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-500 mt-2">Last updated: {lastUpdated}</p>
          </div>
          
          {/* Main Content */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg">
                At Limeshot Digital Solutions, we take your privacy seriously. This Privacy Policy 
                describes how we collect, use, and protect your personal information when you use 
                our services.
              </p>

              <div className="space-y-12 mt-12">
                {sections.map((section, index) => (
                  <div key={index} className="border-t pt-8 first:border-t-0 first:pt-0">
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-primary-50 rounded-lg mr-4">
                        <section.icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-6 pl-12">
                      {section.content.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="text-lg font-medium text-gray-900 mb-3">
                            {subsection.subtitle}
                          </h3>
                          <ul className="space-y-3">
                            {subsection.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start text-gray-600">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2"></div>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div className="mt-12 pt-8 border-t">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at:{' '}
                  <a href="mailto:contact@limeshotdigital.com" 
                     className="text-primary-500 hover:text-primary-600 font-medium">
                    contact@limeshotdigital.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;