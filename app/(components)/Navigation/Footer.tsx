"use client";

import React from "react";
import ParhoLogoBig2 from "@/public/assets/ParhoLogoBig2.svg";
import Image from "next/image";
import ParhoLogo from "@/public/assets/ParhoLogo.svg";
import ParhoButton from "@/components/ParhoButton";
import ParhoSmall from "@/public/assets/ParhoSmall.svg";
import insta from "@/public/assets/insta.svg";
import facebook from "@/public/assets/facebook.svg";
import linkedin from "@/public/assets/linkedin.svg";
import download1 from "@/public/assets/download1.svg";
import download2 from "@/public/assets/download2.svg";

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer Section  */}
      <div className="relative mb-48 mt-20 px-4 flex gap-7 flex-col items-center justify-center text-ceter">
        <Image
          src={ParhoLogoBig2}
          alt="Parho Logo "
          className="absolute -z-10  w-auto right-0 -top-48 mix-blend-luminosity"
        />
        <div className="flex items-center flex-col md:flex-row justify-center gap-4">
          <h1 className="text-sunshine font-bold text-5xl md:text-6xl font-clash">
            Exam Hai? Just
          </h1>
          <Image src={ParhoLogo} alt="Parho logo" className="w-auto" />
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold font-clash text-darkShadow">
          Supercharge Your Prep!
        </h3>
        <p className="font-clash text-2xl md:text-3xl text-intoTheNight md:w-1/2 text-center mx-auto">
          Join the hundreds of thousands of students who are already aiming high
          with Parho!
        </p>
        <ParhoButton text="Sign Up for Free" chevron={true} className="w-fit" />
      </div>

      {/* Main Footer  */}
      <div className="md:max-w-screen-xl md:gap-24 lg:gap-7 gap-7 flex-wrap lg:flex-nowrap mx-4 flex items-center justify-between xl:mx-auto px-7 md:px-14 pt-7 md:pt-14 pb-7 bg-intoTheNight rounded-2xl">
        <div className=" flex md:flex-row gap-12 flex-wrap md:flex-nowrap flex-col-reverse">
          {/* Products  */}
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold font-clash opacity-75">Products</h1>
            <ul>
              <li className="opacity-80 text-sm">The Parho Vault</li>
              <li className="opacity-80 text-sm">PreMed.PK</li>
              <li className="opacity-80 text-sm">PreEngineering.PK</li>
              <li className="opacity-80 text-sm">AHS by PreMed</li>
              <li className="opacity-80 text-sm">MedSchool.PK</li>
            </ul>
          </div>

          {/* About Us and Info  */}
          <div className="flex flex-col justify-between min-w-fit gap-7">
            {/* About US  */}
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold font-clash opacity-75">About Us</h1>
              <ul>
                <li className="opacity-80 text-sm">Blog</li>
                <li className="opacity-80 text-sm">The Team</li>
                <li className="opacity-80 text-sm">Our Mission</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              {/* Info  */}
              <h1 className="font-semibold font-clash opacity-75">Info</h1>
              <ul>
                <li className="opacity-80 text-sm">Contact Us</li>
                <li className="opacity-80 text-sm">Buildd LLC</li>
                <li className="opacity-80 text-sm">Code of Conduct</li>
                <li className="opacity-80 text-sm">AHS by PreMed</li>
                <li className="opacity-80 text-sm">Sale Policy</li>
              </ul>
            </div>
          </div>

          {/* Parho Main  */}
          <div className="flex flex-col max-w-fit gap-4">
            <div className="flex flex-col gap-4 w-fit">
              <Image src={ParhoSmall} alt="Parho Logo" className="" />
              <h1 className="text-lg font-medium font-clash"></h1>
            </div>
            <div className="h-[2px] w-1/2 bg-gradient-to-r from-primary to-transparent rounded-full" />
            <div className="font-clash text-lg font-medium w-3/4">
              Parho LLC is Pakistan’s No. 1 Education Platform offering courses
              and resources from High School to Undergrad Level!
            </div>
            <div className="flex gap-3 items-center">
              <Image src={linkedin} alt="Linkedin" className="w-auto" />
              <Image src={insta} alt="Instagram" className="w-auto" />
              <Image src={facebook} alt="Facebook" className="w-auto" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between text-left lg:text-right h-60 lg:h-72">
          {/* Top */}
          <div className="top flex flex-col gap-3">
            <h1 className="font-clash font-semibold text-primary">
              Download the <span className="text-sunshine">Parho App</span>
            </h1>
            <p className="text-xs font-light text-primary">
              Practice Questions, Study Notes, Shortlistings and Much More in
              just one app!
            </p>
            <div className="flex gap-4 lg:ml-auto -ml-3 md:-ml-6 scale-90 lg:scale-100">
              <Image src={download1} alt="Download 1" className="w-auto" />
              <Image src={download2} alt="Download 2" className="w-auto" />
            </div>
          </div>

          {/* Bottom  */}
          <div className="flex flex-col text-left lg:text-right">
            <p className="text-primary opacity-80 font-clash text-sm">
              contact@parho.io
            </p>
            <p className="text-primary opacity-80 font-clash text-sm">
              H# 4B/II, 8th East Street, Phase 1, DHA, Karachi
            </p>
          </div>
        </div>
      </div>

      {/* Sub Footer  */}
      <div className="flex items-center justify-between max-w-screen-xl mt-4 mb-2 px-2 mx-4 xl:mx-auto gap-4 xl:gap-0 flex-wrap">
        <p className="text-intoTheNight font-medium text-xs">
          © 2024 — Parho LLC, All Rights Reserved. Parho is a registered
          trademark of Buildd LLC.
        </p>
        <p className="text-intoTheNight font-medium text-xs flex gap-6">
          <span>Privacy</span> <span>Terms</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
