import React, { useState } from 'react';


export const Tools = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');
    
    const toolsData = {
      software: [
        {
          id: 1,
          name: "Statistical Analysis Pro",
          category: "software",
          description: "Comprehensive statistical analysis package with machine learning capabilities",
          accessType: "Download",
          popularity: 4.8
        },
        {
          id: 2,
          name: "Research Reference Manager",
          category: "software",
          description: "Organize research papers, generate citations, and manage bibliographies",
          accessType: "Cloud Access",
          popularity: 4.6
        },
        {
          id: 3,
          name: "Simulation Toolkit",
          category: "software",
          description: "Create and run scientific simulations across various disciplines",
          accessType: "Download",
          popularity: 4.5
        }
      ],
      databases: [
        {
          id: 4,
          name: "Global Research Repository",
          category: "database",
          description: "Access to millions of scholarly articles and research papers",
          accessType: "Online",
          popularity: 4.9
        },
        {
          id: 5,
          name: "Scientific Data Archive",
          category: "database",
          description: "Repository of scientific datasets across multiple domains",
          accessType: "Online",
          popularity: 4.7
        }
      ],
      hardware: [
        {
          id: 6,
          name: "Advanced Computing Cluster",
          category: "hardware",
          description: "High-performance computing resources for complex computations",
          accessType: "Reservation Required",
          popularity: 4.8
        },
        {
          id: 7,
          name: "Specialized Lab Equipment",
          category: "hardware",
          description: "Access to specialized laboratory and research equipment",
          accessType: "On-site",
          popularity: 4.5
        }
      ],
      learning: [
        {
          id: 8,
          name: "Methods Workshop Series",
          category: "learning",
          description: "Online workshops on research methodologies and techniques",
          accessType: "Registration Required",
          popularity: 4.6
        },
        {
          id: 9,
          name: "Academic Writing Course",
          category: "learning",
          description: "Comprehensive course on academic writing and publishing",
          accessType: "Self-paced",
          popularity: 4.7
        }
      ]
    };
    
    const allTools = [
      ...toolsData.software,
      ...toolsData.databases,
      ...toolsData.hardware,
      ...toolsData.learning
    ];
    
    const filteredTools = allTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'all' || tool.category === category;
      return matchesSearch && matchesCategory;
    });
  
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Tools & Resources</h1>
        
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              <input 
                type="text" 
                placeholder="Search tools and resources..."
                className="w-full px-4 py-2 border border-gray-300 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="software">Software</option>
                <option value="database">Databases</option>
                <option value="hardware">Hardware</option>
                <option value="learning">Learning Resources</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <div key={tool.id} className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold">{tool.name}</h2>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {tool.accessType}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Category: {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(tool.popularity) ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="ml-1 text-sm text-gray-600">{tool.popularity.toFixed(1)}</span>
              </div>
              <p className="mt-3">{tool.description}</p>
              <div className="mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Access Resource
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredTools.length === 0 && (
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200 text-center">
            <p className="text-gray-600">No tools or resources match your search criteria.</p>
          </div>
        )}
      </div>
    );
  };
  