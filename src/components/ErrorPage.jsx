import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      {/* component */}
      <div className="bg-[#111827] py-25 h-150">
        <div className="bg-[#111827] lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
          <div className=" mb-6 xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <h1 className="p-7 bg-gradient-to-r from-pink-500 to-purple-700 text-transparent bg-clip-text font-bold text-6xl">
              ERROR
            </h1>
            <div className="ml-8 relative">
              <div>
                <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404 img" />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="404 img" />
          </div>
        </div>
        <div className="px-10 ml-12">
          <p className="mb-5 ml-8 text-xl text-white font-semibold">
            Please Sign Up using Google if you haven't done yet.
          </p>
          <NavLink to="/">
            <button className="ml-8 mb-5 sm:w-full lg:w-auto my-2 border rounded-3xl md py-4 px-8 text-center bg-[#F7BE38] text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
              Take me there!
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
