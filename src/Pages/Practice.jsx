import { MoveRight } from "lucide-react";
import React from "react";
import Friends from "../Components/Friends";
import "../pages/avatar.css";

export default function Practice() {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-fit w-full items-center px-40 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#364953_100%)]">
        <div className="w-full flex">
          <div className=" w-full my-10 md:my-0 md:w-1/2 text-center md:text-start text-white space-y-7">
            <h1 className="text-[45px] leading-14">
              Premium Crypto Marketing for <br /> Social Media & GTM
            </h1>
            <p className="text-[15px] leading-[22.05px]">
              We curat Web3's greatest communities <br /> Your Web3 community
              deserves more than memes and mods
            </p>
            <div className="flex gap-2 italic">
              <div className="w-fit justify-center px-4 py-2 rounded-full bg-white/30 backdrop-blur-md flex">
                <Friends />
              </div>
              <p>
                13M +<br></br>Impressions on X
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                className="bg-[#1F1F1F] font-medium space-x-2 text-white justify-center flex items-center px-4 py-2 rounded"
                href="http://"
              >
                Try Demo <MoveRight className="mt-1" strokeWidth={0.75} />
              </a>
              <a
                className="bg-[#375141] text-white px-4 py-2 rounded"
                href="http://"
              >
                Get Started for Free
              </a>
            </div>

            {/* check */}
            <div
              className="slider mt-36"
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
                      src={`/slider1_${i + 1}.png`}
                      alt={`slider ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full slider relative md:w-1/2 flex justify-center items-center md:justify-center space-x-4">
            <img
              className="w-full h-full max-h-[500px] object-cover"
              src="/73e02fec-861f-4322-b66a-6fcc1212ff2e.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div class="relative h-screen w-full bg-black">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#3B59462e_1px,transparent_1px),linear-gradient(to_bottom,#3B59462e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">

        </div>
      </div> */
}
