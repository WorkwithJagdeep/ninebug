import React from "react";
import { FaLink } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

function Siderow() {
  return (
    <div className="w-72 py-6 px-6 bg-white flex items-start flex-col justify-between h-screen">
      <div className="w-full">
        <div className="text-2xl font-semibold text-black">NineBug</div>
        <div>
          <div className="py-2.5 mt-6 flex items-center font-semibold bg-[#f5f5f5] px-2 mx-2">
            <TiHome fontSize={22} className="mr-2" />
            Home
          </div>
          <div className="text-black my-3 font-semibold px-2">Panels</div>
          <div className="text-black/80 text-base w-full  mx-2 px-2">
            <div className="py-2.5 my-1 flex items-center">
              <FaLink fontSize={22} className="mr-2" />
              Links
            </div>
            <div className="py-2.5 my-1 flex items-center">
              <TbWorld fontSize={22} className="mr-2" />
              Templates
            </div>
            <div className="py-2.5 my-1 flex items-center">
              <MdOutlineAlternateEmail fontSize={22} className="mr-2" />
              Email Marketing
            </div>
            <div className="py-2.5 my-1 flex items-center">
              <FaUserFriends fontSize={22} className="mr-2" />
              Referals
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center">
          <img
            src="https://cdn.beacons.ai/user_content/pYbqIfmO05OixhoSIKUXEoO5WL22/profile_jagdeep_singh.png?t=1713427020776"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div className="mx-3">
            <div className="text-black/90 font-medium">Jagdeep singh</div>
            <div className="text-sm text-black/60">Manage your account</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Siderow;
