import React,{useState,useRef} from 'react'
import loop from "../../assets/images/loop.png"
import search from "../../assets/images/search.png"
import { Link } from 'react-router-dom';

const FindInterest = () => {
      const [modalPosition, setModalPosition] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);

    const hubs = [
        { name: "Travel Hub", description: "Explore stunning destinations and unique travel experiences.", subDescription: "Connect with fellow travelers and share your adventures." },
        { name: "Media Hub", description: "Capture and create amazing content.", subDescription: "Join a community of photographers, videographers, and content creators." },
        { name: "Entrepreneurship Hub", description: "Fuel your business ideas and networking.", subDescription: "Meet like-minded entrepreneurs and exchange innovative strategies." },
        { name: "Finance & Investment Hub", description: "Enhances financial literacy with focus on investing and money management.", subDescription: "Engage with developers, engineers, and tech enthusiasts." },
        { name: "Student Culinary Hub", description: "Centers on developing culinary skills and promoting healthy, budget-friendly eating", subDescription: "Participate in fitness challenges and track your progress." },
        { name: "Gaming & Tech Hub", description: "Covers gaming, coding, e-sports, and technology innovations.", subDescription: "Discuss your favorite films and discover new ones." },
        { name: "Research & Innovation Hub", description: "A space dedicated to academic research and scientific breakthroughs.", subDescription: "Discuss your favorite films and discover new ones." },
        { name: "Social Good Hub", description: "Supports volunteering, social work, and community service projects.", subDescription: "Discuss your favorite films and discover new ones." },
    ];

  const handleButtonClick = (index) => {
 
      setIsModalOpen(true);
    
  };


  return (
    <div className=' px-6 lg:px-20 gap-[10px] py-12 my-5 '>
        <div className='w-full flex justify-between gap-4 flex-wrap'>
            <div className='w-auto max-w-xl'>
                <h3 className='text-3xl relative font-semibold text-customBlue'>Find Your Interest <img className='absolute -bottom-4 scale-50' src={loop} alt="loop text" /></h3>
                <p className="text-gray-700 text-[16px] leading-[20px] mt-[4vw] md:mt-[2vw] max-w-xl">
                What’s your passion? Whether it’s travel, entrepreneurship, or even night camping, JOINLIO transforms your dreams, talents, and interests into reality. Like an ocean of opportunities, our platform allows you to create your own hub or join existing topics. Connect with like-minded students, access exclusive tools, services, and support, and unlock limitless possibilities. Your next big collaboration starts here—click on a hub and explore all that JOINLIO has to offer!
                </p>
            </div>

            <button
                className="button-shadow uppercase mt-2 md:mt-0 h-12 px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
                onClick={() => handleButtonClick(0)}
                > 
                how it works
            </button>
        </div>

        <div className="lg:flex">
            {/* Left Section */}
            <div className="mt-20 lg:mr-4 flex-shrink-0 lg:w-1/3">
                <div className="interest-banner relative w-full h-80 lg:h-full rounded-xl bg-gray-300">
                    <div className="absolute bottom-9 left-5">
                        <h1 className="text-3xl lg:text-3xl font-bold leading-20">
                            Create your own <br />
                            <span className="text-textColor uppercase">interests</span>
                        </h1>
                        <button className="bg-[#F7C28A] py-1 px-4 mt-4 text-white active:scale-95 transform transition-all rounded-lg">
                            Create
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="mt-4 lg:mt-20 lg:flex-grow">
                <div className="interest-banner relative w-full min-h-80 max-h-[700px] p-4 rounded-xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
                    <div className="border-2 h-10 border-black py-1 px-3 border-opacity-45 mb-4 rounded-lg flex justify-between items-center">
                        <input className="w-4/5 bg-transparent h-full outline-none" type="search" />
                        <img className="h-5" src={search} alt="search" />
                    </div>

                    {/* Scrollable Container */}
                    <div className="h-full w-full pr-2 max-h-[600px] custom-scrollbar overflow-y-scroll">
                        {/* Grid Layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-4">
                            {hubs.map((hub, index) => (
                                <div
                                    key={index} // Ensure unique key for each hub
                                    className="hubs w-full bg-gray-300 min-h-56 flex flex-col justify-end rounded-2xl p-4 shadow-lg"
                                >
                                    <div className="hub-container">
                                        <div className="flex justify-between gap-3 items-center mb-3">
                                            {/* Truncate hub name */}
                                            <h2 className="text-lg font-bold text-gray-900 mb-2 truncate">
                                                {hub.name}
                                            </h2>
                                            {index < 3 ? (
                                                <Link 
                                                to="/hubs"
                                                state={{ 
                                                    hubData: {
                                                        ...hub,
                                                        index: index
                                                    }
                                                }}
                                            ><button className="bg-[#F7C28A] text-white text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1 hover:bg-blue-500 transition">
                                            Follow <span className="text-lg font-bold">+</span>
                                        </button></Link>
                                               
                                            ) : (
                                                <button className="bg-gray-400 text-white text-sm font-medium px-4 py-1 rounded-full cursor-not-allowed">
                                                    Coming Soon
                                                </button>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-600 mb-1">
                                            {hub.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {isModalOpen && (
    <div className="fixed inset-0 z-40 bg-black backdrop-blur-sm bg-opacity-50 flex justify-center items-center">
        <div
            className="z-50 bg-white shadow-xl border border-gray-300 rounded-lg p-6 max-w-2xl w-full mx-4"
        >
            <h2 className="text-xl font-bold mb-6 text-center">How It Works</h2>

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

    </div>
  )
}

export default FindInterest;
