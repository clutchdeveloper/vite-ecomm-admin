import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

function Header({ toggler }) {
  return (
    <div className="min-h-[48px] sticky bg-white top-0 z-30 w-full shadow-md px-8 flex justify-between items-center">
      <div onClick={toggler} className="cursor-pointer md:hidden">
        <HiMenuAlt3 className="text-lg"/>
      </div>
      <div className="flex space-x-4">
        <div>##</div>
        <div className="text-xs">
          <h4 className="font-semibold">Henry Chidi</h4>
          <h5>henrizona.apex94@gmail.com</h5>
        </div>
      </div>
    </div>
  );
}

export default Header;
