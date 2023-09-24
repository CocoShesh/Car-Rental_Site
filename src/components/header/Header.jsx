import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./stle.css";
import { Drawer } from "antd";
const list = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/About",
  },
  {
    id: 3,
    name: "Vehicle Models",
    path: "/Vehicle-Models",
  },
  {
    id: 4,
    name: "Testimonials",
    path: "/Testimonials",
  },
  {
    id: 5,
    name: "Our Team",
    path: "/Our-Team",
  },
  {
    id: 6,
    name: "Contact",
    path: "/Contact",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header>
        <nav className=" mx-10  flex items-center  justify-between max-md:relative md:w-auto max-md:mx-5  ">
          <section className="max-md:flex max-lg:flex max-lg:items-center max-lg:justify-between max-lg:w-full  max-sm:flex max-sm:items-center max-sm:w-full max-sm:justify-between max-md:items-center max-md:justify-between max-md:w-full ">
            <img
              src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png"
              alt=""
              className="w-[150px] h-[100px] object-contain"
            />
            <GiHamburgerMenu
              onClick={showDrawer}
              className="text-[30px]  md:visible xl:hidden"
            />
          </section>

          <section className="max-md:hidden max-sm:hidden max-lg:hidden">
            <ul className="flex   gap-5 lg:mr-20 font-bold max-md:absolute max-md:flex-col max-md:top-[100px] max-md:w-full max-md:left-[65%] max-md:text-white ">
              {list.map(item => (
                <li
                  key={item.id}
                  className=" hover:text-[#ff4d30] transition duration-500 ease-in-out cursor-pointer"
                >
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </section>
          <section className=" max-sm:hidden max-md:hidden max-lg:hidden flex lg:flex  lg:gap-10 gap-10  max-md:flex-col max-md:absolute max-md:w-auto max-md:top-[370%] max-md:right-14 max-md:text-white ">
            <button className="font-bold max-md:bg-white max-md:h-[50px] max-md:text-black max-md:rounded-md">
              Sign In
            </button>
            <button className=" rounded shadow-lg w-[150px] h-[50px] bg-[#ff4d30] text-white font-bold text-lg font-[Poppins, sans serif]">
              Register
            </button>
          </section>
        </nav>
      </header>

      <Drawer placement="left" onClose={onClose} open={open} width={250}>
        <section className="px-10 tracking-wides mt-5">
          <ul>
            {list.map(item => (
              <li
                key={item.id}
                className=" hover:text-[#ff4d30] transition duration-500 ease-in-out cursor-pointer text-white font-seif text-xl  leading-10 font-bold  "
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className=" flex flex-col items-center  mt-[13rem]  ">
          <button className="font-bold w-[150px] h-[50px] bg-white  text-xl mb-5 rounded font-serif shadow-xl ">
            {" "}
            Sign In
          </button>
          <button className=" rounded shadow-xl w-[150px] h-[50px] bg-[#ff4d30] text-white font-bold text-lg font-serif">
            Register
          </button>
        </section>
      </Drawer>
    </>
  );
}

export default Header;
