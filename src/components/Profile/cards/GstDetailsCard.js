import React from "react";

const GstDetailsCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-8">
      <div className="flex justify-start items-center">
        <h5 className="font-semibold text-xl"> GST IN (ID) </h5>
      </div>

      <div className="flex flex-col w-full mt-6 gap-4">
        <p className="mb-2">
          {" "}
          A GST IN is required to foo bar foo bar bar foo{" "}
        </p>
        <ListItem label="GST IN" value="1233232333434" />
      </div>
    </div>
  );
};

export default GstDetailsCard;

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
