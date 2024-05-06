import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import { clearTimeout } from "timers";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  // const [searchUserName, setSearchUserName] = useState<boolean>(false);
  const [notAvailable, setNotAvailable] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const _handleSumit = async (): Promise<any> => {
    try {
      setLoading(true);
      let data = { email: email, username: userName, password: password, name };
      const request = await axios.post(
        "http://localhost:8080/api/ninebug/user",
        data
      );
      window.localStorage.setItem("jwt", request.data.token);
      let { user } = request.data;
      // console.log(request.data)
      window.location.replace(
        `/auth/signup/onboarding?user_name=${user.username}&id=${user.userid}&currentstep=${user.currentStep}&sessionid=${request.data.token}`
      );
      setLoading(false);
      return request;
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <main>
      <div className="w-full px-10">
        <div className="w-full">
          <div className="flex items-center px-6 py-6 justify-between">
            <div className="w-1/3"></div>
            <div className="flex items-center w-1/3 justify-center">
              <div className="text-2xl font-bold text-black">NineBug</div>
            </div>
            <div className="flex items-center w-1/3 justify-end"></div>
          </div>
        </div>
        <div className="py-16 w-full">
          <div className="w-full flex flex-col items-center">
            <div className="text-5xl font-extrabold text-black">
              Welcome back!
            </div>
            <div className="mt-1 text-black/60">
              Please login to your account.
            </div>
            <div className="my-3"></div>
            <div className="w-5/12">
              <div className="rounded-md my-2 border-black/90 border w-fullflex items-center h-14 justify-center text-black font-bold text-xl">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email address"
                  className="w-full h-full  px-4 bg-transparent outline-none"
                />
              </div>
              <div className="rounded-md my-2 border border-black/90 w-fullflex items-center h-14 justify-center text-black font-bold text-xl">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter Password"
                  className="w-full h-full px-4 bg-transparent outline-none"
                />
              </div>

              {loading ? (
                <div className="py-3 bg-black text-white w-full rounded-md flex my-3 items-center justify-center font-bold text-xl">
                  Logging in...
                </div>
              ) : (
                <div
                  onClick={_handleSumit}
                  className="py-3 cursor-pointer bg-black text-white w-full rounded-md flex my-3 items-center justify-center font-bold text-xl"
                >
                  Login
                </div>
              )}
              <div className="text-black/60 text-center">
                dont have account?{" "}
                <span className="underline text-black">
                  <Link to="/">Sign in</Link>
                </span>
              </div>
              <div className="my-4 text-center">OR</div>
              <div className="py-3 border border-black/60 bg-white w-full rounded-md my-3 flex items-center justify-center text-black font-bold text-lg">
                Signup With Google
              </div>
              <div className="text-base text-black/60 mt-3">
                {" "}
                By signing up, you agree to our Terms of Service and Privacy
                Policy. This site is protected by reCAPTCHA and the Google Terms
                of Service and Privacy Policy apply.
              </div>
            </div>
          </div>
        </div>
        <div className="5/12"></div>
      </div>
    </main>
  );
}

export default Login;
