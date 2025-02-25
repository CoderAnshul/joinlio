import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Menu, ChevronDown } from "lucide-react";
import gsap from "gsap";
import logo from '../assets/images/logo512.png';

const menuItems = [
  { name: 'HOME', link: '/' },
  { 
    name: 'FEATURES', 
    options: [
      { label: 'Peer Account', link: '/#peer-account', isScroll: true },
      { label: 'Business Account', link: '/#business-account', isScroll: true },
      { label: 'Joinlio Hubs', link: '/#predefined-hubs', isScroll: true }
    ]
  },
  { 
    name: 'SOLUTIONS', 
    options: [
      { label: 'For Students/Alumni', link: '/#section-data' ,isScroll: true},
      { label: 'For Businesses', link: '/#business-data' ,isScroll: true},
      { label: 'For Universities', link: '/#universites-data',isScroll: true }
    ]
  },
  { 
    name: 'RESOURCES', 
    options: [
      { label: 'Blogs', link: '/blogs' }
    ]
  }
];

const mobileLinks = [
  { to: "/", text: "HOME" },
  { to: "/#peer-account", text: "PEER ACCOUNT", isScroll: true },
  { to: "/#predefined-hubs", text: "PREDEFINED HUBS", isScroll: true },
  { to: "/resources", text: "RESOURCES" },
  { to: "/#section-data", text: "STUDENT/ALUMNI", isScroll: true  },
  { to: "/business", text: "BUSINESS" },
  { to: "/universities", text: "UNIVERSITIES" },
  { to: "/blog", text: "FOR BLOGS" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleScrollToSection = (e, link) => {
    e.preventDefault();
    setIsOpen(false);
    
    const sectionId = link.split('#')[1];
  
    if (window.location.pathname === '/') {
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      sessionStorage.setItem('scrollTarget', sectionId);
      navigate('/');
    }
  };

  const handleMobileNavClick = async (e, link) => {
    e.preventDefault();
    setIsOpen(false);

    if (link.isScroll || link.to.includes('#')) {
      const sectionId = link.to.split('#')[1];
      
      if (window.location.pathname === '/') {
        setTimeout(() => {
          const targetElement = document.getElementById(sectionId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 400);
      } else {
        sessionStorage.setItem('scrollTarget', sectionId);
        navigate('/');
      }
    } else {
      navigate(link.to);
    }
  };
  
  useEffect(() => {
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    if (scrollTarget && window.location.pathname === '/') {
      const scrollToTarget = () => {
        const targetElement = document.getElementById(scrollTarget);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          sessionStorage.removeItem('scrollTarget');
        }
      };
      
      setTimeout(scrollToTarget, 500);
    }
  }, [location.pathname]); 

 


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const [initialPadding, setInitialPadding] = useState('');

  const lockScroll = () => {
    const scrollY = window.scrollY;
    setInitialPadding(document.body.style.paddingRight);
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
  };

  const unlockScroll = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.paddingRight = initialPadding;
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const sidebar = sidebarRef.current;

    if (isOpen) {
      lockScroll();
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
        onComplete: unlockScroll
      });
    }

    return () => {
      gsap.killTweensOf([overlay, sidebar, ...linksRef.current]);
      unlockScroll();
    };
  }, [isOpen, initialPadding]);

  return (
    <>
      <nav className="relative right-0 z-20 flex h-20 items-center justify-between px-[6vw] lg:px-[5vw] py-4">
        <div className="text-xl font-bold">
          <Link to="/"><img className="max-h-32" src={logo} alt="logo" /></Link>
        </div>

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

        <div className="hidden md:flex items-center justify-between space-x-8 text-sm font-medium">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group" 
              onMouseEnter={() => setOpenDropdown(item.options ? item.name : null)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.options ? (
                <button className="flex items-center gap-1 hover:text-gray-600">
                  {item.name} <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <Link to={item.link} className="flex items-center gap-1 hover:text-gray-600">
                  {item.name}
                </Link>
              )}
              
              {openDropdown === item.name && item.options && (
                <div className="absolute left-0 top-0 mt-2 w-48 bg-transparent py-4">
                  <div className="left-0 top-full mt-2 w-48 bg-white shadow-lg p-4">
                    <ul className="space-y-2">
                      {item.options.map((option, idx) => (
                        <li key={idx}>
                          {option.isScroll ? (
                            <a
                              href={option.link}
                              onClick={(e) => handleScrollToSection(e, option.link)}
                              className="block hover:text-blue-500"
                            >
                              {option.label}
                            </a>
                          ) : (
                            <Link to={option.link} className="block hover:text-blue-500">
                              {option.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center space-x-8">
            {/* <div className="flex items-center text-xs text-semibold">
              <div className="w-2 h-2 rounded-full text-xs bg-black mr-2"></div>
              <span>CALL US : +00 81 590 088</span>
            </div> */}

            <Link
              to="/get-started"
              className="button-shadow px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </nav>

      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 md:hidden opacity-0 pointer-events-none`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-gray-800 z-40 transform translate-x-full md:hidden overflow-y-auto"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white p-2"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 h-full flex flex-col">
          <ul className="space-y-6 mt-16">
            {mobileLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.to}
                  onClick={(e) => handleMobileNavClick(e, link)}
                  className="block text-xl text-white font-medium hover:text-gray-300 transition-colors duration-300"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-6 pb-8">
            <div 
              className="text-white"
              ref={(el) => (linksRef.current[mobileLinks.length] = el)}
            >
              <span className="block text-gray-400 text-sm mb-1">Call us</span>
              <span className="text-lg">+00 81 590 088</span>
            </div>

            <Link
              ref={(el) => (linksRef.current[mobileLinks.length + 1] = el)}
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