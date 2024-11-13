import React from "react";
import Image from "next/image";
import { hslToHex } from "@/utils/functions";
import Link from "next/link";

interface IJobs {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

interface IJobCard {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}

export async function getData() {
  "use server";
  const response = await fetch("http://localhost:3000/data/data.json");
  const data: IJobs[] = await response.json();

  return data;
}

export const logo: React.FC<{ background: string; logo: string }> = ({
  background,
  logo,
}) => {
  return (
    <div
      className={`absolute inset-0 -translate-y-1/2 left-12 a aspect-square w-12 rounded-xl flex items-center justify-center`}
    >
      <Image src={logo} width={40} height={40} alt="" />
    </div>
  );
};

export const JobCard: React.FC<IJobCard> = ({
  id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}) => {
  return (
    <Link
      href={`/jobs/${id}`}
      className="relative flex flex-col gap-16 text-black mt-20 bg-devops-secondary-white p-8 pt-12"
    >
      <div
        className={`absolute inset-0 -translate-y-1/2 left-12   aspect-square w-12 rounded-xl flex items-center justify-center`}
        style={{ backgroundColor: logoBackground }}
      >
        <Image src={logo} width={40} height={40} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-devops-secondary-gray">
          {postedAt} . {contract}
        </h2>
        <h1 className="text-black font-bold text-xl">{position}</h1>
        <h2 className="text-devops-secondary-gray">{company}</h2>
      </div>
      <h1 className="text-devops-primary-violet font-semibold">{location}</h1>
    </Link>
  );
};

export async function JobCards() {
  const data = await getData();
  return (
    <div className="xs:flex xs:flex-col md:grid md:grid-cols-2 md:gap-8 xl:gap-4 xl:grid-cols-3 ">
      {data.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          company={job.company}
          logo={job.logo}
          contract={job.contract}
          location={job.location}
          logoBackground={job.logoBackground}
          position={job.position}
          postedAt={job.postedAt}
        />
      ))}
    </div>
  );
}
