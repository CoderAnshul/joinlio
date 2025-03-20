import React, { useState } from 'react';

export const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    partner: '',
    deadline: '',
    collaborators: '',
    image: null
  });
  
  const projects = {
    current: [
      {
        id: 1,
        title: "Climate Research Initiative",
        partner: "Environmental Science Institute",
        status: "In Progress",
        deadline: "June 15, 2025",
        description: "Collaborative research on climate change impacts on urban environments."
      },
      {
        id: 2,
        title: "Quantum Computing Research",
        partner: "Tech Innovations Lab",
        status: "Planning Phase",
        deadline: "September 30, 2025",
        description: "Exploring applications of quantum computing in data analysis."
      },
      {
        id: 3,
        title: "Sustainable Architecture Project",
        partner: "Urban Planning Department",
        status: "Active",
        deadline: "August 1, 2025",
        description: "Designing eco-friendly building concepts for campus expansion."
      }
    ],
    past: [
      {
        id: 4,
        title: "AI Ethics Symposium",
        partner: "Computer Science Department",
        status: "Completed",
        completionDate: "February 10, 2025",
        outcome: "Published joint paper in International Journal of AI Ethics"
      },
      {
        id: 5,
        title: "Medical Research Partnership",
        partner: "University Hospital",
        status: "Completed",
        completionDate: "December 5, 2024",
        outcome: "Developed new protocol for patient data handling"
      }
    ],
    opportunities: [
      {
        id: 6,
        title: "Renewable Energy Research",
        organization: "National Energy Foundation",
        applicationDeadline: "April 30, 2025",
        funding: "$50,000",
        requirements: "Graduate students with background in energy systems"
      },
      {
        id: 7,
        title: "Public Health Data Analysis",
        organization: "Global Health Initiative",
        applicationDeadline: "May 15, 2025",
        funding: "$35,000",
        requirements: "Experience with epidemiological data"
      }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewProject({
        ...newProject,
        image: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('New project data:', newProject);
    
    // Add the new project to current projects
    const newId = Math.max(...projects.current.map(p => p.id)) + 1;
    const projectToAdd = {
      id: newId,
      title: newProject.title,
      partner: newProject.partner,
      status: "Planning Phase",
      deadline: newProject.deadline,
      description: newProject.description,
      // In a real app, you'd handle the image upload separately
    };
    
    projects.current.push(projectToAdd);
    
    // Reset form and close modal
    setNewProject({
      title: '',
      description: '',
      partner: '',
      deadline: '',
      collaborators: '',
      image: null
    });
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects & Collaborations</h1>
        <button 
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center"
          onClick={() => setShowModal(true)}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Create New Project
        </button>
      </div>
      
      <div className="flex mb-6">
        <button 
          className={`px-4 py-2 mr-2 rounded ${activeTab === 'current' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('current')}
        >
          Current Projects
        </button>
        <button 
          className={`px-4 py-2 mr-2 rounded ${activeTab === 'past' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('past')}
        >
          Past Collaborations
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeTab === 'opportunities' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('opportunities')}
        >
          Collaborate In Projects
        </button>
      </div>
      
      {activeTab === 'current' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.current.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mt-1">Partner: {project.partner}</p>
                <div className="flex items-center mt-2">
                  <span className={`px-2 py-1 rounded text-sm ${
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                    project.status === 'Planning Phase' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="ml-3 text-sm text-gray-500">Deadline: {project.deadline}</span>
                </div>
                <p className="mt-4">{project.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {activeTab === 'past' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Past Collaborations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.past.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mt-1">Partner: {project.partner}</p>
                <div className="flex items-center mt-2">
                  <span className="px-2 py-1 rounded text-sm bg-gray-100 text-gray-800">
                    {project.status}
                  </span>
                  <span className="ml-3 text-sm text-gray-500">Completed: {project.completionDate}</span>
                </div>
                <p className="mt-4">Outcome: {project.outcome}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  View Report
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {activeTab === 'opportunities' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Collaboration Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.opportunities.map(opportunity => (
              <div key={opportunity.id} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-xl font-bold">{opportunity.title}</h3>
                <p className="text-gray-600 mt-1">Organization: {opportunity.organization}</p>
                <div className="mt-2">
                  <p><span className="font-medium">Application Deadline:</span> {opportunity.applicationDeadline}</p>
                  <p><span className="font-medium">Funding Available:</span> {opportunity.funding}</p>
                  <p className="mt-2"><span className="font-medium">Requirements:</span> {opportunity.requirements}</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create Project Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Create New Project</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Project Title</label>
                <input 
                  type="text" 
                  name="title"
                  value={newProject.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Partner/Organization</label>
                <input 
                  type="text" 
                  name="partner"
                  value={newProject.partner}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Project Deadline</label>
                <input 
                  type="date" 
                  name="deadline"
                  value={newProject.deadline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Collaborators (comma separated)</label>
                <input 
                  type="text" 
                  name="collaborators"
                  value={newProject.collaborators}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe, Jane Smith"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea 
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Project Image</label>
                <div className="flex items-center">
                  <input 
                    type="file" 
                    onChange={handleImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    accept="image/*"
                  />
                  {newProject.image && (
                    <div className="ml-4">
                      <img 
                        src={URL.createObjectURL(newProject.image)} 
                        alt="Project preview" 
                        className="h-16 w-16 object-cover rounded" 
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 mr-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};