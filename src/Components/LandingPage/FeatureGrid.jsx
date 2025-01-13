import React from 'react';

const FeaturesGrid = () => {
  return (
    <div className="flex justify-center items-center mt-14 h-auto min-h-[400px] py-4 bg-[#EEEEEE]/40 backdrop-blur-lg px-4 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {/* Top row */}
        <div className="col-span-1 sm:col-span-2 flex flex-col justify-between h-60 bg-gray-300 rounded-2xl p-6">
          <h3 className="text-lg lg:text-2xl font-black text-black">
            Subscription Model
          </h3>
          <p className="mt-2 text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur. <br />
            Maecenas risus cras malesuada cursus.
          </p>
        </div>
        <div className="col-span-1 sm:col-span-2 flex flex-col justify-between h-60 bg-gray-300 rounded-2xl p-6">
          <h3 className="text-lg lg:text-2xl font-black text-black">
            Support Career Readiness
          </h3>
          <p className="mt-2 text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur. <br />
            Maecenas risus cras malesuada cursus.
          </p>
        </div>

        {/* Middle row */}
        <div className="col-span-1 flex flex-col justify-between bg-gray-300 h-60 rounded-2xl p-6">
          <h3 className="text-lg lg:text-2xl font-black text-black">
            Boost Engagement and Retention
          </h3>
          <p className="mt-2 text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur. 
            Maecenas risus cras malesuada cursus.
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-between bg-gray-300 h-60 rounded-2xl p-6">
          <h3 className="text-lg lg:text-2xl font-black text-black">
            Show Commitment
          </h3>
          <p className="mt-2 text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur. 
            Maecenas risus cras malesuada cursus.
          </p>
        </div>

        {/* Bottom row */}
        <div className="col-span-1 sm:col-span-2 flex flex-col justify-between h-60 bg-gray-300 rounded-2xl p-6">
          <h3 className="text-lg lg:text-2xl font-black text-black">
            Build Alumni Relationships
          </h3>
          <p className="mt-2 text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur. <br />
            Maecenas risus cras malesuada cursus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
