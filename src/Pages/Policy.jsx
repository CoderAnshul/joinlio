import React, { useState } from 'react';

const PrivacyPolicyUI = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections({
      ...expandedSections,
      [sectionId]: !expandedSections[sectionId]
    });
  };

  // Policy data structure - Updated with bullet point lists where appropriate
  const policyData = {
    overview: {
      title: "Privacy Policy Overview",
      content: "Welcome to Joinlio! Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our platform, ensuring compliance with the General Data Protection Regulation (GDPR), the UK Data Protection Act 2018, the California Consumer Privacy Act (CCPA), and other applicable laws. By accessing or using Joinlio, you acknowledge and accept the practices described in this policy."
    },
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        content: "Welcome to Joinlio! Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our platform, ensuring compliance with the General Data Protection Regulation (GDPR), the UK Data Protection Act 2018, the California Consumer Privacy Act (CCPA), and other applicable laws. By accessing or using Joinlio, you acknowledge and accept the practices described in this policy. If you do not agree, please refrain from using our services."
      },
      {
        id: "data-collection",
        title: "2. What Data We Collect",
        subsections: [
          {
            id: "direct-data",
            title: "2.1 Personal Data You Provide Directly",
            contentType: "bulletList",
            intro: "We collect personal data when you:",
            bulletPoints: [
              {
                title: "Create an account",
                description: "– Name, email, phone number, date of birth, education details."
              },
              {
                title: "Complete your profile",
                description: "– Profile picture, academic background, interests, personal statement."
              },
              {
                title: "Engage in platform activities",
                description: "– Messages, chat interactions, forum discussions, posts."
              },
              {
                title: "Communicate with us",
                description: "– Support requests, feedback, complaints."
              }
            ]
          },
          {
            id: "automatic-data",
            title: "2.2 Data We Collect Automatically",
            contentType: "bulletList",
            intro: "We automatically collect data such as:",
            bulletPoints: [
              {
                title: "Usage Data",
                description: "– IP address, browser type, pages visited, session duration."
              },
              {
                title: "Device Information",
                description: "– Operating system, device model, unique identifiers."
              },
              {
                title: "Cookies & Tracking Data",
                description: "– Browsing behavior, preferences, session tracking."
              }
            ]
          }
        ]
      },
      {
        id: "data-usage",
        title: "3. How We Use Your Data",
        contentType: "bulletList",
        intro: "We process personal data for the following purposes:",
        bulletPoints: [
          {
            title: "To provide services",
            description: "– Enabling user interactions, messaging, profile management."
          },
          {
            title: "To personalize user experience",
            description: "– Tailoring recommendations and engagement."
          },
          {
            title: "To improve our platform",
            description: "– Analyzing trends and user behavior."
          },
          {
            title: "To enhance security",
            description: "– Fraud prevention, abuse detection, and monitoring."
          },
          {
            title: "To comply with legal obligations",
            description: "– Regulatory compliance, user rights enforcement."
          }
        ]
      },
      {
        id: "legal-basis",
        title: "4. Legal Basis for Processing",
        content: "Under the UK & EU GDPR, we process data based on: Consent – When you voluntarily provide information (e.g., signing up, subscribing to emails). Contractual Necessity – To fulfill our obligations to provide services. Legitimate Interests – Improving security, optimizing performance, fraud prevention. Legal Compliance – When required by law or regulatory authorities. For California (CCPA) users, we ensure your rights, including access, deletion, and opt-out options."
      },
      {
        id: "data-protection",
        title: "5. How We Store & Protect Your Data",
        contentType: "bulletList",
        intro: "We implement industry-standard security measures to protect your data:",
        bulletPoints: [
          {
            title: "Encryption",
            description: "– Secure storage and transmission of data."
          },
          {
            title: "Access Control",
            description: "– Limiting access to authorized personnel."
          },
          {
            title: "Regular Audits",
            description: "– Periodic reviews of security practices."
          },
          {
            title: "Data Anonymization",
            description: "– Where applicable, for analytics and reporting."
          }
        ]
      },
      {
        id: "data-retention",
        title: "6. Data Retention Policy",
        contentType: "bulletList",
        intro: "We retain your data only as long as necessary:",
        bulletPoints: [
          {
            title: "Active Accounts",
            description: "– Data is stored while your account remains active."
          },
          {
            title: "Inactive Accounts",
            description: "– Deleted or anonymized after a retention period of [Insert Duration]."
          },
          {
            title: "Legal Requirements",
            description: "– Retained for compliance with laws (e.g., tax, fraud prevention)."
          }
        ],
        additionalContent: "You can request deletion of your account by contacting contact@joinlio.com."
      },
      {
        id: "data-sharing",
        title: "7. Sharing & Disclosure of Data",
        contentType: "bulletList",
        intro: "We DO NOT sell or rent personal data. However, we may share data with:",
        bulletPoints: [
          {
            title: "Educational Institutions",
            description: "– If you interact with their representatives."
          },
          {
            title: "Service Providers",
            description: "– Hosting, analytics, and customer support providers."
          },
          {
            title: "Legal Authorities",
            description: "– When required by law, court order, or legal process."
          },
          {
            title: "Business Transfers",
            description: "– If Joinlio undergoes a merger, acquisition, or sale."
          }
        ]
      },
      {
        id: "your-rights",
        title: "8. Your Rights",
        subsections: [
          {
            id: "gdpr-rights",
            title: "8.1 Rights Under GDPR (UK & EU Users)",
            contentType: "bulletList",
            bulletPoints: [
              {
                title: "Access",
                description: "– Request a copy of your personal data."
              },
              {
                title: "Rectification",
                description: "– Correct incorrect or incomplete data."
              },
              {
                title: "Erasure (Right to Be Forgotten)",
                description: "– Request deletion of your data."
              },
              {
                title: "Restriction",
                description: "– Limit how we process your data."
              },
              {
                title: "Portability",
                description: "– Receive your data in a structured format."
              },
              {
                title: "Objection",
                description: "– Object to processing based on legitimate interests."
              },
              {
                title: "Withdraw Consent",
                description: "– Revoke consent at any time."
              }
            ]
          },
          {
            id: "ccpa-rights",
            title: "8.2 Rights Under CCPA (California Users)",
            contentType: "bulletList",
            bulletPoints: [
              {
                title: "Know",
                description: "– Know what data is collected."
              },
              {
                title: "Request deletion",
                description: "– Request deletion of personal data."
              },
              {
                title: "Opt-out",
                description: "– Opt-out of data selling (we do not sell data)."
              }
            ]
          }
        ]
      },
      {
        id: "cookies",
        title: "9. Cookies & Tracking Technologies",
        contentType: "bulletList",
        intro: "We use cookies to:",
        bulletPoints: [
          {
            title: "Authenticate Users",
            description: "– Maintain your session."
          },
          {
            title: "Analyze Performance",
            description: "– Improve user experience."
          },
          {
            title: "Personalize Content",
            description: "– Provide relevant recommendations."
          }
        ],
        additionalContent: "Users can manage cookie settings via browser preferences."
      },
      {
        id: "international",
        title: "10. International Data Transfers",
        contentType: "bulletList",
        intro: "For users outside the UK/EU, we ensure data protection through:",
        bulletPoints: [
          {
            title: "Standard Contractual Clauses (SCCs)",
            description: "– For data transfers to non-GDPR countries."
          },
          {
            title: "Adequacy Decisions",
            description: "– Where applicable."
          }
        ]
      },
      {
        id: "third-party",
        title: "11. Third-Party Services & External Links",
        content: "Joinlio may link to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before sharing personal data."
      },
      {
        id: "updates",
        title: "12. Updates to This Privacy Policy",
        content: "We may update this Privacy Policy from time to time. Significant changes will be communicated via email or platform notifications."
      },
      {
        id: "contact",
        title: "13. Contact Us",
        content: "For questions or privacy-related concerns, contact: Email: contact@joinlio.com"
      }
    ]
  };

  // Key terms for the glossary
  const glossaryTerms = [
    { term: "Personal Data", definition: "Any information identifying a Data Subject or information relating to a Data Subject that we can identify from that data alone or in combination with other identifiers." },
    { term: "GDPR", definition: "The retained EU law version of the General Data Protection Regulation as defined in the Data Protection Act 2018." },
    { term: "Data Subject", definition: "A living, identified, or identifiable individual about whom we hold Personal Data." },
    { term: "Consent", definition: "Agreement which must be freely given, specific, informed, and be an unambiguous indication of the Data Subject's wishes." },
    { term: "Controller", definition: "The person or organization that determines when, why, and how to process Personal Data." },
    { term: "CCPA", definition: "California Consumer Privacy Act, which provides privacy rights for California residents." },
    { term: "Personal Data Breach", definition: "Any act or omission that compromises the security, confidentiality, integrity, or availability of Personal Data." },
    { term: "Privacy by Design", definition: "Implementing appropriate technical and organizational measures to ensure compliance with the UK GDPR." }
  ];

  // Render content based on its type (standard text or bullet list)
  const renderContent = (section) => {
    if (section.contentType === 'bulletList') {
      return (
        <div>
          {section.intro && <p className="mb-3 text-gray-600">{section.intro}</p>}
          <ul className="space-y-2 pl-5">
            {section.bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start text-gray-600">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-500 mr-2 mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>
                  <strong>{point.title}</strong> {point.description}
                </span>
              </li>
            ))}
          </ul>
          {section.additionalContent && <p className="mt-3 text-gray-600">{section.additionalContent}</p>}
        </div>
      );
    }
    
    return <p className="text-gray-600">{section.content}</p>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2CA2FB] to-indigo-700 rounded-lg shadow-lg p-8 mb-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Joinlio Privacy Policy</h1>
          <p className="text-lg opacity-90">Your privacy matters to us. Learn how we protect your data.</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap mb-8 gap-2 justify-center">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-[#2CA2FB] text-white' : 'bg-white text-[#2CA2FB] hover:bg-blue-100'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('policy')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'policy' ? 'bg-[#2CA2FB] text-white' : 'bg-white text-[#2CA2FB] hover:bg-blue-100'}`}
          >
            Full Policy
          </button>
          <button 
            onClick={() => setActiveTab('glossary')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'glossary' ? 'bg-[#2CA2FB] text-white' : 'bg-white text-[#2CA2FB] hover:bg-blue-100'}`}
          >
            Key Terms
          </button>
          <button 
            onClick={() => setActiveTab('rights')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'rights' ? 'bg-[#2CA2FB] text-white' : 'bg-white text-[#2CA2FB] hover:bg-blue-100'}`}
          >
            Your Rights
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#2CA2FB] mb-4">{policyData.overview.title}</h2>
              <p className="text-gray-700 leading-relaxed">{policyData.overview.content}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-[#2CA2FB] mb-3">What We Collect</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-[#2CA2FB] mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      Account information
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-[#2CA2FB] mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      Profile data
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-[#2CA2FB] mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      Platform activity
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-[#2CA2FB] mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      Usage data
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-[#2CA2FB] mb-3">Our Commitments</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-[#2CA2FB] mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      We don't sell your data
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-[#2CA2FB] mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      Industry-standard security
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-[#2CA2FB] mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      GDPR & CCPA compliant
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-[#2CA2FB] mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      You control your data
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policy' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#2CA2FB] mb-4">Full Privacy Policy</h2>
              
              {policyData.sections.map((section) => (
                <div key={section.id} className="border-b border-gray-200 pb-2 mb-4 last:border-0 bg-[#EFF6FF] px-2">
                  <button 
                    className="flex justify-between items-center w-full text-left font-medium text-[#2CA2FB] hover:text-blue-500 transition-colors py-2"
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
                    <div className="mt-3 pl-4 text-gray-600">
                      {/* Handle standard content or bullet points */}
                      {section.content && !section.contentType && <p className="mb-4">{section.content}</p>}
                      {section.contentType === 'bulletList' && renderContent(section)}
                      
                      {/* Handle subsections */}
                      {section.subsections && section.subsections.map((subsection) => (
                        <div key={subsection.id} className="mb-4">
                          <h4 className="text-lg font-medium text-[#2CA2FB] mb-2">{subsection.title}</h4>
                          {subsection.contentType === 'bulletList' ? 
                            renderContent(subsection) : 
                            <p>{subsection.content}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'glossary' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#2CA2FB] mb-4">Key Terms & Definitions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {glossaryTerms.map((item, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-[#2CA2FB] mb-2">{item.term}</h3>
                    <p className="text-gray-600">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rights' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#2CA2FB] mb-4">Your Privacy Rights</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium text-[#2CA2FB] mb-3">GDPR Rights (UK & EU Users)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-[#2CA2FB]">Right to Access</h4>
                    <p className="text-sm text-gray-600">Request a copy of your personal data</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-[#2CA2FB]">Right to Rectification</h4>
                    <p className="text-sm text-gray-600">Correct incorrect or incomplete data</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-[#2CA2FB]">Right to Erasure</h4>
                    <p className="text-sm text-gray-600">Request deletion of your data</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-[#2CA2FB]">Right to Restriction</h4>
                    <p className="text-sm text-gray-600">Limit how we process your data</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-[#2CA2FB]">Right to Portability</h4>
                    <p className="text-sm text-gray-600">Receive your data in a structured format</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-[#2CA2FB]">Right to Object</h4>
                    <p className="text-sm text-gray-600">Object to processing based on legitimate interests</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-[#2CA2FB] mb-3">CCPA Rights (California Users)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-[#2CA2FB]">Right to Know</h4>
                    <p className="text-sm text-gray-600">Know what personal data is collected about you</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-[#2CA2FB]">Right to Delete</h4>
                    <p className="text-sm text-gray-600">Request deletion of your personal data</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-[#2CA2FB]">Right to Opt-Out</h4>
                    <p className="text-sm text-gray-600">Opt-out of the sale of your personal information</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-[#2CA2FB]">Right to Non-Discrimination</h4>
                    <p className="text-sm text-gray-600">Not to be discriminated against for exercising your rights</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg mt-6 border-l-4 border-green-500">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">How to Exercise Your Rights</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>To exercise any of your rights, please contact us at: <span className="font-medium">contact@joinlio.com</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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

export default PrivacyPolicyUI;