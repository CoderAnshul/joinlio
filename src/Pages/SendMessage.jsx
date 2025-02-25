import React, { useState }, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const SendMessage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };


      await emailjs.send(
        'service_ypyuhqa',
        'template_s1pmj5l',
        templateParams,
        'qf9TWxuatyoqyCvLk',
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center min-h-[80vh] max-w-full justify-around mx-auto p-6">
      {/* Left Side: Form */}
      <div className="w-full lg:w-2/3 p-6 bg-white rounded-xl shadow-lg">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-blue-500 tracking-wider">CONTACT US</p>
          <h1 className="text-4xl font-bold text-gray-900">Get in touch</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 bg-gray-100 rounded-md outline-none text-gray-700"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 bg-gray-100 rounded-md outline-none text-gray-700"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows="5"
            className="w-full p-3 bg-gray-100 rounded-md outline-none text-gray-700"
            required
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white p-3 rounded-md font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Right Side: Info */}
      <div className="md:w-1/3 w-full mt-10 md:mt-0">
        <h2 className="text-xl font-bold text-gray-900">Get in touch</h2>
        <p className="text-gray-600 mt-2">
          We're always here to help. Contact us if you need any help with Swarm
          or have any questions.
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