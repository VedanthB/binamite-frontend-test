import React from "react";
import DashboardIcon from "../../assets/dashboard-icon.svg";
import ContactsIcon from "../../assets/contacts-icon.svg";
import PaymentsIcon from "../../assets/payments-icon.svg";
import SettingIcon from "../../assets/settings-icon.svg";
import ProfileIcon from "../../assets/profile-icon.svg";
import NavListItem from "./NavListItem";

const ProfileNavLinks = () => {
  return (
    <ul className="flex flex-col w-full h-full items-center justify-center">
      <NavListItem icon={DashboardIcon} name={"Dashboards"} />
      <NavListItem icon={ContactsIcon} name={"Invoices"} />
      <NavListItem icon={PaymentsIcon} name={"Payout Methods "} />
      <NavListItem icon={ProfileIcon} name={"Profile"} />
      <NavListItem icon={SettingIcon} name={"Settings"} />
    </ul>
  );
};

export default ProfileNavLinks;
