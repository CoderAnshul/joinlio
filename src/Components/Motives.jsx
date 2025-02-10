import React from "react";

const Motives = ({ cards }) => {
  return (
    <div className="px-6 lg:px-20 py-12 my-5 mx-auto min-h-44 flex justify-center">
      <div
        className={`grid gap-6 p-4 border-2 w-full max-w-[1200px] border-gray-700 border-opacity-15 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl`}
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col min-h-44 lg:min-h-40 relative justify-end overflow-hidden items-start bg-white rounded-3xl shadow-md p-4"
          >
            {/* Card header */}
            <div
              className={`px-5 py-2 absolute top-0 left-0 rounded-br-3xl font-semibold text-sm ${card.bgColor} ${card.textColor}`}
            >
              {card.title}
            </div>
            {/* Card description */}
            <p className="text-gray-500 text-sm mt-3">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Motives;
