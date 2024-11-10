import React from "react";
import FilterIcon from "@/assets/mobile/icon-filter.svg";
import SearchIcon from "@/assets/mobile/icon-search.svg";
import Image from "next/image";

const Filter = () => {
  return (
    <div className="w-full rounded-md px-2 py-4 text-sm flex items-center justify-between gap-4 bg-white">
      <input
        type="text"
        placeholder="Filter by title..."
        className="bg-transparent outline-none text-black"
      />
      <div className="flex items-center gap-4 ">
        <button>
          <span>
            <Image src={FilterIcon} alt="" />
          </span>
        </button>
        <button className="bg-devops-primary-violet p-2 rounded-md flex items-center justify-center">
          <span>
            <Image src={SearchIcon} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
