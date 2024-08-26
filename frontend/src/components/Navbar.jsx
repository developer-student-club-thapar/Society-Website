import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full justify-center mt-10 sticky top-6 z-50">
      <div className="flex justify-between w-[90%] md:w-[80%] rounded-full border-2 px-6 md:px-10 py-3 md:py-4 h-[8vh] md:h-[10vh] items-center bg-white">
        <div
          className="flex items-center gap-2 md:gap-4"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="logo" className="h-6 cursor-pointer" />
          <h2 className="font-bold text-gray-800 cursor-pointer">
            GDSC Thapar
          </h2>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          <div
            className="cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/projects");
            }}
          >
            PROJECTS
          </div>
          <div
            className="cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              document.querySelector("#depart").scrollIntoView({ behavior: "smooth" });
            }}
          >
            DEPARTMENTS
          </div>
          <div
            className="cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/events");
            }}
          >
            EVENTS
          </div>
          <div
            className="cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/alumni");
            }}
          >
            ALUMNI
          </div>
          <div
            className="cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/team");
            }}
          >
            TEAM
          </div>
          <button
            className="bg-black text-white px-8 py-2 rounded-3xl hover:text-black hover:bg-white transition-all hover:border-2 hover:border-black"
            onClick={() => {
              document
                .querySelector("#form")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            FORM LINK
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {/* {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full absolute top-[10vh] left-0 bg-white border-t-2 border-gray-200 flex flex-col items-center gap-6 py-4 z-40">
          <div
            className="cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/projects");
              toggleMenu();
            }}
          >
            PROJECTS
          </div>
          <div
            className="cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/departments");
              toggleMenu();
            }}
          >
            DEPARTMENTS
          </div>
          <div
            className="cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/events");
              toggleMenu();
            }}
          >
            EVENTS
          </div>
          <div
            className="cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/alumni");
              toggleMenu();
            }}
          >
            ALUMNI
          </div>
          <div
            className="cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/team");
              toggleMenu();
            }}
          >
            TEAM
          </div>
          <button
            className="bg-black text-white px-8 py-2 rounded-3xl hover:text-black hover:bg-white transition-all hover:border-2 hover:border-black"
            onClick={() => {
              document
                .querySelector("#form")
                .scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
          >
            FORM LINK
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
