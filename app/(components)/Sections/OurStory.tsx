import Image from "next/image";
import React from "react";
import leftB from "@/public/assets/leftB.jpeg";
import rightB from "@/public/assets/rightB.jpeg";
import leftT from "@/public/assets/leftT.png";
import rightT from "@/public/assets/rightT.png";
import midT from "@/public/assets/midT.png";
import midB from "@/public/assets/midB.png";
import ParhoButton from "@/components/ParhoButton";

const OurStory: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-14 max-w-screen-xl mx-auto px-4 my-48">
        <div className="img-top grid md:grid-cols-11 gap-10">
          <Image
            priority
            src={leftT}
            alt="img"
            className="w-full col-span-4 rounded-2xl h-full"
          />
          <Image
            priority
            src={midT}
            alt="img"
            className="w-full rounded-2xl col-span-3 h-full hidden md:block"
          />
          <Image
            priority
            src={rightT}
            alt="img"
            className="w-full rounded-2xl col-span-4 h-full"
          />
        </div>
        <div className="text flex flex-col gap-5 text-center items-center justify-center">
          <p className="font-clash text-3xl md:text-4xl mb-7 text-black">
            Read our Story
          </p>
          <h1 className="font-bold text-5xl md:text-6xl font-clash text-darkShadow">
            What Led To Parho LLC
          </h1>
          <p className="text-xl md:text-3xl text-black w-4/6">
            Read all about PreMed, which started it all, then Buildd LLC, and
            then what made Parho!
          </p>
          <ParhoButton
            text="The Dream"
            chevron={false}
            className="mx-auto w-fit !py-2"
          />
        </div>

        <div className="img-btm grid md:grid-cols-11 gap-10">
          <Image
            priority
            src={leftB}
            alt="img"
            className="col-span-4 rounded-2xl  w-full h-full"
          />
          <Image
            priority
            src={midB}
            alt="img"
            className="rounded-2xl col-span-3  w-full h-full hidden md:block"
          />
          <Image
            priority
            src={rightB}
            alt="img"
            className="rounded-2xl col-span-4  w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default OurStory;
