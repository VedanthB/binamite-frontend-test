import React from "react";

const TaxIdentificationCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-8">
      <div className="flex justify-start items-center">
        <h5 className="font-semibold text-xl"> Tax Identification (ID) </h5>
      </div>

      <div className="flex flex-col w-full mt-6 gap-4">
        <ListItem label="Timezone" value="Address" />
        <ListItem label="Address" value="Address" />
      </div>
    </div>
  );
};

export default TaxIdentificationCard;

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
