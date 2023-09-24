import React from "react";
import HeaderPage from "../header/HeaderPage";
import employees from "./data";
const Team = () => {
  return (
    <>
      <HeaderPage />
      <section className="absolute  mx-10 top-[180px] z-10 ">
        <h1 className="text-[42px] ">Our Team</h1>
        <p>
          <a href="/">
            <span className="hover:text-orange-500 ease-in-out transition duration-500 cursor-pointer">
              Home
            </span>
          </a>
          <span> / </span> Our Team
        </p>
      </section>
      <section className="grid grid-cols-3  px-20 gap-10 bg-white pt-32 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center max-sm:px-auto max-md:grid-cols-2 max-md:w-auto max-md:px-3">
        {employees.map(employee => {
          return (
            <section
              key={employee.id}
              className=" shadow-lg w-[350px] rounded-t-lg"
            >
              <div className="bg-[#f6f6f6]">
                <img
                  src={employee.src}
                  alt={employee.Name}
                  className="w-[350px]  rounded-full"
                />
              </div>
              <div className="text-center pt-5 py-10 text-black bg-white rounded-b-xl ">
                <h1 className="text-[25px]"> {employee.Name}</h1>
                <p className="text-[16px] text-[#777777] font-[Poppins]">
                  {" "}
                  {employee.Position}
                </p>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default Team;
