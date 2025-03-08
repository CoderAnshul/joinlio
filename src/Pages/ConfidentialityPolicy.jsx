import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [activeTab, setActiveTab] = useState('terms');
  
  // Terms data structure
  const termsData = {
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        content: "Welcome to Joinlio! These Terms and Conditions govern your access and use of Joinlio's website and platform. By using our services, you agree to comply with these terms. If you do not agree, please do not use Joinlio."
      },
      {
        id: "definitions",
        title: "2. Definitions",
        contentType: "bulletList",
        bulletPoints: [
          {
            title: '"Joinlio"',
            description: "– Refers to our platform, website, and services."
          },
          {
            title: '"User" / "You"',
            description: "– Any person accessing or using Joinlio."
          },
          {
            title: '"We" / "Us" / "Our"',
            description: "– Refers to Joinlio and its management."
          },
          {
            title: '"Content"',
            description: "– Any text, images, videos, messages, or information shared on the platform."
          }
        ]
      },
      {
        id: "eligibility",
        title: "3. Eligibility & Account Registration",
        content: "To use Joinlio, you must:",
        contentType: "bulletList",
        bulletPoints: [
          {
            title: "Be at least 16 years old",
            description: " (or the minimum required age in your country)."
          },
          {
            title: "Provide accurate and complete information",
            description: " during registration."
          },
          {
            title: "Keep your login credentials confidential",
            description: " and not share them with others."
          }
        ],
        additionalContent: "We reserve the right to suspend or terminate accounts that provide false information or violate these terms."
      },
      {
        id: "acceptable-use",
        title: "4. Acceptable Use Policy",
        content: "By using Joinlio, you agree to:",
        contentType: "bulletList",
        positivePoints: [
          "Use the platform legally and ethically.",
          "Respect other users and their privacy.",
          "Comply with all applicable laws and regulations."
        ],
        negativePoints: [
          "Post misleading, harmful, or offensive content.",
          "Engage in harassment, bullying, or unlawful activity.",
          "Attempt to hack, disrupt, or interfere with Joinlio's services.",
          "Use automated tools (bots, scrapers) without permission."
        ],
        additionalContent: "Violation of this policy may lead to account suspension or legal action."
      },
      {
        id: "content-ownership",
        title: "5. Content Ownership & Licensing",
        subSections: [
          {
            id: "your-content",
            title: "5.1 Your Content",
            contentType: "bulletList",
            bulletPoints: [
              {
                description: "You retain ownership of the content you post."
              },
              {
                description: "By sharing content on Joinlio, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute it for platform functionality."
              }
            ]
          },
          {
            id: "our-content",
            title: "5.2 Our Content",
            contentType: "bulletList",
            bulletPoints: [
              {
                description: "All Joinlio trademarks, logos, and branding are owned by us."
              },
              {
                description: "You may not copy, modify, or distribute our content without permission."
              }
            ]
          }
        ]
      },
      {
        id: "privacy",
        title: "6. Privacy & Data Protection",
        contentType: "bulletList",
        bulletPoints: [
          {
            description: "Joinlio complies with UK GDPR, EU GDPR, and CCPA regulations."
          },
          {
            description: "We collect and process personal data as outlined in our Privacy Policy."
          },
          {
            description: "You have the right to access, modify, or request deletion of your data."
          }
        ],
        additionalContent: "For details, refer to our Privacy Policy."
      },
      {
        id: "third-party",
        title: "7. Third-Party Links & Services",
        content: "Joinlio may contain links to third-party websites or services. We do not control and are not responsible for their content or policies. Use them at your own risk."
      },
      {
        id: "liability",
        title: "8. Limitation of Liability",
        content: "To the fullest extent permitted by law:",
        contentType: "bulletList",
        bulletPoints: [
          {
            description: 'Joinlio is provided "as is" and "as available" without warranties.'
          },
          {
            description: "We are not liable for any indirect, incidental, or consequential damages."
          },
          {
            description: "We do not guarantee uninterrupted service or error-free performance."
          }
        ],
        additionalContent: "If you are dissatisfied with our service, your sole remedy is to stop using Joinlio."
      },
      {
        id: "termination",
        title: "9. Account Termination & Suspension",
        content: "We may suspend or terminate your account if:",
        contentType: "bulletList",
        bulletPoints: [
          {
            description: "You violate these Terms and Conditions."
          },
          {
            description: "We detect fraudulent or abusive activity."
          },
          {
            description: "We are required to do so by law."
          }
        ],
        additionalContent: "You may close your account anytime by contacting contact@joinlio.com."
      },
      {
        id: "changes",
        title: "10. Changes to These Terms",
        content: "Joinlio reserves the right to modify these Terms and Conditions. Updates will be posted on our platform, and your continued use indicates acceptance of the revised terms."
      },
      {
        id: "governing-law",
        title: "11. Governing Law & Dispute Resolution",
        content: "These Terms are governed by the laws of the United Kingdom.",
        contentType: "bulletList",
        bulletPoints: [
          {
            description: "Disputes will be resolved through negotiation, mediation, or arbitration before court action."
          },
          {
            description: "If court action is necessary, it will be in the UK jurisdiction."
          }
        ]
      },
      {
        id: "contact",
        title: "12. Contact Information",
        content: "For questions or legal inquiries, contact us at:",
        contentType: "bulletList",
        bulletPoints: [
          {
            title: "Email",
            description: ": contact@joinlio.com"
          }
        ]
      }
    ]
  };

  // Initialize expandedSections with all sections open
  const [expandedSections, setExpandedSections] = useState(
    termsData.sections.reduce((acc, section) => {
      acc[section.id] = true;
      return acc;
    }, {})
  );

  const toggleSection = (sectionId) => {
    setExpandedSections({
      ...expandedSections,
      [sectionId]: !expandedSections[sectionId]
    });
  };

  // Render content based on its type
  const renderContent = (section) => {
    if (section.contentType === 'bulletList') {
      return (
        <div>
          {section.content && <p className="mb-3 text-gray-600">{section.content}</p>}
          
          {section.bulletPoints && (
            <ul className="space-y-2 pl-5 mb-3">
              {section.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    {point.title && <strong>{point.title}</strong>}
                    {point.description}
                  </span>
                </li>
              ))}
            </ul>
          )}
          
          {section.positivePoints && (
            <div className="mb-3">
              <ul className="space-y-2 pl-5">
                {section.positivePoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {section.negativePoints && (
            <div className="mb-3">
              <h4 className="font-medium mb-2 text-gray-700">You must NOT:</h4>
              <ul className="space-y-2 pl-5">
                {section.negativePoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-500 mr-2 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {section.additionalContent && <p className="text-gray-600">{section.additionalContent}</p>}
        </div>
      );
    }
    
    return <p className="text-gray-600">{section.content}</p>;
  };

  const renderSection = (section) => {
    if (section.subSections) {
      return (
        <div key={section.id} className="border-b border-gray-200 pb-4 mb-4 last:border-0">
          <button 
            className="flex justify-between items-center w-full text-left font-medium text-blue-600 hover:text-blue-500 transition-colors py-2"
            onClick={() => toggleSection(section.id)}
          >
            <span className="text-xl">{section.title}</span>
            <span>
              {expandedSections[section.id] ? 
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg> : 
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              }
            </span>
          </button>
          
          {expandedSections[section.id] && (
            <div className="mt-3 pl-4">
              {section.subSections.map(subSection => (
                <div key={subSection.id} className="mb-4">
                  <h4 className="text-lg font-medium text-blue-600 mb-2">{subSection.title}</h4>
                  {renderContent(subSection)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    // Keep the rest of the function as is
    return (
      <div key={section.id} className="border-b border-gray-200 pb-4 mb-4 last:border-0">
        <button 
          className="flex justify-between items-center w-full text-left font-medium text-blue-600 hover:text-blue-500 transition-colors py-2"
          onClick={() => toggleSection(section.id)}
        >
          <span className="text-xl">{section.title}</span>
          <span>
            {expandedSections[section.id] ? 
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg> : 
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            }
          </span>
        </button>
        
        {expandedSections[section.id] && (
          <div className="mt-3 pl-4">
            {renderContent(section)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-700 rounded-lg shadow-lg p-8 mb-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions of Joinlio</h1>
          <p className="text-lg opacity-90">Please read these terms carefully before using our platform.</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {termsData.sections.map(section => renderSection(section))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Last updated: March 2025</p>
          <p className="mt-2">© 2025 Joinlio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;