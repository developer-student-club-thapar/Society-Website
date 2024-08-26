import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "/src/assets/eventbg.svg";
import EventsAndGallery from "../components/EventPage/Header";
import { current, previous } from "/src/TeamData/EventData.js";
import Infi from "../components/EventPage/Infi";
import { useState } from "react";
import MidInfi from "../components/EventPage/MidInfi";
import rapid from "/src/assets/rapid.svg";
import watch from "/src/assets/watch.svg";
function EventHeading({ title, data }) {
  return (
    <div id="heading-cont" className="mt-7">
      <div
        id="curr-event-heading"
        className="flex flex-col items-center justify-center gap-[20px] p-4"
      >
        <div>
          <button className="rounded-3xl bg-[#e37401] px-6 py-3 text-center text-[14px] font-bold text-white">
            Random Text
          </button>
        </div>
        <h1 className="text-[64px] font-bold lead">{title}</h1>
      </div>

      {data.length === 0 ? (
        <h3 className="bg-[#F5F5F5] p-4 text-center text-[15px] sm:text-[18px] rounded-xl font-medium">
          {" "}
          No {title}! Come Back Later
        </h3>
      ) : null}
      <div className="flex flex-col lg:flex-row w-auto justify-center items-center gap-x-10 gap-y-8 md:scale-100">
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
              <h1 className="text-[64px] font-bold lead">Past Events</h1>
            </div>
            <div className="flex flex-wrap  w-auto justify-center items-center gap-x-10 gap-y-8">
              {/* card */}
              <div
                id="box-flex"
                className="flex w-[400px] flex-col gap-[10px] rounded-2xl bg-[#03070e] p-[25px]"
              >
                <div id="Box1" className="h-[225px] rounded-2xl bg-white">
                  <img src={rapid} alt="" />
                </div>
                <div className="flex items-start">
                  <button className="rounded-2xl bg-[#e2c539] px-5 py-1 font-bold text-white text-[14px]">
                    {/* {type} */}
                    Hackathon
                  </button>
                </div>
                <p className="font-bold text-1 text-white">
                  February 23 , 2024
                </p>
                <h2 className="font-bold text-[24px] text-white">Rapid Code</h2>
                <p className="opacity-50 text-white">
                  Rapid Code is a 3-hour adrenaline-pumping coding extravaganza,
                  brought to you by GDSC (Google Developer Student Club) at
                  TIET! Get ready to showcase your coding prowess with a team of
                  1-4 members in a high-speed sprint where innovation meets
                  speed! In this thrilling event, you'll dive into adding
                  exciting new features to existing websites, unleashing your
                  creativity and coding skills!
                </p>
              </div>
              <div
                id="box-flex"
                className="flex w-[400px] flex-col gap-[10px] rounded-2xl bg-[#f5f5f5] p-[25px]"
              >
                <div className="h-[225px] rounded-2xl bg-white"></div>
                <div className="flex items-start">
                  <button className="rounded-2xl bg-[#e37401] px-5 py-1 font-bold text-white text-[14px]">
                    Speaker Interaction
                  </button>
                </div>
                <p className="font-bold text-1">February 7, 2024</p>
                <h2 className="font-bold text-[24px]">Mindset to Milestones</h2>
                <p className="opacity-50">
                  Explore internship success stories at "Mindset to Milestones"
                  hosted by Google Developer Student Clubs, TIET and Thapar
                  Institute Counselling Cell. Learn from industry leaders about
                  Software Development, Product Management, and Research
                  internships, and discover the art of balancing academic and
                  professional growth with mental health.
                </p>
              </div>
              <div
                id="box-flex"
                className="flex w-[400px] flex-col gap-[10px] rounded-2xl bg-[#f5f5f5] p-[25px]"
              >
                <div className="h-[225px] rounded-2xl bg-white">
                  <img src={watch} alt="" />
                </div>
                <div className="flex items-start">
                  <button className="rounded-2xl bg-[#6679ee] px-5 py-1 font-bold text-white text-[14px]">
                    Watch Party
                  </button>
                </div>
                <p className="font-bold text-1">2024</p>
                <h2 className="font-bold text-[24px]">
                  Google I/O Extended Watchparty
                </h2>
                <p className="opacity-50">
                  After the exciting announcements at Google I/O, we are
                  thrilled to invite you to our I/O Extended event. It's the
                  perfect opportunity for our local community to come together
                  and dive deeper into the latest technologies unveiled at the
                  main conference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* gallary section */}

        <section
          className="h-fit
         bg-[#f5f5f5] w-[100%] m-auto mt-5 "
        >
          <div className="w-[100%] m-auto p-6 relative">
            <div className="text-[70px] absolute z-10 bg-[#f5f5f5] h-[240px] text-center flex justify-center items-center w-[400px] top-[36%] left-[38%] font-semibold">
              Gallery
            </div>
            <Infi />
            <MidInfi />
            <Infi />
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
      className="flex w-[400px] h-[535px] flex-col gap-[10px] rounded-2xl bg-[#f5f5f5] p-[25px]"
    >
      <div className="h-[225px] rounded-2xl bg-white"></div>
      <div className="flex items-start">
        <button className="rounded-2xl bg-[#e37401] px-5 py-1 font-bold text-white text-[14px]">
          type
        </button>
      </div>
      <p className="font-bold text-1">{date}</p>
      <h2 className="font-bold text-[24px]">{name}</h2>
      <p className="opacity-50">{desc}</p>
    </div>
  );
}

export default Events;
