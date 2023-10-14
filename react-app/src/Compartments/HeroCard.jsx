const HeroCard = () => {
    return (
      <div className="bg-white flex flex-col justify-center items-center w-[24.5rem] h-[16.625rem] rounded-[1.25rem] custom-box-shadow px-8 py-[1.5rem]">
          <h1 className="text-center text-xl font-bold">Commencement Of business</h1>
          <p className="text-center text-[1rem] leading-[1.625rem] mb-4">Invested shareholders must confirm payment and office address</p>
          <div className="rounded-[0.625rem] bg-[#F4F4F4] w-full px-[0.6rem] py-2">
              <span className="text-[#0076CE] text-[1.125rem] font-bold leading-[1.75rem] mr-4">Due date</span>
              <span className="text-[#FF6666] text-[1.125rem] font-bold leading-[1.75rem]">Penalty fees</span>
              <div className="flex ">
                  <p className="w-[7.1875rem] text-[1rem] leading-[1.625rem] mt-[0.25rem]">Within 180 days</p>
                  <div className="mt-[0.25rem]">
                      <p className="text-[1rem]  leading-[1.75rem]"><span className="font-bold underline">₹50,000</span> for the company</p>
                      <p className="text-[1rem]  leading-[1.75rem]"><span className="font-bold underline">₹1,000</span> /day for directors</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default HeroCard