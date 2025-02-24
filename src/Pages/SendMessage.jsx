import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SendMessage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start min-h-[80vh] max-w-7xl mx-auto p-6 py-24 gap-12">
      {/* Left Side: Form */}
      <div className="w-full lg:w-2/3 p-6 bg-white rounded-xl shadow-lg">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-blue-500 tracking-wider">CONTACT US</p>
          <h1 className="text-4xl font-bold text-gray-900">Get in touch</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-gray-50"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-gray-50"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-gray-50 resize-none"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2 group"
          >
            Send Message
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Right Side: Info */}
      <div className="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-6">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">Let's start a conversation</h2>
        <p className="text-gray-600 text-lg">
        We're always here to help. Contact us if you need any help with Joinlio or have any questions.
        </p>
        <Link 
          to="/get-started" 
          className="inline-flex items-center text-blue-500 font-semibold group hover:text-blue-600 transition-colors duration-200"
        >
          See a demo 
          <svg 
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SendMessage;