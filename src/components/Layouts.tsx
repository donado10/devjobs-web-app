"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export const JobCardLayout: React.FC<{ id: number; children: ReactNode }> = ({
  id,
  children,
}) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme("midnight");
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let className = "relative mt-20 flex flex-col gap-16  p-8 pt-12 rounded-md";

  if (resolvedTheme === "midnight") {
    className = className + " " + "bg-devops-primary-darkBlue text-white";
  }
  if (resolvedTheme === "light") {
    className = className + " " + "bg-devops-secondary-lightGrey text-black";
  }

  return (
    <Link href={`/jobs/${id}`} className={className}>
      {children}
    </Link>
  );
};
