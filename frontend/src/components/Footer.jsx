import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center w-full mb-10">
    <footer className="bg-white text-black pt-10 pb-6  border-2 border-gray-300 rounded-3xl w-[80%] mt-10 p-10 ">
      <div className="flex w-full justify-between items-center mb-20">
        <div className="flex gap-4">
            <img src={logo} onClick={() => {navigate('/')}} alt="asd" className='h-6 cursor-pointer' />
            <h2 className='font-bold text-gray-800'>GDSC Thapar</h2>
        </div>
        <button className='bg-black text-white px-8 py-2 rounded-3xl hover:text-black hover:bg-white transition-all hover:border-2 hover:border-black' onClick={() => {window.location.href = "https://github.com"}} >FORM LINK</button>
      </div>
      <div className="grid grid-cols-5 w-[70%]  mb-6">
        <div className="">
          <h1 className='text-gray-600 font-bold mb-4'>PROJECTS</h1>
          <div className="text-sm font-semibold text-gray-500"><a href="">PROJ1</a></div>
          <div className="text-sm font-semibold text-gray-500"><a href="">PROJ2</a></div>
          <div className="text-sm font-semibold text-gray-500"><a href="">PROJ3</a></div>
        </div>
        <div className="">
          <h1 className='text-gray-600 font-bold'>DEPARTMENTS</h1>
        </div>
        <div className="">
          <h1 className='text-gray-600 font-bold'>EVENTS</h1>
        </div>
        <div className="">
          <h1 className='text-gray-600 font-bold'>ALUMNI</h1>
        </div>
        <div className="">
          <h1 className='text-gray-600 font-bold'>TEAM</h1>
        </div>

      </div>
      <p className='text-gray-500 font-medium'>Developed by GDSC Thapar. Copyright by GDSC Thapar</p>
    </footer>
    </div>
  );
};

export default Footer;