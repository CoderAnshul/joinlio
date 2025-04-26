import React, { useState, useRef, useEffect } from "react";
import rings from "../../assets/images/rings.png";

import {
  X,
  Activity,
  Brain,
  MessageSquare,
  Globe,
  Layout,
  Briefcase,
  ChartBar,
  Users,
  Shield,
  Coins,
  Target,
  BarChart,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import dashboardvideo from "../../assets/video/dashboard.mp4";

const CircleDetails = ({
  boxTexts,
  centerHeading,
  centerSubHeading,
  centerDescription,
  screenIndex,
}) => {
  const [modalPosition, setModalPosition] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPeerModalOpen, setIsPeerModalOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const buttonRefs = useRef([]);
  const modalRef = useRef(null);
  const peerModalRef = useRef(null);

  useEffect(() => {
    if (isPeerModalOpen || isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isPeerModalOpen, isModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }
      if (
        isPeerModalOpen &&
        peerModalRef.current &&
        !peerModalRef.current.contains(event.target)
      ) {
        setIsPeerModalOpen(false);
      }
    };

    if (isModalOpen || isPeerModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, isPeerModalOpen]);

  const studentFeatures = [
    {
      icon: <Activity className="w-5 h-5 text-blue-600" />,
      title: "Activity Monitoring",
      description:
        "Monitor personal achievements and projects through comprehensive activity tracking.",
    },
    {
      icon: <Brain className="w-5 h-5 text-blue-600" />,
      title: "Advanced AI Tools",
      description:
        "AI-powered progress evaluation and personalized opportunity discovery.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
      title: "Encrypted Messaging",
      description:
        "Secure communication system for private conversations with global peers.",
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      title: "Global Networking",
      description: "Connect and collaborate with professionals worldwide.",
    },
    {
      icon: <Layout className="w-5 h-5 text-blue-600" />,
      title: "User-Friendly Interface",
      description: "Clean, intuitive design for easy portfolio organization.",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      title: "Project Opportunities",
      description:
        "Access to paid and volunteer projects with fair agreements.",
    },
  ];

  const businessFeatures = [
    {
      icon: <ChartBar className="w-5 h-5 text-blue-600" />,
      title: "Performance Dashboard",
      description:
        "Track sales numbers, customer interactions, and gather essential feedback in real-time.",
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "Direct Student Interaction",
      description:
        "Real-time communication with students and active participation in targeted discussions.",
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      title: "Customizable Business Profile",
      description:
        "Showcase your brand identity, products, services, and student-specific offers.",
    },
    {
      icon: <BarChart className="w-5 h-5 text-blue-600" />,
      title: "Targeted Advertising",
      description:
        "Place products in specialized student zones for maximum visibility.",
    },
    {
      icon: <Target className="w-5 h-5 text-blue-600" />,
      title: "Cost-Effective Marketing",
      description:
        "Performance-based payment models to maximize your marketing budget efficiency.",
    },
    {
      icon: <Coins className="w-5 h-5 text-blue-600" />,
      title: "Expansion Tools",
      description:
        "Analytics system to help expand reach to new student groups and campuses.",
    },
  ];

  const features = screenIndex === 1 ? studentFeatures : businessFeatures;

  const handleButtonClick = (index) => {
    const button = buttonRefs.current[index];
    if (button) {
      const rect = button.getBoundingClientRect();
      setModalPosition({
        top: rect.top + window.scrollY + rect.height / 2,
        left: rect.left + window.scrollX + rect.width / 2,
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
        left: rect.left + window.scrollX + rect.width / 2,
      });
      setIsPeerModalOpen(true);
    }
  };

  const handleBoxClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getModalSteps = () => {
    return screenIndex === 1
      ? [
          {
            icon: "🎓",
            title: "Sign Up & Verify",
            desc: "Create your profile by verifying your student or alumni credentials.",
          },
          {
            icon: "👤",
            title: "Set Up Your Peer Account",
            desc: "Build your Peer Account to document your skills, achievements, and growth.",
          },
          {
            icon: "🔍",
            title: "Explore Hubs & Tools",
            desc: "Join predefined hubs or create your own based on your interests.",
          },
          {
            icon: "🤝",
            title: "Collaborate & Grow",
            desc: "Connect with like-minded peers and work on global projects.",
          },
          {
            icon: "🌟",
            title: "Showcase & Succeed",
            desc: "Share your portfolio with employers and networks.",
          },
        ]
      : [
          {
            icon: "🏢",
            title: "Create Your Business Account",
            desc: "Set up your profile and showcase your offers in minutes.",
          },
          {
            icon: "🎯",
            title: "Showcase Your Offerings",
            desc: "List student deals in interest-based hubs for better reach.",
          },
          {
            icon: "💬",
            title: "Connect with Students",
            desc: "Engage directly with students, answer questions, and build trust.",
          },
          {
            icon: "📊",
            title: "Monitor Sales and Feedback",
            desc: "Track performance and improve with real-time feedback.",
          },
          {
            icon: "💰",
            title: "Pay Only for Results",
            desc: "No upfront cost—only pay when you make a sale.",
          },
          {
            icon: "🚀",
            title: "Grow and Expand",
            desc: "Use tools and insights to grow your brand across campuses",
          },
        ];
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="px-2 lg:px-20 gap-[10px] py-12 my-5">
      <div className="relative w-full min-h-[500px] h-screen max-h-fit hidden md:scale-90 lg:scale-100 md:flex justify-center items-center">
        <img
          className="absolute z-10 h-full w-full object-contain"
          src={rings}
          alt="bgring"
        />
        <div className="gradient-circle-background "></div>
        <div className="gradient-circle-background outer"></div>
        <div className="h-[650px]  flex justify-center items-center w-[650px] relative z-20 rounded-full bg-transparent">
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
            <h2 className="text-3xl lg:text-4xl mx-auto max-w-[400px] text-customBlue mb-4 font-bold leading-snug">
              {centerHeading}
              <span className="text-white">{centerSubHeading}</span>
            </h2>
            <div className="flex gap-4 mx-auto">
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
        <div className="relative  flex flex-col items-center w-full">
          <img
            className="w-full h-[300px] object-contain max-sm:opacity-0"
            src={rings}
            alt="bgring"
          />
          <div className="gradient-circle-background"></div>
          <div className="h-full max-sm:mt-10 min-w-[150px] w-full p-2 flex-wrap relative z-20 gap-2 mt-10 rounded-full bg-transparent flex justify-center items-center">
            {boxTexts.map((text, index) => (
              <div
                key={index}
                className="h-[80px] flex-1 min-w-[200px] max-w-[400px] w-full mb-2 overflow-hidden p-3 border border-gray-700 border-opacity-55 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl text-black flex items-center justify-center text-sm font-semibold text-center"
              >
                <div className="w-full h-full bg-white rounded-lg text-lg flex items-center justify-center">
                  {text}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute flex items-start flex-col justify-center text-center text-lg font-bold py-3">
            <h2 className="text-3xl lg:text-4xl mx-auto max-w-[400px] text-customBlue mb-4 font-bold leading-snug">
              {centerHeading}
              <span className="text-blue-500">{centerSubHeading}</span>
            </h2>
            <p className="text-sm text-customBlue max-w-lg text-opacity-80 mb-4">
              {centerDescription}
            </p>
            <div className="flex mx-auto gap-4">
              <button
                ref={(el) => (buttonRefs.current[0] = el)}
                onClick={() => handleModal(0)}
                className="bg-white uppercase mx-auto h-10 px-6 py-2 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
              >
                {screenIndex === 1 ? "Peer Account" : "Business Account"}
              </button>
              <button
                ref={(el) => (buttonRefs.current[1] = el)}
                onClick={() => handleButtonClick(1)}
                className="bg-white uppercase mx-auto h-10 px-6 max-sm:px-2 py-2 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
              >
                How it Works
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/10 backdrop-blur-md"
          aria-modal="true"
          role="dialog"
        >
          <div
            ref={modalRef}
            className="relative p-4 bg-white/70 pt-16 sm:pt-4 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl max-w-3xl w-full mx-4 my-6 max-h-[85vh] overflow-y-auto"
            onClick={handleModalContentClick}
            onWheel={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#CBD5E0 transparent",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 transition"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6 ">
              🚀 How It Works -{" "}
              {screenIndex === 1 ? "Joinlio Peer" : " Joinlio Business"} Account
            </h2>

            <div className="space-y-6">
              {getModalSteps().map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-md rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <span className="text-3xl flex-shrink-0">{step.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
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
                  {screenIndex === 1 ? "Sign up" : "Sign up"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isPeerModalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/10 backdrop-blur-md"
          aria-modal="true"
          role="dialog"
        >
          <div
            ref={peerModalRef}
            className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 my-6 max-h-[85vh] flex flex-col"
            onClick={handleModalContentClick}
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-50 px-4 sm:px-8 pt-6 sm:pt-8 pb-0 border-b rounded-t-2xl">
  <button
    onClick={() => setIsPeerModalOpen(false)}
    className="absolute right-3 top-3 p-2 hover:bg-gray-100 rounded-full transition-colors"
    aria-label="Close modal"
  >
    <X className="w-5 h-5 text-gray-500" />
  </button>

  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 pr-8">
    {screenIndex === 1
      ? "What is a Joinlio peer account?"
      : "What is a JOINLIO Business Account?"}
  </h2>

  {screenIndex === 1 && (
    <div className="flex w-full overflow-x-auto pb-1">
      <button
        className={`px-3 sm:px-4 py-2 font-medium transition-colors relative whitespace-nowrap ${
          activeTab === "description"
            ? "text-blue-600"
            : "text-gray-600 hover:text-blue-600"
        }`}
        onClick={() => setActiveTab("description")}
      >
        Read Description
        {activeTab === "description" && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
        )}
      </button>
      <button
        className={`px-3 sm:px-4 py-2 font-medium transition-colors relative whitespace-nowrap ${
          activeTab === "demo"
            ? "text-blue-600"
            : "text-gray-600 hover:text-blue-600"
        }`}
        onClick={() => setActiveTab("demo")}
      >
        See Demo
        {activeTab === "demo" && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
        )}
      </button>
    </div>
  )}
</div>

            <div className="overflow-y-auto flex-1 px-8 py-6">
              {screenIndex === 1 ? (
                <>
                  {activeTab === "demo" ? (
                    <div className="mb-8">
                      <video
                        className="w-full rounded-xl shadow-lg"
                        autoPlay
                        muted
                        playsInline
                        controlsList="nodownload nofullscreen noremoteplayback"
                      >
                        <source src={dashboardvideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <>
                      <div className="bg-white rounded-lg pb-5 mx-auto">
                        <div className="space-y-6">
                          <div className="text-start mb-8">
                            <p className="text-lg text-gray-600 mt-3">
                              Your personalized space on Joinlio — designed to help you connect with others, 
                              work on exciting projects, and grow both personally and professionally. 
                              This account belongs to you.
                            </p>
                          </div>
                          
                          <div className="bg-blue-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6">Through it, you can:</h3>
                            
                            <div className="space-y-4">
                              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start">
                                <span className="text-2xl mr-4">👤</span>
                                <p className="text-gray-700">
                                  <span className="font-medium">Create your profile</span> based on your interests, skills, and goals.
                                </p>
                              </div>
                              
                              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start">
                                <span className="text-2xl mr-4">📚</span>
                                <p className="text-gray-700">
                                  <span className="font-medium">Save and track</span> your projects, collaborations, connections, blogs, and more.
                                </p>
                              </div>
                              
                              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start">
                                <span className="text-2xl mr-4">🌍</span>
                                <p className="text-gray-700">
                                  <span className="font-medium">Connect with students</span> around the world who share your passions.
                                </p>
                              </div>
                              
                              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start">
                                <span className="text-2xl mr-4">🛠</span>
                                <p className="text-gray-700">
                                  <span className="font-medium">Use tools, resources, and hubs</span> tailored to your interests.
                                </p>
                              </div>
                              
                              <div className="bg-white p-5 rounded-lg shadow-sm flex items-start">
                                <span className="text-2xl mr-4">📈</span>
                                <p className="text-gray-700">
                                  <span className="font-medium">Showcase your journey</span> and achievements with your own Peer Account link.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-6 mb-8">
                       
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-6">
                            {screenIndex === 1
                              ? "Core Functionalities"
                              : "Features of the Business Account"}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                              <div
                                key={index}
                                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  {feature.icon}
                                  <h4 className="font-semibold text-gray-900">
                                    {feature.title}
                                  </h4>
                                </div>
                                <p className="text-gray-600 text-sm">
                                  {feature.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                      <div className="  mx-auto mb-5">
                      <div className="space-y-6">
                        <div className="mb-6">
                          <h2 className="text-md text-gray-800">It's your gateway to connect directly with university students!</h2>
                          <p className="text-md text-gray-700 mt-2">
                            JOINLIO gives companies a special space to:
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 rounded-xl p-6">
                          <div className="space-y-4">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 text-blue-600 mt-1">
                                <Check size={16} className="stroke-2" />
                              </div>
                              <div className="ml-3">
                                <p className="text-md font-medium text-gray-800">Promote products & services</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <div className="flex-shrink-0 text-blue-600 mt-1">
                                <Check size={16} className="stroke-2" />
                              </div>
                              <div className="ml-3">
                                <p className="text-md font-medium text-gray-800">Offer student-only deals</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <div className="flex-shrink-0 text-blue-600 mt-1">
                                <Check size={16} className="stroke-2" />
                              </div>
                              <div className="ml-3">
                                <p className="text-md font-medium text-gray-800">Build strong brand loyalty.All while reaching an audience that's ready to engage.</p>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Why Register with JOINLIO?
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-700">
                          <span className="font-semibold">
                          Boost Your Visibility: 
                          </span>{" "}
                          Get noticed by students who are future customers.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-700">
                          <span className="font-semibold">
                          Drive Real Engagement:
                          </span>{" "}
                          Talk directly with your audience—no middleman
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-700">
                          <span className="font-semibold">Customize Your Offers: </span>{" "}
                          Create deals that actually fit student needs.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-700">
                          <span className="font-semibold">
                          Learn What Works:
                          </span>{" "}
                          Get instant feedback and insights to sharpen your strategy
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-700">
                          <span className="font-semibold">
                          Spend Smart:
                          </span>{" "}
                          Pay based on performance = better value at lower cost.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      Features of the Business Account
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {businessFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            {feature.icon}
                            <h4 className="font-semibold text-gray-900">
                              {feature.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="mt-8 flex justify-center">
                <Link to="/get-started">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform font-medium">
                    {screenIndex === 1 ? "Sign up" : "Sign up"}
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
