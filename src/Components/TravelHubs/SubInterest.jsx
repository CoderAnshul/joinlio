import React from "react";
import loop from "../../assets/images/loop.png";

const SubInterest = () => {
  const categories = [
    { title: "Road Trips", icon: "🚗", description: "Discover scenic routes and essential road trip hacks.", bgColor: "bg-blue-100" },
    { title: "Hiking Adventures", icon: "🥾", description: "Join fellow trail enthusiasts to explore new heights.", bgColor: "bg-green-100" },
    { title: "Adventure Sports", icon: "🏄", description: "Dive into the world of outdoor sports.", bgColor: "bg-orange-100" },
    { title: "Solo Travel", icon: "🎒", description: "Empowering solo travelers for safe journeys.", bgColor: "bg-purple-100" },
    { title: "Campfire Gatherings", icon: "🔥", description: "Create memorable campfire experiences.", bgColor: "bg-red-100" },
    { title: "Camping Expeditions", icon: "⛺", description: "Everything about camping gear & serene sites.", bgColor: "bg-emerald-100" },
    { title: "Mountain Biking", icon: "🚵", description: "Find the best trails & biking communities.", bgColor: "bg-amber-100" },
    { title: "Boating and Sailing", icon: "⛵", description: "Set sail on your boating adventure.", bgColor: "bg-cyan-100" },
    { title: "Cultural Exploration", icon: "🌍", description: "Explore the rich tapestry of global cultures.", bgColor: "bg-indigo-100" },
    { title: "Wildlife and Safari", icon: "🐘", description: "Ethical wildlife encounters & nature exploration.", bgColor: "bg-yellow-100" },
    { title: "Eco-Tourism", icon: "🌱", description: "Travel green with sustainable practices.", bgColor: "bg-lime-100" },
    { title: "Photography Journeys", icon: "📷", description: "Capture the world through your lens.", bgColor: "bg-rose-100" }
  ];

  const categoryGroups = [
    categories.slice(0, 3),
    categories.slice(3, 7),
    categories.slice(7, 10),
    categories.slice(10, 12),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 p-8">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="w-full flex justify-between gap-4 mb-6 flex-wrap">
          <div className="w-auto max-w-xl">
            <h3 className="text-3xl relative font-semibold text-gray-800">
              Sub Interests
              <img className="absolute -bottom-4 scale-50" src={loop} alt="loop text" />
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6">
          {categoryGroups.map((group, index) => (
            <div key={index} className="flex flex-wrap gap-6 justify-center">
              {group.map((category, idx) => (
                <div 
                  key={idx}
                  className="flex min-w-[250px] cursor-pointer max-w-fit h-fit flex-1 bg-white rounded-full p-6 items-center space-x-4 shadow-lg transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-300 hover:to-pink-300 
                  group"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                      <span className="text-2xl group-hover:rotate-12 transition-all duration-300">{category.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-white transition-all duration-300">{category.title}</h2>
                    <p className="mt-1 text-gray-600 text-sm group-hover:text-white transition-all duration-300">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};



export default SubInterest;
