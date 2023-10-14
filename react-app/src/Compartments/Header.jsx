import React from "react";
import Logo from "../images/logo.png";
import downArrow from "../images/downArrow.png";
import Display from "./Display";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
    <div className="w-[1536px] h-[84px] bg-white-500 flex justify-around  items-center">
      
      {/* left */}
      <div className="flex gap-[30px] ml-[-80px]">
        <img className="w-[138px] h-[45px]" src={Logo}></img>
        <div className="flex mt-2">
          <h1 className="text-[18px] font-[700] font-sans">Solutions</h1>
          <img className="w-[24px] h-[24px] mt-0.5" src={downArrow}></img>
        </div>
        <div className="flex mt-2">
          <h1 className="text-[18px] font-[700]">Features</h1>
          <img className="w-[24px] h-[24px] mt-0.5" src={downArrow}></img>
        </div>
        <div className="flex mt-2">
          <h1 className="text-[18px] font-[700]">Blogs</h1>
          <img className="w-[24px] h-[24px] mt-0.5" src={downArrow}></img>
        </div>
        <div className="flex mt-2">
          <h1 className="text-[18px] font-[700]">About</h1>
          <img className="w-[24px] h-[24px] mt-0.5" src={downArrow}></img>
        </div>
      </div>
      {/* Right Part */}
      <div className="flex gap-3 ">
        <div className="w-[100px] h-[46px] rounded-[10px] border-2 border-[#0076CE] flex justify-center items-center">
          <h1 className="text-[18px] font-[700]">Login</h1>
        </div>
        <div className="bg-[#0076CE] w-[100px] h-[46px] rounded-[10px] flex justify-center items-center">
          <h1 className="text-[18px] font-[700] text-[#ffffff]">Register</h1>
        </div>
      </div>
      
    </div>
  
    </>
  );
};

export default Header;
