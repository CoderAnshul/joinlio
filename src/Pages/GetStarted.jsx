import React, { useState } from 'react';
import { ChevronDown, Bird, User } from 'lucide-react';
import j from "../assets/images/bigJTwo.png";

const GetStarted = () => {
  const [userCategory, setUserCategory] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userCategory, firstName, lastName, institutionName, businessName, email, query });
  };

  const renderDynamicFields = () => {
    switch(userCategory) {
      case 'students':
      case 'alumni':
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Institution Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your institution's name"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Institutional Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="your.name@institution.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </>
        );
      case 'businesses':
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="your.name@business.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </>
        );
      case 'institutions':
        return (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your institution's name"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institutional Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="admin@institution.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-fit p-6 flex items-center justify-center">
      <div>
        <img className='max-h-[500px] hidden lg:block mr-10' src={j} alt="" />
      </div>
      <div className="w-full h-full lg:ml-5 max-w-full grid md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e0b3c1] via-[#e6d5b3] to-[#e0b3c1] rounded-3xl opacity-20" />
            <div className="relative p-8">
              <h1 className="text-3xl font-bold mb-6">Sign Up Early!</h1>
              <p className="text-gray-700 mb-8">
                As Joinlio prepares to launch, we're offering early sign-up opportunities so you can be among the first to experience all the benefits our platform has to offer once we go live.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                  <Bird className="text-blue-600 w-5 h-5" />
                  <p className="text-sm">Joinlio provides free access to all users</p>
                </div>
                
                <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                  <User className="text-green-600 w-5 h-5" />
                  <p className="text-sm">Sign up early to stay updated and receive notifications when Joinlio goes live.</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="font-semibold mb-4">Joinlio users include:</h2>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-6">1.</span>
                    <span>Students/Alumni: For those in universities, colleges, and institutions looking to connect, collaborate, and grow.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-6">2.</span>
                    <span>Businesses with Student Discounts: Ideal for businesses offering discounts to students, enhancing visibility and customer base.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium min-w-6">3.</span>
                    <span>Educational Institutions: For universities and colleges interested in tools that boost student development and wish to partner with us.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User Category
              </label>
              <div className="relative">
                <select
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg appearance-none pr-10"
                  value={userCategory}
                  onChange={(e) => setUserCategory(e.target.value)}
                  required
                >
                  <option value="">Select category</option>
                  <option value="students">Students</option>
                  <option value="alumni">Alumni</option>
                  <option value="businesses">Businesses</option>
                  <option value="institutions">Universities/Institutions/Colleges</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {renderDynamicFields()}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please enter your queries below
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg h-24"
                placeholder="Enter your query here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <button type="submit" className="w-full bg-[#00abff] text-Black py-3 px-6 rounded-lg hover:bg-[#c59057] transition-colors">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;