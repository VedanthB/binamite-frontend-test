import React from "react";
import LogoutIcon from "../../assets/logout-icon.svg";

const ProfileNavFooter = () => {
  return (
    <div className="text-xs flex flex-col justify-center items-center w-14 h-14  cursor-pointer">
      <img src={LogoutIcon} alt="" className="w-8 h-8 mb-2" />
      <div className="">Logout</div>
    </div>
  );
};

export default ProfileNavFooter;
