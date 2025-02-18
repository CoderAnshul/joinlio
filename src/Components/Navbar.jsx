import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Menu, ChevronDown } from "lucide-react";
import gsap from "gsap";
import logo from '../assets/images/logo512.png';


const menuItems = [
  { name: 'HOME', link: '/' },
  { 
    name: 'FEATURES', 
    options: [
      { label: 'Peer Account', link: '/peer-account' },
      { label: 'Predefined Hubs', link: '/predefined-hubs' }
    ]
  },
  { 
    name: 'SOLUTIONS', 
    options: [
      { label: 'For Students/Alumni', link: '/students-alumni' },
      { label: 'For Businesses', link: '/businesses' },
      { label: 'For Universities', link: '/universities' }
    ]
  },
  { 
    name: 'RESOURCES', 
    options: [
      { label: 'Blogs', link: '/blogs' }
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  
  // Store the initial body padding to restore it later
  const [initialPadding, setInitialPadding] = useState('');

  // Function to prevent body scroll
  const lockScroll = () => {
    // Get current scroll position
    const scrollY = window.scrollY;
    
    // Store any existing padding
    setInitialPadding(document.body.style.paddingRight);
    
    // Calculate the scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Apply padding to prevent content shift
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    
    // Lock the body
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
  };

  // Function to restore body scroll
  const unlockScroll = () => {
    // Get the scroll position from the body's top property
    const scrollY = document.body.style.top;
    
    // Reset body styles
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.paddingRight = initialPadding;
    
    // Restore scroll position
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const sidebar = sidebarRef.current;
    
    if (isOpen) {
      // Lock scroll first
      lockScroll();
      
      // Open animation
      gsap.to(overlay, {
        duration: 0.3,
        opacity: 1,
        pointerEvents: "auto",
        ease: "power2.out"
      });
      
      gsap.to(sidebar, {
        duration: 0.4,
        x: "0%",
        ease: "power2.out"
      });

      // Animate links
      linksRef.current.forEach((link, index) => {
        if (link) {
          gsap.from(link, {
            duration: 0.4,
            opacity: 0,
            y: 20,
            delay: 0.2 + index * 0.1,
            ease: "power2.out"
          });
        }
      });
    } else {
      // Close animation
      gsap.to(overlay, {
        duration: 0.3,
        opacity: 0,
        pointerEvents: "none",
        ease: "power2.in"
      });
      
      gsap.to(sidebar, {
        duration: 0.4,
        x: "100%",
        ease: "power2.in",
        onComplete: unlockScroll // Unlock scroll after animation completes
      });
    }

    // Cleanup function
    return () => {
      gsap.killTweensOf([overlay, sidebar, ...linksRef.current]);
      unlockScroll(); // Ensure scroll is unlocked when component unmounts
    };
  }, [isOpen, initialPadding]);

  return (
    <>
      <nav className="relative right-0 z-20 flex h-20 items-center justify-between px-[6vw] lg:px-[5vw] py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/"><img className="max-h-32" src={logo} alt="logo" /></Link>
        </div>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation - Unchanged */}
        {/* Desktop Navigation - Updated */}
<div className="hidden md:flex items-center justify-between space-x-8 text-sm font-medium">
{menuItems.map((item, index) => (
    <div 
      key={index} 
      className="relative group" 
      onMouseEnter={() => setOpenDropdown(item.options ? item.name : null)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button className="flex items-center gap-1 hover:text-gray-600">
        {item.name} {item.options && <ChevronDown className="w-4 h-4" />}
      </button>
      {openDropdown === item.name && item.options && (
        <div className="absolute left-0 top-0 mt-2 w-48 bg-transparent py-4">
          <div className="left-0 top-full mt-2 w-48 bg-white shadow-lg p-4">
          <ul className="space-y-2">
            {item.options.map((option, idx) => (
              <li key={idx}>
                <Link to={option.link} className="block hover:text-blue-500">{option.label}</Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}
    </div>
  ))}
  <div className="flex items-center space-x-8">
    <div className="flex items-center text-xs text-semibold">
      <div className="w-2 h-2 rounded-full text-xs bg-black mr-2"></div>
      <span>CALL US : +00 81 590 088</span>
    </div>

    <Link
      to="/get-started"
      className="button-shadow px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
    >
      GET STARTED
    </Link>
  </div>
</div>

      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 md:hidden opacity-0 pointer-events-none`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-gray-800 z-40 transform translate-x-full md:hidden overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white p-2"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 h-full flex flex-col">
          {/* Mobile Navigation Links */}
          <ul className="space-y-6 mt-16">
            {[
              { to: "/", text: "HOME" },
              { to: "/peer-account", text: "PEER ACCOUNT" },
              { to: "/services", text: "PREDEFINED HUBS" },
              { to: "/resources", text: "RESOURCES" },
              { to: "/student", text: " SUTDENT/ALUMINA" },
              { to: "/business", text: " BUSINESS" },
              { to: "/universities", text: " UNIVERSITIES" },
              { to: "/blog", text: "FOR BLOGS" },
            ].map((link, index) => (
              <li key={link.to}>
                <Link
                  ref={(el) => (linksRef.current[index] = el)}
                  to={link.to}
                  className="block text-xl text-white font-medium hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-6 pb-8">
            <div 
              className="text-white"
              ref={(el) => (linksRef.current[4] = el)}
            >
              <span className="block text-gray-400 text-sm mb-1">Call us</span>
              <span className="text-lg">+00 81 590 088</span>
            </div>

            <Link
              ref={(el) => (linksRef.current[5] = el)}
              to="/get-started"
              className="inline-block w-full px-6 py-3 text-center text-white border border-white rounded-md hover:!bg-white hover:text-gray-800 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};



export default Navbar;