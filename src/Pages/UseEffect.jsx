import { ArrowRight, Glasses } from "lucide-react";
import { transform } from "motion";
import { image } from "motion/react-client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Slidr } from "../Components/Slidr";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Rive from "@rive-app/react-canvas";

export default function UseEffect() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const styles = {
    height: "200px",
    width: "200px",
    borderRadius: "20px",
    borderWidth: "1px",
  };
  // const images = [
  //   {
  //     image: "/glasses/glass5.png",
  //     transform:'translateX(-90%) rotate(-5deg)'
  //   },
  //   {
  //     image: "/glasses/glass3.png",
  //     transform:'translateX(-80%) rotate(0deg)'
  //   },
  //   {
  //     image: "/glasses/glass2.png",
  //     transform:'translateX(80%) rotate(5deg)'
  //   },
  //   {
  //     image: "/glasses/glass4.png",
  //     transform:'translateX(90%) rotate(10deg)'
  //   },
  //   {
  //     image: "/glasses/glass1.png",
  //     transform:''
  //   },
  // ];

  const images = [
    {
      image: "/glasses/glass5-min.png",
      transform: "translateX(-220px) rotate(-25deg) scale(0.8)",
      mobileTransform: "",
      zIndex: 1,
      opacity: 0.4,
    },
    {
      image: "/glasses/glass3-min.png",
      transform: "translateX(-120px) rotate(-15deg) scale(0.9)",
      zIndex: 2,
      opacity: 0.7,
    },
    {
      image: "/glasses/glass1-min.png",
      transform: "translateX(0px) rotateY(0deg)",
      zIndex: 5,
      opacity: 1,
    },
    {
      image: "/glasses/glass2-min.png",
      transform: "translateX(120px) rotate(15deg) scale(0.9)",
      zIndex: 2,
      opacity: 0.7,
    },
    {
      image: "/glasses/glass4.png",
      transform: "translateX(220px) rotate(25deg) scale(0.8)",
      zIndex: 1,
      opacity: 0.4,
    },
  ];

  useGSAP(() => {
    const boxes = document.querySelectorAll(".fans");

    boxes.forEach((box, index) => {
      gsap.to(box, {
        transform: images[index].transform,
        ease: "power1.inOut",
        delay: index * 0.3,
      });
    });
  }, []);

  return (
    <>
      <div className="h-screen overflow-auto scrollbar-hide md:overflow-hidden relative  py-4 flex justify-center items-center flex-col bg-[url(/neon/neon-min.jpg)] bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 from-10% to-black to-90% backdrop-blur-sm z-0" />

        <div className="z-10 space-y-2 mt-8 md:mt-16 text-white flex flex-col justify-center items-center">
          <Glasses color="#ffffff" size={48} />
          <div className="h-72 w-full relative flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="absolute fan inset-0 flex justify-center items-center"
              >
                <img
                  className="object-cover fans object-center"
                  key={index}
                  style={{
                    height: "200px",
                    width: isMobile ? "150px" : "200px",
                    borderRadius: "20px",
                    borderWidth: "1px",
                    // transform:image.transform,
                    zIndex: image.zIndex,
                    opacity: image.opacity,
                  }}
                  src={image.image}
                />
              </div>
            ))}
          </div>
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-medium text-transparent md:text-6xl">
            Eyewear That Stands Out
          </h1>
          <button className="flex items-center justify-center bg-white rounded-full px-3 py-2 space-x-3">
            <p className="text-black pl-3">Enter Store</p>
            <span className="bg-[#09020D] rounded-full p-1">
              <ArrowRight color="#ffffff" strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </div>
      {/* <Rive
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
      /> */}
      <Slidr />
    </>
  );
}
