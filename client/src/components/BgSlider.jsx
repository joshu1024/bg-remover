import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderPosition = (e) => {
    setSliderPosition(e.target.value);
  };
  return (
    <div className="pb-20 md:py-20 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl font- md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove background with high
        <br /> quality and accuracy
      </h1>
      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        <img
          className="w-full h-full"
          width="500px"
          src={assets.image2_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
        />
        <img
          className="absolute top-0 left-0 w-full h-full"
          width="500px"
          src={assets.image3_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />
        <input
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-0 slider"
          type="range"
          min={0}
          max={100}
          onChange={handleSliderPosition}
        />
      </div>
    </div>
  );
};

export default BgSlider;
