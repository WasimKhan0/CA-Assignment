import HeroCard from "./HeroCard";

const Join = () => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-center text-[4.0625rem] font-bold mb-4">
        Want to{" "}
        <span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text">
          Join
        </span>{" "}
        Us?
      </h1>
      <div className="relative">
        <p className="text-center text-[1.5rem] leading-[2.375rem] mb-[5rem]">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
        <div className="flex justify-centere mx-[8rem] gap-8 flex-wrap">
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </div>
        <div className="-z-0 absolute -bottom-20 right-0 custom-blur w-full h-[15rem]" />
        <div className="-z-20 absolute -bottom-12 right-0 w-full h-[47.3rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1536 757"
            fill="none"
          >
            <path
              d="M0.107497 567.266C-13.6344 640.276 0.107497 757 0.107497 757H1536V0C1536 0 1478 47.0138 1451 68C1341.67 152.976 1246.29 92.2517 1105.5 116C957.033 141.043 919.752 257.324 770.187 276.037C632.645 293.245 557.716 199.916 420.345 218.238C255.102 240.279 134.274 284.651 52.3705 418.468C19.8 471.682 11.4329 507.095 0.107497 567.266Z"
              fill="#DDF3FF"
            />
          </svg>
        </div>
      </div>
      <p className="bg-white w-[80rem] mx-auto text-[1rem] leading-[1.625rem] mt-[40px]">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className="font-bold">every day</span> until you file the form .
        There is no maximum penalty amount. So, if you don't file the form for a
        year, you will owe ₹73,000 per form
      </p>
    </div>
  );
};

export default Join;
