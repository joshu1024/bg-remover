import React from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { resultImage, image } = React.useContext(AppContext);
  const navigate = useNavigate();
  const backHome = async () => {
    navigate("/");
  };
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white rounded-r-lg px-8 py-6 drop-shadow-sm">
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img src={image ? URL.createObjectURL(image) : "Original"} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">
              Without Background
            </p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden">
              <img src={resultImage ? resultImage : "result"} alt="" />
              {
                !resultImage && image && (
                  <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                    <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                  </div>
                )
                /*   */
              }
            </div>
          </div>
        </div>

        {resultImage && (
          <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
            <button
              onClick={backHome}
              className="px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700"
            >
              Try another image
            </button>
            <a
              href={resultImage}
              download="result.png"
              className="px-8 py-2 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700"
            >
              Download image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
