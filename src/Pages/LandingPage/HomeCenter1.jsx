import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../../assets/img1.png";

export default function HomeCenter1() {
  const [doneTyping1, setDoneTyping1] = useState(false);
  const [doneTyping2, setDoneTyping2] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center font-mono bg-gray-100 px-4 py-12">
      <div className="w-full max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%] text-left">
        <h1 className="font-bold leading-[1.4]">
          {/* First Line */}
          <span className="block text-[4vw] md:text-[3.5vw] lg:text-[3vw] xl:text-[2.5vw]">
            <Typewriter
              words={["WELCOME TO YUMSIES"]}
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={800}
              cursor={!doneTyping1} // Show cursor only while typing
              onLoopDone={() => setDoneTyping1(true)} // Hide cursor after completion
            />
          </span>

          {/* Second Line */}
          <span className="block mt-6 text-[4vw] md:text-[3.5vw] lg:text-[3vw] xl:text-[2.5vw]">
            <Typewriter
              words={["YOUR CULINARY PLAYGROUND"]}
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={800}
              cursor={!doneTyping2}
              onLoopDone={() => setDoneTyping2(true)}
            />
          </span>
        </h1>
      </div>

      {/* Image */}
      <div className="w-full flex justify-center mt-12">
        <img
          src={img1}
          alt="Centered Image"
          className="max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
