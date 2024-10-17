"use client";

import Image from "next/image";
import ParhoLogo from "@/public/assets/ParhoLogo.svg";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex  items-center justify-end md:justify-between px-4 py-6">
        <Image alt="Parho Logo" src={ParhoLogo} />
        <ul className="md:flex gap-10 items-center text-intoTheNight text-lg hidden ">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 items-center outline-none">
                Our Products <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="font-bold text-lg bg-white/60 border-white-80 rounded-lg">
                <DropdownMenuItem>
                  Pre<span className="text-[#EC5863]">M</span>ed.PK
                </DropdownMenuItem>
                <DropdownMenuItem>PreEngineering</DropdownMenuItem>
                <DropdownMenuItem>
                  AHS by Pre<span className="text-[#EC5863]">M</span>ed.PK
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#0C5ABC] focus:text-[#0C5ABC]">
                  Med<span className="font-normal">School</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#1D9391] focus:text-[#1D9391]">
                  SaudiPrep
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="hover:cursor-pointer">About Us</li>
          <li className="hover:cursor-pointer">Our Team</li>
          <li className="hover:cursor-pointer">Build LLC</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
