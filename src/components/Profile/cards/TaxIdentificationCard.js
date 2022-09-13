import React from "react";

const TaxIdentificationCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-8">
      <div className="flex justify-start items-center">
        <h5 className="font-semibold text-xl"> Tax Identification (ID) </h5>
      </div>

      <div className="flex flex-col w-full mt-6 gap-4">
        <p className="mb-2"> A Primary account number is required (PAN) </p>
        <ListItem
          label="Legal taxpayer name"
          value="Octaloop Technologies Private Limited."
        />
        <ListItem label="PAN Number" value="12327763772" />

        <button className="max-w-fit bg-[#574AE2] text-white py-2 px-4 text-sm rounded-3xl ">
          Verify Now
        </button>
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
