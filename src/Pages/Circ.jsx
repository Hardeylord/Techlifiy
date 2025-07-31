import React, {useReducer, useState} from "react";
import { SpotlightPreview } from "./SpotlightPreview";
import { MainSect } from "../Components/MainSect";


export default function Circ() {
 
  return (
    <>
    <SpotlightPreview/>
    <MainSect/>
    <div className="relative w-full h-[400px] overflow-hidden bg-black"></div>
    {/* <div className="relative w-full h-[400px] overflow-hidden bg-black">
    <div className="absolute top-[-70%] left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full bg-black" />
    <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] rounded-full bg-[#4F5DFF]/40 blur-[100px] opacity-70" />
    </div> */}

    </>
  );
}

{/* <div class="relative h-screen w-full bg-slate-950">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3d3d3d,transparent)]"></div>
    </div> */}