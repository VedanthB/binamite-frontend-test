import React from "react";
import AddressCard from "./cards/AddressCard";
import GstDetailsCard from "./cards/GstDetailsCard";
import ProfileDetailsCard from "./cards/ProfileDetailsCard";
import TaxIdentificationCard from "./cards/TaxIdentificationCard";

const ProfileLayout = () => {
  return (
    <div className="h-full relative left-24  min-h-screen w-[calc(100%_-_6rem)] bg-[#DBDBDB] p-8">
      <h4 className="text-2xl font-semibold mb-5">Contractor Profile</h4>

      <div className="grid grid-cols-2 gap-6 overflow-x-scroll">
        <div className="flex flex-col h-full min-h-screen w-full gap-5">
          <ProfileDetailsCard />
          <AddressCard />
        </div>
        <div className="flex flex-col h-full min-h-screen w-full gap-6">
          <TaxIdentificationCard />
          <GstDetailsCard />
          <GstDetailsCard />
          <GstDetailsCard />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
