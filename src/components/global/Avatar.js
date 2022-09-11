import React from "react";

const Avatar = ({ src, alt }) => {
  return <img src={src} alt={alt} className="border rounded-full w-36 h-28" />;
};

export default Avatar;
