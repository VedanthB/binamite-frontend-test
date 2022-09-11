import React from "react";

const NavListItem = ({ icon, name }) => {
  return (
    <li className="text-xs flex flex-col justify-center items-center w-14 h-14 mb-6 cursor-pointer">
      <img src={icon} alt="" className="w-8 h-8  mb-2" />
      <div className="text-center">{name}</div>
    </li>
  );
};

export default NavListItem;
