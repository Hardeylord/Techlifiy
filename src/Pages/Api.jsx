import React, { useState } from "react";
import axios from "axios";
import { LoaderCircle, Search } from "lucide-react";
import Rive from "@rive-app/react-canvas";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { SearchPrd } from "../Components/SearchPrd";
import { PinScroll } from "../Components/PinScroll";
import { Game } from "../Components/Game";
export const Api = () => {
  const { rive, RiveComponent } = useRive({
    src: "/nbaranimated (1).riv",
    stateMachines: "State Machine 1",
    autoplay: false,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  const { rive: rive2, RiveComponent: RiveComp2 } = useRive({
    src: "/increasebarpurple (1).riv",
    stateMachines: "State Machine 1",
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  const { rive: rive3, RiveComponent: RiveComp3 } = useRive({
    src: "/stat.riv",
    stateMachines: "stateMachine",
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  const [quote, setQuote] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const fetchApi = async () => {
    try {
      setisLoading(true);
      const response = await fetch("https://api.quotable.io/random");
      const goteenResponse = await response.json();
      setQuote(goteenResponse.content);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-black flex flex-col justify-center items-center text-white">
        {isLoading ? (
          <button
            onClick={fetchApi}
            className=" flex space-x-5 mb-5 font-medium"
          >
            <LoaderCircle className="animate-spin" />
          </button>
        ) : (
          <div>
            <div className="size-52 flex justify-center items-center"></div>
            <div className="text-center mb-5">
              <h1>{quote && <p>" {quote} "</p>}</h1>
            </div>
          </div>
        )}
        <div className="space-x-2 mt-8">
          <button
            onClick={fetchApi}
            className="bg-[#2550E1] drop-shadow-lg drop-shadow-[#2550E1]/50 w-[100px] cursor-pointer px-3 py-2 rounded-[100px]  font-medium"
          >
            Fetch
          </button>
        </div>
      </div>

      <div className="bg-black w-full px-10">
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 gap-2 md:grid-rows-1">
          <div className="bg-[#efefef] px-6 rounded-xl h-80">
            <img
              className="h-full w-full"
              src="/Chart 4.svg"
              alt=""
            />
          </div>
          <div className="rounded-xl h-80 bg-[#1C1C1E] border-[1px] border-[#3d3d3d]">
            <RiveComponent
              className="h-full w-full"
              onMouseEnter={() => rive && rive.play()}
              onMouseLeave={() => rive && rive.pause()}
            />
          </div>
          <div className="bg-[#E5E5EF] rounded-xl h-80">
            <RiveComp2
              className="h-full w-full"
              onMouseEnter={() => rive2 && rive2.play()}
              onMouseLeave={() => rive2 && rive2.pause()}
            />
          </div>
          <div className="bg-[#F7F8FB] rounded-xl h-80">
            <RiveComp3
              className="h-full w-full"
              onMouseEnter={() => rive3 && rive3.play()}
              onMouseLeave={() => rive3 && rive3.pause()}
            />
          </div>
        </div>
      </div>

      {/* search */}
      <Game/>
      <SearchPrd/>
      <PinScroll/>
      {/*  */}
    </>
  );
};
