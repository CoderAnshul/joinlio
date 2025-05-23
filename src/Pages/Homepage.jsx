import React from "react";
import Banner from "../Components/LandingPage/Banner";
import DevideSectionText from "../Components/DevideSectionText";
import ScrollingOrGrowing from "../Components/LandingPage/StudentHead";
import FindInterest from "../Components/LandingPage/FindInterest";
import Stories from "../Components/LandingPage/Stories";
import Motives from "../Components/Motives";
import BussinessHead from "../Components/LandingPage/BussinessHead";
import RandomQuote from "../Components/LandingPage/RandomQuote";
import UniversityHead from "../Components/LandingPage/UniversityHead";
import UniversitiesFeat from "../Components/LandingPage/UniversitiesFeat";
import WhyChooseUs from "../Components/LandingPage/WhyChooseUs";
import Subscription from "../Components/LandingPage/Subscription";
import RevealText from "../Components/LandingPage/RevealText";
import CircleDetails from "../Components/LandingPage/CircleDetails";
import { Helmet } from "react-helmet";

import { useEffect } from "react";
import ChatButton from "../Components/LandingPage/ChatButton";

const Homepage = () => {
  const cardsData = [
    {
      title: "Our Mission",
      description:
        "Empowering students with real connections, real opportunities, and the right tools to thrive.",
      bgColor: "bg-[#00abff]",
      textColor: "text-white",
    },
    {
      title: "Our Goal",
      description:
        "A world where every student can unlock their potential, build lasting relationships, and turn dreams into action.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Our Vision",
      description:
        "To transform student life by partnering with institutions and offering powerful tools for success—globally.",
      bgColor: "bg-[#00abff]",
      textColor: "text-white",
    },
  ];
  const cardsDataTwo = [
    {
      title: "Our Mission",
      description:
        "To empower businesses by connecting them with an active student community—fueling growth through real engagement and long-term value.",
      bgColor: "bg-[#00abff]",
      textColor: "text-white",
    },
    {
      title: "Our Goal",
      description:
        "To help businesses grow loyal student customers, gain actionable insights, and drive measurable results.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Our Motive",
      description:
        "We believe every business deserves smart tools to connect, innovate, and thrive—while building a sustainable future.",
      bgColor: "bg-[#00abff]",
      textColor: "text-white",
    },
  ];
  const cardsDataThree = [
    {
      title: "Our Mission",
      description:
        "To empower universities with a platform that drives student growth, encourages collaboration,and builds a community of future leaders.",
      bgColor: "bg-[#00abff]",
      textColor: "text-white",
    },
    {
      title: "Our Goal",
      description:
        "To partner with institutions worldwide, helping students unlock their potential through smart tools and meaningful insights.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Our Motive",
      description:
        "We’re building a powerful tool for universities to boost student development, foster strong connections, and support long-term success.",
      bgColor: "bg-[#00abff]",
      textColor: "text-white",
    },
  ];

  const studentData = {
    boxTexts: [
      "Track Progress",
      "Showcase Projects",
      "Trusted Connections",
      "Digital Resume",
      "Volunteer & Paid Work",
      "Earn Recognition",
    ],
    centerHeading: "Unlock all these possibilities with a",
    centerSubHeading: " Joinlio Peer Account",
    centerDescription:
      "The Peer Account is a dynamic digital profile that showcases your talents, skills, and achievements. More than a resume, it reflects your experiences, collaborations, and personal growth, embodying your unique personal brand.",
  };
  const businessData = {
    boxTexts: [
      "Targeted Hubs",
      "Direct Student Access",
      "Ad Campaign Tools",
      "Insights & Analytics",
      "Secure Payment Options",
      "Real-Time Feedback",
    ],
    centerHeading: "Enhance your business with a ",
    centerSubHeading: "Joinlio Business Account",
    centerDescription:
      "Connect with a vibrant community of students and alumni, promote your offerings in targeted hubs, and build trust with exclusive deals. Boost your income, enhance brand visibility, and gain insights by aligning with a platform dedicated to growth and education.",
  };

  useEffect(() => {
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scrollTarget");
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Joinlio - Connect, Collaborate & Grow with Global Networks
        </title>
        <meta
          name="description"
          content="Joinlio empowers students, alumni, and businesses with global connections, real-world opportunities, and collaboration hubs. Unlock your future today!"
        />
      </Helmet>
      <div>
        <div className="px-[5vw]">
          <Banner />
          <RevealText />
        </div>
        <div id="section-data">
          <DevideSectionText
            title1="STUDENT &"
            title2="ALUMNI"
            description="Student life is not just a phase – it’s the foundation of your future. The habits you build, the connections you make, and the skills you develop today will define the opportunities you have tomorrow."
            highlight=" Make it count with JOINLIO!"
          />
        </div>
        <div className="md:px-[5vw] relative overflow-hidden">
          <ScrollingOrGrowing />
          <div id="peer-account" className="h-fit relative md:min-h-[700px]">
            <CircleDetails {...studentData} screenIndex={1} />
          </div>
          <div id="predefined-hubs" className="h-fit relative overflow-hidden">
            <FindInterest />
          </div>
          <div className="px-6 lg:px-20 gap-[10px] md:mt-12 md:py-12 py-2 my-5">
            <h2 className="text-3xl lg:text-5xl font-bold leading-snug">
              Still not convinced? <br />
              <span className="text-textColor">
                “Hear it straight from our users”
              </span>
            </h2>
          </div>
        </div>
        <Stories />

        <div className="px-[5vw]">
          <Motives cards={cardsData} />
        </div>

        <div id="business-data">
          <DevideSectionText
            title1="BUSINESSES"
            title2=" "
            description="JOINLIO connects your business directly with the student community, allowing you to
      offer exclusive discounts, boost sales, and gather real-time feedback all on one seamless
      platform."
            highlight="No upfront costs pay only when you start generating sales!"
          />
        </div>

        <div className="md:px-[5vw] relative overflow-hidden">
          <BussinessHead />
          <div id="business-account" className="h-fit relative">
            <CircleDetails {...businessData} screenIndex={2} />
          </div>
          <div className="px-6 lg:px-20 gap-[10px]  py-12 ">
            <h2 className="text-3xl lg:text-5xl font-bold leading-snug">
              Still not convinced? <br />
              <span className="text-textColor">
                “Hear it straight from our users”
              </span>
            </h2>
            <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl">
              {/* <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl"> */}
              Why take our word for it when you can hear directly from
              businesses thriving with JOINLIO? Discover their success stories,
              see how they’ve expanded their reach, and built loyal customer
              bases—all by joining the platform.{" "}
              <span className="italic font-medium text-black">
                Your success story could be next!
              </span>
            </p>
          </div>
        </div>
        <Stories isSecondInstance={true} />
        <Motives cards={cardsDataTwo} />
        <RandomQuote />
        <div id="universites-data">
          <DevideSectionText
            title1="UNIVERSITIES"
            title2=""
            description="JOINLIO is a next-generation platform designed to revolutionize student development for universities, colleges, and institutes. By subscribing to JOINLIO, your institution provides students with free access to advanced tools for personal growth, global collaboration, and professional achievement. Empower your students with a verified, futuristic ecosystem that fosters innovation, builds lasting connections, and prepares them to lead in a rapidly evolving world."
            highlight=" "
            className="lg:max-w-5xl"
          />
        </div>

        <div className="px-[5vw]">
          <UniversityHead />
          <UniversitiesFeat />
          <Motives cards={cardsDataThree} />

          <WhyChooseUs />
          <ChatButton />
        </div>

        {/* <DevideSectionText title1 ="CHOOSE YOUR" title2 ="PLAN" description=" " highlight=" " className="hidden"/> */}
        {/* <Subscription/> */}
      </div>
    </>
  );
};

export default Homepage;
