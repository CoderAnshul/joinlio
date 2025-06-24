import React, { useState } from 'react';
import blog from "../../assets/images/blog.png";
import community from "../../assets/images/community.png";
import trip from "../../assets/images/trip.png";
import group from "../../assets/images/group.png";
import { label } from 'framer-motion/client';
import BlogPopup from '../BlogPopup';
const buttonConfig = {
  travel: [
    { label: "Create Blog", image: blog },
    { label: "Create Groups", image: group },
    { label: "Create your trips", image: trip },
    {label : "Create glimpse", image: community}
  ],
  media: [
    { label: "Create Blog", image: blog },
    { label: "Create Project", image: community },
    { label: "Create Groups", image: group }
  ],
  entrepreneur: [
    { label: "Create Blog", image: blog },
    { label: "Create Groups", image: group },
    { label: "Create Project", image: community }
  ]
};


// Blog Popup with Rich Text Editor
// const BlogPopup = ({ onClose }) => {
//   return (
//     <>
//       <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
//       <div className="bg-white p-6 rounded-2xl w-full max-w-2xl h-[80vh] overflow-y-scroll shadow-xl" onClick={(e) => e.stopPropagation()}>
//       <div className="flex justify-between items-center mb-4">
        
//         <h3 className="text-2xl font-bold gradient-text-three">Create Blog</h3>
//         <button className="text-gray-500 hover:text-gray-800 p-2" onClick={onClose}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <line x1="18" y1="6" x2="6" y2="18"></line>
//             <line x1="6" y1="6" x2="18" y2="18"></line>
//           </svg>
//         </button>
//       </div>
//       <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3">
//           <circle cx="12" cy="12" r="10"></circle>
//           <line x1="12" y1="8" x2="12" y2="12"></line>
//           <line x1="12" y1="16" x2="12.01" y2="16"></line>
//         </svg>
//         <p className="text-amber-800 text-sm">
//           Blog creation is currently unavailable. This feature will be enabled after Joinlio officially launches.
//         </p>
//       </div>
      
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Title
//         </label>
//         <input 
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
//           type="text" 
//           placeholder="Enter blog title"
//         />
//       </div>
      
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Cover Image
//         </label>
//         <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40 mb-2 relative">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//             </svg>
//             <span className="ml-2 text-sm text-gray-500">Upload Cover Image</span>
//           </div>
//           <input type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
//         </div>
//       </div>
      
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Content
//         </label>
//         <div className="border rounded-lg mb-2">
//           <div className="flex bg-gray-100 border-b p-2 gap-2">
//             <button className="p-1 hover:bg-gray-200 rounded">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M4 7V4h16v3"></path><path d="M9 20h6"></path><path d="M12 4v16"></path>
//               </svg>
//             </button>
//             <button className="p-1 hover:bg-gray-200 rounded">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M4 11h16"></path>
//               </svg>
//             </button>
//             <button className="p-1 hover:bg-gray-200 rounded">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//                 <circle cx="8.5" cy="8.5" r="1.5"></circle>
//                 <polyline points="21 15 16 10 5 21"></polyline>
//               </svg>
//             </button>
//             <button className="p-1 hover:bg-gray-200 rounded">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
//               </svg>
//             </button>
//             <button className="p-1 hover:bg-gray-200 rounded">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="12" r="10"></circle>
//                 <line x1="2" y1="12" x2="22" y2="12"></line>
//                 <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//               </svg>
//             </button>
//           </div>
//           <textarea 
//             className="shadow-inner appearance-none border-none rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64" 
//             placeholder="Start writing your blog post..."
//           />
//         </div>
//       </div>
      
//       <div className="flex justify-between">
//         <button 
//           className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-all"
//           onClick={onClose}
//         >
//           Save Draft
//         </button>
//         <button 
//           className="bg-textColor text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
//           onClick={onClose}
//         >
//           Publish
//         </button>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// Group Popup with Member Management
const GroupPopup = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className="bg-white p-6 rounded-2xl w-full max-w-2xl h-[80vh] overflow-y-scroll shadow-xl" onClick={(e) => e.stopPropagation()}>      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold gradient-text-three">Create Group</h3>
        <button className="text-gray-500 hover:text-gray-800 p-2" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p className="text-amber-800 text-sm">
          Group creation is currently unavailable. This feature will be enabled after Joinlio officially launches.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Group Name
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Enter group name"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Privacy
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>Public</option>
            <option>Private</option>
            <option>Invite Only</option>
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Group Cover Image
        </label>
        <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40 mb-2 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span className="ml-2 text-sm text-gray-500">Upload Group Image</span>
          </div>
          <input type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24" 
          placeholder="Describe your group"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Add Members
        </label>
        <div className="flex items-center mb-2">
          <input 
            className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Enter email address"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600">
            Add
          </button>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg max-h-32 overflow-y-auto">
          <div className="flex items-center justify-between p-2 bg-white rounded mb-2 shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-2">J</div>
              <span>john.doe@example.com</span>
            </div>
            <button className="text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between p-2 bg-white rounded shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-2">S</div>
              <span>sarah.smith@example.com</span>
            </div>
            <button className="text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          className="bg-textColor text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
          onClick={onClose}
        >
          Create Group
        </button>
      </div>
    </div>
    </div>
  );
};

