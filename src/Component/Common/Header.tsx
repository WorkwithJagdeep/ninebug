import React from "react";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center px-28 py-6 justify-between">
      <div className="flex items-center">
        <div className="text-xl font-semibold text-white">NineBug</div>
        <div className="flex items-center text-white text-base mx-10">
          <div className="mx-4">Templates</div>
          <div className="mx-4">Discover</div>
          <div className="mx-4">Pricing</div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-white flex items-center mx-5">
          <TbWorld color="white" fontSize={24} />{" "}
          <span className="text-xl ml-1 font-semibold"></span>IN
        </div>
        <Link to="/auth/login">
          <div className="py-1.5 px-4 ml-3 text-white rounded-full text-base">
            Login
          </div>
        </Link>
        <Link to="/auth/signup">
          {" "}
          <div className="py-1.5 px-4 ml-3 bg-white text-black rounded-full text-base">
            Sign up
          </div>
        </Link>
      </div>
    </div>
  );
}
