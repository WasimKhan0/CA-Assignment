import React, { useState } from "react";
import "../App.css";
import img1 from "../images/heroImg1.png";
import img2 from "../images/heroImg2.png";
import img3 from "../images/heroImg3.png";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../assets/MyContext";
import Display from "./Display";
import Footer from "./Footer";
import Join from "./Join";
const Hero = () => {
  const { info, setInfo } = useContext(MyContext);
  const [name, setName] = useState("");
  const Navigate = useNavigate();

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/send", { name });
      if (!res?.data?.foundObject) {
        alert("user not found!");
        setName("");
      } else {
        setInfo(res?.data?.foundObject);
        Navigate("/details");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="relative flex gap-[20px] ">
      <div className="-z-20 absolute inset-0 w-full flex-shrink-0 custom-blur custom-gradient" />
        {/* left Hero */}
        <div className="flex flex-col ml-[120px] mt-[100px] gap-[20px]">
          {/* big text */}
          <div className="w-[670px] h-[160px] flex ">
            <h1 className="font-poppins text-[65px] font-[700] leading-tight">
              Find <span className="partners">Partners</span> (CAs) available
              online
            </h1>
          </div>
          {/* small text */}
          <div className="w-[640px] h-[55px] flex flex-wrap">
            <h1 className="font-poppins text-[20px] font-[700] leading-[30px] text-[#616161]">
              CONNECT with us where your services are listed and visible to a
              myriad of bussiness seeking CAs for complaince support{" "}
            </h1>
          </div>
          {/* input */}
          <div className="flex w-[640px] h-[73px] rounded-[10px] border-2 overflow-hidden">
            <input
              type="text"
              value={name}
              onChange={handleInputChange}
              className="w-[484px] h-[73px] text-[#AEB0B4] text-[18px] font-[700] outline-none border-none border-solid border-[#BFBFBF] border-r-0  pl-[20px]"
              placeholder="search by name"
            ></input>
            <button
              onClick={handleClick}
              className="w-[186px] h-[69px] bg-[#0076CE] flex justify-center items-center rounded-[10px]"
            >
              <h1 className="text-[18px] font-[700] text-[#ffffff]">Search</h1>
            </button>
          </div>
        </div>
        {/* images  */}
        <div className="flex gap-[10px]">
          <img src={img1} className="w-[198px] h-[403px] mt-[130px]"></img>
          <img src={img2} className="w-[198px] h-[403px] mt-[50px]"></img>

          <img src={img3} className="w-[198px] h-[403px] mt-[100px]"></img>
        </div>

        <div className="-z-10 absolute -bottom-16 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1536"
            height="210"
            viewBox="0 0 1536 210"
            fill="none"
          >
            <path d="M0 210H1536V80.0669V0L0 192.622V210Z" fill="#FAFBFC" />
          </svg>
        </div>
      </div>

      <Join />
      <Display />

      <Footer />
    </>
  );
};

export default Hero;
