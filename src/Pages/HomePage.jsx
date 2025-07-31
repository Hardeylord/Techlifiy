import { ArrowBigRight, MoveRight } from 'lucide-react'
import React from 'react'
import Card from '../Components/Card'
import ImageSlider from './ImageSlider'

export default function HomePage() {

  const slides=[
    {image: "/kids.png", title: "beach"},
    {image: "/hands.png", title: "city"},
    {image: "/begger.png", title: "forst"},
  ]
  return (
    <>
    <div className=" inset-0 -z-10 h-[100vh] md:h-full w-full items-center py-2 px-10 md:px-40 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className='w-full flex-col md:flex-row flex py-8'>
        <div className=' w-full my-10 md:my-0 md:w-1/2 text-center md:text-start text-white space-y-4'>
          <h1 className='text-4xl'>Manage Your Business <br/> Earning Seamlessly</h1>
          <p>Track revenue , payouts and customer transactions.<br/> All in one powerful & simple finace dashboars</p>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-end md:justify-end space-x-4'>
          <a className='bg-white px-4 py-2 rounded-xl' href="http://">Get Started for Free</a>
          <a className='bg-[#1F1F1F] font-medium space-x-2 text-white justify-center flex items-center px-4 py-2 rounded-xl' href="http://">Try Demo <MoveRight className='mt-1' strokeWidth={0.75} /></a>
        </div>
      </div>
      <div className="h-96 mt-8 w-full bg-contain bg-no-repeat md:bg-cover md:bg-center"
      style={{ backgroundImage: "url('/Background%20Image.png')" }}>
        
      </div>
    </div>
    <div className='w-[500px] h-[280px] m-auto my-0'>
    <ImageSlider slides={slides}/>
    </div>
    </>
  )
}
