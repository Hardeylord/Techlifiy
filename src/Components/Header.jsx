import { MenuIcon, Sprout } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const IS_MOBILE = useMediaQuery({ maxWidth: 767 });

  const [showHeader, setShowHeader] = useState(false);

  //#1F1F1F

  // <img src="/Rectangle.png" alt=""/>

  useGSAP(() => {
    const headerTimline = gsap.timeline({
      scrollTrigger: {
        trigger: ".header",
        start: "bottom top",
        scrub: true,
      },
    });
    headerTimline
      .to(".hideBtn", {
        display: "none",
        ease: "power1.inOut",
      })
      .to(".header", {
        width: IS_MOBILE ? "80%" : "20%",
        ease: "power1.inOut",
        backgroundColor: "rgba(9, 11, 29, 0.6)",
        backdropFilter: "blur(10px)",
      })
      // bg-white/30 backdrop-blur-sm
      .to(".menu", {
        display: "none",
        ease: "power1.inOut",
      })
      .to(".hamburgr", {
        display: "flex",
        ease: "power1.inOut",
      });
  }, []);

  return (
    // <div className="w-full py-2 px-10 md:px-40 bg-slate-950">
    <>
      <div className="bg-[#090B1D] header z-50 fixed top-4 left-1/2 transform -translate-x-1/2 w-[80%]  flex justify-between items-center p-3 rounded-[112px]">
        <div className="flex space-x-1 relative">
          <img className="h-[30px]" src="oLogo.svg" alt="" />
        </div>
        <div className="hidden menu md:flex">
          <ul className="flex font-[400] space-x-8 text-white">
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
        <div className="hamburgr md:hidden">
          <MenuIcon
            className="cursor-pointer"
            onClick={() => setShowHeader(!showHeader)}
            stroke="white"
          />
        </div>
        <div className="text-white hidden md:flex hideBtn space-x-2">
          <a
            className="bg-[#2550E1] header-btn drop-shadow-lg drop-shadow-[#2550E1]/50 px-3 py-2 rounded-[100px]  font-medium"
            href="http://"
          >
            Get started
          </a>
        </div>
      </div>
      {/* mobile */}
      {showHeader ? (
        <div className="bg-[#090B1D] mt-16 md:hidden z-50 fixed top-4 left-1/2 transform -translate-x-1/2 w-[80%]  flex justify-start h-fit space-y-5 px-6 py-10 rounded-lg flex-col text-white">
          <div className=" flex">
            <ul className="flex flex-col space-y-5 font-[400] space-x-8 ">
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
          <div className="bg-[#2550E1] flex justify-center  header-btn drop-shadow-lg drop-shadow-[#2550E1]/50 px-3 py-2 rounded-[100px]  font-medium">
            <a href="http://">Get started</a>
          </div>
        </div>
      ) : null}
    </>
    // </div>
  );
}
