import React from "react";
import ProfileNavFooter from "./ProfileNavFooter";
import ProfileNavLinks from "./ProfileNavLinks";
import ProfileNavLogo from "./ProfileNavLogo";

const ProfileNavigation = () => {
  return (
    <div className="w-24 h-full py-8 px-6 bg-white flex flex-col justify-between items-center min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <ProfileNavLogo />
        <ProfileNavLinks />
      </div>

      <ProfileNavFooter />
    </div>
  );
};

export default ProfileNavigation;
