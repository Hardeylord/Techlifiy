import { Sprout } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  //#1F1F1F

  // <img src="/Rectangle.png" alt=""/>
  return (
    // <div className="w-full py-2 px-10 md:px-40 bg-slate-950">
      <div className="bg-[#090B1D] z-50 fixed top-4 left-1/2 transform -translate-x-1/2 w-[80%] border flex justify-between items-center p-3 rounded-[112px]">
        <div className="flex space-x-1 relative">
          <img className="h-[30px]" src="oLogo.svg" alt="" srcset="" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex font-[400] space-x-8 text-white">
            <li>
              <Link to="/circ">Home</Link>
            </li>
            <li>
              About
            </li>
            <li>
              <Link to="/useeffect">Features</Link>
            </li>
            <li>
              <Link to="/practice">Pricing</Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="text-white space-x-2">
          <a
            className="bg-[#2550E1] drop-shadow-lg drop-shadow-[#2550E1]/50 px-3 py-2 rounded-[100px]  font-medium"
            href="http://"
          >
            Get started
          </a>
        </div>
      </div>
    // </div>
  );
}
