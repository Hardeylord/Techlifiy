import { useGSAP } from "@gsap/react";
import { ArrowRight, MapPin, Sparkle } from "lucide-react";
import React from "react";
import gsap from "gsap";

export const Food = () => {
  useGSAP(()=>{


    const tl=gsap.timeline()
    tl.to('.map', {
      translateY:10,
      repeat:-1,
      yoyo:true,
      ease:'power1.inOut'
    })

    // gsap.to('.rotateTo',{
    //   rotate:360,
    //   repeat:-1,
    //   ease:'power1.inOut',
    //   stagger:2,
    // })
  }, [])
  return (
    <>
      <div className="h-screen w-full relative flex flex-col md:flex-row justify-center items-center bg-[url(/pastries/hero.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
{/* mt-8 md:mt-16 text-white flex flex-col justify-center items-center */}
        <div className="w-1/2 mt-52 md:mt-0 z-10 h-full md:px-30 flex flex-col justify-center md:items-start items-center space-y-4">
          <div className="flex items-center">
            <Sparkle stroke="#ffc0cb"  size={16} strokeWidth={1.25} />
            <h1 className="text-[#ffc0cb] text-xs ">ART OF FINE DINING</h1>
          </div>
          <h2 className="text-5xl font-medium text-white text-center md:text-start">
            DINING REDEFINED WITH{" "}
            <span className="text-pink-500">EVERY BITE</span>
          </h2>
          <p className="text-white">
            Welcom to the Sweetest Things Bakery! We are happy you've found us
            and please feel fee to browse around and take a look at our tasty
            pastries.
          </p>
          <div className="flex gap-3">
            <button className="flex cursor-pointer items-center justify-center bg-pink-500 transition ease-in-out duration-300 hover:bg-pink-600 hover:scale-100 rounded-sm px-5 py-2 space-x-3">
              <p className="text-white">View Menu</p>
            </button>
            <button className="flex hover:text-pink-500 cursor-pointer items-center justify-center space-x-1">
              <MapPin className="map" color="white" strokeWidth={1} />
            </button>
          </div>
        </div>
        <div className="w-1/2 z-10 h-full mt-10 flex justify-center items-center">
          <div className="w-full relative h-full flex justify-center items-center">
            <img src="/cakes/Cake.svg" className="absolute top-32 rotateTo z-30 right-32 size-24" alt="" srcset="" />
            <img src="/cakes/cupCake.svg" className="absolute bottom-32 z-30 left-32 size-24" alt="" srcset="" />
          <img src="/pastries/cake.png" className="cake-img" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};
