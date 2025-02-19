import React from 'react'
import Banner from '../Components/LandingPage/Banner'
import DevideSectionText from '../Components/DevideSectionText'
import ScrollingOrGrowing from '../Components/LandingPage/StudentHead'
import FindInterest from '../Components/LandingPage/FindInterest'
import Stories from '../Components/LandingPage/Stories'
import Motives from '../Components/Motives'
import BussinessHead from '../Components/LandingPage/BussinessHead'
import RandomQuote from '../Components/LandingPage/RandomQuote'
import UniversityHead from '../Components/LandingPage/UniversityHead'
import UniversitiesFeat from '../Components/LandingPage/UniversitiesFeat'
import WhyChooseUs from '../Components/LandingPage/WhyChooseUs'
import Subscription from '../Components/LandingPage/Subscription'
import RevealText from '../Components/LandingPage/RevealText'
import CircleDetails from '../Components/LandingPage/CircleDetails'

const Homepage = () => {
  const cardsData = [
    {
      title: "Our Mission",
      description:
        "To empower students and alumni with meaningful connections, real-world opportunities, and tools to thrive in their personal and professional journeys.",
      bgColor: "bg-[#F7C28A]",
      textColor: "text-white",
    },
    {
      title: "Our Goal",
      description:
        "Our goal is to transform student lives with tools, connections, and opportunities, partnering with institutions to redefine student success globally.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Our Vision",
      description:
        "To create a world where every student and alumni can fully discover their true potential, build meaningful lasting relationships, and turn their biggest dreams into reality.",
      bgColor: "bg-[#F7C28A]",
      textColor: "text-white",
    },
    {
      title: "Our Motive",
      description:
        "Driven by the belief that every student deserves a chance to grow, connect, and succeed,JOINLIO is here to inspire and support you every step of the way.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];
  const cardsDataTwo = [
    {
      title: "Our Mission",
      description:
        "To empower businesses by connecting them with a thriving student community, driving growth through meaningful interactions, and fostering long-term success.",
      bgColor: "bg-[#F7C28A]",
      textColor: "text-white",
    },
    {
      title: "Our Goal",
      description:
        "To help businesses build loyal customer bases, improve sales with exclusive insights, and reach thousands of students seamlessly—delivering measurable impact.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Our Motive",
      description:
        "JOINLIO believes every business deserves the right tools to grow, connect, thrive, succeed, innovate, streamline processes, enhance efficiency, and create a lasting, sustainable future.",
      bgColor: "bg-[#F7C28A]",
      textColor: "text-white",
    },
  ];
  const cardsDataThree = [
    {
      title: "Our Mission",
      description:
        "To empower universities by providing a transformative platform that drives student growth, fosters collaboration, and builds a thriving community of future leaders.",
      bgColor: "bg-[#F7C28A]",
      textColor: "text-white",
    },
    {
      title: "Our Goal",
      description:
        "To partner with institutions globally, helping them unlock their students’ potential by offering tools and insights that shape their personal and professional journeys.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Our Motive",
      description:
        "Our motive is to build a robust and powerful tool for universities, enabling them to enhance their students’ personal growth, create impactful connections, and ensure long-term success.",
      bgColor: "bg-[#F7C28A]",
      textColor: "text-white",
    },
  ];

  const studentData = {
    boxTexts: [
      "Trusted Connections",
      "Your Digital Resume",
      "Do Volunteer & Paid Projects",
      "Meet like-minded People Globally",
      "Get Reward & Recognitions",
      "Connect With Opportunities",
      "Journey Tracking",
      "Activity Documentation",
    ],
    centerHeading: "All of this is Possible With",
    centerSubHeading: " Peer Account",
    centerDescription:
      "The Peer Account is a dynamic digital profile that showcases your talents, skills, and achievements. More than a resume, it reflects your experiences, collaborations, and personal growth, embodying your unique personal brand.",
  };
  const businessData = {
    boxTexts: [
      "Direct Student Access",
      "Risk-Free Payments",
      "Monitor Feedback",
      "Create Ad Campaigns",
      "Track Sales Impact",
      "Flexible Payment Options",
      "Targeted Hubs",
      "Advanced Analytics",
    ],
    centerHeading: "Why you should create a ",
    centerSubHeading: "Business Account ",
    centerDescription:
      "Connect with a vibrant community of students and alumni, promote your offerings in targeted hubs, and build trust with exclusive deals. Boost your income, enhance brand visibility, and gain insights by aligning with a platform dedicated to growth and education.",
  };

  return (
    <div>
      <div className='px-[5vw]'>
      <Banner/>
      <RevealText/>
      </div>
      <DevideSectionText title1 ="STUDENT &" title2 ="ALUMNI" description="Student life is not just a phase – it’s the foundation of your future. The habits you build, the connections you make, and the skills you develop today will define the opportunities you have tomorrow." highlight=" Make it count with JOINLIO."/>
      <div className='md:px-[5vw] relative overflow-hidden'>
      <ScrollingOrGrowing/>
      <div className='h-fit relative overflow-hidden'>
      <CircleDetails {...studentData} screenIndex={1}/>
      </div>
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

      <DevideSectionText title1 ="BUSINESSES" title2 =" " description="JOINLIO connects your business directly with the student community, allowing you to
      offer exclusive discounts, boost sales, and gather real-time feedback all on one seamless
      platform. No upfront costs pay only when you start generating sales.
      "/>
      <div className='px-[5vw]'>
      <BussinessHead/>
      <div className='h-fit relative overflow-hidden'>
      <CircleDetails {...businessData} screenIndex={2}/>
      </div>
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
      <Motives cards={cardsDataThree}/>
      </div>

      {/* <DevideSectionText title1 ="CHOOSE YOUR" title2 ="PLAN" description=" " highlight=" " className="hidden"/> */}
      {/* <Subscription/> */}
      
    </div>
  )
}

export default Homepage