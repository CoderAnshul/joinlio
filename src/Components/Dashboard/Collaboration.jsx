import React, { useState } from 'react';

export const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  
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

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Projects & Collaborations</h1>
      
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
          Opportunities
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
    </div>
  );
};