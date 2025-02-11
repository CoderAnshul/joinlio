import React, { useState } from "react";
import loop from "../../assets/images/loop.png";


const SubInterest = () => {
  const [categories, setCategories] = useState([
    { title: "Road Trips", icon: "🚗", description: "Discover scenic routes and essential road trip hacks.", bgColor: "bg-blue-100" },
    { title: "Hiking Adventures", icon: "🥾", description: "Join fellow trail enthusiasts to explore new heights.", bgColor: "bg-green-100" },
    { title: "Adventure Sports", icon: "🏄", description: "Dive into the world of outdoor sports.", bgColor: "bg-orange-100" },
    { title: "Solo Travel", icon: "✈️", description: "Empowering solo travelers for safe journeys.", bgColor: "bg-purple-100" },
    { title: "Campfire Gatherings", icon: "🔥", description: "Create memorable campfire experiences.", bgColor: "bg-red-100" },
    { title: "Camping Expeditions", icon: "⛺", description: "Everything about camping gear & serene sites.", bgColor: "bg-emerald-100" },
    { title: "Mountain Biking", icon: "🚵", description: "Find the best trails & biking communities.", bgColor: "bg-amber-100" },
    { title: "Boating and Sailing", icon: "⛵", description: "Set sail on your boating adventure.", bgColor: "bg-cyan-100" },
    { title: "Cultural Exploration", icon: "🌍", description: "Explore the rich tapestry of global cultures.", bgColor: "bg-indigo-100" },
    { title: "Wildlife and Safari", icon: "🐘", description: "Ethical wildlife encounters & nature exploration.", bgColor: "bg-yellow-100" },
    { title: "Eco-Tourism", icon: "🌱", description: "Travel green with sustainable practices.", bgColor: "bg-lime-100" },
    { title: "Photography Journeys", icon: "📷", description: "Capture the world through your lens.", bgColor: "bg-rose-100" },
    { title: "Backpacking and Hosteling", icon: "🎒", description: "Ultimate guides for budget travel and hosteling.", bgColor: "bg-teal-100" },
    { title: "Volunteer Travel", icon: "🤝", description: "Make a difference while exploring new places.", bgColor: "bg-pink-100" },
    { title: "Wellness and Retreats", icon: "🧘", description: "Discover rejuvenating wellness getaways.", bgColor: "bg-blue-100" },
    { title: "Historical Tours", icon: "🏛️", description: "Walk through the corridors of time.", bgColor: "bg-amber-100" },
    { title: "Luxury Travel", icon: "🍸", description: "Indulge in the finest travel experiences.", bgColor: "bg-purple-100" },
    { title: "Festival and Event Travel", icon: "🎉", description: "Experience world's most exhilarating festivals.", bgColor: "bg-green-100" },
    { title: "Scuba Diving and Snorkeling", icon: "🐠", description: "Explore underwater wonders.", bgColor: "bg-cyan-100" },
    { title: "Culinary Tours", icon: "🍴", description: "Taste your way through different cultures.", bgColor: "bg-red-100" },
    { title: "Art and Literature Tours", icon: "🎨", description: "Dive into the worlds of art and literature.", bgColor: "bg-indigo-100" },
    { title: "City Breaks", icon: "🏙️", description: "Discover the best of urban life.", bgColor: "bg-emerald-100" },
    { title: "Train Journeys", icon: "🚂", description: "Scenic rail journeys with breathtaking views.", bgColor: "bg-yellow-100" },
    { title: "Winter Sports", icon: "❄️", description: "Hit the slopes with expert winter sports tips.", bgColor: "bg-blue-100" },
    { title: "Desert Safaris", icon: "🐪", description: "Adventure in the vast dunes.", bgColor: "bg-orange-100" },
    { title: "Island Hopping", icon: "🏝️", description: "Explore the beauty of island life.", bgColor: "bg-teal-100" },
    { title: "Pilgrimages", icon: "✨", description: "Embark on spiritual journeys to sacred sites.", bgColor: "bg-purple-100" },
    { title: "Educational Tours", icon: "📚", description: "Engage in learning expeditions.", bgColor: "bg-lime-100" },
    { title: "Extreme Sports", icon: "🪂", description: "For thrill-seekers pushing their limits.", bgColor: "bg-rose-100" },
    { title: "Nature Photography", icon: "📸", description: "Capture wildlife and stunning landscapes.", bgColor: "bg-green-100" }
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [newHub, setNewHub] = useState({ title: "", icon: "", description: "" });
  
  const createGroups = (categories) => {
    let groups = [];
    let currentIndex = 0;
    let patternIndex = 0;
    const pattern = [3, 4];
    
    while (currentIndex < categories.length) {
      const currentGroupSize = pattern[patternIndex % pattern.length];
      const remainingItems = categories.length - currentIndex;
      const actualGroupSize = Math.min(currentGroupSize, remainingItems);
      groups.push(categories.slice(currentIndex, currentIndex + actualGroupSize));
      currentIndex += actualGroupSize;
      patternIndex++;
    }
    
    return groups;
  };

  const addSubHub = () => {
    setModalOpen(true);
  };

  const handleSubmit = () => {
    if (!newHub.title || !newHub.icon || !newHub.description) return;
    setCategories([...categories, { ...newHub, bgColor: "bg-gray-100" }]);
    setModalOpen(false);
    setNewHub({ title: "", icon: "", description: "" });
  };

  const filteredCategories = categories.filter(category => 
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryGroups = createGroups(filteredCategories);

  return (
    <div className="min-h-screen bg-gradient-to-r  from-purple-100 via-pink-100 to-orange-100 px-8 py-14">
      <div className="container mx-auto">
        <div className="w-full flex justify-between gap-4 mb-6 flex-wrap">
          <div className="w-auto max-w-xl">
            <h3 className="text-3xl relative font-semibold text-gray-800">
              Sub Hubs
              <img className="absolute -bottom-4 scale-50" src={loop} alt="loop text" />
            </h3>
          </div>
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Search Sub Hubs" 
              className="p-2 border rounded" 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              className="p-2 bg-blue-500 text-white rounded"
              onClick={addSubHub}
            >
              Create Sub Hub
            </button>
          </div>
        </div>

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
      
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 flex items-center z-[10000] justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Create New Sub Hub</h2>
            <input type="text" placeholder="Title" className="w-full p-2 border rounded mb-2" 
              value={newHub.title} onChange={(e) => setNewHub({ ...newHub, title: e.target.value })} />
            <input type="text" placeholder="Icon" className="w-full p-2 border rounded mb-2" 
              value={newHub.icon} onChange={(e) => setNewHub({ ...newHub, icon: e.target.value })} />
            <input type="text" placeholder="Description" className="w-full p-2 border rounded mb-2" 
              value={newHub.description} onChange={(e) => setNewHub({ ...newHub, description: e.target.value })} />
            <div className="flex justify-end gap-2">
              <button className="p-2 bg-gray-400 text-white rounded transition-all" onClick={() => setModalOpen(false)}>Cancel</button>
              <button className="p-2 bg-blue-500 text-white rounded transition-all" onClick={handleSubmit}>Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubInterest;