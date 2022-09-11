import React from "react";

const Drawer = ({ open, setOpen, children }) => {
  return (
    <div
      className={`right-0 bg-white bottom-0 h-full  fixed transition-all duration-200 ease-in shadow-md  ${
        open ? "w-80" : "w-0"
      } `}
    >
      {children}
    </div>
  );
};
export default Drawer;
