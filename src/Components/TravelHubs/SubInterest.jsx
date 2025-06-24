import React, { useState, useEffect } from "react";
import { X, PlusCircle } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Add useNavigate
import { fetchSubhubByHub, createSubhub } from "../../store/slices/subhub"; // Adjust the import path

const SubInterest = ({ category = "travel", className = "", hubId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add navigate hook
  const { data: categories, loading, error } = useSelector((state) => state.subhub);

  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [newHub, setNewHub] = useState({
    title: "",
    icon: "",
    description: "",
    isPrivate: false,
    tags: [],
  });

  // Default background colors if API doesn't provide bgColor
  const defaultBgColors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-orange-100",
    "bg-purple-100",
    "bg-red-100",
    "bg-emerald-100",
    "bg-amber-100",
    "bg-cyan-100",
    "bg-indigo-100",
    "bg-yellow-100",
    "bg-lime-100",
    "bg-rose-100",
    "bg-teal-100",
    "bg-pink-100",
  ];

  // Fetch subhubs when hubId changes
  useEffect(() => {
    if (hubId) {
      dispatch(fetchSubhubByHub(hubId));
    }
  }, [dispatch, hubId]);

  // Function to handle subhub click
  const handleSubHubClick = (subHub) => {
    // Create a slug from the subhub name/title
    const slug = (subHub.name || subHub.title)
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    
    // Navigate to subhub page with data
    navigate(`/subhub/${subHub.id || slug}`, {
      state: {
        subHubData: {
          id: subHub.id,
          name: subHub.name,
          title: subHub.title,
          description: subHub.description,
          icon: subHub.icon,
          image: subHub.image,
          bgColor: subHub.bgColor,
          created_at: subHub.created_at || new Date().toISOString(),
          member_count: subHub.member_count || 0
        }
      }
    });
  };

  // Function to create groups of 3 or 4 items
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

  // Filter categories based on search term
  const filteredCategories = categories?.filter((category) =>
    category?.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Assign default bgColor if not provided by API
  const enrichedCategories = filteredCategories.map((category, index) => ({
    ...category,
    bgColor: category.bgColor || defaultBgColors[index % defaultBgColors.length],
  }));

  const categoryGroups = createGroups(enrichedCategories);

  // Handle form submission for creating a new subhub
  const handleSubmit = async () => {
    if (!newHub.title || !newHub.icon || !newHub.description) return;

    const formData = new FormData();
    formData.append("title", newHub.title);
    formData.append("icon", newHub.icon);
    formData.append("description", newHub.description);
    formData.append("isPrivate", newHub.isPrivate);
    formData.append("tags", JSON.stringify(newHub.tags));
    formData.append("hubId", hubId); // Include hubId if required by API

    try {
      await dispatch(createSubhub(formData)).unwrap();
      setModalOpen(false);
      setNewHub({ title: "", icon: "", description: "", isPrivate: false, tags: [] });
      // Refetch subhubs to include the newly created one
      dispatch(fetchSubhubByHub(hubId));
    } catch (err) {
      console.error("Failed to create subhub:", err);
    }
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
          {loading ? (
            <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                <p className="text-gray-600 mt-4">Loading sub hubs...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-xl">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 mx-auto text-red-400 mb-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Error</h2>
                <p className="text-gray-600 mb-8">{error.message || "Failed to load sub hubs."}</p>
              </div>
            </div>
          ) : filteredCategories.length === 0 ? (
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Hub Not Found!</h2>
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
                <div key={index} className="flex flex-wrap gap-6 justify-center">
                  {group.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSubHubClick(item)} // Added click handler
                      className="flex min-w-[250px] cursor-pointer max-sm:max-w-full max-w-fit h-fit flex-1 bg-white rounded-xl md:rounded-full p-6 items-center space-x-4 shadow-lg
                        transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-transparent
                        hover:bg-gradient-to-r hover:from-indigo-300 hover:to-pink-300 group active:scale-95"
                    >
                      {/* <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center
                          transition-all duration-300 group-hover:scale-110`}
                        >
                          <span className="text-2xl group-hover:rotate-12 transition-all duration-300">
                            {item.icon}
                          </span>
                        </div>
                      </div> */}
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-white transition-all duration-300">
                          {item?.name || item.title}
                        </h2>
                        <p className="mt-1 text-gray-600 text-sm group-hover:text-white transition-all duration-300">
                          {item.description}
                        </p>
                      </div>
                      {/* Optional: Add a small arrow indicator */}
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-500 mr-3 flex-shrink-0"
              >
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
                <label htmlFor="hub-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
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
                <label htmlFor="hub-icon" className="block text-sm font-medium text-gray-700 mb-1">
                  Icon (emoji)
                </label>
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
                <label htmlFor="hub-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
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
                onClick={handleSubmit}
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