import React, { useState } from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";

import Data from "./data";
import PersonalInformation from "./PersonalInformation";
const CompleteReservation = ({
  selectedPickUp,
  selectedCar,
  selectedDropOff,
  selectedDate,
  selectedPickOffDate,
}) => {
  const [isCar, setIsCar] = useState(Data);

  const filteredCars = isCar.filter(car => car.carName === selectedCar);
  return (
    <div>
      <section className="p-5 w-auto h-auto bg-[#ffeae6] mx-1  ">
        <div className="flex gap-5 mb-5">
          <PiWarningCircleFill className="fill-[#ff4d30] text-3xl" />
          <p className="text-[#ff4d30] text-[19px] font-bold">
            Upon completing this reservation enquiry, you will receive:
          </p>
        </div>
        <p className="text-[17px] text-[#777777] font-[Poppins]">
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </section>
      <section className="flex justify-between border-b-2 ">
        <section className="pl-7 pt-3 font-[Poppins]">
          <h1 className="text-[20px] text-[#ff4d30]"> Location & Date</h1>
          <p className="flex text-[18px] items-center gap-2 pt-2 font-bold">
            <HiLocationMarker className="text-[25px]" /> Pick-Up Date & Time:
          </p>
          <p className="pl-10 text-[20px] text-[#777777]">- {selectedDate}</p>

          <p className="flex text-[18px] items-center gap-2 pt-2 mt-10 font-bold">
            <HiLocationMarker className="text-[25px] " /> Pick-Up Date & Time:
          </p>
          <p className="pl-10 text-[20px] text-[#777777]">
            -{selectedPickOffDate}
          </p>

          <p className="flex text-[18px] items-center gap-2 pt-2 mt-10 font-bold">
            <HiLocationMarker className="text-[25px]" /> Pick-Up Location:
          </p>
          <p className="pl-10 text-[20px] text-[#777777]">- {selectedPickUp}</p>

          <p className="flex text-[18px] items-center gap-2 pt-2 mt-10 font-bold">
            <HiLocationMarker className="text-[25px]" /> Drop-Off Location:
          </p>
          <p className="pl-10 pb-20 text-[20px] text-[#777777] ">
            - {selectedDropOff}
          </p>
        </section>
        <section className="mt-4">
          <section className="flex gap-3 font-[Poppins] font-bold ">
            <h1 className="text-[18px]  text-black">Car -</h1>
            <p className=" text-[18px] text-[#ff4d30]  font-bold mr-32">
              {selectedCar}
            </p>
          </section>
          {filteredCars.map((item, index) => {
            return (
              <img
                key={index}
                src={item.src}
                alt={item.name}
                className="w-[400px] mt-20 mr-10"
              />
            );
          })}
        </section>
      </section>
      <PersonalInformation />
    </div>
  );
};

export default CompleteReservation;
