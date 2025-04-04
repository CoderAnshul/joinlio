import React, { useState } from "react";
import { X ,PlusCircle } from "lucide-react";

const SubInterest = ({ category = "travel" ,className = "" }) => {
  const travelCategories = [
    {
      title: "Road Trips",
      icon: "🚗",
      description: "Discover scenic routes and essential road trip hacks.",
      bgColor: "bg-blue-100",
    },
    {
      title: "Hiking Adventures",
      icon: "🥾",
      description: "Join fellow trail enthusiasts to explore new heights.",
      bgColor: "bg-green-100",
    },
    {
      title: "Adventure Sports",
      icon: "🏄",
      description: "Dive into the world of outdoor sports.",
      bgColor: "bg-orange-100",
    },
    {
      title: "Solo Travel",
      icon: "✈️",
      description: "Empowering solo travelers for safe journeys.",
      bgColor: "bg-purple-100",
    },
    {
      title: "Campfire Gatherings",
      icon: "🔥",
      description: "Create memorable campfire experiences.",
      bgColor: "bg-red-100",
    },
    {
      title: "Camping Expeditions",
      icon: "⛺",
      description: "Everything about camping gear & serene sites.",
      bgColor: "bg-emerald-100",
    },
    {
      title: "Mountain Biking",
      icon: "🚵",
      description: "Find the best trails & biking communities.",
      bgColor: "bg-amber-100",
    },
    {
      title: "Boating and Sailing",
      icon: "⛵",
      description: "Set sail on your boating adventure.",
      bgColor: "bg-cyan-100",
    },
    {
      title: "Cultural Exploration",
      icon: "🌍",
      description: "Explore the rich tapestry of global cultures.",
      bgColor: "bg-indigo-100",
    },
    {
      title: "Wildlife and Safari",
      icon: "🐘",
      description: "Ethical wildlife encounters & nature exploration.",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Eco-Tourism",
      icon: "🌱",
      description: "Travel green with sustainable practices.",
      bgColor: "bg-lime-100",
    },
    {
      title: "Photography Journeys",
      icon: "📷",
      description: "Capture the world through your lens.",
      bgColor: "bg-rose-100",
    },
    {
      title: "Backpacking and Hosteling",
      icon: "🎒",
      description: "Ultimate guides for budget travel and hosteling.",
      bgColor: "bg-teal-100",
    },
    {
      title: "Volunteer Travel",
      icon: "🤝",
      description: "Make a difference while exploring new places.",
      bgColor: "bg-pink-100",
    },
    {
      title: "Wellness and Retreats",
      icon: "🧘",
      description: "Discover rejuvenating wellness getaways.",
      bgColor: "bg-blue-100",
    },
    {
      title: "Historical Tours",
      icon: "🏛️",
      description: "Walk through the corridors of time.",
      bgColor: "bg-amber-100",
    },
    {
      title: "Luxury Travel",
      icon: "🍸",
      description: "Indulge in the finest travel experiences.",
      bgColor: "bg-purple-100",
    },
    {
      title: "Festival and Event Travel",
      icon: "🎉",
      description: "Experience world's most exhilarating festivals.",
      bgColor: "bg-green-100",
    },
    {
      title: "Scuba Diving and Snorkeling",
      icon: "🐠",
      description: "Explore underwater wonders.",
      bgColor: "bg-cyan-100",
    },
    {
      title: "Culinary Tours",
      icon: "🍴",
      description: "Taste your way through different cultures.",
      bgColor: "bg-red-100",
    },
    {
      title: "Art and Literature Tours",
      icon: "🎨",
      description: "Dive into the worlds of art and literature.",
      bgColor: "bg-indigo-100",
    },
    {
      title: "City Breaks",
      icon: "🏙️",
      description: "Discover the best of urban life.",
      bgColor: "bg-emerald-100",
    },
    {
      title: "Train Journeys",
      icon: "🚂",
      description: "Scenic rail journeys with breathtaking views.",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Winter Sports",
      icon: "❄️",
      description: "Hit the slopes with expert winter sports tips.",
      bgColor: "bg-blue-100",
    },
    {
      title: "Desert Safaris",
      icon: "🐪",
      description: "Adventure in the vast dunes.",
      bgColor: "bg-orange-100",
    },
    {
      title: "Island Hopping",
      icon: "🏝️",
      description: "Explore the beauty of island life.",
      bgColor: "bg-teal-100",
    },
    {
      title: "Pilgrimages",
      icon: "✨",
      description: "Embark on spiritual journeys to sacred sites.",
      bgColor: "bg-purple-100",
    },
    {
      title: "Educational Tours",
      icon: "📚",
      description: "Engage in learning expeditions.",
      bgColor: "bg-lime-100",
    },
    {
      title: "Extreme Sports",
      icon: "🪂",
      description: "For thrill-seekers pushing their limits.",
      bgColor: "bg-rose-100",
    },
    {
      title: "Nature Photography",
      icon: "📸",
      description: "Capture wildlife and stunning landscapes.",
      bgColor: "bg-green-100",
    },
  ];

  const mediaCategories = [
    {
      title: "Film Making",
      icon: "🎬",
      description:
        "Dive into the world of cinema, from indie projects to blockbuster productions.",
      bgColor: "bg-red-100",
    },
    {
      title: "Photography",
      icon: "📸",
      description: "Capture the beauty of the world through your lens.",
      bgColor: "bg-amber-100",
    },
    {
      title: "Music",
      icon: "🎵",
      description: "Join a symphony of musicians and vocalists.",
      bgColor: "bg-purple-100",
    },
    {
      title: "Dance",
      icon: "💃",
      description:
        "Move to the rhythm of your passion. Whether ballet, hip-hop, or contemporary, share your moves and connect with dance workshops and events.",
      bgColor: "bg-pink-100",
    },
    {
      title: "Painting and Drawing",
      icon: "🎨",
      description:
        "Brush your imagination onto a canvas. Share your artistic journeys, learn techniques, and participate in art challenges.",
      bgColor: "bg-blue-100",
    },
    {
      title: "Modeling",
      icon: "👠",
      description:
        "Strike a pose and build your portfolio. Engage with fashion experts and find opportunities in runway, commercial, and print modeling.",
      bgColor: "bg-green-100",
    },
    {
      title: "Podcasting",
      icon: "🎙",
      description:
        "Raise your voice in the podcasting world. Share stories, insights, and connect with a global audience through your unique podcasts.",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Graphic Design",
      icon: "🖌",
      description:
        "Create stunning visuals with your graphic design skills. Discuss trends, software tips, and collaborate on projects.",
      bgColor: "bg-orange-100",
    },
    {
      title: "Digital Media",
      icon: "🖥",
      description:
        "Explore the intersection of technology and creativity in digital media, from video games to virtual reality experiences.",
      bgColor: "bg-cyan-100",
    },
    {
      title: "Animation",
      icon: "🎞",
      description:
        "Bring your characters and stories to life. Discuss animation techniques, software, and industry trends.",
      bgColor: "bg-indigo-100",
    },
    {
      title: "Screenwriting",
      icon: "✍️",
      description:
        "Craft compelling narratives for film, TV, or web. Share scripts, get feedback, and refine your storytelling skills.",
      bgColor: "bg-teal-100",
    },
    {
      title: "Videography",
      icon: "📹",
      description:
        "Tell stories through your videos. From event coverage to documentary filmmaking, connect with tech-savvy enthusiasts.",
      bgColor: "bg-lime-100",
    },
    {
      title: "Theater Arts",
      icon: "🎭",
      description:
        "Embrace the stage with acting, directing, and stage management. Explore the world of live performances and theatrical productions.",
      bgColor: "bg-red-200",
    },
    {
      title: "Fashion Design",
      icon: "👗",
      description:
        "Design the future of fashion. Share your collections, discuss trends, and connect with the fashion community.",
      bgColor: "bg-purple-200",
    },
    {
      title: "Sculpture",
      icon: "🗿",
      description:
        "Mold your ideas into reality. Discuss materials, techniques, and display your three-dimensional art.",
      bgColor: "bg-gray-200",
    },
    {
      title: "Literature",
      icon: "📚",
      description:
        "Delve into the world of words. Whether you write poetry, novels, or non-fiction, share your literary works and connect with fellow authors.",
      bgColor: "bg-blue-200",
    },
    {
      title: "Makeup Artistry",
      icon: "💄",
      description:
        "Share your makeup skills, from beauty tips to special effects makeup. Connect with professionals and enthusiasts alike.",
      bgColor: "bg-pink-200",
    },
  ];

  const entrepreneurCategories = [
    {
      title: "Startup Founding",
      icon: "🚀",
      description: "Launch your startup journey.",
      bgColor: "bg-blue-100",
    },
    {
      title: "Social Entrepreneurship",
      icon: "🌐",
      description: "Drive change with innovative solutions to social problems.",
      bgColor: "bg-green-100",
    },
    {
      title: "Tech Innovations",
      icon: "💻",
      description: "Dive into the tech world with your innovations.",
      bgColor: "bg-purple-100",
    },
    {
      title: "Women in Entrepreneurship",
      icon: "󰠀",
      description:
        "Empower and celebrate female entrepreneurs. Share stories, challenges, and successes to inspire and support women in business.",
      bgColor: "bg-pink-100",
    },
    {
      title: "Youth Entrepreneurship",
      icon: "🎓",
      description:
        "Inspire the next generation of leaders. Focus on entrepreneurial education, youth startups, and resources tailored for young innovators.",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Green Business",
      icon: "🌿",
      description:
        "Build your eco-friendly business. Connect with others dedicated to sustainability and explore green business practices and innovations.",
      bgColor: "bg-green-200",
    },
    {
      title: "Franchising Opportunities",
      icon: "🔄",
      description:
        "Expand your business through franchising. Discuss franchise management, opportunities, and best practices with experienced franchisors and franchisees.",
      bgColor: "bg-blue-200",
    },
    {
      title: "Business Scaling",
      icon: "📈",
      description:
        "Take your business to the next level. Discuss strategies for scaling operations, managing growth, and sustaining your business long-term.",
      bgColor: "bg-indigo-100",
    },
    {
      title: "Freelancing and Gig Economy",
      icon: "💼",
      description:
        "Thrive as a freelancer. Share tips on managing projects, finding clients, and building a successful freelance or gig-based business.",
      bgColor: "bg-gray-100",
    },
    {
      title: "E-commerce and Online Business",
      icon: "🛒",
      description:
        "Master the art of online selling. Discuss e-commerce platforms, digital marketing strategies, and customer engagement.",
      bgColor: "bg-red-200",
    },
    {
      title: "Innovative Financing",
      icon: "💸",
      description:
        "Explore creative financing options. Discuss everything from venture capital and angel investing to crowdfunding and bootstrapping.",
      bgColor: "bg-yellow-200",
    },
    {
      title: "Product Development",
      icon: "🛠",
      description:
        "Turn ideas into products. Cover the process of product ideation, design, development, and market introduction.",
      bgColor: "bg-orange-200",
    },
    {
      title: "Business Strategy and Development",
      icon: "🧠",
      description:
        "Shape strategic directions. Discuss business models, strategic planning, and competitive analysis.",
      bgColor: "bg-blue-300",
    },
    {
      title: "Business Networking",
      icon: "🌐",
      description:
        "Build powerful business networks. Learn networking strategies and connect with mentors, investors, and potential partners.",
      bgColor: "bg-green-300",
    },
    {
      title: "Startup Accelerators and Incubators",
      icon: "🏁",
      description:
        "Accelerate your startup's growth with the best incubators and accelerators. Connect with programs that offer mentorship, resources, and funding opportunities.",
      bgColor: "bg-purple-300",
    },
    {
      title: "Non-Profit Organizations",
      icon: "🤲",
      description:
        "Lead and innovate in the non-profit sector. Discuss how to start, manage, and grow a non-profit organization while making a significant impact.",
      bgColor: "bg-pink-200",
    },
    {
      title: "Business Analytics",
      icon: "📊",
      description:
        "Leverage data to drive business decisions. Explore tools and methods for analyzing business data to enhance strategic planning and operational efficiency.",
      bgColor: "bg-gray-200",
    },
    {
      title: "Real Estate Entrepreneurship",
      icon: "🏠",
      description:
        "Dive into the real estate market. Whether it's development, investment, or property management, connect with experts and learn market dynamics.",
      bgColor: "bg-blue-400",
    },
    {
      title: "Food and Beverage Business",
      icon: "🍽",
      description:
        "Stir your culinary passions into a business. Discuss the nuances of opening and running restaurants, cafes, or food trucks.",
      bgColor: "bg-red-300",
    },
    {
      title: "Fashion and Retail",
      icon: "🛍",
      description:
        "Navigate the competitive world of fashion retail. Share insights on brand creation, market trends, and retail management.",
      bgColor: "bg-yellow-300",
    },
    {
      title: "Healthcare Entrepreneurship",
      icon: "🩺",
      description:
        "Innovate in the healthcare sector. From biotech startups to health app development, discuss opportunities and challenges in health-related enterprises.",
      bgColor: "bg-green-400",
    },
    {
      title: "Art and Culture Enterprises",
      icon: "🎭",
      description:
        "Blend creativity with commerce in the arts. Manage and grow enterprises in the cultural sector, from art galleries to theater productions.",
      bgColor: "bg-purple-400",
    },
    {
      title: "Sports Entrepreneurship",
      icon: "🏅",
      description:
        "Combine your passion for sports with business acumen. Discuss opportunities in sports management, merchandise, and fitness startups.",
      bgColor: "bg-pink-300",
    },
    {
      title: "Tourism and Hospitality",
      icon: "🌴",
      description:
        "Explore entrepreneurial opportunities in tourism and hospitality. Share strategies for thriving in travel services, event management, and accommodation.",
      bgColor: "bg-blue-500",
    },
    {
      title: "Automotive Industry Startups",
      icon: "🚗",
      description:
        "Drive innovation in the automotive sector. From electric vehicle startups to automotive tech companies, discuss trends and opportunities.",
      bgColor: "bg-gray-300",
    },
    {
      title: "Agricultural Entrepreneurship",
      icon: "🌾",
      description:
        "Sow the seeds of business in agriculture. Engage with agripreneurs to discuss innovations in farming, agrotech, and sustainable practices.",
      bgColor: "bg-green-500",
    },
    {
      title: "Educational Tech and Startups",
      icon: "🎓",
      description:
        "Transform the educational landscape. Discuss the development and implementation of educational technologies and learning platforms.",
      bgColor: "bg-yellow-400",
    },
    {
      title: "Media and Entertainment Ventures",
      icon: "🎬",
      description:
        "Break into the media and entertainment industry. Discuss content creation, media startups, and the dynamics of the entertainment business.",
      bgColor: "bg-red-400",
    },
  ];

  const getCategoryData = () => {
    switch (category) {
      case "media":
        return mediaCategories;
      case "entrepreneur":
        return entrepreneurCategories;
      default:
        return travelCategories;
    }
  };

  const [categories, setCategories] = useState(getCategoryData());
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [newHub, setNewHub] = useState({
    title: '',
    icon: '',
    description: '',
    isPrivate: false,
    tags: []
  });

  const createGroups = (categories) => {
    const groups = [];
    let currentIndex = 0;
    const pattern = [3, 4];
    let patternIndex = 0;

    while (currentIndex < categories.length) {
      const groupSize = pattern[patternIndex % pattern.length];
      const remainingItems = categories.length - currentIndex;
      const actualSize = Math.min(groupSize, remainingItems);
      groups.push(categories.slice(currentIndex, currentIndex + actualSize));
      currentIndex += actualSize;
      patternIndex++;
    }

    return groups;
  };

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryGroups = createGroups(filteredCategories);

  const handleSubmit = () => {
    if (!newHub.title || !newHub.icon || !newHub.description) return;
    setCategories([...categories, { ...newHub, bgColor: "bg-gray-100" }]);
    setModalOpen(false);
    setNewHub({ title: "", icon: "", description: "" });
  };

  return (
    <div className="min-h-screen relative px-3 md:px-8 pt-20">
      <div className="container mx-auto">
        <div className="w-full flex justify-between gap-4 mb-6 flex-wrap">
          <div className="w-auto max-w-xl">
            <h3 className={`text-3xl font-semibold text-gray-800 ${className}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)} Sub Hubs
            </h3>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder={`Search ${category} hubs`}
              className="p-2 border rounded-full"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="p-2 md:px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              onClick={() => setModalOpen(true)}
            >
              Create Hub
            </button>
          </div>
        </div>

        <div className="relative">
          {filteredCategories.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-xl">
              <div className="text-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-24 w-24 mx-auto text-gray-400 mb-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Hub Not Found!
                </h2>
                <p className="text-gray-600 mb-8">
                  No hubs match your search in the {category} category.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center mx-auto px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  <PlusCircle className="mr-2" />
                  Create New Hub
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6 max-h-[500px] md:max-h-fit overflow-y-scroll md:overflow-hidden">
              {categoryGroups.map((group, index) => (
                <div key={index} className="flex flex-wrap gap-6 justify-center ">
                  {group.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex min-w-[250px] cursor-pointer max-sm:max-w-full max-w-fit h-fit flex-1 bg-white rounded-xl md:rounded-full p-6 items-center space-x-4 shadow-lg
                        transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-transparent
                        hover:bg-gradient-to-r hover:from-indigo-300 hover:to-pink-300 group"
                    >
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center
                          transition-all duration-300 group-hover:scale-110`}
                        >
                          <span className="text-2xl group-hover:rotate-12 transition-all duration-300">
                            {item.icon}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-white transition-all duration-300">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-gray-600 text-sm group-hover:text-white transition-all duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          
          {/* Fog effect overlay */}
          <div className="absolute md:hidden bottom-0 left-0 right-0 h-20 rounded-br-lg rounded-bl-lg bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      </div>

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

export default SubInterest;