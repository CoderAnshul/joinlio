import React from 'react'
import blog from "../../assets/images/blog.png";
import community from "../../assets/images/community.png";
import trip from "../../assets/images/trip.png";
import group from "../../assets/images/group.png";

const CreateSection = () => {
  return (
    <div className="w-full mt-8 relative z-[100]">
            <div className="py-12 my-5 mx-auto flex flex-col md:flex-row justify-between gap-5">
                <div
                className="flex flex-wrap gap-6 p-4 border-2 w-full max-w-[1200px] border-gray-700 border-opacity-15 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl"
                >
                <div
                    className="flex h-32 w-full  flex-1 relative justify-between overflow-hidden items-center bg-white group hover:bg-textColor hover:scale-[0.95] cursor-pointer active:scale-90 transition-all rounded-2xl shadow-md p-4"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl leading-6 text-start gradient-text-three uppercase font-bold">Create <br /> blog</h2>
                    <img className="h-20 mb-3" src={blog} alt="createblog" />
                </div>
                </div>
                <div
                className="flex flex-wrap gap-6 p-4 border-2 w-full max-w-[1200px] border-gray-700 border-opacity-15 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl"
                >
                <div
                    className="flex h-32 w-full  flex-1 relative justify-between overflow-hidden items-center bg-white group hover:bg-textColor hover:scale-[0.95] cursor-pointer active:scale-90 transition-all rounded-2xl shadow-md p-4"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl leading-6 text-start gradient-text-three uppercase font-bold">Create <br /> community</h2>
                    <img className="h-20 mb-3" src={community} alt="createblog" />
                </div>
                </div>
                <div
                className="flex flex-wrap gap-6 p-4 border-2 w-full max-w-[1200px] border-gray-700 border-opacity-15 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl"
                >
                <div
                    className="flex h-32 w-full  flex-1 relative justify-between overflow-hidden items-center bg-white group hover:bg-textColor hover:scale-[0.95] cursor-pointer active:scale-90 transition-all rounded-2xl shadow-md p-4"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl leading-6 text-start gradient-text-three uppercase font-bold">Create <br /> your trip</h2>
                    <img className="h-20 mb-3" src={trip} alt="createblog" />
                </div>
                </div>
                <div
                className="flex flex-wrap gap-6 p-4 border-2 w-full max-w-[1200px] border-gray-700 border-opacity-15 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl"
                >
                <div
                    className="flex h-32 w-full  flex-1 relative justify-between overflow-hidden items-center bg-white group hover:bg-textColor hover:scale-[0.95] cursor-pointer active:scale-90 transition-all rounded-2xl shadow-md p-4"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl leading-6 text-start gradient-text-three uppercase font-bold">Create <br /> Group</h2>
                    <img className="h-20 mb-3" src={group} alt="createblog" />
                </div>
                </div>
            </div>
            </div>
  )
}

export default CreateSection