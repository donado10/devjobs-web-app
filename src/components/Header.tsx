import React from "react";
import LightShape from "@/assets/common/lightShape.svg";
import DarkShape from "@/assets/common/darkShape.svg";
import Toggle from "./Toggle";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="xs:flex md:hidden xl:hidden  pb-8  px-8 text-4xl  items-center w-full aspect-[1/0.3] justify-between bg-[url('/assets/mobile/bg-pattern-header.svg')] bg-no-repeat bg-cover">
        <span className="font-bold text-devops-secondary-white">devjobs</span>

        <div className="flex items-center gap-4">
          <span>
            <Image src={LightShape} alt="" />
          </span>
          <Toggle />
          <span>
            <Image src={DarkShape} alt="" />
          </span>
        </div>
      </div>
      <div className=" xs:hidden md:flex xl:hidden  pb-8  px-8 text-4xl  items-center w-full md:aspect-[1/0.3] justify-between bg-[url('/assets/tablet/bg-pattern-header.svg')] bg-no-repeat bg-cover">
        <span className="font-bold text-devops-secondary-white">devjobs</span>

        <div className="flex items-center gap-4">
          <span>
            <Image src={LightShape} alt="" />
          </span>
          <Toggle />
          <span>
            <Image src={DarkShape} alt="" />
          </span>
        </div>
      </div>
      <div className=" xs:hidden md:hidden xl:flex  pb-8  px-8 text-4xl  items-center w-full md:w-full md:h-[10rem] justify-between bg-[url('/assets/desktop/bg-pattern-header.svg')] bg-no-repeat bg-cover">
        <span className="font-bold text-devops-secondary-white">devjobs</span>

        <div className="flex items-center gap-4">
          <span>
            <Image src={LightShape} alt="" />
          </span>
          <Toggle />
          <span>
            <Image src={DarkShape} alt="" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
