import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HubsHeading from '../Components/TravelHubs/HubsHeading';
import SubInterest from '../Components/TravelHubs/SubInterest';
import CreateSection from '../Components/TravelHubs/CreateSection';
import HubInfo from '../Components/TravelHubs/HubInfo';
import SectionHeading from '../Components/TravelHubs/SectionHeading';
import HubVideo from '../Components/TravelHubs/HubVideos';

const TravelHub = () => {
  const location = useLocation();
  const hubData = location.state?.hubData || null;

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

  // Define background gradients based on category
  const categoryGradients = {
    travel: 'bg-gradient-to-b from-[#FEB478] via-[#F58C77] via-[#D4858B] via-[#A28093] via-[#596385] to-[#365886]',
    media: 'bg-gradient-to-b from-[#CBE7FE] to-[#50A2FB]',
    entrepreneur: 'bg-gradient-to-b from-[#3145AB] to-[#BD20AB]',
  };

  // Only add text-white class if the category is entrepreneur
  const textColorClass = category === 'entrepreneur' ? 'text-white' : '';

  return (
    <div className={`${categoryGradients[category] || 'bg-white'} min-h-screen`}>
      <div className="px-[5vw]">
        <HubsHeading 
          hubData={hubData} 
          className={textColorClass}
        />
        <CreateSection 
          category={category} 
          className={textColorClass}
        />
      </div>

      <div className="px-[5vw]">
        <HubVideo 
          category={category} 
          className={textColorClass}
        />
      </div>

      {category && 
        <SubInterest 
          category={category} 
          className={textColorClass}
        />
      }
      
      <SectionHeading 
        title1="WHAT WE" 
        title2="PROVIDE?" 
        description=" "
        className={category === 'entrepreneur' ? 'text-white' : ''}
      />
      
      <HubInfo 
        category={category} 
        className={textColorClass}
      />
    </div>
  );
};

export default TravelHub;