"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import FilterIconLight from "@/assets/mobile/icon-filter-light.svg";
import FilterIconDark from "@/assets/mobile/icon-filter-dark.svg";
import SearchIconMobile from "@/assets/mobile/icon-search.svg";
import SearchIconDesktop from "@/assets/desktop/icon-search.svg";
import LocationIconDesktop from "@/assets/desktop/icon-location.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import useMediaQuery from "@/hooks/useMediaQuery";
import { EMediaQuery } from "@/hooks/useMediaQuery";
import {
  replaceMiddleValue,
  stripLeadingValue,
  stripTrailingValue,
} from "@/utils/functions";

import MyPortal from "./Overlay";
import Modal from "./Modal";
import { useTheme } from "next-themes";

interface IFilter {
  handleQueryString: (value: {
    title?: string;
    location?: string;
    fullTime?: boolean;
  }) => void;

  defaultValue: {
    title: string;
    location: string;
    fullTime: boolean;
  };
}

const FilterMobile: React.FC<IFilter> = ({
  handleQueryString,
  defaultValue,
}) => {
  const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [enableModal, setEnableModal] = useState(false);
  const [modalValue, setModalValue] = useState({
    location: defaultValue.location,
    fullTime: defaultValue.fullTime,
  });
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {}, [JSON.stringify(modalValue)]);
  if (!mounted) {
    return null;
  }

  let className =
    "flex w-full items-center justify-between gap-4 rounded-md  h-16 px-4 text-sm";

  if (resolvedTheme === "midnight") {
    className = className + " " + "bg-devops-primary-darkBlue text-white";
  }
  if (resolvedTheme === "lightGray") {
    className = className + " " + "bg-devops-secondary-white text-black";
  }

  return (
    <div className={className}>
      <input
        type="text"
        placeholder="Filter by title..."
        className="w-full bg-transparent outline-none"
        ref={titleRef}
        defaultValue={defaultValue.title}
      />
      <div className="flex items-center gap-4">
        <button onClick={() => setEnableModal(true)}>
          <span>
            {resolvedTheme === "lightGray" && (
              <Image src={FilterIconDark} alt="" />
            )}
            {resolvedTheme === "midnight" && (
              <Image src={FilterIconLight} alt="" />
            )}
          </span>
        </button>
        <button
          className="flex items-center justify-center rounded-md bg-devops-primary-violet p-2 hover:bg-devops-primary-violet/40"
          onClick={() => {
            handleQueryString({
              title: titleRef.current?.value,
              location: modalValue?.location,
              fullTime: modalValue?.fullTime,
            });
          }}
        >
          <span>
            <Image src={SearchIconMobile} alt="" />
          </span>
        </button>
      </div>
      {enableModal && (
        <MyPortal
          isOpen={true}
          onClose={() => setEnableModal(false)}
          modal={
            <Modal
              handleQueryString={handleQueryString}
              onClose={() => setEnableModal(false)}
              setValue={setModalValue}
              defaultValue={modalValue}
            />
          }
        />
      )}
    </div>
  );
};

