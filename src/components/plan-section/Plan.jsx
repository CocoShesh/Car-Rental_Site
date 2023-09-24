import React from "react";
import picker from "./data";
const Pick = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-32 ">
        <section className="text-center ">
          <h2 className="text-[24px]  text-black mb-5"> Plan your trip now</h2>
          <h1 className="text-5xl text-black "> Quick & easy car rental</h1>
        </section>

        <section className="flex w-auto mx-20 text-center gap-20 mt-24 mb-44 max-md:flex-col">
          {picker.map(items => {
            return (
              <section
                key={items.id}
                className="flex flex-col items-center justify-center"
              >
                <img src={items.src} alt={items.name} />
                <h1>{items.name}</h1>
                <p className="w-[300px] mt-5 text-[#706f7b] font-normal text-[16px] font-serif">
                  {" "}
                  {items.content}
                </p>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Pick;
