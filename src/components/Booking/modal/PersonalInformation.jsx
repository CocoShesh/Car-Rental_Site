import React from "react";

const PersonalInformation = () => {
  const message = [
    <span className="text-[10px] text-black">This field is required </span>,
  ];
  return (
    <>
      <section className="px-5">
        <h1 className="text-[#ff4d30] font-extrabold text-[18px] uppercase mt-2">
          Personal Information
        </h1>
        <section>
          <section className="grid grid-cols-2 mt-5 text-[#777777] text-[16px] font-bold gap-5">
            <section>
              <label htmlFor="Fname" className="">
                First Name *
              </label>{" "}
              <br />
              <input
                type="text"
                name=""
                id="Fname"
                placeholder="Enter your first name"
                className="w-full h-[50px] bg-[#dbdbdb] pl-5"
              />
              <br />
              {message}
            </section>
            <section>
              <label htmlFor="Lname">Last Name *</label> <br />
              <input
                type="text"
                name=""
                id="Lname"
                placeholder="Enter your last name"
                className="w-full h-[50px] bg-[#dbdbdb] pl-5"
              />
              <br />
              {message}
            </section>
          </section>
          <section className="grid grid-cols-2 mt-5 text-[#777777] text-[16px] font-bold gap-5">
            <section>
              <label htmlFor="Phone#">Phone Number *</label> <br />
              <input
                type="text"
                name=""
                id="Phone#"
                placeholder="Enter your phone number"
                className="w-full h-[50px] bg-[#dbdbdb] pl-5"
              />{" "}
              <br />
              {message}
            </section>
            <section>
              <label htmlFor="Age">Age *</label> <br />
              <input
                type="text"
                name=""
                id="Age"
                placeholder="Enter your age"
                className="w-full h-[50px] bg-[#dbdbdb] pl-5"
              />{" "}
              <br />
              {message}
            </section>
          </section>
        </section>
        <section className="mt-5  text-[#777777] text-[16px] font-bold gap-5">
          <label htmlFor="Email"> Email *</label>
          <input
            type="email"
            id="Email"
            placeholder="Enter your email address"
            className="w-full h-[50px] bg-[#dbdbdb] pl-5"
          />{" "}
          <br />
          {message} <br />
          <br />
          <label htmlFor="Address">Address *</label>
          <input
            type="text"
            id="Address"
            placeholder="Enter your address"
            className="w-full h-[50px] bg-[#dbdbdb] pl-5"
          />
          {message}
        </section>
        <section className="grid grid-cols-2 gap-5  text-[#777777] text-[16px] font-bold mt-5">
          <section>
            <label htmlFor="City"> City *</label>
            <input
              type="email"
              id="City  "
              placeholder="Enter your city"
              className="w-full h-[50px] bg-[#dbdbdb] pl-5"
            />{" "}
            <br />
            {message}
          </section>
          <section>
            <label htmlFor="Zip-Code">Zip Code *</label>
            <input
              type="text"
              id="Zip-Code"
              placeholder="Enter your zip code"
              className="w-full h-[50px] bg-[#dbdbdb] pl-5"
            />
            {message}
          </section>
        </section>
        <section className="mt-5 text-[16px] font-sans font-bold text-[#565454]">
          <input type="checkbox" id="check" />{" "}
          <label htmlFor="check">Please send me latest news and updates</label>
        </section>
        <section className=" float-right pt-12 pr-5 mt-5  bg-[#dbdbdb] w-full h-[150px]">
          <section className="float-right">
            <button className="bg-[#fe3516] text-white w-[250px] h-[50px] text-[20px] font-extrabold font-serif items shadow-lg rounded-md">
              Reserve Now
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default PersonalInformation;
