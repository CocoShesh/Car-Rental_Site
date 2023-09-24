import React from "react";
import Header from "./header/Header";
import Hero from "./hero-container/hero";
import BookingCar from "./Booking/BookingCar";
import Plan from "./plan-section/Plan";
import Pick from "./pick-section/Pick";
import Banner from "./banner/Banner";
import ChooseSection from "./Choose-section/ChooseSection";
import Testimonials from "./testimonials/Testimonials";
import FaqSection from "./FAQ/FaqSection";
import Download from "./downloadSection/Download";

function MainContainer() {
  return (
    <>
      <Header />
      <Hero />
      <BookingCar />
      <Plan />
      <Pick />
      <Banner />
      <ChooseSection />
      <Testimonials />
      <FaqSection />
      <Download />
    </>
  );
}

export default MainContainer;
