import React from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <div className="shadow-md rounded-md m-2 flex flex-col items-center justify-center bg-slate-100 mb-16">
      <h1 className="font-bold sm:text-6xl  mb-6 font-sans">
        Remove <span className="text-violet-800">Background</span> Tool
      </h1>
      <div className="flex gap-6">
        <img className="sm:w-44 lg:w-50" src={assets.logo} alt="" />
        {isSignedIn ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className="flex bg-zinc-800 text-white items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full"
          >
            Get Started{" "}
            <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
