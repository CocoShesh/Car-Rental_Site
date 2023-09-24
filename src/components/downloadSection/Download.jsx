import React from "react";
import "./style.css";
function Download() {
  return (
    <>
      <section className="download-section bg-[#f8f8f8] w-auto  mb-20 max-md:w-full max-md:bg-none">
        <section className="w-[550px] mx-20  max-md:w-auto max-md:mx-5 max-md:text-center">
          <h1 className="text-[42px] text-black mb-5">
            Download our app to get most out of it
          </h1>
          <p className=" content text-[#706f7b] text-[16px] font-serif">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex mt-10 gap-10 max-md:flex-col  ">
            {" "}
            <img src="/public/images/appstore.svg" alt=" " />
            <img src="/public/images/googleapp.svg" alt=" " />{" "}
          </div>
        </section>
      </section>
    </>
  );
}

export default Download;
