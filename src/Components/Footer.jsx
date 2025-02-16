import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0A1126] relative z-[100] text-white pt-12 pb-6">
      <div className="container max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold mb-6">YOUR LOGO</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container max-w-[1100px] mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* OUR COMPANY Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">OUR COMPANY</h2>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link
                to="/policy"
                className="hover:text-white transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/confidential-policy"
                className="hover:text-white transition duration-300"
              >
                Confidential Policy
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="hover:text-white transition duration-300"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-white transition duration-300"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* OUR OFFER Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">OUR OFFER</h2>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link
                to="/services"
                className="hover:text-white transition duration-300"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-white transition duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:text-white transition duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:text-white transition duration-300"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">CONTACT INFO</h2>
          <p className="text-gray-400 leading-relaxed">
            27 Division St, New York<br />
            +1 555 8688 86892 4830<br />
            support@arialax.com<br />
            Office Hours: 8AM – 5PM<br />
            Sunday: Weekend Day
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="lg:col-span-2 lg:pl-5">
          <h2 className="text-lg font-semibold mb-2 ">NEWSLETTER</h2>
          <form className="flex items-center space-x-2 ">
            <div className="bg-gray-800 rounded-3xl text-gray-400 placeholder-gray-500 overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-500 flex">
                <input
                type="email"
                placeholder="Enter email"
                className="bg-gray-800 text-gray-400 placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-3xl transition"
                >
                SUBSCRIBE
                </button>
            </div>
          </form>
          <div className="mt-4 text-gray-400 flex items-center space-x-2">
            <input type="checkbox" id="consent" className="accent-red-500" />
            <label htmlFor="consent" className="text-sm">
              I agree that my submitted data is being collected and stored.
            </label>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container max-w-[1100px] mx-auto px-6 mt-12 border-t border-gray-700 pt-6 flex justify-between items-center text-sm text-gray-500">
        <p>© 2022 Joinrio. All Rights Reserved.</p>
        <a href="#" className="text-gray-400 hover:text-white">
          Scroll Top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
