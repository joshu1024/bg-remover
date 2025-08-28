import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const NavBar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div className="shadow-md rounded-md m-2 flex flex-col items-center justify-center bg-slate-100 mb-16">
      <div className="flex justify-between w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <img
            className="sm:w-44 lg:w-50  p-1 rounded-full mb-1"
            src={assets.result}
            alt=""
          />
        </Link>

        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-purple-200 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
            >
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600 ">
                Credits left:{credit}
              </p>
            </button>
            <p className="pl-4 text-gray-600 max-sm:hidden">{user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-10 drop-shadow"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-medium border text-sm">
                  <li
                    onClick={logout}
                    className="py-1 px-2 cursor-pointer pr-10"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy")}
              className="cursor-pointer hover:text-violet-700 hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.7)] transition duration-300"
            >
              Pricing
            </p>{" "}
            <button
              onClick={() => setShowLogin("true")}
              className="bg-zinc-800 text-white text-sm px-7 sm:px-10 rounded-full py-2"
            >
              Get started
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
