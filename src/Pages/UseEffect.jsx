import React, { useState } from 'react'

export default function UseEffect() {
  const[Increment, setIncrement]=useState(0)
  function increase() {

    setInterval(()=>{
      setIncrement(prev => prev + 1)
    }, 1000)

    // const intervalId = setInterval(() => {
    //   setIncrement(prev => {
    //     if (prev >= 10) {
    //       clearInterval(intervalId);
    //       return prev;
    //     }
    //     return prev + 1;
    //   });
    // }, 1000);
  }
  return (
    <div>
      <button onClick={increase}  className='py-2 px-4 bg-black text-white rounded-full'>Increment</button>
      <p>{Increment}</p>
    </div>
  )
}
