import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cars from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
const list = ["Model", "Mark", "Year", "Doors", "AC", "Transmission", "Fuel"];

function Pick() {
  const [filterCar, setFilterCar] = useState("Audi A1 S-Line");

  const handleCarSelection = carName => {
    setFilterCar(carName);
  };

  const filteredCars = cars.filter(car => {
    if (filterCar === "Audi A1 S-Line") {
      return car.name === "Audi A1 S-Line";
    } else {
      return car.name === filterCar;
    }
  });
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="h-[700px] flex flex-col items-center mb-44 max-md:w-full max-md:h-auto ">
        <section className="mb-20 text-center">
          <h2 className="text-[24px] text-black"> Vehicle Models </h2>
          <h1 className="text-[48px] text-black">Our rental fleet</h1>
          <p className="w-[500px] text-[#706f7b] font-sans font-bold max-md:w-auto">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </section>

        <section
          data-aos="fade-right"
          className="flex gap-20 justify-between  mx-20 max-md:w-auto  max-md:flex-col max-md:items-center max-md:justify-center "
        >
          <section className="flex flex-col  w-[300px] max-md:w-full">
            {cars.map(item => (
              <button
                key={item.id}
                onClick={() => handleCarSelection(item.name)}
                className={`w-[250px] h-[70px] bg-base-200 mb-2 text-left pl-5 hover:bg-orange-500 hover:text-white transition duration-500 ease-in-out max-sm:w-auto ${
                  filterCar === item.name ? "bg-orange-500 text-white" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </section>

          <section
            data-aos="flip-up"
            className="flex-col w-[500px] mt-20 max-md:w-full max-md:mt-10 "
          >
            {filteredCars.map(image => (
              <img key={image.id} src={image.src} alt="" />
            ))}
          </section>

          <section
            data-aos="fade-left"
            data-aos-delay="300"
            className=" w-[270px] h-[400px]  shadow-lg "
          >
            {filteredCars.map(item => (
              <div key={item.id}>
                <div className="h-[50px] bg-[#ff4d30] flex items-center justify-center px-5 text-white">
                  <h1 className="text-[28px]">{item.rent} </h1>{" "}
                  <span className="text-[20px]  font-mono font-bold  ml-3">
                    / rent per day{" "}
                  </span>
                </div>
                <section className="flex  border-x-2 border-b-2  border-slate-300">
                  <div className="flex-col text-center  font-mono font-bold">
                    {list.map((list, index) => {
                      return (
                        <div
                          key={index}
                          className="border-r-2  border-b-2 p-3  border-slate-300"
                        >
                          {list}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex-col text-center w-full font-mono font-bold text-stone-900">
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.model}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.mark}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      {" "}
                      <p>{item.year}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.Doors}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.ac}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.transmision}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.fuel}</p>
                    </div>
                  </div>
                </section>
                <button className="w-full h-[50px] bg-orange-500 uppercase text-white shadow-xl cursor-pointer hover:opacity-95">
                  Reserve Now
                </button>
              </div>
            ))}
          </section>
        </section>
      </section>
    </>
  );
}

export default Pick;
