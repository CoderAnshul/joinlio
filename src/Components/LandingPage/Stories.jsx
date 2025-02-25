import React from 'react';
import StoriesSlider from '../StoriesSlider';

const Stories = ({ isSecondInstance = false }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full">
        <StoriesSlider isSecondInstance={isSecondInstance} />
      </div>
    </div>
  );
};

export default Stories;