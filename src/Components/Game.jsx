import React from 'react'
import { useRive, Layout, Fit, Alignment, useStateMachineInput } from "@rive-app/react-canvas";

export const Game = () => {
  const STATE_MACHINE="progressBar"
  const input="final"
  const { rive, RiveComponent } = useRive({
    src: "/game.riv",
    stateMachines: STATE_MACHINE,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  const onClickInput=useStateMachineInput(rive,STATE_MACHINE, input)
  return (
    <>
    <div className='w-full py-4 h-fit bg-black flex justify-center items-center'>
      <div className='size-52 bg-black'>
      <RiveComponent
              className="h-full w-full"
            />
            <button
              onClick={()=>{
                if (onClickInput) {
                  onClickInput.value=700
                } else{
                  alert("not seen")
                }
              }}
              className="bg-[#2550E1] drop-shadow-lg drop-shadow-[#2550E1]/50 w-[100px] cursor-pointer px-3 py-2 rounded-[100px]  font-medium"
            >
              Fetch
            </button>
      </div>
      </div>
    </>
  )
}
