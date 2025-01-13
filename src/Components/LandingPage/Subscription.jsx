import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import dollar from "../../assets/images/dollar.png";

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
        price: "9.99",
        features: [
          "Feature A for business.",
          "Feature B for business.",
          "Feature C for business.",
        ],
      },
      {
        title: "Enterprise",
        price: "7.99",
        features: [
          "Feature A for business.",
          "Feature B for business.",
          "Feature C for business.",
        ],
      },
      {
        title: "Corporate",
        price: "4.99",
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
        price: "2.99",
        features: [
          "Feature A for universities.",
          "Feature B for universities.",
          "Feature C for universities.",
        ],
      },
      {
        title: "Pro",
        price: "5.99",
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

  // Effect to reset Swiper slides when currentHeadingIndex changes
  useEffect(() => {
    swiperRef.current.swiper.slideTo(0);
  }, [currentHeadingIndex]);

  const handleNext = () => {
    setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
  };

  const handlePrev = () => {
    setCurrentHeadingIndex((prevIndex) =>
      (prevIndex - 1 + headings.length) % headings.length
    );
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
          key={currentKey}
          modules={[Navigation, Pagination]}
          navigation
          slidesPerView={1}
          spaceBetween={20}
          effect="slide"  // Ensure smooth sliding transition
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {plans[currentKey].map((plan, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col justify-between bg-[#FFFFFF]/40 backdrop-blur-lg p-6 border-2 border-black border-opacity-20 rounded-2xl shadow-lg h-full
                transition-transform duration-300 ${index === 1 ? "lg:scale-100" : "lg:scale-[0.8]"}`}
              >
                <h2 className="text-xl lg:text-3xl font-medium text-planColor">{plan.title}</h2>
                <p className="text-xs lg:text-xs font-medium max-w-4/5 text-planColor mt-2">
                  Lorem ipsum dolor sit amet consectetur. Maecenas risus cras malesuada cursus.
                </p>
                <h3 className="text-4xl relative lg:text-9xl font-semibold text-center text-planColor my-4">
                  <img className="h-7 absolute" src={dollar} alt="money" />{plan.price}
                </h3>
                <button className="bg-[#FFFFFF]/50 text-planColor text-sm lg:text-base font-semibold py-2 rounded-full w-full">
                  Get Started
                </button>
                <ul className="mt-4 space-y-2 text-sm lg:text-base text-center text-planColor">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-center">
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
        ></button>
        <button
          className="swiper-button-next bg-white p-3 h-5 !w-12 rounded-full shadow-md active:scale-90 hover:bg-blue-200 "
          onClick={handleNext}
        ></button>
      </div>
    </div>
  );
};

export default PricingSlider;
