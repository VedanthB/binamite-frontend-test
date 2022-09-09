import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing, Profile } from "../pages";

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
};

export default WebsiteRoutes;
