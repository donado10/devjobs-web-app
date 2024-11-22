import React from "react";
import LightShape from "@/assets/common/lightShape.svg";
import DarkShape from "@/assets/common/darkShape.svg";
import Toggle from "./Toggle";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="aspect-[1/0.3] w-full items-center justify-between bg-[url('/assets/mobile/bg-pattern-header.svg')] bg-cover bg-no-repeat px-8 pb-8 text-4xl xs:flex md:hidden xl:hidden">
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
      <div className="w-full items-center justify-between bg-[url('/assets/tablet/bg-pattern-header.svg')] bg-cover bg-no-repeat px-8 pb-8 text-4xl xs:hidden md:flex md:aspect-[1/0.2] xl:hidden">
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
      <div className="w-full items-center justify-between bg-[url('/assets/desktop/bg-pattern-header.svg')] bg-cover bg-no-repeat px-8 pb-8 text-4xl xs:hidden md:hidden md:h-[12rem] md:w-full xl:flex">
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
