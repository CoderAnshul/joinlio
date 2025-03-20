import React, { useState } from 'react';

const RequestPartnership = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionWebsite: '',
    contactName: '',
    contactEmail: '',
    contactPosition: '',
    studentCount: '',
    reasonForPartnership: '',
    howDidYouHear: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };
  
  const validateForm = () => {
    const errors = {};
    if (!formData.institutionName.trim()) errors.institutionName = 'Institution name is required';
    if (!formData.institutionWebsite.trim()) errors.institutionWebsite = 'Institution website is required';
    if (!formData.contactName.trim()) errors.contactName = 'Contact name is required';
    
    if (!formData.contactEmail.trim()) {
      errors.contactEmail = 'Contact email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      errors.contactEmail = 'Please enter a valid email address';
    }
    
    if (!formData.contactPosition.trim()) errors.contactPosition = 'Contact position is required';
    if (!formData.reasonForPartnership.trim()) errors.reasonForPartnership = 'Please provide a reason for partnership';
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
    }, 1500);
  };
  
  if (isSubmitted) {
    return (
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <div className="mb-6">
            <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Partnership Request Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for submitting your partnership request for {formData.institutionName}. 
            Our team will review your request and reach out to your institution soon.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
            <p className="text-blue-800 font-medium mb-2">What happens next?</p>
            <p className="text-blue-700 text-sm">
              1. Our partnerships team will review your submission within 5-7 business days<br />
              2. We'll reach out to {formData.institutionName} to discuss potential partnership opportunities<br />
              3. You'll receive updates on the partnership status via email
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <button 
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
              onClick={() => window.location.href = '/dashboard'}
            >
              Go to Dashboard
            </button>
            <button 
              className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition duration-200"
              onClick={() => window.location.href = '/trial'}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Request Partnership</h1>
        <p className="text-gray-600">
          Help us bring free access to your institution! Fill out this form to request a partnership between your university/college and our platform.
        </p>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">Partnership Benefits</h2>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Free access to all platform features for students and alumni</li>
          <li>• Custom hub for your institution</li>
          <li>• Dedicated support for your institution's members</li>
          <li>• Analytics dashboard for institution administrators</li>
          <li>• Co-branded events and workshops</li>
        </ul>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Institution Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-1">
                Institution Name*
              </label>
              <input
                type="text"
                id="institutionName"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${formErrors.institutionName ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="e.g. University of Technology"
              />
              {formErrors.institutionName && (
                <p className="text-red-500 text-xs mt-1">{formErrors.institutionName}</p>
              )}
            </div>
            <div>
              <label htmlFor="institutionWebsite" className="block text-sm font-medium text-gray-700 mb-1">
                Institution Website*
              </label>
              <input
                type="text"
                id="institutionWebsite"
                name="institutionWebsite"
                value={formData.institutionWebsite}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${formErrors.institutionWebsite ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="e.g. https://www.unioftech.edu"
              />
              {formErrors.institutionWebsite && (
                <p className="text-red-500 text-xs mt-1">{formErrors.institutionWebsite}</p>
              )}
            </div>
            <div>
              <label htmlFor="studentCount" className="block text-sm font-medium text-gray-700 mb-1">
                Approximate Student Count
              </label>
              <select
                id="studentCount"
                name="studentCount"
                value={formData.studentCount}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select an option</option>
                <option value="Under 1,000">Under 1,000</option>
                <option value="1,000-5,000">1,000-5,000</option>
                <option value="5,001-10,000">5,001-10,000</option>
                <option value="10,001-20,000">10,001-20,000</option>
                <option value="Over 20,000">Over 20,000</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Name*
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${formErrors.contactName ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="e.g. Jane Smith"
              />
              {formErrors.contactName && (
                <p className="text-red-500 text-xs mt-1">{formErrors.contactName}</p>
              )}
            </div>
            <div>
              <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email*
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${formErrors.contactEmail ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="e.g. jane.smith@unioftech.edu"
              />
              {formErrors.contactEmail && (
                <p className="text-red-500 text-xs mt-1">{formErrors.contactEmail}</p>
              )}
            </div>
            <div>
              <label htmlFor="contactPosition" className="block text-sm font-medium text-gray-700 mb-1">
                Position at Institution*
              </label>
              <input
                type="text"
                id="contactPosition"
                name="contactPosition"
                value={formData.contactPosition}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${formErrors.contactPosition ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="e.g. Student Affairs Director"
              />
              {formErrors.contactPosition && (
                <p className="text-red-500 text-xs mt-1">{formErrors.contactPosition}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Additional Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="reasonForPartnership" className="block text-sm font-medium text-gray-700 mb-1">
                Why would you like your institution to partner with us?*
              </label>
              <textarea
                id="reasonForPartnership"
                name="reasonForPartnership"
                value={formData.reasonForPartnership}
                onChange={handleChange}
                rows="4"
                className={`w-full p-2 border rounded ${formErrors.reasonForPartnership ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Please share how you think this partnership would benefit your institution..."
              ></textarea>
              {formErrors.reasonForPartnership && (
                <p className="text-red-500 text-xs mt-1">{formErrors.reasonForPartnership}</p>
              )}
            </div>
            <div>
              <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">
                How did you hear about our platform?
              </label>
              <select
                id="howDidYouHear"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select an option</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend or Colleague">Friend or Colleague</option>
                <option value="Current Partner Institution">Current Partner Institution</option>
                <option value="Education Conference">Education Conference</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 bg-blue-600 text-white font-medium rounded-lg ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
            } transition duration-200`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Submit Partnership Request'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestPartnership;