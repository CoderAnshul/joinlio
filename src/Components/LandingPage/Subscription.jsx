import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const PricingSlider = () => {
  const headings = [
    { text1: "Are you a ", text2: "STUDENT?", key: "student" },
    { text1: "Plans for ", text2: "BUSINESS?", key: "business" },
    { text1: "Plans for ", text2: "UNIVERSITIES?", key: "universities" },
  ];

  const plans = {
    student: [
      {
        title: "Basic",
        price: "0",
        features: [
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
        ],
      },
      {
        title: "Premium",
        price: "9.99",
        features: [
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
        ],
      },
      {
        title: "Enterprise",
        price: "0",
        features: [
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
        ],
      },
    ],
    business: [
      {
        title: "Startup",
        price: "19.99",
        features: [
          "Feature A for business.",
          "Feature B for business.",
          "Feature C for business.",
        ],
      },
      {
        title: "Enterprise",
        price: "49.99",
        features: [
          "Feature A for business.",
          "Feature B for business.",
          "Feature C for business.",
        ],
      },
      {
        title: "Corporate",
        price: "99.99",
        features: [
          "Feature A for business.",
          "Feature B for business.",
          "Feature C for business.",
        ],
      },
    ],
    universities: [
      {
        title: "Standard",
        price: "0",
        features: [
          "Feature A for universities.",
          "Feature B for universities.",
          "Feature C for universities.",
        ],
      },
      {
        title: "Advanced",
        price: "29.99",
        features: [
          "Feature A for universities.",
          "Feature B for universities.",
          "Feature C for universities.",
        ],
      },
      {
        title: "Pro",
        price: "59.99",
        features: [
          "Feature A for universities.",
          "Feature B for universities.",
          "Feature C for universities.",
        ],
      },
    ],
  };

  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const swiperRef = React.useRef(null);

  const handleNext = () => {
    setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    setCurrentHeadingIndex((prevIndex) =>
      (prevIndex - 1 + headings.length) % headings.length
    );
    swiperRef.current.swiper.slidePrev();
  };

  const currentKey = headings[currentHeadingIndex].key;

  return (
    <div className="flex relative flex-col items-center pt-10 bg-gradient-to-b from-blue-100 to-blue-200 p-6 rounded-tr-[70px] rounded-tl-[70px]">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-center">
        {headings[currentHeadingIndex].text1} 
        <br />
        <h1 className="text-textColor">{headings[currentHeadingIndex].text2}</h1>
      </h1>
      <div className="w-full max-w-5xl">
        <Swiper
          ref={swiperRef}
          key={currentKey} // Force re-render on section change
          modules={[Navigation, Pagination]}
          navigation
          // pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {plans[currentKey].map((plan, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-between bg-[#FFFFFF]/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg h-full">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                  {plan.title}
                </h2>
                <p className="text-sm lg:text-base text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur. Maecenas risus cras
                  malesuada cursus.
                </p>
                <h3 className="text-4xl lg:text-6xl font-black text-gray-800 my-4">
                  ${plan.price}
                </h3>
                <button className="bg-blue-500 text-white text-sm lg:text-base font-semibold py-2 rounded-full w-full">
                  Get Started
                </button>
                <ul className="mt-4 space-y-2 text-sm lg:text-base text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-500 mr-2">✔️</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex absolute justify-between items-center w-4/5 max-w-6xl mt-4">
        <button
          className="swiper-button-prev bg-white p-3 h-5 !w-12 rounded-full shadow-md active:scale-90 hover:bg-blue-200 "
          onClick={handlePrev}
        >
          {/* ⬅️ */}
        </button>
        <button
          className="swiper-button-next bg-white p-3 h-5 !w-12 rounded-full shadow-md active:scale-90 hover:bg-blue-200 "
          onClick={handleNext}
        >
        </button>
      </div>
    </div>
  );
};

export default PricingSlider;