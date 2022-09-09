import React from "react";

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-6">
      <button className="header text-base font-semibold py-3 text-[#1A1A1A] leading-5 px-4 flex justify-center items-center rounded-2xl bg-[#F5DF4D] ">
        {" "}
        Sign Up Free{" "}
      </button>
      <button className="header text-base font-semibold py-3 text-[#1A1A1A] leading-5 px-4 flex justify-center items-center rounded-2xl bg-[#F5DF4D] ">
        Login <i class="fa-solid ml-3 fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default HeaderActions;
