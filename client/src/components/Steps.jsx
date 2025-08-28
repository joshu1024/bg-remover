import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 py-10 xl:py-20 ">
      <h1 className="text-center text-2xl font-semibold md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Effortless Background Removal
        <br /> in 3 Simple Steps
      </h1>
      <div className="flex flex-col items-center gap-5 mt-16 xl:mt-24 lg:flex-row lg:justify-center">
        <div className="flex w-100 md:w-150 h-30 text-wrap lg:w-80  items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="text-sm mt-1 text-neutral-500">
              {" "}
              Select the image you want to edit from your device.
            </p>
          </div>
        </div>
        <div className="flex w-100 md:w-150 h-30 text-wrap lg:w-80 items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="text-xl font-medium ">Remove Background</p>
            <p className="text-sm mt-1 text-neutral-500">removes in seconds.</p>
          </div>
        </div>
        <div className="flex w-100 md:w-150 h-30 text-wrap lg:w-80 items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.download_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Download image</p>
            <p className="text-sm mt-1 text-neutral-500">
              {" "}
              Save the backgroundless-image instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
//37:43
export default Steps;
