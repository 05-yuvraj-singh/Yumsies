import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function HomeCenter2() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] bg-[#F4E9ED] p-8 text-lg font-mono m-0">
      <ul className="mt-6 space-y-4 text-md text-left max-w-2xl">
        {["Explore a vast collection of mouthwatering recipes.",
          "Share your culinary masterpieces with the world.",
          "Connect with a vibrant community of fellow food enthusiasts.",
          "Discover dishes from around the globe."]
          .map((item, index) => (
            <li key={index} className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}