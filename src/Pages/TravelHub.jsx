import React from 'react'
import HubsHeading from '../Components/TravelHubs/HubsHeading'
import HubsStories from '../Components/TravelHubs/HubsStories'
import SubInterest from '../Components/TravelHubs/SubInterest'
import CreateSection from '../Components/TravelHubs/CreateSection'
import HubInfo from '../Components/TravelHubs/HubInfo'
import DevideSectionText from '../Components/DevideSectionText'

const TravelHub = () => {
  return (
    <div>
        <div className='px-[5vw]'>
            <HubsHeading/>
            <CreateSection/>
        </div>
            <HubsStories/>
            <SubInterest/>
            <DevideSectionText title1 ="WHAT WE" title2 ="PROVIDE" description=" "/>
            <HubInfo/>
    </div>
  )
}

export default TravelHub