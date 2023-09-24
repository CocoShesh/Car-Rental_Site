import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <>
      <section className="grid grid-cols-4  gap-14 pt-10 mb-20  mx-10 text-black max-md:grid-cols-1 ">
        <section>
          <h1 className="text-[24px] mb-5"> CAR Rental</h1>
          <p className="text-[#706f7b] font-serif mb-10">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div className="flex items-center mb-2 gap-5 ">
            <BiSolidPhoneCall className="text-[24px]" /> (123) -456-789
          </div>
          <div className="flex items-center mb-2 gap-5">
            <AiOutlineMail className="text-[24px]" /> CarRentalInfo@gmail.com{" "}
          </div>

          <p className="font-[Poppins]"> Design by Nard</p>
        </section>
        <section className="ml-10 max-md:ml-0">
          <h1 className="text-[24px] mb-4"> COMPANY</h1>
          <div className="font-[Poppins]">
            <p>New York</p>
            <p>Careers</p>
            <p>Mobile</p>
            <p>Blog</p>
            <p>How we work</p>
          </div>
        </section>
        <section>
          <h1 className="text-[24px] mb-4">WORKING HOURS</h1>
          <div className="font-[Poppins]">
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 19:00PM</p>
            <p>Sun: Closed</p>
          </div>
        </section>
        <section>
          <h1 className="text-[24px] mb-4">SUBSCRIPTION</h1>
          <div className="font-[Poppins]">
            <p>Subscribe your Email address for latest news & updates.</p>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full bg-base-200 h-[50px] my-7 pl-5"
            />
            <button className="w-full h-[50px] bg-[#ff4d30] text-white">
              Submit
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Footer;
