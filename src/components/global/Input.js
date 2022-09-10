import React from "react";

const Input = ({ label, onChange, value, placeholder, errorMessage }) => {
  return (
    <div className="flex flex-col">
      <label className="font-normal capitalize text-sm mb-4" htmlFor={label}>
        {label}
      </label>
      <input
        className={`w-full  bg-[#F5F5F5] px-5 py-4 mb-2 rounded-md ${
          errorMessage ? "border border-red-500" : ""
        } `}
        name={label}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <div className="text-red-500 font-normal text-sm "> {errorMessage} </div>
    </div>
  );
};

export default Input;
