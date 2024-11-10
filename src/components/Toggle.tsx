"use client";

import React, { useState } from "react";
import Image from "next/image";

import LightToggle from "@/assets/common/lightToggle.svg";
import DarkToggle from "@/assets/common/darkToggle.svg";

const Toggle = () => {
  const [theme, setTheme] = useState<{ theme: "dark" | "light" }>({
    theme: "light",
  });

  return (
    <button
      onClick={() =>
        setTheme((prev) => {
          if (prev.theme === "dark") {
            return { theme: "light" };
          }
          return { theme: "dark" };
        })
      }
    >
      {theme.theme === "light" && (
        <span>
          <Image src={LightToggle} alt="" />
        </span>
      )}
      {theme.theme === "dark" && (
        <span>
          <Image src={DarkToggle} alt="" />
        </span>
      )}
    </button>
  );
};

export default Toggle;
