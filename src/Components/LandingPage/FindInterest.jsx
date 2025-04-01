import React, { useState, useRef, useEffect, memo } from "react";
import search from "../../assets/images/search.png";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import travelgif from "../../assets/video/travel.gif";
import mediagif from "../../assets/video/media.gif";
import entreprenuershipgif from "../../assets/video/entreprenuer.gif";
import main from "../../assets/video/main.mp4";
import ai from "../../assets/imagesCom/AI.jpg";
import flags from "../../assets/imagesCom/flags.jpg";
import gaming from "../../assets/imagesCom/gaming.jpg";
import investment from "../../assets/imagesCom/investment.png";
import social from "../../assets/imagesCom/social.jpg";
import sports from "../../assets/imagesCom/sports.jpg";
import tech from "../../assets/imagesCom/tech.jpg";
import JImage from "../../assets/images/bigJTwo.png";
import festive from "../../assets/imagesCom/festive-background-jewish-holiday-passover-traditional-treats-bottle-wine-matza-white-background-top-view-copy-space-border.jpg";

const HubCard = memo(({ hub }) => (
  <div className="hubs w-full min-h-56 flex flex-col justify-end rounded-2xl p-4 shadow-lg overflow-hidden relative">
    <div className="absolute inset-0 w-full h-full">
      <img
        src={hub.image || hub.gif}
        alt={hub.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  </div>
));

const FindInterest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPoints, setShowPoints] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newHub, setNewHub] = useState({
    title: '',
    icon: '',
    description: '',
    isPrivate: false,
    tags: []
  });
  const modalRef = useRef(null);

  const [filterdHubs, setFilteredHubs] = useState([]);

  const scrollRef = useRef(null);

  const hubs = [
    {
      name: "Travel Hub",
      description:
        "Explore stunning destinations and unique travel experiences.",
      heading: "Explore the World with the Travel Hub on Joinlio!",
      subDescription:
        "Designed specifically for those who love to travel, the Travel Hub offers a dynamic community where students can dive into everything related to travel. Whether you're planning a solo adventure, organizing a group trip, or just looking to share experiences, this hub connects you with like-minded adventurers. Create or join sub-hubs to meet peers with similar interests, access exclusive travel planning tools, and collaborate on travel-related projects. Get inspired, find practical support, and start your journey with us today!",
      gif: travelgif,
    },
    {
      name: "Media Hub",
      description: "Capture and create amazing content.",
      heading: "Dive into Creativity with the Media Hub on Joinlio!",
      subDescription:
        "Tailored for enthusiasts in the media field, the Media Hub provides a vibrant platform to explore and engage in various aspects of media, including filmmaking, podcasting, photography, and more. Whether you're an experienced creator or a budding artist, you can discover and join pre-defined sub-hubs that match your interests or establish your own. Within these sub-hubs, create groups, collaborate on projects, produce podcasts, and more with peers who share your passion. Gain access to specialized tools, services, and support provided by Joinlio to enhance your creative projects and bring your visions to life.",
      gif: mediagif,
    },
    {
      name: "Entrepreneurship Hub",
      description: "Fuel your business ideas and networking.",
      heading:
        "Fuel Your Business Dreams with the Entrepreneurship Hub on Joinlio!",
      subDescription:
        "Specifically crafted for aspiring entrepreneurs, this hub provides a supportive environment where students eager to launch their startups can thrive. Engage with various sub-hubs related to entrepreneurship, where you can either join existing ones or create new ones tailored to your business vision. Connect with like-minded peers to form groups, participate in business projects, or start your own ventures. Joinlio supports your entrepreneurial journey with a wealth of resources, including specialized tools, services, and guidance, all designed to help you achieve business success.",
      gif: entreprenuershipgif,
    },
    {
      name: "AI Hub",
      description:
        "Explore and innovate with peers in artificial intelligence.",
      image: ai,
    },
    {
      name: "Sports Hub",
      description: "Play, analyze, and discuss sports with fellow enthusiasts.",
      image: sports,
    },
    {
      name: "Tech Hub",
      description: "Discover and share emerging tech innovations.",
      image: tech,
    },
    {
      name: "Investment Hub",
      description:
        "Learn and discuss investment strategies and financial management.",
      image: investment,
    },
    {
      name: "Language Hub",
      description: "Learn languages and explore cultures with global peers.",
      image: flags,
    },
    {
      name: "Student Culinary Hub",
      description: "Share recipes and cooking tips for budget-friendly eating.",
      image: festive,
    },
    {
      name: "Gaming Hub",
      description:
        "Dive into game development and esports with a global gaming community.",
      image: gaming,
    },
    {
      name: "Research & Innovation Hub",
      description:
        "Collaborate on academic research and scientific breakthroughs.",
      image: tech,
    },
    {
      name: "Social Good Hub",
      description:
        "Engage in volunteering and community service for social impact.",
      image: social,
    },
  ];

  const createHubSlug = (hubName) => {
    return hubName
      .toLowerCase()
      .replace(/\s+/g, '-') 
      .replace(/[^a-z0-9-]/g, ''); // Remove special chars
  };

  const modalSections = [
    {
      icon: "✉️",
      title: "Early Sign-Up",
      description:
        "Receive an email to activate your account when Joinlio goes live.",
    },
    {
      icon: "🔔",
      title: "Activation Notification",
      description:
        "Register early with your university name and personal email.",
    },
    {
      icon: "👤",
      title: "Profile Setup",
      description:
        "Log in to complete your profile and create your Peer Account.",
    },
    {
      icon: "💬",
      title: "Engage and Share",
      description:
        "Post content, engage in discussions, and utilize hub-specific tools.",
    },
    {
      icon: "🤝",
      title: "Collaborate",
      description: "Participate in real-world projects to develop skills.",
    },
  ];

  useEffect(() => {
    setFilteredHubs(hubs);
  }, []);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilteredHubs(hubs);
    } else {
      e.preventDefault();
      const searchValue = e.target.value.toLowerCase();
      const filtered = hubs.filter((hub) =>
        hub.name.toLowerCase().includes(searchValue)
      );
      setFilteredHubs(filtered);
    }
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollRef.current) {
        // Don't prevent default scrolling behavior completely
        // Just adjust the scrollTop of your container
        scrollRef.current.scrollBy({
          top: event.deltaY,
          behavior: "smooth",
        });

        // Only prevent default if we're at the boundaries to avoid page scrolling
        // when the container is fully scrolled
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        if (
          (scrollTop === 0 && event.deltaY < 0) ||
          (scrollTop + clientHeight >= scrollHeight && event.deltaY > 0)
        ) {
          event.preventDefault();
        }
      }
    };

    const element = scrollRef.current;
    if (element) {
      // Use passive: false to allow preventDefault() when needed
      element.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="px-6 lg:px-20 gap-[10px] md:py-12 my-5">
      {/* Header section */}
      <div className="w-full flex justify-between gap-4 flex-wrap">
        <div className="w-auto max-w-xl xl:max-w-3xl">
          <h3 className="text-3xl relative font-semibold text-customBlue">
            Find Your Interest
          </h3>
          <p className="text-gray-700 text-[16px] leading-[20px] mt-[4vw] md:mt-[2vw] max-w-xl lg:max-w-5xl">
            What’s your passion? Whether it’s travel, entrepreneurship, or even
            night camping, JOINLIO transforms your dreams, talents, and
            interests into reality. Like an ocean of opportunities, our platform
            allows you to create your own hub or join existing topics. Connect
            with like-minded students, access exclusive tools, services, and
            support, and unlock limitless possibilities.
            <span className="italic font-medium text-black">
              Your next big collaboration starts here—click on a hub and explore
              all that JOINLIO has to offer!
            </span>
          </p>
        </div>
        <button
          className="button-shadow uppercase mt-2 md:mt-0 h-12 px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
          onClick={handleButtonClick}
        >
          Joinlio Hubs
        </button>
      </div>

      <div className="lg:flex max-sm:h-fit">
        {/* Left Section */}
        <div className="mt-20 lg:mr-4 flex-shrink-0 lg:w-1/4">
          <div className="interest-banner relative w-full h-[685px] max-lg:h-[400px] max-sm:h-[580px] max-sm:flex max-sm:flex-col max-md:flex  gap-4 rounded-xl bg-white shadow-xl">
             {/* <video
              className="w-full max-sm:w-56 max-lg:w-60 rounded-xl max-sm:mx-auto"
              loop
              autoPlay
              muted
            >
              <source src={main} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <img
              src={JImage}
              className="w-[80%]  mx-auto pt-10 max-sm:pt-0 max-sm:w-56 max-lg:w-56 max-lg:pt-0 max-lg:mx-10 rounded-xl max-sm:mx-auto"
            />
            <div className="absolute bottom-9 left-5 max-sm:left-5 max-sm:bottom-9 max-lg:left-72 max-lg:bottom-28 max-sm:inline-block">
              <h2 className="text-3xl lg:text-3xl font-bold leading-20">
                Transfrom your interests into a <br />
                <span className="text-textColor uppercase">Central hub!</span>
              </h2>
              <button
                            onClick={() => setModalOpen(true)}

              className="bg-[#00abff] py-1 px-4 mt-4 text-white active:scale-95 transform transition-all rounded-lg">
                Create
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-4 lg:mt-20 lg:flex-grow">
          <div className="interest-banner relative w-full min-h-80 max-h-[700px] p-4 rounded-xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
            <div className="border-2 h-10 border-black py-1 px-3 border-opacity-45 mb-4 rounded-lg flex justify-between items-center">
              <input
                className="w-4/5 bg-transparent h-full outline-none"
                type="search"
                onChange={handleSearch}
              />
              <img className="h-5" src={search} alt="search" />
            </div>

            <div
              ref={scrollRef}
              className="h-[600px] max-sm:h-fit w-full pr-2 max-h-[600px] custom-scrollbar scroll-smooth overflow-y-auto "
              onWheel={(e) => e.stopPropagation()} // Ensures smooth scrolling
            >
              {filterdHubs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-4">
                  {filterdHubs.map((hub, index) => (
                    <div
                      key={index}
                      className="relative hubs w-full min-h-56 flex flex-col justify-end rounded-2xl p-4 shadow-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <HubCard hub={hub} />

                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      </div>
                      <div className="hub-container  z-10">
                        <div className="mb-3">
                          <h2 className="text-lg font-bold truncate text-white">
                            {hub.name}
                          </h2>
                          <p className="text-sm mb-2 line-clamp-2 h-10 text-white">
                            {hub.description}
                          </p>
                          {index < 3 ? (
                            <Link
                              to={`/hubs/${createHubSlug(hub.name)}`}
                              state={{
                                hubData: {
                                  ...hub,
                                  index: index,
                                },
                              }}
                            >
                              <button className="w-full bg-[#00abff] text-white text-sm text-center font-medium px-4 py-1 rounded-full gap-1 hover:bg-blue-500 transition">
                                Follow{" "}
                                <span className="text-lg font-bold">+</span>
                              </button>
                            </Link>
                          ) : (
                            <button className="w-full bg-gray-400 text-white text-sm font-medium px-4 py-1 rounded-full cursor-not-allowed">
                              Coming Soon
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full max-sm:pt-20 w-full flex flex-col justify-center items-center">
                  <h2 className="text-lg font-semibold">No hubs found</h2>
                  <Link
                    className="text-[#00abff] underline cursor-pointer"
                    to="/"
                  >
                    Create your hub
                  </Link>
                </div>
              )}
            </div>
          </div>
          </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div
            ref={modalRef}
            className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 my-6 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#CBD5E0 transparent",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="sticky top-0 bg-white z-50 px-8 pt-8 pb-4 border-b flex items-center justify-between flex-wrap">
              <div className="flex max-sm:w-full items-center gap-2">
                <span className="text-rose-500">🔍</span>
                <h2 className="text-2xl font-bold text-gray-900">
                  Joinlio Hubs
                </h2>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 max-sm:inline-block ml-auto hidden hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 max-sm:hidden hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="px-8 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What is Joinlio Hubs?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In Joinlio, Hubs are central spaces designed to facilitate
                collaboration among students with similar interests and goals.
                These hubs are not just passive forums but are dynamic,
                structured environments where students can share, learn, earn,
                connect, collaborate, and grow together. They can create their
                own hubs based on personal interests or join existing predefined
                hubs, which focus on various areas like Media, Technology, and
                Entrepreneurship, promoting personal development and practical
                learning.
              </p>
            </div>
            <div className="px-8 pt-6 ">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Purpose of Joinlio Hubs
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The primary purpose of Hubs in Joinlio is to help students
                discover and pursue their interests and dreams alongside
                like-minded peers. This approach not only fosters a community of
                shared interests but also supports personal and professional
                growth through collaboration. Students can inspire and motivate
                each other, gaining access to additional tools, support, and
                services provided by Joinlio to enhance their hub activities.
              </p>
            </div>

            <div className="px-8 pt-6 ">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How it works?
              </h2>

              <div className=" pb-6 space-y-6 mt-6">
                {modalSections.map((section, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 hover:bg-gray-50 p-4 rounded-lg transition-all duration-200"
                  >
                    <span className="text-2xl">{section.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-8 py-6 border-t flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
       {modalOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[10000]">
            <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition duration-200"
              >
                <X size={20} />
              </button>
              <h2 className="text-xl font-bold mb-4 text-gray-800">Create New Hub</h2>
      
              <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p className="text-amber-800 text-sm">
                  Hub creation is currently unavailable. This feature will be enabled after Joinlio officially launches.
                </p>
              </div>
      
              <div className="space-y-4">
                <div>
                  <label htmlFor="hub-title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    id="hub-title"
                    type="text"
                    placeholder="Enter hub title"
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={newHub.title}
                    onChange={(e) => setNewHub({ ...newHub, title: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="hub-icon" className="block text-sm font-medium text-gray-700 mb-1">Icon (emoji)</label>
                  <input
                    id="hub-icon"
                    type="text"
                    placeholder="🚀"
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={newHub.icon}
                    onChange={(e) => setNewHub({ ...newHub, icon: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="hub-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    id="hub-description"
                    placeholder="Write a short description..."
                    className="w-full p-2.5 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={newHub.description}
                    onChange={(e) => setNewHub({ ...newHub, description: e.target.value })}
                  />
                </div>
      
                <div className="flex items-center">
                  <input
                    id="private-hub"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    checked={newHub.isPrivate}
                    onChange={(e) => setNewHub({ ...newHub, isPrivate: e.target.checked })}
                  />
                  <label htmlFor="private-hub" className="ml-2 text-sm font-medium text-gray-700">
                    Private Hub
                  </label>
                </div>
              </div>
      
              <div className="flex justify-end gap-3 mt-6">
                <button
                  className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Create Hub
                </button>
              </div>
            </div>
          </div>
            )}
    </div>

    
  );
};

export default FindInterest;