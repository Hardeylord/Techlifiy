import React from "react";
import "../Pages/avatar.css";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from "gsap/all";
import { Play } from "lucide-react";
gsap.registerPlugin(ScrollTrigger, SplitText);


export const MainSect = () => {

  useGSAP(()=>{
    const zoomTl=gsap.timeline({scrollTrigger:{
      trigger:"#zoom",
      scrub:true,
      start:'top top',
      end:'bottom center',
      pin:true
    }})

    zoomTl.to(".tech-img", {
      scale:1.3,
      maskPosition:'center',
      maskSize:'100%',
      ease:'power1.inOut'
    })
  }, [])
  return (
    <>
      <div className="w-full px-10 md:px-0 bg-[#00020F] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto flex flex-col items-center justify-center h-full pt-20">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
        Product Highlight
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
        From strategy to execution, we blend innovation and technology to drive growth.
        </p>
          <div className="grid text-white mt-10 md:grid-cols-3 lg:grid-rows-3 lg:w-[70%] w-full auto-rows-[300px]  gap-4">
            <div className="bg-[#00020F] overflow-hidden relative flex flex-col justify-between rounded-2xl md:row-span-2">
              <div>
                <img
                  className="size-48 absolute -left-10"
                  src="pieChat.png"
                  alt=""
                />
              </div>
              <div className="p-4 space-y-4">
                <p className="text-2xl leading-8 text-white">
                  Data-Backed <br></br>Strategy
                </p>
                <h1 className="text-[#bdbdbd] text-xs">
                  We craft marketing plans built on real insights,
                  not-guesswork-so every move has purpose
                </h1>
              </div>
            </div>
            <div className="bg-[#00020F] relative flex items-end p-4 w-full rounded-2xl md:row-span-2 overflow-hidden">
              <img
                className="size-56 absolute top-5 right-10"
                src="arrow.png"
                alt=""
              />
              <div className="w-1/2 space-y-2">
                <p className="text-2xl leading-8 text-white">
                  Targeted <br></br>Campaigns
                </p>
                <h1 className="text-[#bdbdbd] text-xs">
                  Reach the right audience at the right time with campaigns that
                  convert across every platform
                </h1>
              </div>
              <div className="w-1/2"></div>
            </div>

            
            <div className="bg-[#00020F] overflow-hidden space-y-2 relative rounded-2xl text-white p-4">
              <h1 className="text-2xl leading-8">
                Social Media <br></br> Management
              </h1>
              <p className="text-[#bdbdbd] text-xs">
                From content calendars <br></br> to engagement boosts
              </p>
              <img
                className="size-32 absolute right-1 top-10"
                src="social.png"
                alt=""
              />
            </div>
            <div className="bg-[#00020F] rounded-2xl p-4 relative flex items-end">
              <div className="flex  flex-col">
                <h1 className="text-2xl leading-8">
                  SEO&Content<br></br> Marketing
                </h1>
                <p className="text-[#bdbdbd] text-xs">
                  Boost visiblity and authority <br /> with content that ranks,
                  <br /> resonats, and delivers <br />
                  long-term value.
                </p>
              </div>
              <img className="size-32 absolute right-1 top-10" src="seo.png" alt="" />
            </div>
          </div>

          
          <div className=" relative w-full h-screen overflow-hidden"  id="zoom">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-6xl">
       Creafting digital experience<br /> with passion and precision 
        </h1>
        <a href="https://youtu.be/LBOhVng5rk8?si=FwOgYcSPebmsUAqm" target="_blank" rel="noopener noreferrer">
              <img
                src="/techmeet.png"
                alt="cocktail"
                className=" hero-img tech-img  size-full object-contain"
                href="https://youtu.be/LBOhVng5rk8?si=FwOgYcSPebmsUAqm"
              />
              </a>
              </div>
        </div>
      </div>
    </>
  );
};