// Trip Popup with Itinerary Planning
const TripPopup = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className="bg-white p-6 rounded-2xl w-full max-w-2xl h-[80vh] overflow-y-scroll shadow-xl" onClick={(e) => e.stopPropagation()}>      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold gradient-text-three">Create Trip</h3>
        <button className="text-gray-500 hover:text-gray-800 p-2" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p className="text-amber-800 text-sm">
          Trip creation is currently unavailable. This feature will be enabled after Joinlio officially launches.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Trip Name
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Enter trip name"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Destination
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Where are you going?"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Start Date
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="date"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            End Date
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="date"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Trip Cover Image
        </label>
        <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40 mb-2 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span className="ml-2 text-sm text-gray-500">Upload Trip Image</span>
          </div>
          <input type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 flex justify-between">
          <span>Itinerary</span>
          <button className="text-blue-500 text-xs flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Day
          </button>
        </label>
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-3 border-b">
            <div className="font-bold">Day 1</div>
          </div>
          <div className="p-3">
            <div className="mb-2">
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" 
                type="text" 
                placeholder="Activity name"
              />
              <div className="flex gap-2">
                <div className="w-1/2">
                  <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="time" 
                  />
                </div>
                <div className="w-1/2">
                  <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="text" 
                    placeholder="Location" 
                  />
                </div>
              </div>
            </div>
            <button className="text-blue-500 text-xs flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add Activity
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Travel Partners
        </label>
        <div className="flex items-center mb-2">
          <input 
            className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Enter email address"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600">
            Invite
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
            alex@example.com
            <button className="ml-2 text-blue-500 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
            maria@example.com
            <button className="ml-2 text-blue-500 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          className="bg-textColor text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
          onClick={onClose}
        >
          Create Trip
        </button>
      </div>
    </div>
    </div>
  );
};

// Project Popup with Tasks and Milestones
const ProjectPopup = ({ onClose }) => {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    partner: '',
    deadline: '',
    collaborators: '',
    image: null
  });

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className="bg-white p-6 rounded-2xl w-full max-w-2xl h-[80vh] overflow-y-scroll shadow-xl" onClick={(e) => e.stopPropagation()}>    <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Create New Project</h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p className="text-amber-800 text-sm">
          Project creation is currently unavailable. This feature will be enabled after Joinlio officially launches.
        </p>
      </div>
      
      <form >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Project Title</label>
          <input 
            type="text" 
            name="title"
            value={newProject.title}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe, Jane Smith"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea 
            name="description"
            value={newProject.description}
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
    </div>
  );
}


const CreateSection = ({ category ,hubId}) => {
  const buttons = buttonConfig[category] || [];
  const [activePopup, setActivePopup] = useState(null);
   const [newProject, setNewProject] = useState({
      title: '',
      description: '',
      partner: '',
      deadline: '',
      collaborators: '',
      image: null
    });

  const handleButtonClick = (label) => {
    // Set the active popup based on the button label
    setActivePopup(label);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="w-full relative z-[100]">
      <div className="py-12 pt-2 my-5 mx-auto flex flex-col md:flex-row justify-between gap-5">
        <div className="flex max-sm:flex-col flex-wrap gap-6 p-4 border-2 w-full max-w-[1200px] border-gray-700 border-opacity-15 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl mx-auto">
          {buttons.map((btn, index) => (
            <div
              key={index}
              className="flex h-32 w-full flex-1 relative justify-between overflow-hidden items-center bg-white group hover:bg-textColor hover:scale-[0.95] cursor-pointer active:scale-90 transition-all rounded-2xl shadow-md p-4"
              onClick={() => handleButtonClick(btn.label)}
            >
              <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl leading-6 text-start gradient-text-three uppercase font-bold">
                {btn.label}
              </h2>
              <img className="h-20 mb-3" src={btn.image} alt={btn.label} />
            </div>
          ))}
        </div>
      </div>

      {/* Render the appropriate popup based on activePopup state */}
      {activePopup === "Create Blog" && <BlogPopup onClose={closePopup} hubId={hubId} />}
      {activePopup === "Create Groups" && <GroupPopup onClose={closePopup} />}
      {activePopup === "Create your trips" && <TripPopup onClose={closePopup} />}
      {activePopup === "Create Project" && <ProjectPopup onClose={closePopup} />}
    </div>
  );
};

export default CreateSection;
