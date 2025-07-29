import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Top */}
      <div className="flex justify-center items-center">
        <input type="file" id="upload1" hidden className="mb-4" />
        <label
          className="inline-flex gap-3  bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full px-8 py-3.5 mt-auto hover:scale-105 transition-all duration-700"
          htmlFor="upload1"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-sm">Upload Your image</p>
        </label>
        <p className="mx-4">or drag & drop here</p>
      </div>
      {/* Bottom */}
      <div>
        <img
          className="mt-16 border-2 border-fuchsia-200 rounded-2xl ml-5 shadow-md"
          src={assets.head}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
