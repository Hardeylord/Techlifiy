import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import _ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, SplitText);

export const PinScroll = () => {
  const boxes = useRef(null);
  useGSAP(() => {
    const myBoxes = gsap.utils.toArray(boxes.current.children).slice(1);
    gsap.set(myBoxes, { yPercent: 101 });
    const pined = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery",
        pin: ".right",
        start: "top top",
        scrub: true,
        end: "bottom bottom",
      },
    });
    pined.to(myBoxes, { yPercent: 0, stagger: 1 });
  });
  return (
    <>
      <div className="gallery h-fit w-full flex">
        <div className="left h-fit w-1/2">
          <div className="h-screen w-full bg-red-600"></div>
          <div className="h-screen w-full bg-green-600"></div>
          <div className="h-screen w-full bg-blue-600"></div>
        </div>
        <div
          ref={boxes}
          className="right h-screen w-1/2 relative flex justify-center items-center"
        >
          <div className="size-48 absolute bg-red-600"></div>
          <div className="size-48 absolute bg-green-600"></div>
          <div className="size-48 absolute bg-blue-600"></div>
        </div>
      </div>
      <div className="h-screen w-full bg-black"></div>
    </>
  );
};
