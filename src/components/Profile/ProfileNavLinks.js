import React from "react";
import DashboardIcon from "../../assets/dashboard-icon.svg";
import ContactsIcon from "../../assets/contacts-icon.svg";
import PaymentsIcon from "../../assets/payments-icon.svg";
import SettingIcon from "../../assets/settings-icon.svg";
import ProfileIcon from "../../assets/profile-icon.svg";

const ProfileNavLinks = () => {
  return (
    <ul className="flex flex-col w-full h-full items-center justify-center">
      <li className="text-xs flex flex-col justify-center items-center w-14 h-14 mb-6 cursor-pointer">
        <img src={DashboardIcon} alt="" className="w-8 h-8  mb-2" />
        <div>Dashboards</div>
      </li>
      <li className="text-xs flex flex-col justify-center items-center w-14 h-14 mb-6 cursor-pointer">
        <img src={ContactsIcon} alt="" className="w-8 h-8 mb-2" />
        <div>Invoices</div>
      </li>
      <li className="text-xs flex flex-col justify-center items-center w-14 h-14 mb-6 cursor-pointer">
        <img src={PaymentsIcon} alt="" className="w-8 h-8  mb-2" />
        <div className="text-center">Payout Methods </div>
      </li>
      <li className="text-xs flex flex-col justify-center items-center w-14 h-14 mb-6 cursor-pointer">
        <img src={ProfileIcon} alt="" className="w-8 h-8  mb-2" />
        <div>Profile</div>
      </li>
      <li className="text-xs flex flex-col justify-center items-center w-14 h-14 mb-6 cursor-pointer">
        <img src={SettingIcon} alt="" className="w-8 h-8  mb-2" />
        <div>Settings</div>
      </li>
    </ul>
  );
};

export default ProfileNavLinks;
