import React from 'react';

const FeaturesGrid = () => {
  return (
    <div className="flex justify-center items-center mt-14 h-auto min-h-[400px] py-4 bg-[#EEEEEE]/40 backdrop-blur-lg px-4 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
        {/* Top row */}
        <div className="col-span-1 flex flex-col justify-between h-60 bg-gray-300 rounded-2xl p-6">
          <h3 className="text-lg lg:text-2xl font-black text-black">Students</h3>
          <p className="mt-2 text-sm lg:text-base text-gray-600">
          Access everything for free! Dive into a world of global connections,
          collaborative projects, and comprehensive resources at no cost. Enhance your education
          and career prospects with trusted connections and robust data protection compliant with
          GDPR.

          </p>
        </div>
        
        <div className="col-span-1 flex flex-col justify-between h-60 bg-gray-300 rounded-2xl p-6">
          <h3 className="text-lg lg:text-2xl font-black text-black">Business Owners</h3>
          <p className="mt-2 text-sm lg:text-base text-gray-600">
          Only pay when you earn! Use JoinLIO’s commission-only model to
          connect with student customers. No upfront costs—pay only when you make sales,
          aligning your expenses directly with your revenue. Enjoy a secure and trustworthy
          platform that protects your data and respects privacy.

          </p>
        </div>

        {/* Second row */}
        <div className="col-span-2 flex flex-col justify-between h-60 bg-gray-300 rounded-2xl p-6">
          <h3 className="text-lg lg:text-2xl font-black text-black">University Administrators</h3>
          <p className="mt-2 text-sm lg:text-base text-gray-600 w-full md:w-4/5 lg:w-2/3">
          Start with a free trial. Experience how JoinLIO can enhance
          student engagement and success at your  institution with no initial financial commitment.
          Evaluate our platform's effectiveness with complete confidence in our commitment to
          data protection and GDPR compliance
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
