import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <ul className="flex gap-6 text-[#F5DF4D] text-base">
      <Link to="/">Pricing</Link>
      <Link to="/">Who's it for?</Link>
      <Link to="/">Features</Link>
      <Link to="/">Blog</Link>
      <Link to="/">
        <i class="fa-brands fa-instagram"></i>
      </Link>
      <Link to="/">
        <i class="fa-brands fa-facebook"></i>
      </Link>
    </ul>
  );
};

export default HeaderNav;
