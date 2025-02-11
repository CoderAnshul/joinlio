import React from 'react'
import { useLocation } from 'react-router-dom'
import HubsHeading from '../Components/TravelHubs/HubsHeading'
import HubsStories from '../Components/TravelHubs/HubsStories'
import SubInterest from '../Components/TravelHubs/SubInterest'
import CreateSection from '../Components/TravelHubs/CreateSection'
import HubInfo from '../Components/TravelHubs/HubInfo'
import DevideSectionText from '../Components/DevideSectionText'

const TravelHub = () => {
  const location = useLocation();
  const hubData = location.state?.hubData;

  React.useEffect(() => {
    console.log('Hub Data:', hubData);
    if (hubData) {
      console.log('Hub Name:', hubData.name);
      console.log('Hub Description:', hubData.description);
      console.log('Hub Index:', hubData.index);
      console.log('Hub Sub Description:', hubData.subDescription);
    }
  }, [hubData]);

  const getCategory = (name) => {
    if (name.toLowerCase().includes('travel')) {
      return 'travel';
    } else if (name.toLowerCase().includes('media')) {
      return 'media';
    } else if (name.toLowerCase().includes('entrepreneur')) {
      return 'entrepreneur';
    } else {
      return '';
    }
  };

  const category = hubData ? getCategory(hubData.name) : '';

  return (
    <div>
      <div className='px-[5vw]'>
        <HubsHeading hubData={hubData} />
        <CreateSection />
      </div>
      <HubsStories />
      {category && <SubInterest category={category} />}
      <DevideSectionText 
        title1="WHAT WE" 
        title2="PROVIDE" 
        description=" "
      />
      <HubInfo  category={category}/>
    </div>
  )
}

export default TravelHub
