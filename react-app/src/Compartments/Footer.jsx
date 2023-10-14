import React from "react";
import logoWhite from "../images/logoWhite.png";
import fb from "../images/fb.png";
import wtsp from "../images/wtsp.png";
import insta from "../images/insta.png";

const Footer = () => {
  return (
    <div className="h-[341px] w-[1536px]  footer flex flex-col justify-end mt-[120px]">
      <div className="w-[1240px] h-[200px]  m-auto mt-[20px] flex justify-between text-[#fff]">
        {/* div 1  */}
        <div className="w-[300px] h-[200px]  flex flex-col gap-[20px]">
          <img className="w-[138px] h-[45px]" src={logoWhite}></img>
          <p className="w-[272px] h-[44px] font-[400] text-[14px] leading-[22px] text-[#fff]">
            India's first platform dedicated to simplifying partner search
          </p>
        </div>

        <div className="w-[200px] h-[200px]  flex flex-col gap-[20px]">
          <h1 className="w-[101px] h-[19px] font-[700] text-[14px] leading-normal ">
            COMPANY
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            About
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Pricing
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Careers
          </h1>
        </div>

        <div className="w-[200px] h-[200px]  flex flex-col gap-[20px]">
          <h1 className="w-[101px] h-[19px] font-[700] text-[14px] leading-normal ">
            SOLUTIONS
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Search
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Connect
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Research
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Academy
          </h1>
        </div>

        <div className="w-[200px] h-[200px]  flex flex-col gap-[20px]">
          <h1 className="w-[101px] h-[19px] font-[700] text-[14px] leading-normal ">
            RESOURCES
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Blogs
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Forms
          </h1>
        </div>

        <div className="w-[200px] h-[200px]  flex flex-col gap-[20px]">
          <h1 className="w-[101px] h-[19px] font-[700] text-[14px] leading-normal ">
            SUPPORT
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Help
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Contact Us
          </h1>
        </div>

        <div className="w-[200px] h-[200px]  flex flex-col gap-[20px]">
          <h1 className="w-[101px] h-[19px] font-[700] text-[14px] leading-normal ">
            LEGAL
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Privacy
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Terms
          </h1>
          <h1 className="w-[101px] h-[19px] font-[400] text-[16px] leading-[22px] ">
            Accessibilty
          </h1>
        </div>

       
        
      </div>

      <hr className="w-[1240px]   m-auto"></hr>

      <div className="w-[1240px] h-[100px] m-auto flex justify-between text-[#fff] translate-y-[25px]">
        <div className="w-[681px] h-[22px]">
          <p className="font-[400] text-[14px] leading-[22px] font-sans">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </p>
        </div>
       

        <div className=" w-[150px] flex justify-between">
          
          <a href=""><img src={fb}></img></a>
          <a href=""><img src={insta}></img></a>
          <a href="">in</a>
          <a href=""><img src={wtsp}></img></a>

          </div>



      </div>

       {/* Black footer  */}
      <div className="w-[1536px] h-[57px]  bg-[#000000] flex justify-center items-center">
        <p className="font-[400] text-[14px] leading-[22px] font-sans text-[#fff] text-center">Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
