import React from 'react';

const UniversitiesFeat = () => {
  return (
    <div className='px-6 lg:px-20 gap-[10px] py-12 my-5'>
        <div className="flex justify-center items-center h-auto min-h-[500px] rounded-2xl bg-[#EEEEEE]/40 backdrop-blur-lg ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 rounded-xl">
        {Array(2)
          .fill(null)
          .map((_, rowIndex) =>
            ["Subscription Model", "Get Access", "Track Achievements"].map(
              (title, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className="flex flex-col items-center h-[300px] justify-between p-4 bg-gray-300 rounded-2xl"
                >
                  <div className="w-full text-lg font-black text-black bg-white px-2 py-3 h-16 flex justify-center items-center rounded-xl">
                    {title}
                  </div>
                  <p className="mt-4 text-2xl text-start text-customBlue leading-8 text-xl sm:text-2xl lg:text-3xl font-bold">
                    {index === 0
                      ? "Providing students with free access and verified accounts"
                      : index === 1
                      ? "To Hubs, Create Peer accounts, and access tools on JIONLIO"
                      : "Track student growth and engagement on JOINLIO"}
                  </p>
                </div>
              )
            )
          )}
      </div>
    </div>
    </div>
  );
};

export default UniversitiesFeat;
