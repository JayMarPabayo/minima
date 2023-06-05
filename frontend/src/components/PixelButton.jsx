import React from "react";

const PixelButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-zinc-900  text-zinc-900 px-3 relative"
    >
      <span className="h-[0.25rem] w-[0.25rem] bg-white absolute -top-[4px] -left-[4px]"></span>
      <span className="h-[0.25rem] w-[0.25rem] bg-white absolute -top-[4px] -right-[4px]"></span>
      <span className="h-[0.25rem] w-[0.25rem] bg-white absolute -bottom-[4px] -left-[4px]"></span>
      <span className="h-[0.25rem] w-[0.25rem] bg-white absolute -bottom-[4px] -right-[4px]"></span>
      {children}
    </button>
  );
};

export default PixelButton;
