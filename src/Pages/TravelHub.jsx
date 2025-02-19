import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HubsHeading from '../Components/TravelHubs/HubsHeading';
import SubInterest from '../Components/TravelHubs/SubInterest';
import CreateSection from '../Components/TravelHubs/CreateSection';
import HubInfo from '../Components/TravelHubs/HubInfo';
import DevideSectionText from '../Components/DevideSectionText';
import HubVideo from '../Components/TravelHubs/HubVideos';

const TravelHub = () => {
  const location = useLocation();
  const hubData = location.state?.hubData || null; // Ensure hubData is not undefined

  useEffect(() => {
    if (hubData) {
      console.log('Hub Data:', hubData);
      console.log('Hub Name:', hubData.name);
      console.log('Hub Description:', hubData.description);
      console.log('Hub Index:', hubData.index);
      console.log('Hub Sub Description:', hubData.subDescription);
    }
  }, [hubData]);

  const getCategory = (name) => {
    if (!name) return ''; // Prevents potential errors
    const lowerName = name.toLowerCase();
    if (lowerName.includes('travel')) return 'travel';
    if (lowerName.includes('media')) return 'media';
    if (lowerName.includes('entrepreneur')) return 'entrepreneur';
    return '';
  };

  const category = hubData ? getCategory(hubData.name) : '';

  useEffect(() => {
    console.log("Current page category:", category);
  }, [category]);

  return (
   
    <div className='bg-gradient-to-r from-[#fbd4e0] to-[#fff5e1]'>
      <div className='px-[5vw] '>
        <HubsHead
        ing hubData={hubData} />
        <CreateSection />
      </div>

      <div className='px-[5vw]'>
        {/* Pass category to HubVideo so it can load the correct video */}
        <HubVideo category={category} />
      </div>

      {category && <SubInterest category={category} />}
      <DevideSectionText 
        title1="WHAT WE" 
        title2="PROVIDE" 
        description=" "
      />
      <HubInfo category={category} />
    </div>
  );
};

export default TravelHub;
