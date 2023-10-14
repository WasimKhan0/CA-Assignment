import React from 'react'
import star from "../images/star.png";
import "../App.css"
import antiRect from "../images/antiRect.png";
const Card = () => {
  return (
    <div className="w-[405px] h-[477px] flex flex-col justify-between rounded-[20px] bg-[#fff] box2">
    <img className="w-[405px] h-[244px]" src={antiRect}></img>

    <div className="w-[405px] h-[233px] bg-[#fff] rounded-[20px] flex flex-col justify-between p-4">
      <div className="flex justify-normal w-[300px] h-[30px]">
        <h3 className="w-[300px] h-[30px] font-[700] text-[20px] leading-normal">
          Michael Jackson
        </h3>
        <h1 className="w-[69px] h-[30px] font-[700] text-[24px] text-right">
          ₹4,370
        </h1>
      </div>

      <div className="w-[365px] h-[48px]">
        <p className="font-[400] text-[20px] leading-tight">
          I will do business evaluation and corporate services
        </p>
      </div>

      <div className="flex gap-[5px] items-center">
        <img src={star} className="w-[24px] h-[24px]"></img>
        <div className="w-[80px] h-[30px] flex font-normal gap-[2px]">
          <span className="text-[#0076CE] text-[20px] font-[700] leading-normal">
            4.9
          </span>
          <h3 className="text-[20px] font-[400] leading-normal">
            (89)
          </h3>
        </div>
      </div>
      <div className="bg-[#0076CE] w-[365px] h-[46px] rounded-[10px] flex justify-center items-center">
        <h1 className="text-[16px] font-[700] text-[#ffffff] leading-[26px]">
          View Services
        </h1>
      </div>
    </div>
  </div>
  )
}

export default Card