import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col space-y-5 w-full h-fit justify-center py-10 px-5 text-white bg-[#09020D] inset-shadow-sm inset-shadow-[#2550E1]">
        <div className="md:w-1/4 flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-1 relative">
            <img className="h-[30px]" src="oLogo.svg" alt="" />
          </div>
          <div className="flex gap-2 text-white">
          <Twitter strokeWidth={1.5} />
          <Facebook strokeWidth={1.5}/>
          <Instagram strokeWidth={1.5}/>
          <Linkedin strokeWidth={1.5}/>
          </div>
        </div>
        <div className="md:w-1/4 space-y-3">
          <h1 className="text-center md:text-start text-2xl">QUICK LINKS</h1>
          <ul className="flex text-center md:text-start flex-col font-[400] md:space-x-8 text-white">
            <li>
              <Link to="/circ">Home</Link>
            </li>
            <li>
              <Link to="/food">Food</Link>
            </li>
            <li>
              <Link to="/useeffect">Features</Link>
            </li>
            <li>
              <Link to="/practice">Pricing</Link>
            </li>
            <li>
              <Link to="/api">Api</Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4 space-y-3">
          <h1 className="text-2xl text-center md:text-start">SUPPORT</h1>
          <ul className="flex flex-col md:text-start text-center font-[400] md:space-x-8 text-white">
            <li>
              <Link to="/circ">FAQ</Link>
            </li>
            <li>
              <Link to="/food">HELP</Link>
            </li>
            </ul>
        </div>
        <div className="md:w-1/4 space-y-3">
          <h1 className="text-2xl text-center">SUBSCRIBE TO OUR NEWSLETTER</h1>
          <div className="flex justify-center"><input placeholder="techlify@gmail.com" className='bg-white rounded-l-3xl text-black pl-4 py-2 outline-0' type="email"/><button className='text-white cursor-pointer px-5  py-2 bg-[#2550E1] rounded-r-3xl'>Subscribe</button></div>
        </div>
      </div>
    </>
  );
};