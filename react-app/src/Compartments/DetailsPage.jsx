import React from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import star from "../images/star.png";
import calender from "../images/calender.png";
import dotdot from "../images/dotdot.png";
import rectangle from "../images/rectangle.png";
import antiRect from "../images/antiRect.png";

import "../App.css";
import { MyContext } from "../assets/MyContext";
import { useContext } from "react";
const DetailsPage = () => {
  const { info, setInfo} = useContext(MyContext);
  // console.log("allData -> ", allData);
  return (
    <div className="bg-[#FAFBFC]">
      
      <div className="flex justify-around">
        {/* left  */}
        <div className="w-[515px] h-[960px] p-2 ml-[100px] flex flex-col justify-around">
          {/* rectangle 1  */}
          <div className="">
            <h1 className="w-[303px] h-[53px] font-poppins text-[35px] font-bold leading-normal">
              {info.name}
            </h1>
            <p className="w-[515px] h-[128px] text-[20px] font-[400] leading-[32px]">
             {info?.intro}
            </p>
            <div className="flex gap-[5px] items-center">
              <img src={star} className="w-[24px] h-[24px]"></img>
              <div className="w-[80px] h-[30px] flex font-normal gap-[2px]">
                <span className="text-[rgb(0,118,206)] text-[20px] font-[700] leading-normal">
                  {info.rating}
                </span>
                <h3 className="text-[20px] font-[400] leading-normal">
                  ({info.reviewCount})
                </h3>
              </div>
            </div>
          </div>

          {/* rectangle 2  */}
          <div className="w-[515px] h-[216px] bg-[#fff] rounded-[20px] box2 flex flex-col justify-around p-5">
            <div className="flex justify-normal">
              <h3 className="w-[300px] h-[32px] font-[400] text-[20px] leading-[32px]">
                {info.taskComplexity}
              </h3>
              <h1 className="w-[187px] h-[36px] font-[700] text-[24px] text-right">
                {info.price}
              </h1>
            </div>
            <div className="flex justify-normal items-center gap-[4px]">
              <img src={calender} className="w-[24px] h-[24px]"></img>
              <h3 className="w-[422px] h-[32px] font-[400] text-[20px] leading-[32px]">
                {info.deliveryTime}
              </h3>
            </div>

            <div className="flex justify-around">
              <div className="w-[220px] h-[46px] rounded-[10px] border-2 border-[#0076CE] flex justify-center items-center">
                <h1 className="text-[16px] font-[700]">Request Proposal</h1>
              </div>
              <div className="bg-[#0076CE] w-[220px] h-[46px] rounded-[10px] flex justify-center items-center">
                <h1 className="text-[16px] font-[700] text-[#ffffff]">
                  Chat with me
                </h1>
              </div>
            </div>
          </div>

          {/* rectangle 3  */}
          <div className="w-[515px] h-[412px] bg-[#fff] rounded-[20px] box2 flex flex-col justify-around p-5">
            <h1 className="w-[515px] h-[53px] font-[700] text-[35px] leading-normal">
              What people say?
            </h1>
            <p className="w-[463px] h-[224px] font-[400] text-[20px] leading-[32px]">
              {info?.testimonial?.text}
            </p>
            <img src={dotdot} className="w-[86px] h-[10px] ml-[185px]"></img>
          </div>
        </div>
        {/* Right */}
        <div className="w-[733px] h-[1060px] flex flex-col gap-3">
          <img src={rectangle} className="w-[733px] h-[412px]"></img>
          <h1 className="w-[733px] h-[53px] font-[700] text-[35px] leading-normal">
            About {info?.name}
          </h1>
          <div className="w-[733px] h-[70px] flex justify-around">
            <div className="w-[186px] h-[70px] flex flex-col">
              <h3 className="w-[186px] h-[34px] font-[700] text-[16px] leading-[34px] text-[#999]">
                FROM
              </h3>
              <h1 className="w-[186px] h-[34px] font-[400] text-[20px] leading-[34px]">
                {info?.about?.from}
              </h1>
            </div>
            <div className="w-[186px] h-[70px] flex flex-col">
              <h3 className="w-[186px] h-[34px] font-[700] text-[16px] leading-[34px] text-[#999]">
                PARTNER SINCE
              </h3>
              <h1 className="w-[186px] h-[34px] font-[400] text-[20px] leading-[34px]">
                {info?.about?.partnerSince}
              </h1>
            </div>
            <div className="w-[296px] h-[70px] flex flex-col">
              <h3 className="w-[296] h-[34px] font-[700] text-[16px] leading-[34px] text-[#999]">
                AVERAGE RESPONSE TIME
              </h3>
              <h1 className="w-[296] h-[34px] font-[400] text-[20px] leading-[34px]">
                {info?.about?.averageResponseTime}
              </h1>
            </div>
          </div>

          <div className="w-[733px] h-[140px] flex flex-col justify-around">
            <h1 className=" w-[733px] h-[34px] font-[700] text-[16px] leading-[34px] text-[#999]">
              ABOUT
            </h1>
            <p className="w-[733px] h-[102px] font-[400] text-[20px] leading-[34px] flex-wrap">
              {info?.about?.description}
            </p>
          </div>

          <div className="w-[733px] h-[34px] flex justify-between">
            <h1 className="font-[700] text-[16px] leading-[34px] text-[#999]">
              SERVICES I OFFER
            </h1>
            <h1 className="w-[296px] h-[34px] font-[700] text-[16px] leading-[34px] text-[#999] text-left">
              WHY ME?
            </h1>
          </div>
          <div>
            <div className="w-[733px] flex justify-between">
              <div className="w-[405px] h-[324px] font-[400] text-[20px] leading-[34px]">
                <ul className="list-disc">
                  {info?.about?.services.map((service) => {
                    return <li>{service}</li>;
                  })}
                </ul>
              </div>
              <div className="w-[405px] h-[324px] font-[400] text-[20px] leading-[34px] text-left ">
                <ul className="w-[296px] h-[102px]  ml-[100px] list-disc">
                  {info?.about?.benefits.map((benefit) => {
                    return <li>{benefit}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom cards */}

      <div className="w-[1240px] h-[540px] flex flex-col justify-between mx-auto box-2">
        <div className="w-[733px] h-[53px]">
          <h1 className="font-[700] text-[35px] leading-normal">
            Recommended for you
          </h1>
        </div>

        <div className="w-[1240px] h-[477px] flex justify-between">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default DetailsPage;
