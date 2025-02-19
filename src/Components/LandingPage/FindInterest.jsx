import React, { useState, useRef } from 'react'
import loop from "../../assets/images/loop.png"
import search from "../../assets/images/search.png"
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import travelgif from "../../assets/video/Travelgif.gif"
import mediagif from "../../assets/video/mediagif.gif"
import entreprenuershipgif from "../../assets/video/Entrepreneurshipgif.gif"

const FindInterest = () => {
    // const [modalPosition, setModalPosition] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        { name: "AI Hub", description: "Explore and innovate with peers in artificial intelligence." },
        { name: "Sports Hub", description: "Play, analyze, and discuss sports with fellow enthusiasts." },
        { name: "Tech Hub", description: "Discover and share emerging tech innovations." },
        { name: "Investment Hub", description: "Learn and discuss investment strategies and financial management." },
        { name: "Language Hub", description: "Learn languages and explore cultures with global peers." },
        { name: "Student Culinary Hub", description: "Share recipes and cooking tips for budget-friendly eating." },
        { name: "Gaming Hub", description: "Dive into game development and esports with a global gaming community." },
        { name: "Research & Innovation Hub", description: "Collaborate on academic research and scientific breakthroughs." },
        { name: "Social Good Hub", description: "Engage in volunteering and community service for social impact." }
    ];

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div className='px-6 lg:px-20 gap-[10px] py-12 my-5'>
            {/* Header section */}
            <div className='w-full flex justify-between gap-4 flex-wrap'>
                <div className='w-auto max-w-xl'>
                    <h3 className='text-3xl relative font-semibold text-customBlue'>
                        Find Your Interest 
                        <img className='absolute -bottom-4 scale-50' src={loop} alt="loop text" />
                    </h3>
                    <p className="text-gray-700 text-[16px] leading-[20px] mt-[4vw] md:mt-[2vw] max-w-xl">
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
                <div className="mt-20 lg:mr-4 flex-shrink-0 lg:w-1/3">
                    <div className="interest-banner relative w-full h-80 lg:h-full rounded-xl bg-white shadow-xl">
                        <div className="absolute bottom-9 left-5">
                            <h1 className="text-3xl lg:text-3xl font-bold leading-20">
                                Create your own <br />
                                <span className="text-textColor uppercase">interests</span>
                            </h1>
                            <button className="bg-[#F7C28A] py-1 px-4 mt-4 text-white active:scale-95 transform transition-all rounded-lg">
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

                        <div className="h-full w-full pr-2 max-h-[600px] custom-scrollbar overflow-y-scroll">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-4">
                                {hubs.map((hub, index) => (
                                    <div
                                        key={index}
                                        className="hubs w-full min-h-56 flex flex-col justify-end rounded-2xl p-4 shadow-lg overflow-hidden relative"
                                        style={{ background: index < 3 ? 'transparent' : 'rgb(209 213 219)' }}
                                    >
                                        {index < 3 && (
                                            <div className="absolute inset-0 w-full h-full">
                                                <img 
                                                    src={hub.gif} 
                                                    alt={hub.name} 
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                                            </div>
                                        )}
                                        <div className="hub-container relative z-10">
                                            <div className="flex justify-between gap-3 items-center mb-3">
                                                <h2 className={`text-lg font-bold mb-2 truncate ${index < 3 ? 'text-white' : 'text-gray-900'}`}>
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
                                                        <button className="bg-[#F7C28A] text-white text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1 hover:bg-blue-500 transition">
                                                            Follow <span className="text-lg font-bold">+</span>
                                                        </button>
                                                    </Link>
                                                ) : (
                                                    <button className="bg-gray-400 text-white text-sm font-medium px-4 py-1 rounded-full cursor-not-allowed">
                                                        Coming Soon
                                                    </button>
                                                )}
                                            </div>
                                            <p className={`text-sm mb-1 ${index < 3 ? 'text-white' : 'text-gray-600'}`}>
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
                    <div className="relative bg-white rounded-lg w-full max-w-2xl p-6 mx-4 max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X className="h-5 w-5 text-gray-500" />
                        </button>

                        <h2 className="text-2xl font-bold text-customBlue mb-6">How Hubs Work</h2>

                        <div className="space-y-6">
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">What are Hubs?</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    In Joinlio, Hubs are central spaces designed to facilitate collaboration among students with similar interests and goals. 
                                    These hubs are dynamic, structured environments where students can share, learn, earn, connect, collaborate, and grow together. 
                                    Create your own hubs based on personal interests or join existing predefined hubs focusing on Media, Technology, Entrepreneurship, 
                                    and more.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Purpose of Hubs</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The primary purpose of Hubs in Joinlio is to help students discover and pursue their interests and dreams alongside 
                                    like-minded peers. This approach fosters a community of shared interests while supporting personal and professional 
                                    growth through collaboration. Students can inspire and motivate each other, gaining access to additional tools, 
                                    support, and services provided by Joinlio.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">How it Works</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-customBlue mt-2"></div>
                                        <p className="text-gray-700"><span className="font-medium">Create or Join:</span> Students initiate or participate in hubs based on their interests.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-customBlue mt-2"></div>
                                        <p className="text-gray-700"><span className="font-medium">Engage and Share:</span> They post content, engage in discussions, and use relevant tools.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-customBlue mt-2"></div>
                                        <p className="text-gray-700"><span className="font-medium">Collaborate:</span> Hubs facilitate real-world projects and skill development.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-customBlue mt-2"></div>
                                        <p className="text-gray-700"><span className="font-medium">Support and Network:</span> Provides mentorship and networking opportunities, broadening both personal and professional growth.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FindInterest;