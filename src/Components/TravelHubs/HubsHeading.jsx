import React from "react";
import VideoContainer from "../VideoContainer";


const HubsHeading = () => {
  return (
    <div>
      <div className="relative z-[100] ">
        <div className="flex relative z-[50] flex-col items-center justify-start pt-16 min-h-[calc(60vh-80px)] md:min-h-[calc(80vh-80px)] text-center px-4">
          <h1 className="text-6xl pb-14 relative z-[50] md:text-4xl lg:text-5xl xl:text-8xl font-montserrat uppercase font- text-customBlue mb-6">
            Travel Hub
          </h1>
          <div className="gradient-backgroundTwo outerTwo"></div>
          <div className="gradient-backgroundTwo"></div>
          <VideoContainer />

          

        </div>
      </div>
    </div>
  );
};

export default HubsHeading;
