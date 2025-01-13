import React from 'react'
import loop from "../../assets/images/loop.png"
import search from "../../assets/images/search.png"

const FindInterest = () => {

    const hubs = [
        { name: "Travel Hub", description: "Lorem ipsum dolor sit amet consectetur.", subDescription: "Maecenas risus cras malesuada cursus." },
        { name: "Cinema Hub", description: "Capture your best moments.", subDescription: "Explore creative photography ideas." },
        { name: "Media Hub", description: "Stay updated with media trends.", subDescription: "Create or follow the latest media topics." },
        { name: "Tech Hub", description: "Dive into the world of technology.", subDescription: "Connect with tech enthusiasts." },
        { name: "Fitness Hub", description: "Boost your health and fitness.", subDescription: "Join and achieve your fitness goals." },
        { name: "Cinema Hub", description: "Capture your best moments.", subDescription: "Explore creative photography ideas." },
      ];

  return (
    <div className=' px-6 lg:px-20 gap-[10px] py-12 my-5 '>
        <div className='w-full flex justify-between gap-4 flex-wrap'>
            <div className='w-auto max-w-xl'>
                <h3 className='text-3xl relative font-semibold text-customBlue'>Find Your Interest <img className='absolute -bottom-4 scale-50' src={loop} alt="loop text" /></h3>
                <p className="text-gray-700 text-[16px] leading-[20px] mt-[4vw] md:mt-[2vw] max-w-xl">
                    What’s your passion? Whether it’s travel, entrepreneurship, or even night camping, JOINLIO brings it to life! Create your own hub or join one of our exciting topics to connect with like-minded students, gain exclusive tools, services, and support, and unlock endless opportunities. Your next big collaboration starts here – click on a hub and explore the possibilities!
                </p>
            </div>

            <button
                className="button-shadow uppercase mt-2 md:mt-0 h-12 px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300"
                >
                how it works
            </button>

        </div>

        <div className="lg:flex  ">
  {/* Left Section */}
  <div className="mt-20 lg:mr-4 flex-shrink-0 lg:w-1/3">
    <div className="interest-banner relative w-full h-80 lg:h-full rounded-xl bg-gray-300">
      <div className="absolute bottom-9 left-5">
        <h1 className="text-3xl lg:text-3xl font-bold leading-20">
          Create your own <br />
          <span className="text-textColor uppercase">interests</span>
        </h1>
        <button className="bg-[#2CA2FB] py-1 px-4 mt-4 text-white active:scale-95 transform transition-all rounded-lg">
          Create
        </button>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="mt-4 lg:mt-20 lg:flex-grow ">
    <div className="interest-banner relative w-full min-h-80 max-h-[700px] p-4 rounded-xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
      <div className="border-2 h-10 border-black py-1 px-3 border-opacity-45 mb-4 rounded-lg flex justify-between items-center">
        <input className="w-4/5 bg-transparent h-full outline-none" type="search" />
        <img className="h-5" src={search} alt="search" />
      </div>

            {/* Scrollable Container */}
            <div className="h-full w-full hide-scrollbar max-h-[600px] overflow-y-scroll">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-4">
                {hubs.map((hub, index) => (
                <div
                    key={index} // Ensure unique key for each hub
                    className="hubs w-full bg-gray-300 min-h-56 flex flex-col justify-end rounded-2xl p-4 shadow-lg"
                >
                    <div className="hub-container">
                    <div className="flex justify-between gap-3 items-center mb-3">
                        {/* Truncate hub name */}
                        <h2 className="text-lg font-bold text-gray-900 mb-2 truncate">
                        {hub.name}
                        </h2>
                        <button className="bg-[#2CA2FB] text-white text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1 hover:bg-blue-500 transition">
                        Follow <span className="text-lg font-bold">+</span>
                        </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                        Lorem ipsum dolor sit amet consectetur. Maecenas risus cras malesuada cursus.
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>


    </div>
  </div>
</div>


    </div>
  )
}

export default FindInterest