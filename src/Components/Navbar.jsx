import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const menuTimelineRef = useRef(null);

  useEffect(() => {
    // Initialize the GSAP timeline
    menuTimelineRef.current = gsap.timeline({ paused: true });

    // Animate overlay
    menuTimelineRef.current.to(overlayRef.current, {
      duration: 0.6,
      opacity: 1,
      ease: "power3.inOut",
    });

    // Animate sidebar
    menuTimelineRef.current.to(
      sidebarRef.current,
      {
        duration: 0.8,
        x: "0%",
        ease: "power3.out",
      },
      "-=0.6"
    );

    // Animate links
    linksRef.current.forEach((link, index) => {
      menuTimelineRef.current.from(
        link,
        {
          duration: 0.4,
          opacity: 0,
          y: 20,
          ease: "power3.out",
        },
        `-=0.3`
      );
    });

    // Cleanup
    return () => {
      menuTimelineRef.current.kill();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      menuTimelineRef.current.play();
      document.body.style.overflow = "hidden";
    } else {
      menuTimelineRef.current.reverse();
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="relative right-0 z-20 flex h-20 items-center justify-between px-[6vw] lg:px-[5vw] py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">YOUR LOGO</Link>
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between space-x-8 text-sm font-medium">
          <ul className="flex items-center space-x-8">
            <li>
              <Link to="/" className="hover:text-gray-600 transition-colors text-xs duration-300">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-600 transition-colors text-xs duration-300">
                SERVICE
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="hover:text-gray-600 transition-colors text-xs duration-300">
                CASE STUDIES
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-600 transition-colors text-xs duration-300">
                BLOG
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-8">
            {/* Call Us */}
            <div className="flex items-center text-xs text-semibold">
              <div className="w-2 h-2 rounded-full text-xs bg-black mr-2"></div>
              <span>CALL US : +00 81 590 088</span>
            </div>

            {/* Book a Demo Button */}
            <Link
              to="/book-demo"
              className="button-shadow px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
            >
              BOOK A DEMO
            </Link>


          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black bg-opacity-80 z-30 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-full bg-gray-600 z-40 transform translate-x-full md:hidden"
      >
        <div className="p-12 h-full flex flex-col">
          {/* Mobile Navigation Links */}
          <ul className="space-y-8 mt-16">
            {[
              { to: "/home", text: "HOME" },
              { to: "/services", text: "SERVICE" },
              { to: "/case-studies", text: "CASE STUDIES" },
              { to: "/blog", text: "BLOG" },
            ].map((link, index) => (
              <li key={link.to}>
                <Link
                  ref={(el) => (linksRef.current[index] = el)}
                  to={link.to}
                  className="block text-4xl text-white font-medium hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-8">
            {/* Mobile Call Us */}
            <div 
              className="text-lg text-white"
              ref={(el) => (linksRef.current[4] = el)}
            >
              <span className="block text-gray-300 mb-2">Call us</span>
              <span>+00 81 590 088</span>
            </div>

            {/* Mobile Book a Demo Button */}
            <Link
              ref={(el) => (linksRef.current[5] = el)}
              to="/book-demo"
              className="inline-block px-8 py-4 text-lg font-medium text-white border border-white rounded-md hover:bg-white hover:text-gray-600 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              BOOK A DEMO
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;