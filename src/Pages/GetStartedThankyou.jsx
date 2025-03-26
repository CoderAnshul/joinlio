import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Bird, User } from 'lucide-react';
import j from "../assets/images/bigJTwo.png";

const GetStartedThankyou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You - Joinlio</title>
        <meta 
          name="description" 
          content="Thank you for signing up for Joinlio. Stay tuned for exciting updates!" 
        />
      </Helmet>
      <div className="min-h-fit p-6 flex items-center justify-center">
        <div>
          <img className="max-h-[500px] hidden lg:block mr-10" src={j} alt="Joinlio Logo" />
        </div>
        <div className="w-full h-full lg:ml-5 max-w-full grid md:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="relative p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                  <Bird className="text-blue-600 w-5 h-5" />
                  <p className="text-sm">
                    You're now part of the Joinlio early access community!
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                  <User className="text-green-600 w-5 h-5" />
                  <p className="text-sm">
                    We'll notify you via email when Joinlio goes live.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Thank You Message */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
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
            <h1 className="text-3xl font-bold mb-6">Thank You for Signing Up!</h1>
            <p className="text-gray-700 mb-8">
              You've successfully registered for early access to Joinlio. We'll send you an email notification when our platform goes live.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/" 
                className="bg-[#F7C28A] text-black px-6 py-3 rounded-lg hover:bg-[#c59057] transition-colors duration-200"
              >
                Return to Home
              </Link>
              <Link 
                to="/get-started" 
                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Invite Friends
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedThankyou;