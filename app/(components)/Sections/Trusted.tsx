import React from "react";
import Image from "next/image";
import NumInc from "@/components/ui/numInc";
import curly from "@/public/assets/curly.svg";
import crown from "@/public/assets/crown.svg";
import right from "@/public/assets/right.svg";
import left from "@/public/assets/left.svg";

const Trusted: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 relative my-28">
        <div className="text-center relative">
          <Image
            src={crown}
            alt="crowm"
            className="absolute  -top-32 left-0 md:left-60 w-auto mix-blend-color-burn -z-10"
          />
          <Image
            src={curly}
            alt="crowm"
            className="absolute  top-0 left-[47%] w-auto mix-blend-color-burn -z-10 hidden md:block"
          />
          <h1 className="text-[#20202C] font-bold text-4xl md:text-6xl font-clash">
            We are Trusted
          </h1>
          <div className="flex justify-center text-center">
            <Image
              src={left}
              alt="left"
              className="w-auto scale-75 -mr-5  -mt-7 hidden md:block"
            />
            <h1 className="font-bold text-4xl md:text-7xl lg:text-8xl font-clash text-darkShadow pb-10">
              A hundred Thousand
            </h1>
            <Image
              src={right}
              alt="right"
              className="w-auto scale-75 -ml-5 -mt-7 hidden md:block"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 w-full relative text-intoTheNight max-w-screen-xl mx-auto px-4">
          <div className="flex items-center relative justify-center gap-x-2 -ml-4 mt-5">
            <div className="flex flex-col justify-center gap-x-2 items-center">
              <strong className="text-4xl md:text-7xl font-extrabold">
                <NumInc num={89} delay={1} />
                <span className="text-sunshine">%</span>
              </strong>
              <span className="text-black/50 text-xl font-bold text-center">
                ADMISSION RATE
              </span>
            </div>
          </div>

          <div className="flex items-center relative justify-center gap-x-2 -ml-4 mt-5">
            <div className="flex flex-col justify-center gap-x-2 items-center">
              <strong className="text-4xl md:text-7xl font-extrabold">
                <NumInc num={22} delay={1} />
                <span className="text-sunshine">M</span>
              </strong>
              <span className="text-black/50 text-xl font-bold text-center">
                QUIZ ATTEMPTS
              </span>
            </div>
          </div>

          <div className="flex items-center relative justify-center gap-x-2 -ml-4 mt-5">
            <div className="flex flex-col justify-center gap-x-2 items-center">
              <strong className="text-4xl md:text-7xl font-extrabold">
                <NumInc num={100} delay={1} />
                <span className="text-sunshine">
                  <span className="text-intoTheNight">K</span>+
                </span>
              </strong>
              <span className="text-black/50 text-xl font-bold text-center">
                STUDENTS
              </span>
            </div>
          </div>

          <div className="flex items-center relative justify-center gap-x-2 -ml-4 mt-5">
            <div className="flex flex-col justify-center gap-x-2 items-center">
              <strong className="text-4xl md:text-7xl font-extrabold">
                <NumInc num={18} delay={1} />
                <span className="text-sunshine">M</span>
              </strong>
              <span className="text-black/50 text-xl font-bold text-center">
                MINUTES SPENT
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
