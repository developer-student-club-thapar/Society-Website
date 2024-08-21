import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-center mt-10 sticky top-6 z-50">
      <div className="flex justify-between w-[80%] rounded-full border-2 px-10 py-4 h-[10vh] items-center bg-white">
        <div
          className="flex gap-4 "
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="asd" className="h-6 cursor-pointer" />
          <h2 className="font-bold text-gray-800 cursor-pointer">
            GDSC Thapar
          </h2>
        </div>
        <div className="flex gap-10 items-center">
          <div
            className=" cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/projects");
            }}
          >
            PROJECTS
          </div>
          <div
            className=" cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/departments");
            }}
          >
            DEPARTMENTS
          </div>
          <div
            className=" cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/events");
            }}
          >
            EVENTS
          </div>
          <div
            className=" cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/alumni");
            }}
          >
            ALUMNI
          </div>
          <div
            className=" cursor-pointer text-gray-600 font-bold text-sm"
            onClick={() => {
              navigate("/team");
            }}
          >
            TEAM
          </div>
          <button
            className="bg-black text-white px-8 py-2 rounded-3xl hover:text-black hover:bg-white transition-all hover:border-2 hover:border-black"
            onClick={() => {
              window.location.href = "https://github.com";
            }}
          >
            FORM LINK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
