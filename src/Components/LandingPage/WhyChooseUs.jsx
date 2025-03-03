import React from 'react'
import FeaturesGrid from './FeatureGrid'

const WhyChooseUs = () => {
  return (
    <div className='md:px-6 lg:px-20 gap-[10px] py-12 my-5 mt-14'>
        <div className="flex items-start relative mb-8">
                {/* <div className="flex items-start relative mb-14"> */}
                    <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
                    But why Choose <br />
                    <span className="text-textColor">JOINLIO?</span>
                    </h1>
                </div>
        
                {/* Subtext */}
                <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl">
                {/* <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl"> */}
                Choose JOINLIO for seamless student engagement, verified profiles, and powerful tools that drive growth and collaboration.
                </p>

                <FeaturesGrid/>
    </div>
  )
}

export default WhyChooseUs