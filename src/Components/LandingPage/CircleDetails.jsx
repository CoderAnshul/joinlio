import React, { useState, useRef } from 'react';
import rings from "../../assets/images/rings.png";
import { X, Activity, Brain, MessageSquare, Globe, Layout, Briefcase } from 'lucide-react';

const CircleDetails = ({ boxTexts, centerHeading, centerDescription, centerSubHeading }) => {
  const [modalPosition, setModalPosition] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPeerModalOpen, setIsPeerModalOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null); // New state for expanded box
  const buttonRefs = useRef([]);

  const features = [
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
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expanded state
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
            const isExpanded = expandedIndex === index; // Check if current box is expanded
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
                onClick={() => handleBoxClick(index)} // Add click handler
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
            {/* <p className="py-3 px-2 rounded-2xl border border-gray-700 border-opacity-55 bg-[#EEEEEE]/20 backdrop-blur-sm max-w-[410px] text-customBlue text-opacity-80 text-sm mb-4">
              {centerDescription}
            </p> */}
           <div className='flex gap-4 mx-auto'>
           <button
              ref={(el) => (buttonRefs.current[0] = el)}
              onClick={() => handleModal(0)}
              className="button-shadow bg-white uppercase mx-auto md:mt-0 h-12 px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
            >
              Peer account
            </button>
            <button
              ref={(el) => (buttonRefs.current[0] = el)}
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
  <div className="fixed inset-0 z-40 bg-black backdrop-blur-sm bg-opacity-50 flex justify-center items-center">
    <div
      className="z-50 bg-white shadow-xl border border-gray-300 rounded-lg p-6 max-w-2xl w-full mx-4"
      style={{ top: modalPosition.top, left: modalPosition.left, transform: 'translate(-50%, -50%)', position: 'absolute' }}
    >
      <h2 className="text-xl font-bold mb-6">How It Works</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <span className="text-2xl">🎓</span>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Sign Up & Verify</h3>
            <p className="text-gray-600 text-sm">Create your profile by verifying your student or alumni credentials.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-2xl">👤</span>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Set Up Your Peer Account</h3>
            <p className="text-gray-600 text-sm">Build your Peer Account to document your skills, achievements, and growth.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-2xl">🔍</span>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Explore Hubs & Tools</h3>
            <p className="text-gray-600 text-sm">Join predefined hubs or create your own based on your interests, and access tools, resources, and support tailored to your goals.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-2xl">🤝</span>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Collaborate & Grow</h3>
            <p className="text-gray-600 text-sm">Connect with like-minded peers, work on global projects, and gain real-world experience.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-2xl">🌟</span>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Showcase & Succeed</h3>
            <p className="text-gray-600 text-sm">Use your Peer Account link to share your portfolio with employers and networks, opening doors to opportunities.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
        >
          Close
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
)}

{isPeerModalOpen && (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
 <div className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
   {/* Close Button */}
   <button
        onClick={() => setIsPeerModalOpen(false)} 
     className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
     aria-label="Close modal"
   >
     <X className="w-6 h-6 text-gray-500" />
   </button>

   <div className="p-8">
     {/* Header Section */}
     <div className="mb-8">
       <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Peer Account?</h2>
       <p className="text-gray-600 leading-relaxed">
         The Peer Account serves as your tailored digital portfolio, presenting your abilities 
         and accomplishments through an expanded approach to traditional resumes. It acts as 
         an active mirror of your development, showcasing work relationships, individual 
         achievements, and professional growth.
       </p>
     </div>

     {/* Progress Section */}
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

     {/* Features Grid */}
     <div>
       <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Functionalities</h3>
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
   </div>
 </div>
</div>
)}

</div>
  );
};

export default CircleDetails;