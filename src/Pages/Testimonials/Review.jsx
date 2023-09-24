import React from "react";
import HeaderPage from "../header/HeaderPage";
import Testimonials from "../../components/testimonials/Testimonials";
const Review = () => {
  return (
    <>
      <HeaderPage />
      <section className="absolute  mx-10 top-[180px] z-10 ">
        <h1 className="text-[42px] ">Testimonials</h1>
        <p>
          <a href="/">
            <span className="hover:text-orange-500 ease-in-out transition duration-500 cursor-pointer">
              Home
            </span>
          </a>
          <span> / </span> Testimonials
        </p>
      </section>
      <Testimonials />
    </>
  );
};

export default Review;
