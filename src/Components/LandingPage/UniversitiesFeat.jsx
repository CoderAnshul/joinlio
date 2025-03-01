import React from 'react';

const UniversitiesFeat = () => {
  const features = [
    {
      title: "Comprehensive Student Insights",
      description: "Get monthly reports on student activities, achievements, and engagement."
    },
    {
      title: "Flexible Payment Plans",
      description: "Choose subscription plans tailored to your institution’s needs with clear agreements."
    },
    {
      title: "Event Management & Sponsorship",
      description: "Post events and sponsor student activities to enhance campus engagement."
    },
    {
      title: "Verified Student Community",
      description: "Provide verified student accounts with access to hubs, Peer Accounts, and tools."
    },
    {
      title: "Track Student Success",
      description: "Monitor student growth, achievements, and engagement on JOINLIO."
    },
    {
      title: "Build Stronger Communities",
      description: "Connect students globally, fostering collaboration and a sense of belonging."
    },
  ];

  return (
    <div className=' md:px-6 xl:px-20 gap-[10px] md:py-12 my-5'>
      <div className="flex justify-center items-center h-auto min-h-[500px] rounded-2xl bg-gradient-to-r from-white to-[#d0edfc]  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 rounded-xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:h-fit lg:min-h-[240px] xl:min-h-[200px] justify-start p-4 gap-4 bg-[#FFFFFF]/80 backdrop-blur-lg shadow-sm border-l-2 border-t-2 hover:shadow-md transition-all border-gray-200 rounded-2xl"
            >
              <div className="w-full text-lg font-black text-white bg-[#00ABFF] px-2 py-3 h-16 flex justify-center items-center rounded-xl">
                {feature.title}
              </div>
              <p className="mt-4  text-start text-customBlue leading-8 text-xl sm:text-xl lg:text-lg font-bold">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversitiesFeat;
