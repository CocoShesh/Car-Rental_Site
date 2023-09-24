import React from "react";
import profile from "./data.jsx";
const Testimonials = () => {
  return (
    <>
      <section className="h-[850px] bg-[#f8f8f8] pt-32 w-full mb-10 max:md:w-full max-md:h-auto">
        <section className="flex flex-col items-center justify-center  text-black ">
          <h2 className="text-[22px]"> Reviewed by People</h2>
          <h1 className="text-[54px] font-[700] max-md:text-center">
            Client's Testimonials
          </h1>
          <p className="w-[680px] text-[#706f7b] font-serif text-center mt-3 max-md:w-auto max-md:mx-5 max-md:text-center ">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </section>
        <section className="flex gap-20    mx-44 mt-20 max-md:w-full max-md:flex-col   max-sm:mx-0 max-md:mx-auto ">
          {profile.map(items => {
            return (
              <section
                key={items.id}
                className="w-[500px] h-[330px] bg-white  shadow-xl  rounded-lg p-8  text-black max-md:w-object-fit max-md:mx-5  max-sm:h-auto max-sm:w-auto"
              >
                <blockquote className="text-[24px] font-sans font-semibold">
                  <q> {items.qoute} </q>{" "}
                </blockquote>
                <section className=" flex gap-5 mt-8 items-center">
                  <img
                    src={items.src}
                    alt={items.name}
                    className="w-[70px] h-[70px] rounded-full"
                  />
                  <section className="flex justify-between w-full ">
                    <section>
                      <p> {items.name}</p>
                      <p className="font-serif f"> {items.status}</p>
                    </section>
                    <section>
                      {" "}
                      <img src={items.image} alt="qoutation" />
                    </section>
                  </section>
                </section>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Testimonials;
