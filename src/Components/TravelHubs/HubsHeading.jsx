import React from "react";
import VideoContainer from "../VideoContainer";

const HubsHeading = ({ hubData }) => {
  // Static hub descriptions
  const hubDescriptions = {
    "Travel Hub": "The Travel Hub that operates through JOINLIO serves as the perfect platform for all matters concerning travel and outdoor recreation. The platform exists for those who love adventure and travel because it provides information on solo backpacking alongside resources for road trips and group hiking along with camping guidelines. Whoever plans travel or seeks cost-saving travel advice will discover all necessary resources and collaborative support through this one hub.",
    "Media Hub": "The Media Hub on JOINLIO is your creative sanctuary for content creation and sharing. Here, you'll find resources for photography, videography, and digital storytelling. Connect with fellow creators, learn new techniques, and showcase your work. Whether you're a beginner or a seasoned content creator, this hub provides tools and community support to help you grow your media skills.",
    "Entrepreneurship Hub": "Welcome to the Entrepreneurship Hub, where innovative ideas meet practical business solutions. This space is designed for aspiring and current student entrepreneurs to connect, share experiences, and access valuable resources. From startup guidance to networking opportunities, find everything you need to transform your business vision into reality.",
    "Tech Hub": "The Tech Hub is your gateway to the digital frontier. Dive into the latest technological innovations, connect with fellow tech enthusiasts, and explore cutting-edge developments. Whether you're interested in coding, AI, or emerging technologies, this hub provides resources and community support for your tech journey.",
    "Fitness Hub": "Join the Fitness Hub to transform your health and wellness journey. Connect with fitness enthusiasts, access workout plans, and share your progress. From beginners to advanced athletes, this community supports your fitness goals with resources, challenges, and expert guidance.",
    "Cinema Hub": "Welcome to the Cinema Hub, your destination for all things film and storytelling. Engage with fellow movie enthusiasts, discover hidden gems, and discuss cinematic masterpieces. From classic films to contemporary releases, explore the art of storytelling through the lens of cinema."
  };

  return (
    <div>
      <div className="relative z-[100]">
        <div className="flex relative z-[50] flex-col items-center justify-start pt-16 min-h-[calc(60vh-80px)] md:min-h-[calc(80vh-80px)] text-center px-4">
          <h1 className="text-6xl pb-2 relative z-[50] md:text-4xl lg:text-5xl xl:text-8xl font-montserrat uppercase font- text-customBlue mb-2">
            {hubData?.name || "Travel Hub"}
          </h1>
          <p className="pb-14 mb-3 text-sm max-w-2xl">
            {hubData ? (
              <>
                <br /><br />
                {hubData.subDescription}
              </>
            ) : (
              hubDescriptions["Travel Hub"]
            )}
          </p>
          {/* <div className="gradient-backgroundTwo outerTwo"></div>
          <div className="gradient-backgroundTwo"></div> */}
          {/* <VideoContainer /> */}
        </div>
      </div>
    </div>
  );
};

export default HubsHeading;