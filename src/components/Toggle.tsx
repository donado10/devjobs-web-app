"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import LightToggle from "@/assets/common/lightToggle.svg";
import DarkToggle from "@/assets/common/darkToggle.svg";
import { useTheme } from "next-themes";

const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setTheme("lightGray");
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === "lightGray") {
    return (
      <button
        onClick={() => {
          setTheme("midnight");
        }}
      >
        <span>
          <Image src={LightToggle} alt="" />
        </span>
      </button>
    );
  }
  if (resolvedTheme === "midnight") {
    return (
      <button
        onClick={() => {
          setTheme("lightGray");
        }}
      >
        <span>
          <Image src={DarkToggle} alt="" />
        </span>
      </button>
    );
  }
};

export default Toggle;
