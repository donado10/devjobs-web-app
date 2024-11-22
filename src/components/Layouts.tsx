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
  if (resolvedTheme === "lightGray") {
    className = className + " " + "bg-devops-secondary-white text-black";
  }

  return (
    <Link href={`/jobs/${id}`} className={className}>
      {children}
    </Link>
  );
};

export const ModalLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let className = "w-4/5 rounded-md ";

  if (resolvedTheme === "midnight") {
    className = className + " " + "bg-devops-primary-darkBlue text-white";
  }
  if (resolvedTheme === "lightGray") {
    className = className + " " + "bg-devops-secondary-white text-black";
  }

  return <div className={className}>{children}</div>;
};

export const JobCompanyInfoLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let className = "w-4/5  ";

  if (resolvedTheme === "midnight") {
    className = className + " " + "bg-devops-primary-darkBlue text-white";
  }
  if (resolvedTheme === "lightGray") {
    className = className + " " + "bg-devops-secondary-white text-black";
  }

  return <section className={className}>{children}</section>;
};

export const JobDescriptionLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let className = "flex w-4/5 flex-col rounded-md  p-4 ";

  if (resolvedTheme === "midnight") {
    className = className + " " + "bg-devops-primary-darkBlue text-white";
  }
  if (resolvedTheme === "lightGray") {
    className = className + " " + "bg-devops-secondary-white text-black";
  }

  return <div className={className}>{children}</div>;
};

export const JobFooterLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let className = "w-full  p-8";

  if (resolvedTheme === "midnight") {
    className = className + " " + "bg-devops-primary-darkBlue text-white";
  }
  if (resolvedTheme === "lightGray") {
    className = className + " " + "bg-devops-secondary-white text-black";
  }

  return <div className={className}>{children}</div>;
};
