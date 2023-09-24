import React from "react";
import choose from "./data";
function ChooseSection() {
  return (
    <>
      <section className="mb-20">
        <section className="flex items-center justify-center max-md:w-full ">
          <img src="/public/images/choose.png" alt="" />
        </section>
        <section className="flex mx-20 justify-between mt-32   max-md:flex-col max-md:mx-5 max-md:text-center">
          <section className="w-[550px] text-black max-md:w-full max-md:h-[550px] ">
            <h2 className="text-[22px]">Why Choose Us</h2>
            <h1 className="text-[42px]  leading-[50px] ">
              Best valued deals you will ever find
            </h1>
            <p className="text-[18px] text-justify text-[#706f7b] font-serif mt-5   ">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <button className="flex mt-10 rounded-lg shadow-xl items-center  justify-center gap-3 w-[200px] h-[60px] bg-[#ff4d30] text-white text-16px max-md:mx-auto">
              Find Details <span className="text-2xl mb-1">&gt; </span>
            </button>
          </section>
          <section className="flex w-[500px] flex-col items-center justify-center max-md:w-full max md:mt-20  ">
            {choose.map(item => {
              return (
                <section
                  key={item.id}
                  className="flex gap-4 mb-5 max-sm:object-cover"
                >
                  {" "}
                  <img
                    src={item.src}
                    alt={item.header}
                    className="max-sm:object-contain"
                  />
                  <section>
                    <h1 className="text-[24px] mb-2 text-black">
                      {item.header}
                    </h1>
                    <p className="text-[#706f7b] font-serif"> {item.content}</p>
                  </section>
                </section>
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
}

export default ChooseSection;
