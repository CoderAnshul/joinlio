import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from '../assets/images/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-8">
        
        <div className="flex flex-wrap justify-between items-center md:items-start text-gray-700">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 flex flex-col items-start">
            <img className="h-14 mb-8 -ml-2" src={logo} alt="logo" />
            <h2 className="text-xl font-medium ">Please feel free to get in <br /> touch with us</h2>
          </div>

          {/* Middle Section */}
          <div className="flex items-start lg:w-[400px] justify-between space-x-6">
            <div>
              <h3 className="font-medium">Company</h3>
              <a href="/privacy-policy">
                <p className="text-sm text-gray-500">Privacy Policy</p>
              </a>
              <a href="/terms-and-condition">
                <p className="text-sm text-gray-500">Terms and Conditions</p>
              </a>
            </div>

            <div>
              <h3 className="font-medium">How Can We Help?</h3>
              <p className="text-sm text-gray-500">joinlio.tech@gmail.com</p>
              <p className="text-sm text-gray-500">+44 7476 512839</p>
            </div>
          </div>
          
        </div>

        {/* Get in Touch Form */}
        

        {/* Bottom Section */}
        <div className="flex pt-2 md:mt-0 justify-between items-center text-gray-500 text-sm">
          <p>© 2022 Joinlio | All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-500 hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-gray-500 hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
