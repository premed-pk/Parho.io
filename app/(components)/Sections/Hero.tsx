"use client";

import Image from "next/image";
import React from "react";
import ParhoLogo2 from "@/public/assets/ParhoLogo2.svg";
import ParhoButton from "@/components/ParhoButton";
import HeroIcons from "@/public/assets/HeroIcons.svg";
import TextAnimation from "@/components/TextAnimation";
import DotLineAnimation from "@/components/DotLineAnimation";

const Hero: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-xl flex flex-col mx-auto px-4 gap-7 my-16 text-center items-center justify-center h-[70vh] relative">
        <div>
          <TextAnimation />
        </div>
        <div className="flex flex-col relative items-center px-4">
          <div className="flex gap-4 items-center relative flex-col md:flex-row">
            <div className="md:font-black text-sunshine text-8xl font-bold md:text-9xl leading-[80%] font-clash ">
              Just
            </div>
            <Image
              src={ParhoLogo2}
              alt="Parho Logo"
              className="scale-90 md:scale-100"
            />
          </div>
          <DotLineAnimation />
        </div>
        <ParhoButton text="Get Started" chevron={true} className="mt-8" />
        <Image
          src={HeroIcons}
          alt="ICONS"
          className="absolute hidden md:block w-auto -z-50"
        />
      </div>
    </>
  );
};

export default Hero;
