import { ArrowBigLeft, ArrowBigRight, Circle } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ImageSlider({ slides }) {
  const lftarroy = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#000000",
    zIndex: 1,
  };

  const rgtarroy = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#000000",
    zIndex: 1,
  };

  const [currentIndex, setcurrentIndex] = useState(0);

  // left arrow
  function goToPrevious() {
    if (currentIndex <= 0) {
      setcurrentIndex(slides.length - 1);
      return;
    }
    setcurrentIndex(currentIndex - 1);
  }
  //  right arrow
  function goToNext() {
    if (currentIndex >= slides.length - 1) {
      setcurrentIndex(0);
      return;
    }
    setcurrentIndex(currentIndex + 1);
  }

  // automatic scroll
  // function automaticScroll() {
  //   const automaticsScroll=setInterval(()=>{
  //      setcurrentIndex(prev =>{
  //       if (prev >= slides.length-1) {
  //         clearInterval(automaticsScroll)
  //         return 0
  //       }
  //       return prev + 1});
  //   },3000)
  // }
  // const intervalId = setInterval(() => {
  //   setIncrement(prev => {
  //     if (prev >= 10) {
  //       clearInterval(intervalId);
  //       return prev;
  //     }
  //     return prev + 1;
  //   });
  // }, 1000);

  // const[plus, setPlus]=useState(0)

  // function change4() {
  //   const int4=setInterval(()=>{
  //     setPlus(prev => {
  //       if (prev == 5) {
  //         clearInterval(int4)
  //         alert("happy new year")
  //          return prev
  //       }
  //       return prev+1})

  //   }, 1000)
  // }

  useEffect(() => {
    const automaticsScroll = setInterval(() => {
      setcurrentIndex((prev) => {
        if (prev >= slides.length - 1) {
          // clearInterval(automaticsScroll);
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(automaticsScroll);
  }, [currentIndex]);

  return (
    <div className="h-full relative">
      <div onClick={goToPrevious} style={lftarroy}>
        <ArrowBigLeft />
      </div>
      <div onClick={goToNext} style={rgtarroy}>
        <ArrowBigRight />
      </div>
      <div
        className=" bg-center bg-cover bg-no-repeat rounded-lg"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex">
        {slides.map((individualSlide, index) => (
          <div onClick={() => setcurrentIndex(index)} key={index}>
            <Circle />
          </div>
        ))}
      </div>
    </div>
  );
}
