import { ArrowRight, Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Slidr = () => {
  const boxArray = Array(6).fill(0);
  const onMobile = useMediaQuery({ maxWidth: 767 });
  const arrayImage = [
    {
      image: "/glasses/glass5.png",
      h1: "Traveller mindset",
    },
    {
      image: "/glasses/glass3.png",
      h1: "Explore the optical tech-wars",
    },
    {
      image: "/glasses/glass1.png",
      h1: "See the future with your lens",
    },
    {
      image: "/glasses/glass2.png",
      h1: "Journey beyond your future",
    }
  ];

  const text =
    "bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-medium text-transparent md:text-5xl";
  const para =
    "bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-[15px] font-medium text-transparent";
  const [eImage, seteImage] = useState(null);
  return (
    <>
      <div className="bg-[#09020D] text-white space-y-5 w-full h-[100vh] flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/3 gap-y-5 flex flex-col px-10">
          <h1 className={text}>The MAGGICRAFT</h1>
          <p className={para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            quidem. Possimus voluptatem aliquid id odio officiis quo corporis!
            Illo veniam consequuntur similique natus officiis aperiam laborum
            neque harum dolorem doloribus.
          </p>
          <div>
            <button className="flex items-center justify-center bg-[#2550E1] drop-shadow-lg drop-shadow-[#2550E1]/50 rounded-full px-3 py-2 space-x-3">
              <p className="text-white pl-3">Vists Store</p>
              <span className="bg-[#09020D] rounded-full p-1">
                <ArrowRight color="#ffffff" strokeWidth={1.5} />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-row w-full px-2.5 md:px-0 md:w-2/3 h-[80%] gap-2 justify-center">
          {arrayImage.map((box, index) => (
            <div
              onClick={() => seteImage(index)}
              key={index}
              style={{
                background: `url(${box.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                transition: "all 0.3s ease",
                width: eImage === index ? onMobile ? "100%" :'40%' : "50px",
              }}
              className="h-full flex items-end cursor-pointer p-4 relative justify-center rounded-[42px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 z-0" />
              <div
                style={{
                  width: eImage == index ? "100%" : "fit-content",
                }}
                className="bg-white/30  flex justify-between items-center p-2 rounded-[26px] backdrop-blur-sm"
              >
                <h1
                  style={{
                    display: eImage == index ? "block" : "none",
                  }}
                  className="text-white z-10 text-xs"
                >
                  {box.h1}
                </h1>
                <div className="bg-white/30 rounded-[18px]">
                  <Plus color="#f6f6f6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
