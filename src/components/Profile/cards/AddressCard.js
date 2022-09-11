import React from "react";

const AddressCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-8">
      <div className="flex justify-between items-center">
        <h5 className="font-semibold text-xl"> Address Location </h5>

        <div>Manage</div>
      </div>

      <div className="flex flex-col w-full mt-6 gap-4">
        <ListItem label="Timezone" value="Address" />
        <ListItem label="Address" value="Address" />
      </div>
    </div>
  );
};

export default AddressCard;

const ListItem = ({ label, value }) => {
  return (
    <div className="flex flex-col w-full">
      <p className="uppercase text-[#97999B] font-semibold text-xs mb-1">
        {label}
      </p>
      <p className="">{value}</p>
    </div>
  );
};
