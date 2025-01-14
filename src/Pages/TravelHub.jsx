import React from 'react'
import HubsHeading from '../Components/TravelHubs/HubsHeading'
import HubsStories from '../Components/TravelHubs/HubsStories'
import SubInterest from '../Components/TravelHubs/SubInterest'
import CreateSection from '../Components/TravelHubs/CreateSection'

const TravelHub = () => {
  return (
    <div>
        <div className='px-[5vw]'>
            <HubsHeading/>
            <CreateSection/>
        </div>
            <HubsStories/>
            <SubInterest/>
    </div>
  )
}

export default TravelHub