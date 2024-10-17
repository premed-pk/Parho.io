"use client";

import ParhoButton from "@/components/ParhoButton";
import Image from "next/image";
import React from "react";
import ss1 from "@/public/assets/ss1.svg";
import ss2 from "@/public/assets/ss2.svg";
import crown from "@/public/assets/crown.svg";

const DashboardDisplay: React.FC = () => {
  return (
    <>
      <div className="relative mt-12 md:mt-48 mb-28">
        <div className="first flex-col-reverse md:flex-row flex justify-between items-center text-right">
          <Image
            alt="Dashboard ScreenShot"
            src={ss1}
            className="w-auto xl:ml-0 md:-ml-80"
          />
          <div className="flex flex-col gap-7 mr-4 md:mr-10">
            <h1 className="font-bold text-4xl md:text-6xl text-sunshine">
              Real-Time <span className="text-darkShadow">Statistics</span>
            </h1>
            <p className="text-coalPitch text-xl md:text-2xl w-10/12 ml-auto">
              Get real-time personalised stats and metrics to gauge your prep!
            </p>
            <p className="text-coalPitch text-xl md:text-2xl w-10/12 ml-auto">
              Make streaks and climb to the top of the daily leaderboard!
              Learning was never this fun!
            </p>
            <ParhoButton
              text="Sign Up Free"
              chevron={true}
              className="w-fit ml-auto !py-2"
            />
          </div>
        </div>
        <div className="first flex-col md:flex-row flex justify-between items-center text-left relative">
          <div className="flex flex-col gap-7 ml-4 md:ml-10 relative">
            <Image
              alt="crown"
              src={crown}
              className="absolute right-10 w-auto top-[38%] mix-blend-color-burn"
            />
            <h1 className="font-bold text-4xl md:text-6xl text-sunshine">
              Courses, Quizzes{" "}
              <span className="text-darkShadow">and More!</span>
            </h1>
            <p className="text-coalPitch text-xl md:text-2xl w-11/12 mr-auto">
              Parho offers a variety of courses and cohorts, with daily tests,
              discussion lectures and one of the biggest discussion networks in
              Pakistan!
            </p>
            <p className="text-coalPitch text-xl md:text-2xl w-11/12 mr-auto">
              What’s more? We have questions banks of over 20,000 questions (and
              growing each day)!
            </p>
            <ParhoButton
              text="Supercharge Prep"
              chevron={true}
              className="w-fit mr-auto !py-2"
            />
          </div>
          <Image
            alt="Dashboard ScreenShot"
            src={ss2}
            className="w-auto xl:-ml-0 md:-mr-80"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardDisplay;
