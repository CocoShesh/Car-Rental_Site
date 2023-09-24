import React, { useState } from "react";
import { Collapse } from "antd";
import "./Styling/style.css";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: (
      <h1 className="font-bold pl-5">
        1. What is special about comparing rental car deals?
      </h1>
    ),
    content: (
      <p className="text-[#706f7b] px-5 text-justify">
        Comparing rental car deals is important as it helps find the best deal
        that fits your budget and requirements, ensuring you get the most value
        for your money. By comparing various options, you can find deals that
        offer lower prices, additional services, or better car models. You can
        find car rental deals by researching online and comparing prices from
        different rental companies.
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <h1 className="font-bold pl-5">2. How do I find the car rental deals?</h1>
    ),
    content: (
      <p className="text-[#706f7b] px-5 text-justify">
        Comparing rental car deals is important as it helps find the best deal
        that fits your budget and requirements, ensuring you get the most value
        for your money. By comparing various options, you can find deals that
        offer lower prices, additional services, or better car models. You can
        find car rental deals by researching online and comparing prices from
        different rental companies.You can find car rental deals by researching
        online and comparing prices from different rental companies. Websites
        such as Expedia, Kayak, and Travelocity allow you to compare prices and
        view available rental options. It is also recommended to sign up for
        email newsletters and follow rental car companies on social media to be
        informed of any special deals or promotions.
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <h1 className="font-bold pl-5">
        3. How do I find such low rental car prices?
      </h1>
    ),
    content: (
      <p className="text-[#706f7b] px-5 text-justify">
        Book in advance: Booking your rental car ahead of time can often result
        in lower prices. Compare prices from multiple companies: Use websites
        like Kayak, Expedia, or Travelocity to compare prices from multiple
        rental car companies. Look for discount codes and coupons: Search for
        discount codes and coupons that you can use to lower the rental price.
        Renting from an off-airport location can sometimes result in lower
        prices.
      </p>
    ),
  },
];

function FaqSection() {
  const [clickedPanel, setClickedPanel] = useState(null);

  const handlePanelClick = key => {
    setClickedPanel(key === clickedPanel ? null : key);
  };

  return (
    <>
      <section className="faq-section  flex flex-col items-center justify-center mb-20 ">
        <section className="flex flex-col items-center justify-center text-black max-md:w-full max-md:text-center">
          <h2 className="text-[22px] font-bold"> FAQ </h2>
          <h1 className="text-[42px]">Frequently Asked Questions</h1>
          <p className="w-[700px] text-center text-[#706f7b] mt-4 max-md:w-auto ">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </section>
        <Collapse
          accordion
          expandIconPosition="end"
          className="w-[900px] text-lg  bg-white border-none shadow-2xl  mt-20  max-md:w-auto max-md:mx-auto"
        >
          {items.map(item => (
            <Panel
              key={item.key}
              header={item.label}
              style={{
                border: "none",

                boxShadow: "0 10px 15px 0 rgba(0,0,0,.1)",
                paddingTop: "10px",
                backgroundColor:
                  clickedPanel === item.key ? "#ff4d30" : "inherit",
              }}
              onClick={() => handlePanelClick(item.key)}
            >
              {item.content}
            </Panel>
          ))}
        </Collapse>
      </section>
    </>
  );
}

export default FaqSection;
