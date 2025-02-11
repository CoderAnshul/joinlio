import React from 'react'
import loop from "../../assets/images/loop.png"
import StoriesSlider from '../StoriesSlider'

const HubsStories = () => {
  return (
    <>
    <div className=' px-6 lg:px-20 gap-[10px] relative z-[100] my-5 '>
            <div className='w-full flex justify-between gap-4 mb-6 flex-wrap'>
                <div className='w-auto max-w-xl'>
                    <h3 className='text-3xl relative font-semibold text-customBlue'>User's Journey <img className='absolute -bottom-4 scale-50' src={loop} alt="loop text" /></h3>
                </div>
            </div>

     </div>
    <StoriesSlider/>
    </>
  )
}

export default HubsStories