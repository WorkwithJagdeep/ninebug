import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Home, OnBoarding, Signup } from "./Links.ts";
import Login from "../Pages/Auth/Login.tsx";

function LocalRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
        <Route path="/dashboard/home" element={<Dashboard />} />

        {/* Auth routes */}

        <Route path="/auth/signup/onboarding" element={<OnBoarding />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />

        {/*  */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default LocalRoutes;
