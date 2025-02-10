import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HubInfo = () => {
  const [activeSection, setActiveSection] = useState('Tools');

  const sectionData = {
    'Tools': {
      number: '01',
      description: 'Essential built-in tools to simplify and enhance travel planning and execution.',
      color: 'bg-green-50',
      textColor: 'text-green-800',
      subCategories: [
        {
          title: 'Travel Planning & Organization',
          items: [
            'Itinerary Builder: Drag-and-drop planners with templates',
            'Budget Calculator: Expense tracking tool',
            'Packing Checklist Generator',
            'Route & Map Planner',
            'Group Travel Organizer'
          ]
        },
        {
          title: 'Content Creation & Sharing',
          items: [
            'Photo & Video Editing Tools',
            'Blog & Vlog Templates',
            'Travel Journal & Diary'
          ]
        },
        {
          title: 'Safety & Emergency Tools',
          items: [
            'Emergency Contact Shortcut',
            'Safety Checklist Generator',
            'Travel Risk Assessment Tool'
          ]
        }
      ]
    },
    'Support': {
      number: '02',
      description: 'Direct assistance and community-driven support for every stage of travel.',
      color: 'bg-blue-50',
      textColor: 'text-blue-800',
      subCategories: [
        {
          title: 'Planning & Guidance Support',
          items: [
            'Peer Recommendations',
            'Mentorship Programs',
            'Destination Guides'
          ]
        },
        {
          title: 'Safety & Well-being Support',
          items: [
            '24/7 Emergency Assistance Chat',
            'Health & Wellness Advice',
            'Travel Insurance Assistance'
          ]
        },
        {
          title: 'Academic & Career Support',
          items: [
            'Study Abroad Counseling',
            'Volunteer Project Matching',
            'Internship & Work Abroad Guidance'
          ]
        }
      ]
    },
    'Services': {
      number: '03',
      description: 'Third-party partnerships and offerings with exclusive benefits for student travelers.',
      color: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      subCategories: [
        {
          title: 'Travel & Accommodation Services',
          items: [
            'Discounted Flights & Transportation',
            'Affordable Accommodation Listings',
            'Travel Gear Rentals'
          ]
        },
        {
          title: 'Local Experience & Activities',
          items: [
            'Adventure Sports Packages',
            'Guided Tours & Cultural Experiences',
            'Co-working Spaces'
          ]
        },
        {
          title: 'Safety & Insurance Services',
          items: [
            'Travel Insurance Providers',
            'Visa & Documentation Services'
          ]
        }
      ]
    }
  };

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="h-fit flex flex-col lg:flex-row">
      {/* Sidebar for Large Screens */}
      <div className="hidden h-fit lg:block w-1/4 bg-gray-100 p-8">
        {Object.entries(sectionData).map(([section, data]) => (
          <motion.div 
            key={section}
            onClick={() => setActiveSection(section)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer mb-4 p-4 rounded-lg transition-all duration-300 ${
              activeSection === section 
                ? 'bg-white shadow-lg' 
                : 'hover:bg-gray-200'
            }`}
          >
            <div className={`text-6xl font-bold opacity-20 ${data.textColor}`}>{data.number}</div>
            <h2 className={`text-xl font-semibold mt-2 ${data.textColor}`}>{section}</h2>
          </motion.div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="lg:hidden">
        {Object.entries(sectionData).map(([section, data]) => (
          <motion.div 
            key={section} 
            className={`p-4 border-b ${data.color}`}
          >
            <div 
              className="flex justify-between items-center"
              onClick={() => setActiveSection(section === activeSection ? '' : section)}
            >
              <div>
                <div className={`text-4xl font-bold opacity-20 ${data.textColor}`}>{data.number}</div>
                <h2 className={`text-xl font-semibold ${data.textColor}`}>{section}</h2>
              </div>
              <motion.span
                animate={{ rotate: activeSection === section ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>
            <AnimatePresence>
              {activeSection === section && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={variants}
                  className={`${data.textColor} space-y-4`}
                >
                  <p className="mt-4">{data.description}</p>
                  {data.subCategories.map((category, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h3 className="font-bold mb-2">{category.title}</h3>
                      <ul className="list-disc list-inside">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Content Area for Large Screens */}
      <div className="hidden lg:block w-3/4 p-8">
        <AnimatePresence>
          {Object.entries(sectionData).map(([section, data]) => (
            activeSection === section && (
              <motion.div 
                key={section}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`${data.color} min-h-full p-8 rounded-lg`}
              >
                <div className={`text-8xl font-bold opacity-20 mb-4 ${data.textColor}`}>{data.number}</div>
                <h2 className={`text-3xl font-bold mb-4 ${data.textColor}`}>{section}</h2>
                <p className={`text-xl mb-6 ${data.textColor}`}>{data.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {data.subCategories.map((category, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h3 className="font-bold mb-2">{category.title}</h3>
                      <ul className="list-disc list-inside">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HubInfo;