import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Profile, SignUp } from "../pages";

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
};

export default WebsiteRoutes;
