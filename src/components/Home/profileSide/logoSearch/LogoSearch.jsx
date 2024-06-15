import React from "react";
import "./logoSearch.css";
import logo from "./../../../../assets/logo.png";
import { FaSearch } from "react-icons/fa";

export const LogoSearch = () => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex search rounded-xl p-2 items-center gap-1">
        <input type="text" placeholder="#Explore" className=" bg-transparent outline-none"/>
        <div className=" flex items-center justify-center icon rounded text-white p-1 cursor-pointer">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};
