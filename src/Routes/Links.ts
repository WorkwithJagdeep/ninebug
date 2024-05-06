import { lazy } from "react";

export const Signup = lazy(() => import("../Pages/Auth/Signup.tsx"));
export const Home = lazy(() => import("../Pages/Home/Home.tsx"));
export const OnBoarding = lazy(
  () => import("../Pages/Auth/OnBoarding/OnBoarding.tsx")
);
export const Dashboard = lazy(
  () => import("../Pages/Dashboard/Home/Dashboard.tsx")
);
