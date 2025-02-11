import React from "react";
import VideoContainer from "../VideoContainer";

const HubsHeading = () => {
  return (
    <div>
      <div className="relative z-[100] ">
        <div className="flex relative z-[50] flex-col items-center justify-start pt-16 min-h-[calc(60vh-80px)] md:min-h-[calc(80vh-80px)] text-center px-4">
          <h1 className="text-6xl pb-2 relative z-[50] md:text-4xl lg:text-5xl xl:text-8xl font-montserrat uppercase font- text-customBlue mb-2">
            Travel Hub
          </h1>
          <p className="pb-14 mb-3 text-sm max-w-2xl">
            The Travel Hub that operates through JOINLIO serves as the perfect
            platform for all matters concerning travel and outdoor recreation.
            The platform exists for those who love adventure and travel because
            it provides information on solo backpacking alongside resources for
            road trips and group hiking along with camping guidelines. Whoever
            plans travel or seeks cost-saving travel advice will discover all
            necessary resources and collaborative support through this one hub.
          </p>
          <div className="gradient-backgroundTwo outerTwo"></div>
          <div className="gradient-backgroundTwo"></div>
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default HubsHeading;
