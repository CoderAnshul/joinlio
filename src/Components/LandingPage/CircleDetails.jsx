import React, { useState, useRef, useEffect } from 'react';
import rings from "../../assets/images/rings.png";
import { X, Activity, Brain, MessageSquare, Globe, Layout, Briefcase, 
         ChartBar, Users, Shield, Coins, Target, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CircleDetails = ({ boxTexts, centerHeading, centerSubHeading, centerDescription, screenIndex }) => {
  const [modalPosition, setModalPosition] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPeerModalOpen, setIsPeerModalOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const buttonRefs = useRef([]);
  const modalRef = useRef(null);
  const peerModalRef = useRef(null);

  // Body scroll lock effect
  useEffect(() => {
    if (isPeerModalOpen || isModalOpen) {
      // Save scroll position
      const scrollY = window.scrollY;
      
      // Lock body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Unlock body
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isPeerModalOpen, isModalOpen]);

  // Handle clicks outside modal to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isModalOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
      if (isPeerModalOpen && peerModalRef.current && !peerModalRef.current.contains(event.target)) {
        setIsPeerModalOpen(false);
      }
    };

    if (isModalOpen || isPeerModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, isPeerModalOpen]);

  const studentFeatures = [
    {
      icon: <Activity className="w-5 h-5 text-blue-600" />,
      title: "Activity Monitoring",
      description: "Monitor personal achievements and projects through comprehensive activity tracking."
    },
    {
      icon: <Brain className="w-5 h-5 text-blue-600" />,
      title: "Advanced AI Tools",
      description: "AI-powered progress evaluation and personalized opportunity discovery."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
      title: "Encrypted Messaging",
      description: "Secure communication system for private conversations with global peers."
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      title: "Global Networking",
      description: "Connect and collaborate with professionals worldwide."
    },
    {
      icon: <Layout className="w-5 h-5 text-blue-600" />,
      title: "User-Friendly Interface",
      description: "Clean, intuitive design for easy portfolio organization."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      title: "Project Opportunities",
      description: "Access to paid and volunteer projects with fair agreements."
    }
  ];

  const businessFeatures = [
    {
      icon: <ChartBar className="w-5 h-5 text-blue-600" />,
      title: "Performance Dashboard",
      description: "Track sales numbers, customer interactions, and gather essential feedback in real-time."
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "Direct Student Interaction",
      description: "Real-time communication with students and active participation in targeted discussions."
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      title: "Customizable Business Profile",
      description: "Showcase your brand identity, products, services, and student-specific offers."
    },
    {
      icon: <BarChart className="w-5 h-5 text-blue-600" />,
      title: "Targeted Advertising",
      description: "Place products in specialized student zones for maximum visibility."
    },
    {
      icon: <Target className="w-5 h-5 text-blue-600" />,
      title: "Cost-Effective Marketing",
      description: "Performance-based payment models to maximize your marketing budget efficiency."
    },
    {
      icon: <Coins className="w-5 h-5 text-blue-600" />,
      title: "Expansion Tools",
      description: "Analytics system to help expand reach to new student groups and campuses."
    }
  ];

  const features = screenIndex === 1 ? studentFeatures : businessFeatures;

  const handleButtonClick = (index) => {
    const button = buttonRefs.current[index];
    if (button) {
      const rect = button.getBoundingClientRect();
      setModalPosition({
        top: rect.top + window.scrollY + rect.height / 2,
        left: rect.left + window.scrollX + rect.width / 2
      });
      setIsModalOpen(true);
    }
  };

  const handleModal = (index) => {
    const button = buttonRefs.current[index];
    if (button) {
      const rect = button.getBoundingClientRect();
      setModalPosition({
        top: rect.top + window.scrollY + rect.height / 2,
        left: rect.left + window.scrollX + rect.width / 2
      });
      setIsPeerModalOpen(true);
    }
  };

  const handleBoxClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getModalSteps = () => {
    return screenIndex === 1 ? [
      { icon: "🎓", title: "Sign Up & Verify", desc: "Create your profile by verifying your student or alumni credentials." },
      { icon: "👤", title: "Set Up Your Peer Account", desc: "Build your Peer Account to document your skills, achievements, and growth." },
      { icon: "🔍", title: "Explore Hubs & Tools", desc: "Join predefined hubs or create your own based on your interests." },
      { icon: "🤝", title: "Collaborate & Grow", desc: "Connect with like-minded peers and work on global projects." },
      { icon: "🌟", title: "Showcase & Succeed", desc: "Share your portfolio with employers and networks." }
    ] : [
      { icon: "🏢", title: "Create Your Business Account", desc: "Sign up and set up your business profile in minutes. Add details about your products, services, and student-focused offers to attract the right audience." },
      { icon: "🎯", title: "Showcase Your Offerings", desc: "List your student discounts, services, or products directly in targeted hubs where students are actively engaging. Tailor your promotions to specific interests for maximum impact." },
      { icon: "💬", title: "Connect with Students", desc: "Interact directly with students through hubs and activities. Engage with your target audience, answer their questions, and build meaningful relationships with potential customers." },
      { icon: "📊", title: "Monitor Sales and Feedback", desc: "Use the dashboard to track your sales performance and collect real-time feedback from customers. Gain insights into what works and refine your strategy to boost results." },
      { icon: "💰", title: "Pay Only for Results", desc: "Enjoy risk-free advertising. With JOINLIO's zero upfront cost model, you only pay when you make a sale. It's a win-win for your business and students." },
      { icon: "🚀", title: "Grow and Expand", desc: "Leverage JOINLIO's tools, analytics, and insights to grow your brand visibility, retain loyal customers, and expand your business across campuses and beyond." }
    ];
  };

  // Stop propagation to prevent closing when clicking inside modal
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="px-2 lg:px-20 gap-[10px] py-12 my-5">
      <div className="relative w-full min-h-[500px] h-screen max-h-[700px] hidden md:scale-90 lg:scale-100 md:flex justify-center items-center">
        <img className="absolute z-10 h-full w-full object-contain" src={rings} alt="bgring" />
        <div className="gradient-circle-background"></div>
        <div className="gradient-circle-background outer"></div>
        <div className="h-[650px] flex justify-center items-center w-[650px] relative z-20 rounded-full bg-transparent">
          {boxTexts.map((text, index) => {
            const angle = (360 / boxTexts.length) * index;
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={`absolute top-[40%] left-[35%] translate-x-[45%] translate-y-[-50%] h-[120px] overflow-hidden p-3 w-[180px] border border-gray-700 border-opacity-55 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl text-white flex items-center justify-center transition-all duration-300 ${
                  isExpanded ? "scale-150 z-30" : "scale-100"
                }`}
                style={{
                  transform: `rotate(${angle}deg) translate(325px) rotate(-${angle}deg)`,
                  transformOrigin: "center",
                }}
                onClick={() => handleBoxClick(index)}
              >
                <div className="h-full w-full bg-white text-sm rounded-lg flex items-center justify-center text-gray-800 font-semibold text-center">
                  {text}
                </div>
              </div>
            );
          })}

          <div className="absolute flex items-start flex-col justify-center text-center text-lg font-bold">
            <h1 className="text-3xl lg:text-4xl mx-auto max-w-[400px] text-customBlue mb-4 font-bold leading-snug">
              {centerHeading}
              <span className="text-white">{centerSubHeading}</span>
            </h1>
           <div className='flex gap-4 mx-auto'>
           <button
              ref={(el) => (buttonRefs.current[0] = el)}
              onClick={() => handleModal(0)}
              className="button-shadow bg-white uppercase mx-auto md:mt-0 h-12 px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
            >
              {screenIndex === 1 ? "Peer Account" : "Business Account"}
            </button>
            <button
              ref={(el) => (buttonRefs.current[1] = el)}
              onClick={() => handleButtonClick(0)}
              className="button-shadow bg-white uppercase mx-auto md:mt-0 h-12 px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
            >
              How it Works 
            </button>
           </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="relative flex flex-col items-center w-full">
          <img className="w-full h-[300px] object-contain" src={rings} alt="bgring" />
          <div className="gradient-circle-background"></div>
          <div className="h-full min-w-[150px] w-full p-2 flex-wrap relative z-20 gap-6 rounded-full bg-transparent flex justify-center items-center">
            {boxTexts.map((text, index) => (
              <div key={index} className="h-[200px] flex-1 min-w-[170px] max-w-[400px] w-full mb-2 overflow-hidden p-3 border border-gray-700 border-opacity-55 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl text-black flex items-center justify-center text-sm font-semibold text-center">
                <div className='w-full h-full bg-white rounded-lg text-lg flex items-center justify-center'>
                  {text}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute flex items-start flex-col justify-center text-center text-lg font-bold py-3">
            <h1 className="text-3xl lg:text-4xl mx-auto max-w-[400px] text-customBlue mb-4 font-bold leading-snug">
              {centerHeading}
              <span className="text-blue-500">{centerSubHeading}</span>
            </h1>
            <p className="text-sm text-customBlue max-w-lg text-opacity-80 mb-4">
              {centerDescription}
            </p>
            <button
              ref={(el) => (buttonRefs.current[1] = el)}
              onClick={() => handleButtonClick(1)}
              className="bg-white uppercase mx-auto h-10 px-6 py-2 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
            >
              How it Works
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-lg p-6"
          aria-modal="true"
          role="dialog"
        >
          <div 
            ref={modalRef}
            className="relative bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6" 
            onClick={handleModalContentClick}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 transition"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">
              🚀 How It Works - {screenIndex === 1 ? "Student" : "Business"} Account
            </h2>

            <div className="space-y-6">
              {getModalSteps().map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-md rounded-xl shadow-sm hover:shadow-md transition-all">
                  <span className="text-3xl flex-shrink-0">{step.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-700 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 text-gray-700 bg-white/70 backdrop-blur-lg border border-gray-300 rounded-lg hover:bg-gray-200 transition"
              >
                Close
              </button>
              <Link to="/get-started">
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform">
                  {screenIndex === 1 ? "Create Peer Account" : "Create Business Account"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isPeerModalOpen && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          aria-modal="true"
          role="dialog"
        >
          <div 
            ref={peerModalRef}
            className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[85vh] overflow-y-auto"
            onClick={handleModalContentClick}
            style={{ 
              maxHeight: "85vh",
            }}
          >
            <button
              onClick={() => setIsPeerModalOpen(false)} 
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {screenIndex === 1 ? "What is a Peer Account?" : "What is a Business Account in JOINLIO?"}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {screenIndex === 1 ? (
                    "The Peer Account serves as your tailored digital portfolio because it presents your abilities and accomplishments through an approach that expands traditional resume approaches. Students and scholars need their personal Peer Accounts to ensure their maximum growth potential in academics and careers. The peer account exists as an active mirror of your development that illustrates work relationships, individual accomplishments and professional advancement. Through this platform you can monitor your activities along with sustaining meaningful relationships while gaining access to worldwide possibilities in a safe and user-friendly interface."
                  ) : (
                    "Business Account within JOINLIO represents a specific platform for companies to interact effectively with their student audience. JOINLIO provides Business Accounts that enable companies to establish direct marketing connections with university students. The platform delivers a strong toolset for presenting products and services combined with special student-oriented deals. The Business Account enables companies to develop strong customer brand relations while making targeted student engagement for higher sales results."
                  )}
                </p>
              </div>
c

              {screenIndex === 1 && (
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Progress</h3>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                          Goals Achieved
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">
                          70%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-blue-200">
                      <div className="w-[70%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {screenIndex === 1 ? "Core Functionalities" : "Features of the Business Account"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {feature.icon}
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Link to="/get-started">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform font-medium">
                    {screenIndex === 1 ? "Create Peer Account" : "Register Your Business"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CircleDetails;