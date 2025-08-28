import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext.jsx";

const Header = () => {
  const { removeBg } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl text-center md:text-6xl sm:text-5xl mb-5 ">
        Remove
        <span className="text-violet-800 font-medium italic">
          Background
        </span>{" "}
        in{" "}
        <span className="font-light underline decoration-[1px] decoration-black underline-offset-2">
          One
        </span>{" "}
        Click
      </h1>
      <h4 className=" mb-10 text-center text-xl font-semibold md:text-3xl lg:text-2xl mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        {`"Quick, accurate, and free image background removal."`}
      </h4>
      <p className="mb-10 font-medium text-sm space-y-2">
        ✅ One-click background removal <br />⚡ Fast and lightweight
        <br /> 🖼️ Supports PNG, JPG, and WebP
      </p>

      {/* Top */}
      <div className="flex justify-center items-center">
        <input
          onChange={(e) => removeBg(e.target.files[0])}
          accept="image/*"
          type="file"
          id="upload1"
          hidden
          className="mb-4"
        />
        <label
          className="inline-flex gap-3   bg-gradient-to-b from-blue-500 to-fuchsia-500 rounded-full px-8 py-3.5 mt-auto hover:scale-105 transition-all duration-700"
          htmlFor="upload1"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-sm">Upload Your image</p>
        </label>
      </div>
      {/* Bottom */}
      <div className="mt-16 h-[400px] flex items-center justify-center border-2 border-fuchsia-200 rounded-2xl shadow-md bg-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <img
          className="w-full h-auto object-contain"
          src={assets.head}
          alt="Preview"
        />
      </div>
    </div>
  );
};

export default Header;
