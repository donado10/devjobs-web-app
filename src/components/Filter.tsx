"use client";

import React from "react";
import FilterIcon from "@/assets/mobile/icon-filter.svg";
import SearchIconMobile from "@/assets/mobile/icon-search.svg";
import SearchIconDesktop from "@/assets/desktop/icon-search.svg";
import LocationIconDesktop from "@/assets/desktop/icon-location.svg";
import Image from "next/image";

import useMediaQuery from "@/hooks/useMediaQuery";
import { EMediaQuery } from "@/hooks/useMediaQuery";

const FilterMobile = () => {
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-md bg-white px-2 py-4 text-sm">
      <input
        type="text"
        placeholder="Filter by title..."
        className="bg-transparent text-black outline-none"
      />
      <div className="flex items-center gap-4">
        <button>
          <span>
            <Image src={FilterIcon} alt="" />
          </span>
        </button>
        <button className="flex items-center justify-center rounded-md bg-devops-primary-violet p-2">
          <span>
            <Image src={SearchIconMobile} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

const FilterSmall = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-white text-sm">
      <div className="flex w-1/3 items-center gap-4 border-r-[1px] border-devops-secondary-darkGrey/50 px-4 py-6">
        <span>
          <Image src={SearchIconDesktop} width={20} height={20} alt="" />
        </span>
        <input
          type="text"
          placeholder="Filter by title..."
          className="bg-transparent text-black outline-none"
        />
      </div>
      <div className="flex w-1/3 items-center gap-4 px-4 py-6">
        <span>
          <Image src={LocationIconDesktop} width={15} height={15} alt="" />
        </span>
        <input
          type="text"
          placeholder="Filter by location..."
          className="bg-transparent text-black outline-none"
        />
      </div>
      <div className="flex w-1/3 items-center gap-4 border-l-[1px] border-devops-secondary-darkGrey/50 px-4 py-6">
        <input type="checkbox" className="" />
        <span className="text-sm font-bold text-black">Full Time</span>

        <button>
          <span className="rounded-md bg-devops-primary-violet p-2 text-white">
            Search
          </span>
        </button>
      </div>
    </div>
  );
};
const FilterBig = () => {
  return (
    <div className="flex w-full items-start justify-between rounded-md bg-white text-sm">
      <div className="flex w-2/4 items-center gap-4 border-r-[1px] border-devops-secondary-darkGrey/50 px-4 py-6">
        <span>
          <Image src={SearchIconDesktop} width={20} height={20} alt="" />
        </span>
        <input
          type="text"
          placeholder="Filter by title,companies,expertise..."
          className="w-full bg-transparent text-black outline-none"
        />
      </div>
      <div className="flex w-1/4 items-center gap-4 px-4 py-6">
        <span className="">
          <Image src={LocationIconDesktop} width={15} height={15} alt="" />
        </span>
        <input
          type="text"
          placeholder="Filter by location..."
          className="w-full bg-transparent text-black outline-none"
        />
      </div>
      <div className="flex w-1/4 items-center gap-4 border-l-[1px] border-devops-secondary-darkGrey/50 px-4 py-6">
        <input type="checkbox" className="" />
        <span className="text-sm font-bold text-black">Full Time</span>

        <button>
          <span className="rounded-md bg-devops-primary-violet p-2 text-white">
            Search
          </span>
        </button>
      </div>
    </div>
  );
};

const Filter = () => {
  const isMobile = useMediaQuery(EMediaQuery.MOBILE);
  const isSmall = useMediaQuery(EMediaQuery.SMALL);
  const isBig = useMediaQuery(EMediaQuery.BIG);
  return (
    <section className="w-[90%]">
      {isMobile && !isSmall && <FilterMobile />}
      {isSmall && !isBig && <FilterSmall />}
      {isBig && <FilterBig />}
    </section>
  );
};

export default Filter;
