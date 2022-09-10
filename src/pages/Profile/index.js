import React from "react";
import { ProfileLayout, ProfileNavigation } from "../../components";

const Profile = () => {
  return (
    <div className="flex">
      <div className="h-full min-h-screen">
        <ProfileNavigation />
      </div>

      <div className="h-full w-full  min-h-screen  min-w-screen">
        <ProfileLayout />
      </div>
    </div>
  );
};

export default Profile;
