import React from "react";

import Header from "../../Component/Common/Header.tsx";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-black w-full min-h-screen">
      <Header />
      <div className="px-24 py-16 w-full">
        <div className="w-4/6 px-6 pt-2">
          <h1 className="text-white text-8xl font-bold">
            Everything you are. In one, simple link in bio.
          </h1>
          <h2 className="text-lg text-white/70 mt-4">
            Join 40M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </h2>
          <div className="flex items-center justify-start mt-8">
            <div className="flex items-center border border-white rounded-2xl">
              <div className="py-3 pl-5 text-lg font-semibold text-white">
                Ninebug.com/@
              </div>
              <input
                type="text"
                placeholder="username"
                className="w-1/2 bg-black h-full border-white text-white outline-none"
              />
            </div>
            <div className="ml-4 rounded-md bg-white">
              <Link to="/auth/signup">
                <div
                  className="py-3 text-black px-6 font-bold bg-black rounded-md cursor-pointer"
                  style={{
                    background:
                      "radial-gradient(94.6% 75% at 50% 100%, rgb(0, 153, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                  }}
                >
                  Claim your portfolio
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
