import React from "react";
import { assets, plans } from "../assets/assets";

const ByCredits = () => {
  return (
    <div className="min-h-[80vh] pt-14 text-center mb-10">
      <button className="border border-gray-400 rounded-full px-10 py-2 mb-6">
        Our plans
      </button>
      <h1 className="text-center text-2xl font- md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10">
        choose plan that's right for you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            className=" bg-white rounded-lg  drop-shadow-sm border  py-12  px-8 text-gray-700 hover:scale-105 transition-all duration-500"
            key={index}
          >
            <img src={assets.logo_icon} alt="" />
            <p className="mt-3 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price}</span>/
              {item.credits} credits
            </p>
            <button className="w-full bg-gray-800 text-white rounded-full mt-8 text-sm py-2.5 min-w-52">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
//1:32:05

export default ByCredits;
