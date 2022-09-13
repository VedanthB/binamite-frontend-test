import React, { useState } from "react";
import Avatar from "../../global/Avatar";
import Drawer from "../drawer/Drawer";

const ProfileDetailsCard = () => {
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  return (
    <div className="w-full bg-white rounded-2xl p-8">
      <div className="flex justify-between items-center">
        <h5 className="font-semibold text-xl"> Profile </h5>

        <button
          className="text-[#574AE2]"
          onClick={() => setIsEditDrawerOpen(true)}
        >
          Manage
        </button>
      </div>

      <div className="flex w-full mt-6">
        <Avatar src="" alt="" />

        <div className="flex w-full ml-6">
          <div className="flex flex-col w-full gap-6">
            <ListItem label="full name" value="Nikhil something" />
            <ListItem label="username" value="some username" />
            <ListItem label="email" value="some@username.com" />
            <ListItem label="phone number" value="+91 82882889022" />

            <div className="w-full">
              <p className="uppercase text-[#97999B]  font-semibold text-xs mb-2">
                Expertise
              </p>
              <div className="w-full flex flex-wrap">
                <Chip text="sometext" />
                <Chip text="sometext" />
                <Chip text="sometext" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer open={isEditDrawerOpen} setOpen={setIsEditDrawerOpen} />
    </div>
  );
};

export default ProfileDetailsCard;

const ListItem = ({ label, value }) => {
  return (
    <div className="flex flex-col w-full">
      <p className="uppercase text-[#97999B] font-semibold text-xs mb-2">
        {label}
      </p>
      <p className="">{value}</p>
    </div>
  );
};

const Chip = ({ text }) => {
  return (
    <div className="py-2 text-sm px-4 m-2 bg-[#F5F5F5] rounded-3xl">{text}</div>
  );
};