const FilterSmall: React.FC<IFilter> = ({
  handleQueryString,
  defaultValue,
}) => {
  const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const locationRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const timeRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let className =
    "flex w-full items-center justify-between rounded-md text-sm h-16";

  if (resolvedTheme === "midnight") {
    className = className + " " + "bg-devops-primary-darkBlue text-white";
  }
  if (resolvedTheme === "lightGray") {
    className = className + " " + "bg-devops-secondary-white text-black";
  }

  return (
    <div className={className}>
      <div className="flex h-full w-1/3 items-center gap-4 border-r-[1px] border-devops-secondary-darkGrey/50 pl-4">
        <span>
          <Image src={SearchIconDesktop} width={20} height={20} alt="" />
        </span>
        <input
          type="text"
          placeholder="Filter by title..."
          className="bg-transparent outline-none"
          ref={titleRef}
          defaultValue={defaultValue.title}
        />
      </div>
      <div className="flex h-full w-1/3 items-center gap-4 pl-4">
        <span>
          <Image src={LocationIconDesktop} width={15} height={15} alt="" />
        </span>
        <input
          type="text"
          placeholder="Filter by location..."
          className="bg-transparent outline-none"
          ref={locationRef}
          defaultValue={defaultValue.location}
        />
      </div>
      <div className="flex h-full w-1/3 items-center gap-4 border-l-[1px] border-devops-secondary-darkGrey/50 pl-4">
        <input
          type="checkbox"
          className=""
          ref={timeRef}
          defaultChecked={defaultValue.fullTime}
        />
        <span className="text-sm font-bold">Full Time</span>

        <button
          className="rounded-md bg-devops-primary-violet p-2 text-white hover:bg-devops-primary-violet/40"
          onClick={() =>
            handleQueryString({
              title: titleRef.current?.value,
              location: locationRef.current?.value,
              fullTime: timeRef.current?.checked,
            })
          }
        >
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};
const FilterBig: React.FC<IFilter> = ({ handleQueryString, defaultValue }) => {
  const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const locationRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const timeRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let className =
    "flex w-full items-start justify-between rounded-md  text-sm  h-16";

  if (resolvedTheme === "midnight") {
    className = className + " " + "bg-devops-primary-darkBlue text-white";
  }
  if (resolvedTheme === "lightGray") {
    className = className + " " + "bg-devops-secondary-white text-black";
  }

  return (
    <div className={className}>
      <div className="flex h-full w-2/4 items-center justify-center gap-4 border-r-[1px] border-devops-secondary-darkGrey/50 pl-4">
        <span>
          <Image src={SearchIconDesktop} width={20} height={20} alt="" />
        </span>
        <input
          type="text"
          placeholder="Filter by title,companies,expertise..."
          className="w-full bg-transparent outline-none"
          ref={titleRef}
          defaultValue={defaultValue.title}
        />
      </div>
      <div className="flex h-full w-1/4 items-center gap-4 pl-4">
        <span className="">
          <Image src={LocationIconDesktop} width={15} height={15} alt="" />
        </span>
        <input
          type="text"
          placeholder="Filter by location..."
          className="t w-full bg-transparent outline-none"
          ref={locationRef}
          defaultValue={defaultValue.location}
        />
      </div>
      <div className="flex h-full w-1/4 items-center gap-4 border-l-[1px] border-devops-secondary-darkGrey/50 pl-4">
        <input
          type="checkbox"
          className=""
          ref={timeRef}
          defaultChecked={defaultValue.fullTime}
        />
        <span className="text-sm font-bold">Full Time</span>

        <button
          className="rounded-md bg-devops-primary-violet p-2 hover:bg-devops-primary-violet/40"
          onClick={() =>
            handleQueryString({
              title: titleRef.current?.value,
              location: locationRef.current?.value,
              fullTime: timeRef.current?.checked,
            })
          }
        >
          <span className="text-white">Search</span>
        </button>
      </div>
    </div>
  );
};

const Filter = () => {
  const isMobile = useMediaQuery(EMediaQuery.MOBILE);
  const isSmall = useMediaQuery(EMediaQuery.SMALL);
  const isBig = useMediaQuery(EMediaQuery.BIG);

  const searchParams = useSearchParams();
  const router = useRouter();

  const titleQueryHandler = useCallback((value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete("jobTile");
      return params;
    }

    params.set("jobTitle", value);
    return params;
  }, []);

  const locationQueryHandler = useCallback((value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete("location");
      return params;
    }

    params.set("location", value);
    return params;
  }, []);

  const timeQueryHandler = useCallback((value: boolean | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === null) {
      params.delete("fullTime");
      return params;
    }

    params.set("fullTime", value ? "full time" : "part time");
    return params;
  }, []);

  const handleQueryString = useCallback(
    (value: { title?: string; location?: string; fullTime?: boolean }) => {
      let paramsTitle;
      let paramsLocation;
      let paramsFullTime;
      let query = "";

      if (value.title) {
        paramsTitle = titleQueryHandler(value.title) as URLSearchParams;
      } else {
        paramsTitle = "";
      }

      if (value.location) {
        paramsLocation = locationQueryHandler(
          value.location,
        ) as URLSearchParams;

        paramsLocation = locationQueryHandler(
          value.location,
        ) as URLSearchParams;
      } else {
        paramsLocation = "";
      }

      if (value.fullTime) {
        paramsFullTime = timeQueryHandler(value.fullTime) as URLSearchParams;

        paramsFullTime = timeQueryHandler(value.fullTime) as URLSearchParams;
      } else {
        paramsFullTime = "";
      }

      if (!paramsTitle && !paramsLocation && !paramsFullTime) {
        query = "/";
        router.push(query);
        return;
      }

      query = paramsTitle + "&" + paramsLocation + "&" + paramsFullTime;

      if (query.split("")[query.length - 1] === "&") {
        query = stripTrailingValue(query);
      }

      if (query.split("")[0] === "&") {
        query = stripLeadingValue(query);
      }

      query = replaceMiddleValue(query);

      router.push("/?" + query);
      return;
    },
    [],
  );

  const getUrlData = useCallback(() => {
    return {
      title: searchParams.get("jobTitle") || "",
      location: searchParams.get("location") || "",
      fullTime: searchParams.get("fullTime") === "full time",
    };
  }, []);

  return (
    <section className="w-[90%]">
      {isMobile && !isSmall && (
        <FilterMobile
          handleQueryString={handleQueryString}
          defaultValue={getUrlData()}
        />
      )}
      {isSmall && !isBig && (
        <FilterSmall
          handleQueryString={handleQueryString}
          defaultValue={getUrlData()}
        />
      )}
      {isBig && (
        <FilterBig
          handleQueryString={handleQueryString}
          defaultValue={getUrlData()}
        />
      )}
    </section>
  );
};

export default Filter;
