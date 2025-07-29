import React from "react";
import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="pb-16">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl font- md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-6 md:py-16">
        See the Magic now
      </h1>
      <div className="flex justify-center items-center">
        <input type="file" id="upload2" hidden className="mb-4" />
        <label
          className="inline-flex gap-3  bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full px-8 py-3.5 mt-auto hover:scale-105 transition-all duration-700"
          htmlFor="upload2"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-sm">Upload Your image</p>
        </label>
        <p className="mx-4">or drag & drop here</p>
      </div>
    </div>
  );
};

export default Upload;
