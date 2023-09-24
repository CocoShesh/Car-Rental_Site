import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";

function Hero() {
  return (
    <>
      <section className=" flex items-center justify-center ml-10 mb-20 max-md:flex-col max-md:w-full max-md:h-auto max-md:items-center max-md:text-center max-md:m-0">
        <section>
          <h2 className="font-bold text-2xl"> Plan your trip now</h2>
          <h1 className="font-bold text-6xl w-[500px] mb-7 mt-2 max-md:w-full max-md:text-[55px] ">
            Save <span className="text-orange-500">big </span> with our car
            rental
          </h1>
          <p className="w-[500px] mb-10 text-[#706f7b] text-[16px] font-serif max-md:w-full">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <section className="flex gap-5 max-md:flex-col max-md:items-center max-md: max-md:w-full">
            <button className="w-[200px] h-[70px] rounded bg-[#ff4d30] text-white font-bold items-center justify-center gap-2 flex shadow-xl  ">
              Book Ride <AiOutlineCheckCircle className="mt-1 text-xl" />
            </button>
            <button className="w-[200px] h-[70px]  text-[16px] rounded bg-black text-white font-bold items-center justify-center gap-2 flex shadow-xl hover:bg-white hover:text-black border-2 border-black transition duration-500 ease-in-out cursor-pointer">
              Learn More <FaGreaterThan className="mt-1" />
            </button>
          </section>
        </section>
        <section className="max-md:mt-10 max-md:mr-20">
          <img
            src="	https://car-rental-ten.vercel.app/static/media/main-car.9b30faa59387879fa060.png"
            alt=""
          />
        </section>
      </section>
    </>
  );
}

export default Hero;
