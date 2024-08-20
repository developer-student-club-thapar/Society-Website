import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "/src/assets/eventbg.svg";
import EventsAndGallery from "../components/EventPage/Header";
import { current, previous } from "/src/TeamData/EventData.js";
import Infi from "../components/EventPage/Infi";
import { useState } from "react";
function EventHeading({ title, data }) {
  return (
    <div id="heading-cont" className="mt-7">
      <div
        id="curr-event-heading"
        className="flex flex-col items-center justify-center gap-[20px] p-4"
      >
        <div>
          <button className="rounded-3xl bg-[#e37401] px-4 py-2 text-center text-[14px] font-bold text-white">
            Random Text
          </button>
        </div>
        <h1 className="text-[64px] font-bold lead">{title}</h1>
      </div>

      {data.length === 0 ? (
        <h3 className="bg-[#F5F5F5] p-4 text-center text-[18px]">
          {" "}
          No {title}! Come Back Later
        </h3>
      ) : null}
      <div className="flex flex-wrap  w-auto justify-center items-center gap-x-10 gap-y-8">
        {data.map((one, index) => (
          <Card
            key={index}
            type={one.type}
            name={one.name}
            date={one.date}
            desc={one.desc}
          />
        ))}
      </div>
    </div>
  );
}
const Events = ({ renderFirst, renderSecond }) => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    width: "100vw",
  };

  return (
    <>
      <Navbar />
      <div id="main" className="h-fit overflow-y-hidden">
        <div
          style={divStyle}
          className="flex justify-center items-center flex-col"
        >
          <div className="flex justify-center items-center mb-14">
            <EventsAndGallery />
          </div>
        </div>

        {/* project section */}
        <section id="events" className="h-fit w-[80%] m-auto mt-5">
          <EventHeading title="Current Events" data={current} />
          <EventHeading title="Past Events" data={previous} />
        </section>

        {/* gallary section */}

        <section
          className="h-fit
         bg-[#f5f5f5] w-[100%] m-auto mt-5 "
        >
          <div className="w-[80%] m-auto p-6 relative">
            <div className="text-[70px] absolute z-10 bg-[#f5f5f5] h-[240px] text-center flex justify-center items-center w-[400px] top-[36%] left-[34%] font-semibold">
              Gallery
            </div>
            <Infi />
            {renderFirst && <Infi />}
            {renderSecond && <Infi />}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

function Card({ type, name, date, desc }) {
  return (
    <div
      id="box-flex"
      className="flex w-[400px] flex-col gap-[10px] rounded-2xl bg-[#f5f5f5] p-[25px]"
    >
      <div id="Box1" className="h-[225px] rounded-2xl bg-white"></div>
      <div className="flex items-start">
        <button className="rounded-2xl bg-[#e37401] px-5 py-1 font-bold text-white text-[14px]">
          {type}
        </button>
      </div>
      <p className="font-bold text-1">{date}</p>
      <h2 className="font-bold text-[24px]">{name}</h2>
      <p className="opacity-50">{desc}</p>
    </div>
  );
}

export default Events;
