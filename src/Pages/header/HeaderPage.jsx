import React from "react";
import "./styling.css";
import Header from "../../components/header/Header";
const HeaderPage = () => {
  return (
    <>
      <section className="top z-10 max-md:w-full max-md:z-[1]  max-md:bg-white">
        <Header />
        <section className="overlay  "> </section>
      </section>
    </>
  );
};

export default HeaderPage;
