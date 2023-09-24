import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-[#2d2d2d] relative z-10 w-auto h-[250px] mb-20 flex flex-col items-center justify-center max-md:w-full max-md:pl-5 max-md:h-auto max-md:text-center  max-md:p-10">
        <h1 className="text-white text-[52px] mb-2 max-md:text-[30px] ">
          Save big with our cheap car rental!
        </h1>
        <p className="text-white text-[24px]">
          Top Airports. Local Suppliers.{" "}
          <span className="text-orange-500">24/7 </span>Support.
        </p>
      </section>
    </>
  );
};

export default Banner;
