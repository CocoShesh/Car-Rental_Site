import React, { useState } from "react";
import { PiCarProfileBold } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";
import { type, pickUp, dropOf } from "./CarData.jsx";
import Date from "./Date.jsx";

import "/public/font.css";

function BookingCar() {
  const [selectedPickUp, setSelectedPickUp] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedDropOff, setSelectedDropOff] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <section className="container flex flex-col w-full sm:w-auto h-[400px] mx-2 sm:mx-10 bg-[#ffffff] mb-5 shadow-xl rounded-lg p-5 sm:p-10 max-md:w-full max-md:h-auto max-md:mx-auto">
        <h1 className="text-[24px] text-[#000000] font-bold mb-5">
          Book a car
        </h1>
        <section>
          <form onSubmit={handleSubmit}>
            <section className="flex flex-col sm:flex-row justify-between mb-5 sm:mb-10 text-[16px] font-bold">
              <section className="first-container mb-5 sm:mb-0 sm:mr-2 w-full sm:w-auto">
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <PiCarProfileBold className="text-[27px] ml-2" /> Select Your
                  Car Type<span className="text-orange-500">*</span>
                </div>
                <select
                  className="select w-full sm:w-[380px] bg-base-200"
                  name="carType"
                  value={selectedCar}
                  onChange={e => setSelectedCar(e.target.value)}
                >
                  <option value="" defaultValue>
                    Select your car type
                  </option>
                  {type.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </section>

              <section className="second-container mb-5 sm:mb-0 sm:ml-5 w-full">
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <HiLocationMarker className="text-[27px] ml-2" /> Pick-up
                  <span className="text-orange-500">*</span>
                </div>
                <select
                  className="select w-full sm:w-[380px] bg-base-200"
                  name="pickUpLocation"
                  value={selectedPickUp}
                  onChange={event => setSelectedPickUp(event.target.value)}
                >
                  <option value="" defaultValue>
                    Select pick up location
                  </option>
                  {pickUp.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </section>

              <section className="third-container xl:ml-8 w-full">
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <HiLocationMarker className="text-[27px] ml-2" /> Drop-off
                  <span className="text-orange-500">*</span>
                </div>
                <select
                  className="select w-full sm:w-[380px] bg-base-200"
                  name="dropOffLocation"
                  value={selectedDropOff}
                  onChange={e => setSelectedDropOff(e.target.value)}
                >
                  <option value="" defaultValue>
                    Select drop off location
                  </option>
                  {dropOf.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </section>
            </section>
            <Date
              selectedPickUp={selectedPickUp}
              selectedCar={selectedCar}
              selectedDropOff={selectedDropOff}
            />
          </form>
        </section>
      </section>
    </>
  );
}

export default BookingCar;
