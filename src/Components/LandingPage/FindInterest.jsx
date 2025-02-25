import React, { useState, useRef, useEffect } from 'react'
import search from "../../assets/images/search.png"
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import travelgif from "../../assets/video/travel.gif"
import mediagif from "../../assets/video/media.gif"
import entreprenuershipgif from "../../assets/video/entreprenuer.gif"
import main from '../../assets/video/main.mp4'
import ai from "../../assets/images/new-hubs/AI.jpg"
import flags from "../../assets/images/new-hubs/flags.jpg"
import gaming from "../../assets/images/new-hubs/gaming.jpg"
import investment from "../../assets/images/new-hubs/investment.png"
import social from "../../assets/images/new-hubs/social.jpg"
import sports from "../../assets/images/new-hubs/sports.jpg"
import tech from "../../assets/images/new-hubs/tech.jpg"
import festive from "../../assets/images/new-hubs/festive-background-jewish-holiday-passover-traditional-treats-bottle-wine-matza-white-background-top-view-copy-space-border.jpg"

const FindInterest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

const scrollRef = useRef(null);

    const hubs = [
        { 
            name: "Travel Hub", 
            description: "Explore stunning destinations and unique travel experiences.", 
            subDescription: "The Travel Hub that operates through JOINLIO serves as the perfect platform for all matters concerning travel and outdoor recreation. The platform exists for those who love adventure and travel because it provides information on solo backpacking alongside resources for road trips and group hiking along with camping guidelines. Whoever plans travel or seeks cost-saving travel advice will discover all necessary resources and collaborative support through this one hub.",
            gif: travelgif
        },
        { 
            name: "Media Hub", 
            description: "Capture and create amazing content.", 
            subDescription: "The Media Hub functions as an arts and media creative environment mainly meant for interested student members. This hub enables creative people who work in filmmaking, photography, music production and other creative disciplines to build their abilities through collaborative opportunities with other artists on innovative projects. The perfect environment for developing your medium abilities while forming enduring professional relationships exists here.",
            gif: mediagif
        },
        { 
            name: "Entrepreneurship Hub", 
            description: "Fuel your business ideas and networking.", 
            subDescription: "Innovation finds its meeting point with opportunity at the Entrepreneurship Hub. The Entrepreneurship Hub gives both rising entrepreneurs and potential business founders an environment to experiment with ideas and develop productive business plans along with mentorship and funding connections. This space brings together new entrepreneurs to collaborate with experienced professionals who facilitate idea exchange toward startup success.",
            gif: entreprenuershipgif
        },
        { name: "AI Hub", description: "Explore and innovate with peers in artificial intelligence.", image: ai },
        { name: "Sports Hub", description: "Play, analyze, and discuss sports with fellow enthusiasts.", image: sports },
        { name: "Tech Hub", description: "Discover and share emerging tech innovations.", image: tech },
        { name: "Investment Hub", description: "Learn and discuss investment strategies and financial management.", image: investment },
        { name: "Language Hub", description: "Learn languages and explore cultures with global peers.", image: flags },
        { name: "Student Culinary Hub", description: "Share recipes and cooking tips for budget-friendly eating.", image: festive },
        { name: "Gaming Hub", description: "Dive into game development and esports with a global gaming community.", image: gaming },
        { name: "Research & Innovation Hub", description: "Collaborate on academic research and scientific breakthroughs.", image: tech },
        { name: "Social Good Hub", description: "Engage in volunteering and community service for social impact.", image: social }
    ];

    const modalSections = [
        {
            icon: "🎯",
            title: "What are Hubs",
            description: "In Joinlio, Hubs are central spaces designed to facilitate collaboration among students with similar interests and goals. These dynamic, structured environments enable students to share, learn, earn, connect, collaborate, and grow together."
        },
        {
            icon: "🌟",
            title: "Create or Join Hubs",
            description: "Create your own hubs based on personal interests or join existing predefined hubs focusing on areas like Media, Technology, and Entrepreneurship."
        },
        {
            icon: "💡",
            title: "Engage and Share",
            description: "Post content, engage in meaningful discussions, and utilize specialized tools designed for your hub's focus area."
        },
        {
            icon: "🤝",
            title: "Collaborate on Projects",
            description: "Work on real-world projects with peers, develop practical skills, and build a portfolio of achievements."
        },
        {
            icon: "🚀",
            title: "Support and Network",
            description: "Access mentorship opportunities, connect with industry professionals, and broaden both personal and professional horizons."
        }
    ];

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleWheel = (event) => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop += event.deltaY;
                event.preventDefault();
            }
        };
        const element = scrollRef.current;
        if (element) {
            element.addEventListener("wheel", handleWheel);
        }
        return () => {
            if (element) {
                element.removeEventListener("wheel", handleWheel);
            }
        };
    }, []);

    return (
        <div className='px-6 lg:px-20 gap-[10px] py-12 my-5'>
            {/* Header section */}
            <div className='w-full flex justify-between gap-4 flex-wrap'>
                <div className='w-auto max-w-xl xl:max-w-3xl'>
                    <h3 className='text-3xl relative font-semibold text-customBlue'>
                        Find Your Interest 
                    </h3>
                    <p className="text-gray-700 text-[16px] leading-[20px] mt-[4vw] md:mt-[2vw] max-w-xl lg:max-w-5xl">
                        What's your passion? Whether it's travel, entrepreneurship, or even night camping, JOINLIO transforms your dreams, talents, and interests into reality. Like an ocean of opportunities, our platform allows you to create your own hub or join existing topics. Connect with like-minded students, access exclusive tools, services, and support, and unlock limitless possibilities. Your next big collaboration starts here—click on a hub and explore all that JOINLIO has to offer!
                    </p>
                </div>
                <button
                    className="button-shadow uppercase mt-2 md:mt-0 h-12 px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
                    onClick={handleButtonClick}
                >
                    how it works
                </button>
            </div>

            <div className="lg:flex">
                {/* Left Section */}
                <div className="mt-20 lg:mr-4 flex-shrink-0 lg:w-1/4">
                    <div className="interest-banner relative w-full h-80 lg:h-full rounded-xl bg-white shadow-xl">
                        <video 
                            className="w-full rounded-xl"
                            loop
                            autoPlay
                            muted
                        >
                        <source src={main} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-9 left-5">
                            <h1 className="text-3xl lg:text-3xl font-bold leading-20">
                                Transfrom your interests into a <br />
                                <span className="text-textColor uppercase">Central hub.</span>
                            </h1>
                            <button className="bg-[#00abff] py-1 px-4 mt-4 text-white active:scale-95 transform transition-all rounded-lg">
                                Create
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="mt-4 lg:mt-20 lg:flex-grow">
                    <div className="interest-banner relative w-full min-h-80 max-h-[700px] p-4 rounded-xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
                        <div className="border-2 h-10 border-black py-1 px-3 border-opacity-45 mb-4 rounded-lg flex justify-between items-center">
                            <input className="w-4/5 bg-transparent h-full outline-none" type="search" />
                            <img className="h-5" src={search} alt="search" />
                        </div>

                        <div 
                            ref={scrollRef}
                            className="h-full w-full pr-2 max-h-[600px] custom-scrollbar overflow-y-auto"
                            onWheel={(e) => e.stopPropagation()} // Ensures smooth scrolling
                        >          
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-4">
                                {hubs.map((hub, index) => (
                                    <div
                                        key={index}
                                        className="hubs w-full min-h-56 flex flex-col justify-end rounded-2xl p-4 shadow-lg overflow-hidden relative"
                                    >
                                        <div className="absolute inset-0 w-full h-full">
                                            {index < 3 ? (
                                                <img 
                                                    src={hub.gif} 
                                                    alt={hub.name} 
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <img 
                                                    src={hub.image} 
                                                    alt={hub.name} 
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                                        </div>
                                        <div className="hub-container relative z-10">
                                            <div className="flex justify-between gap-3 items-center mb-3">
                                                <h2 className="text-lg font-bold mb-2 truncate text-white">
                                                    {hub.name}
                                                </h2>
                                                {index < 3 ? (
                                                    <Link 
                                                        to="/hubs"
                                                        state={{ 
                                                            hubData: {
                                                                ...hub,
                                                                index: index
                                                            }
                                                        }}
                                                    >
                                                        <button className="bg-[#00abff] text-white text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1 hover:bg-blue-500 transition">
                                                            Follow <span className="text-lg font-bold">+</span>
                                                        </button>
                                                    </Link>
                                                ) : (
                                                    <button className="bg-gray-400 text-white text-sm font-medium px-4 py-1 rounded-full cursor-not-allowed">
                                                        Coming Soon
                                                    </button>
                                                )}
                                            </div>
                                            <p className="text-sm mb-1 h-8 text-white">
                                                {hub.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center">
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    />
                    <div 
                        ref={modalRef}
                        className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 my-6 max-h-[85vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                        style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#CBD5E0 transparent',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        <div className="sticky top-0 bg-white z-50 px-8 pt-8 pb-4 border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-rose-500">🔍</span>
                                <h2 className="text-2xl font-bold text-gray-900">How Hubs Work</h2>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="px-8 pt-6">
                            <p className="text-gray-600 leading-relaxed">
                            In Joinlio, Hubs are central spaces designed to facilitate collaboration among students with similar interests and goals. These hubs are not just passive forums but are dynamic, structured environments where students can share, learn, earn, connect, collaborate, and grow together. They can create their own hubs based on personal interests or join existing predefined hubs, which focus on various areas like Media, Technology, and Entrepreneurship, promoting personal development and practical learning.
                            </p>
                        </div>

                        <div className="px-6 pb-6 space-y-6 mt-6">
                            {modalSections.map((section, index) => (
                                <div key={index} className="flex items-start gap-4 hover:bg-gray-50 p-4 rounded-lg transition-all duration-200">
                                    <span className="text-2xl">{section.icon}</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{section.title}</h3>
                                        <p className="text-gray-600 mt-1">{section.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="px-8 py-6 border-t flex justify-end gap-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                Close
                            </button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Explore Hubs
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FindInterest;