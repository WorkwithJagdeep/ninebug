import React, { useEffect, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function OnBoarding() {
  const [step, setStep] = useState<number>(1);
  const siteLoading: boolean = useSelector((state: any) => state.siteLoading);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const user: any = useSelector((state: any) => state.currentUser);
  const [loading, setLoading] = useState<boolean>(false);
  const [bio, setBio] = useState<string>("");

  const [categories, setCategories] = useState([
    "Business",
    "Influencer & Digital Creator",
    "Personal",
    "Education",
    "Entertainment",
    "Fashion & Beauty",
    "Food & Beverage",
    "Government & Politics",
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    if (!siteLoading && user) {
      setStep(user.currentStep);
    }
  }, [siteLoading, user]);

  const _handleOnBoarding = async (data: any) => {
    try {
      setLoading(true);
      const request = await axios.post(
        "http://localhost:8080/api/ninebug/user/onboarding",
        data
      );
      // console.log(request.data)
      window.location.replace(
        `/auth/signup/onboarding?user_name=${user.username}&id=${
          user._id
        }&currentstep=${user.currentStep + 1}&sessionid=${localStorage.getItem(
          "jwt"
        )}`
      );
      setLoading(false);
      return request;
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  };

  const CurrentPage = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="font-bold text-7xl mt-4">
              Tell us about yourself
            </div>
            <div className="text-lg text-black/70 mx-2">
              This will personalize your experience.
            </div>
            <div className="flex items-start flex-wrap mt-9 mx-2">
              {categories.map((category, index) => (
                <div
                  onClick={() => {
                    setSelectedRole(category);
                    setActiveIndex(index);
                  }}
                  className={`mr-2 mb-3 border transition ease-in-out duration-150 cursor-pointer border-black/30 py-2 px-4 rounded-full ${
                    index === activeIndex
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {category}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end mt-9">
              {loading ? (
                <div className="py-3 px-7 bg-black text-white rounded-full text-lg cursor-pointer">
                  loading...
                </div>
              ) : (
                <div
                  className="py-3 px-7 bg-black text-white rounded-full text-lg cursor-pointer"
                  onClick={() =>
                    _handleOnBoarding({
                      step: step,
                      role: selectedRole,
                      userid: user._id,
                    })
                  }
                >
                  Next
                </div>
              )}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="font-bold text-7xl mt-4">add Bio</div>
            <div className="text-lg text-black/70 mx-2">
              Elevate your journey with a touch of personalization.
            </div>
            <div className="flex items-start flex-wrap mt-3 mx-2">
              <textarea
                name=""
                id=""
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="h-44 w-full border-2 border-black/30 rounded-lg p-3"
              ></textarea>
            </div>
            <div className="flex items-center justify-end mt-9">
              {loading ? (
                <div className="py-3 px-7 bg-black text-white rounded-full text-lg cursor-pointer">
                  loading...
                </div>
              ) : (
                <div
                  className="py-3 px-7 bg-black text-white rounded-full text-lg cursor-pointer"
                  onClick={() =>
                    _handleOnBoarding({
                      bio: bio,
                      role: selectedRole,
                      step: step,
                      userid: user._id,
                    })
                  }
                >
                  Next
                </div>
              )}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="font-bold text-7xl mt-4">
              Add Social Media Links
            </div>
            <div className="text-lg text-black/70 mx-2">
              Connect with your audience by adding your social media links.
            </div>
            <div className="flex flex-col mt-8 mx-3 ">
              <div className="w-full border border-black/60 rounded-md h-12 flex items-center my-2">
                <div className="w-12 h-full  flex items-center rounded-l-md justify-center border-r border-r-black/50">
                  <FaFacebookF color="black" fontSize={23} />
                </div>
                <input
                  type="text"
                  placeholder="add your link here"
                  className="w-full h-full px-5 outline-none rounded-md"
                />
              </div>
              <div className="w-full border border-black/60 rounded-md h-12 flex items-center my-2">
                <div className="w-12 h-full flex items-center rounded-l-md justify-center border-r border-r-black/50">
                  <FaInstagram color="black" fontSize={23} />
                </div>
                <input
                  type="text"
                  placeholder="add your link here"
                  className="w-full h-full px-5 outline-none rounded-md"
                />
              </div>
              <div className="w-full border border-black/60 rounded-md h-12 flex items-center my-2">
                <div className="w-12 h-full  flex items-center rounded-l-md justify-center border-r border-r-black/50">
                  <RiTiktokLine color="black" fontSize={23} />
                </div>
                <input
                  type="text"
                  placeholder="add your link here"
                  className="w-full h-full px-5 outline-none rounded-md"
                />
              </div>
            </div>
            <div className="mx-3 font-semibold my-5">Add more</div>
            <div className="flex flex-col mx-3 ">
              <div className="w-full border border-black/60 rounded-md h-12 flex items-center my-2">
                <div className="w-12 h-full  flex items-center rounded-l-md justify-center border-r border-r-black/50">
                  <MdOutlineAddCircleOutline />
                </div>
                <input
                  type="text"
                  placeholder="add your link here"
                  className="w-full h-full px-5 outline-none rounded-md"
                />
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="font-bold text-7xl mt-4">Pick a template</div>
            <div className="text-lg text-black/70 mx-2">
              Apply a template and get started. You can change your links and
              appearance anytime.
            </div>
          </>
        );
      default:
        return;
    }
  };
  return (
    <div className="w-full flex items-center  flex-col">
      <div className="w-full">
        <div className="flex items-center px-28 py-6 justify-between">
          <div className="w-1/3"></div>
          <div className="flex items-center w-1/3 justify-center">
            <div className="text-2xl font-bold text-black">NineBug</div>
          </div>
          <div className="flex items-center w-1/3 justify-end"></div>
        </div>
      </div>
      <div className="w-3/5 py-10">
        <div className="">
          <div className="flex items-center">Step {step} of 4</div>
        </div>
        {CurrentPage()}
      </div>
    </div>
  );
}

export default OnBoarding;
