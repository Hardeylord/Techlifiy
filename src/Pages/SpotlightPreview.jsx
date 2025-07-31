import React from "react";
import { cn } from "../lib/utils";
import { Spotlight } from "../Components/Spotlight";
import { ArrowRight, MoveRight, PlayCircle } from "lucide-react";
import "../pages/avatar.css";

export function SpotlightPreview() {
  return (
    <div className="relative flex h-fit md:h-screen w-full overflow-hidden bg-[#00020F] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        )}
      />{" "}
      {/* <div className="bg-[url(Ellipse2452.png)] absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" /> */}
      {/* md:left-60 */}
      <Spotlight className="-top-40 left-0 md:-top-20 " fill="white" />
      <Spotlight
        className="-top-40 right-0 md:-top-20 scale-x-[-1]"
        fill="white"
      />
      <div className="relative flex space-y-5 text-white flex-col items-center justify-center md:mt-20 z-20 mx-auto w-full max-w-7xl p-4 pt-32  md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-6xl">
        Empowering Innovation,<br /> One Line of Code at a Time 
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
        Build smarter digital solutions with Techlify's cutting-edge technology and expertise.
        </p>
        <div className="flex gap-3">
          <button className="flex border-[1px] border-[#bdbdbd]  px-3 py-2 rounded-[100px]  font-medium">
            <PlayCircle /> Watch Demo
          </button>
          <button className="bg-[#2550E1] drop-shadow-lg drop-shadow-[#2550E1]/50 px-3 py-2 rounded-[100px]  font-medium">
            Get started for free
          </button>
        </div>
        
        <div className="relative w-[50%] space-y-3">
        <p className="text-[#bdbdbd] text-center">Trusted by 500+ companies</p>
        <div
              className="slider"
              style={{
                "--width": "100px",
                "--height": "50px",
                "--quantity": 4,
              }}
            >
              <div className="list">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="item" style={{ "--position": i + 1 }}>
                    <img
                    className="size-8"
                      src={`/logo/slider1_${i + 1}.svg`}
                      alt={`slider ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            </div>

      </div>
    </div>
  );
}
