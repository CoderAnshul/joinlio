import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ContactThankyou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You - Joinlio</title>
        <meta 
          name="description" 
          content="Thank you for reaching out to Joinlio. We'll get back to you soon!" 
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-7xl mx-auto p-6 text-center">
        <div className="bg-white p-8 rounded-xl max-w-xl w-full">
          <svg 
            className="mx-auto mb-6 text-green-500 w-24 h-24" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Message Sent Successfully!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Thank you for reaching out to Joinlio. We've received your message and will get back to you as soon as possible.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/" 
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Return to Home
            </Link>
            <Link 
              to="/get-started" 
              className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactThankyou;