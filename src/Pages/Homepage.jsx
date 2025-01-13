import React from 'react'
import Banner from '../Components/LandingPage/Banner'
import DevideSectionText from '../Components/DevideSectionText'
import ScrollingOrGrowing from '../Components/LandingPage/ScrollingOrGrowing'
import FindInterest from '../Components/LandingPage/FindInterest'
import Stories from '../Components/LandingPage/Stories'
import Motives from '../Components/Motives'
import BussinessHead from '../Components/LandingPage/BussinessHead'
import RandomQuote from '../Components/LandingPage/RandomQuote'
import UniversityHead from '../Components/LandingPage/UniversityHead'
import UniversitiesFeat from '../Components/LandingPage/UniversitiesFeat'
import WhyChooseUs from '../Components/LandingPage/WhyChooseUs'
import Subscription from '../Components/LandingPage/Subscription'

const Homepage = () => {
  const cardsData = [
    {
      title: "Our Mission",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas risus cras malesuada cursus.",
      bgColor: "bg-[#64B7F5]",
      textColor: "text-white",
    },
    {
      title: "Our Goal",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas risus cras malesuada cursus.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Our Vision",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas risus cras malesuada cursus.",
      bgColor: "bg-[#64B7F5]",
      textColor: "text-white",
    },
    {
      title: "Our Motive",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas risus cras malesuada cursus.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];
  const cardsDataTwo = [
    {
      title: "Our Mission",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas risus cras malesuada cursus.",
      bgColor: "bg-[#64B7F5]",
      textColor: "text-white",
    },
    {
      title: "Our Goal",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas risus cras malesuada cursus.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Our Motive",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas risus cras malesuada cursus.",
      bgColor: "bg-[#64B7F5]",
      textColor: "text-white",
    },
  ];

  return (
    <div>
      <div className='px-[5vw]'>
      <Banner/>
      </div>
      <DevideSectionText title1 ="STUDENT &" title2 ="ALUMNI" description="Student life is not just a phase – it’s the foundation of your future. The habits you build, the connections you make, and the skills you develop today will define the opportunities you have tomorrow." highlight=" Make it count with JOINLIO."/>
      <div className='md:px-[5vw]'>
      <ScrollingOrGrowing/>
      <FindInterest/>
        <div className='px-6 lg:px-20 gap-[10px] mt-12 py-12 my-5'>
          <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
              Still not convinced?  <br />
              <span className="text-textColor">“Hear it straight from our users”</span>
          </h1>
       </div>
      </div>
      <Stories/>

      <div className='px-[5vw]'>
          <Motives cards={cardsData}/>
      </div>

      <DevideSectionText title1 ="BUSINESSES" title2 =" " description=" "/>
      <div className='px-[5vw]'>
      <BussinessHead/>
      <div className='px-6 lg:px-20 gap-[10px]  py-12 '>
          <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
              Still not convinced?  <br />
              <span className="text-textColor">“Hear it straight from our users”</span>
          </h1>
          <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl">
            {/* <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl"> */}
            Why take our word for it when you can hear directly from businesses thriving with JOINLIO? Discover their success stories, see how they’ve expanded their reach, and built loyal customer bases—all by joining the platform. Your success story could be next!"
           </p>
       </div>
      </div>
      <Stories/>
      <Motives cards={cardsDataTwo}/>
      <RandomQuote/>
      <DevideSectionText title1 ="UNIVERSITIES" title2 ="" description="JOINLIO is a next-generation platform designed to revolutionize student development for universities, colleges, and institutes. By subscribing to JOINLIO, your institution provides students with free access to advanced tools for personal growth, global collaboration, and professional achievement. Empower your students with a verified, futuristic ecosystem that fosters innovation, builds lasting connections, and prepares them to lead in a rapidly evolving world." highlight=" "/>

      <div className='px-[5vw]'>
      <UniversityHead/>
      <UniversitiesFeat/>


      <WhyChooseUs/>
      <Motives cards={cardsDataTwo}/>
      </div>

      <DevideSectionText title1 ="CHOOSE YOUR" title2 ="PLAN" description=" " highlight=" " className="hidden"/>
      <Subscription/>
      
    </div>
  )
}

export default Homepage