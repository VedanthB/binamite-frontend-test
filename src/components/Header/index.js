import React from "react";
import HeaderActions from "./HeaderActions";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-28 w-full top-0 left-0 fixed px-20 leading-10">
      <HeaderLogo />
      <HeaderNav />
      <HeaderActions />
    </div>
  );
};

export default Header;
