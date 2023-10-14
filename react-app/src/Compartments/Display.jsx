import React from "react";

import hat from "../images/hat.png";
import women from "../images/women.png";
import men from "../images/men.png";

import search from "../images/search.png";
import table from "../images/table.png";
import twotone from "../images/twotone.png";
const Display = () => {
  return (
    <div className="flex w-[1225px] mx-auto overflow-hidden mt-[100px]">
      {/* left  */}
      <div className="flex flex-col w-[670px] h-[520px] p-4">
        <div className="w-[670px] h-[196px] text-[65px] font-[700] leading-tight">
          <span className="partners">All-in-One </span>
          platform that Makes Easier
        </div>

        <div className="w-[604px] h-[114px] text-[24px] font-[400] leading-tight">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </div>

        <div className="w-[604px] h-[210px] flex flex-wrap">
          <div className="flex">
            <img className="w-[65px] h-[65px]" src={search}></img>
            <div className="w-[205px] h-[96px] ">
              <p className="text-[20px] font-[400] leading-tight">
                SEARCH for vital company information
              </p>
            </div>
          </div>

          <div className="flex">
            <img className="w-[65px] h-[65px]" src={twotone}></img>
            <div className="w-[205px] h-[96px] ">
              <p className="text-[20px] font-[400] leading-tight">
                CONNECT with the resources to meet your business needs{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <img className="w-[65px] h-[65px]" src={table}></img>
            <div className="w-[205px] h-[96px] ">
              <p className="text-[20px] font-[400] leading-tight">
                RESEARCH and generate reports that drive growth{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <img className="w-[65px] h-[65px]" src={hat}></img>
            <div className="w-[205px] h-[96px] ">
              <p className="text-[20px] font-[400] leading-tight">
                ACADEMY to give you the skills for success in your career
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right  */}
      <div className="flex flex-col mt-[60px]">
        <div className="flex h-[200px] gap-[5px]">
          <div className="flex flex-col gap-[5px] items-end">
            <div className="w-[290px] h-[38px] bg-[#EFD9F9] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] p-[3px]">
              <h3 className=" h-[22px] text-[14px] font-[400] leading-tight ml-[12px] mt-[8px]">
                Hey, check out loreumipsum services.
              </h3>
            </div>

            <div className="w-[315px] h-[38px] bg-[#EFD9F9] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] p-[3px]">
              <h3 className="w-[2463x] h-[22px] text-[14px] font-[400] leading-tight ml-[12px] mt-[8px]">
                I learned from their videos, got my first job.{" "}
              </h3>
            </div>

            <div className="w-[337px] h-[38px] bg-[#EFD9F9] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] p-[3px]">
              <h3 className="w-[2463x] h-[22px] text-[14px] font-[400] leading-tight ml-[12px] mt-[8px]">
                You won't be disappointed with their services.{" "}
              </h3>
            </div>

            <div className="w-[350px] h-[38px] bg-[#DDF3FF] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] p-[3px]">
              <h3 className="w-[3103x] h-[22px] text-[14px] font-[400] leading-tight ml-[12px] mt-[8px]">
                I got a perfect analysis report from them too.{" "}
              </h3>
            </div>

            <div className="w-[142px] h-[38px] bg-[#DDF3FF] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px] p-[3px]">
              <h3 className="w-[110h3x] h-[22px] text-[14px] font-[400] leading-tight ml-[12px] mt-[8px]">
                Oh, that's great.
              </h3>
            </div>
          </div>

          <div className="relative overflow-hidden w-[280px] h-[339px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="233"
              height="310"
              viewBox="0 0 233 310"
              fill="none"
              className=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M232.117 157.811C232.126 200.963 219.152 243.708 192.605 273.144C166.842 301.71 130.717 312.068 95.5652 309.224C62.7774 306.57 31.421 288.946 10.8974 258.44C-16.5268 217.677 18.3 186.813 18.3 147.657C18.3 108.5 1.04975 106.256 5.92257 58.8804C10.532 14.0654 62.2614 0.834357 95.5652 0.834345C131.585 0.834331 166.851 13.2989 192.556 42.5359C218.78 72.3633 232.108 114.671 232.117 157.811Z"
                fill="#EFD9F9"
              />
            </svg>
            <img
              className="w-[281px] h-[336px] absolute top-0 left-0 object-cover"
              src={men}
            ></img>
          </div>
        </div>
        <div className="">

          <div className="relative overflow-hidden w-[281px] h-[336px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="265"
              height="340"
              viewBox="0 0 265 340"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.603528 173.126C0.593605 220.409 14.8099 267.246 43.8993 299.501C72.1284 330.803 111.713 342.152 150.23 339.035C186.157 336.128 220.516 316.816 243.005 283.39C263.492 252.938 267.946 211.436 261.85 173.126C256.723 140.902 230.46 123.798 213.496 97.9328C191.78 64.8223 184.468 13.2626 150.23 2.93925C112.441 -8.45468 72.1185 14.7763 43.9523 46.8126C15.2173 79.496 0.613449 125.854 0.603528 173.126Z"
                fill="#DDF3FF"
              />
            </svg>
            <img
              className="w-[281px] h-[336px] absolute top-0 left-0 object-cover"
              src={women}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
