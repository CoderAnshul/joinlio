import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import HubsHeading from "../Components/TravelHubs/HubsHeading";
import SubInterest from "../Components/TravelHubs/SubInterest";
import CreateSection from "../Components/TravelHubs/CreateSection";
import HubInfo from "../Components/TravelHubs/HubInfo";
import SectionHeading from "../Components/TravelHubs/SectionHeading";
import HubVideo from "../Components/TravelHubs/HubVideos";
import DevideSectionText from "../Components/DevideSectionText";

const TravelHub = () => {
  const { hubName } = useParams();
  const location = useLocation();
  const hubData = location.state?.hubData || null;

  useEffect(() => {
    if (hubData) {
      console.log("Hub Data:", hubData);
      console.log("Hub Name:", hubData.name);
      console.log("Hub Description:", hubData.description);
      console.log("Hub Index:", hubData.index);
      console.log("Hub Sub Description:", hubData.subDescription);
      console.log("Hub ID:", hubData.id); // Log hubId
    }
  }, [hubData]);

  const getCategory = (name) => {
    if (!name) return "";
    const lowerName = name.toLowerCase();
    if (lowerName.includes("travel")) return "travel";
    if (lowerName.includes("media")) return "media";
    if (lowerName.includes("entrepreneur")) return "entrepreneur";
    return "";
  };

  const category = hubData ? getCategory(hubData.name) : "";

  useEffect(() => {
    console.log("Current page category:", category);
  }, [category]);

  // Define background gradients based on category
  const categoryGradients = {
    travel: "bg-white",
    media: "bg-white",
    entrepreneur: "bg-white",
  };

  return (
    <div className={`${categoryGradients[category] || "bg-white"} min-h-screen`}>
      <div className="px-[5vw]">
        <HubsHeading hubData={hubData} />
        <CreateSection category={category} hubId={hubData?.id} />
      </div>

      <div className="px-[5vw]">
        <HubVideo category={category} />
      </div>

      {category && <SubInterest category={category} hubId={hubData?.id} />}

      <DevideSectionText title1="WHAT WE" title2="PROVIDE?" description="" highlight="" />

      <HubInfo category={category} />
    </div>
  );
};

export default TravelHub;