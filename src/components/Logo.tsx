"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const Logo: React.FC<{ className: string; logo: string }> = ({
  className,
  logo,
}) => {
  /* const [backgroundClass, setBackgroundClass] = useState("");

  useEffect(() => {
    setBackgroundClass(className);
    console.log(className);
  }, []); */

  return (
    <div
      className={`absolute inset-0 -translate-y-1/2 left-12  aspect-square w-12 rounded-xl flex items-center justify-center`}
      style={{ backgroundColor: className }}
    >
      <Image src={logo} width={40} height={40} alt="" />
    </div>
  );
};
