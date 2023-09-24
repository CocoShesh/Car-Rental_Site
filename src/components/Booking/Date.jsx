import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { DatePicker, Space } from "antd";
import { Button, Modal } from "antd";

import CompleteReservation from "./modal/CompleteReservation";
import dayjs from "dayjs";

const Date = ({ selectedPickUp, selectedCar, selectedDropOff }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPickOffDate, setSelectedPickOffDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="flex justify-between max-md:w-full max-md:flex-col max-md:items-center ">
        <section>
          <div className="flex items-center gap-3 max-md:mx-5">
            <AiOutlineCalendar /> Pick-up Date
            <span className="text-orange-500"> *</span>
          </div>

          <Space direction="vertical ">
            <DatePicker
              className="w-[380px] h-[50px]  bg-base-200 mt-3 font-bold text-black max-md:mb-5"
              value={selectedDate ? dayjs(selectedDate) : null} // Parse selectedDate using dayjs
              onChange={(_, dateString) => setSelectedDate(dateString)}
            />
          </Space>
        </section>
        <section>
          <div className="flex items-center gap-3 max-md:mx-5 ">
            <AiOutlineCalendar /> Drop off Date
            <span className="text-orange-500"> *</span>
          </div>
          <Space direction="vertical">
            <DatePicker
              className="w-[380px] mt-3 h-[50px] bg-base-200 mt-4s font-bold text-black"
              value={selectedPickOffDate ? dayjs(selectedPickOffDate) : null} // Parse selectedDate using dayjs
              onChange={(_, dateString) => setSelectedPickOffDate(dateString)}
            />
          </Space>
        </section>
        <section className="flex items-center">
          <button
            onClick={showModal}
            className="mt-8 w-[380px] h-[50px] bg-orange-500 text-white  font-bold text-[20px] rounded-md shadow-lg"
          >
            Search
          </button>
        </section>
      </section>
      <Modal
        title={<div className="header">Complete Reservation</div>}
        visible={isModalOpen}
        width={800}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{
          height: "400px",
          padding: 0,
          overflow: "scroll",
        }}
      >
        <CompleteReservation
          selectedPickUp={selectedPickUp}
          selectedCar={selectedCar}
          selectedDropOff={selectedDropOff}
          selectedDate={selectedDate}
          selectedPickOffDate={selectedPickOffDate}
        />
      </Modal>
    </>
  );
};

export default Date;
