import React from "react";
import Image from "next/image";
import { JobCardLayout } from "./Layouts";
import { promises as fs } from "fs";

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
  // const response = await fetch("/data/data.json");
  const file = await fs.readFile(
    process.cwd() + "/src/app/data/data.json",
    "utf8",
  );
  const data: IJobs[] = JSON.parse(file);
  //const data: IJobs[] = await response.json();

  return data;
}

export const logo: React.FC<{ logo: string }> = ({ logo }) => {
  return (
    <div
      className={`a absolute inset-0 left-12 flex aspect-square w-12 -translate-y-1/2 items-center justify-center rounded-xl`}
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
    <JobCardLayout id={id}>
      <div
        className={`absolute inset-0 left-12 flex aspect-square w-12 -translate-y-1/2 items-center justify-center rounded-xl`}
        style={{ backgroundColor: logoBackground }}
      >
        <Image src={logo} width={40} height={40} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-devops-secondary-gray">
          {postedAt} . {contract}
        </h2>
        <h1 className="text-xl font-bold">{position}</h1>
        <h2 className="text-devops-secondary-gray">{company}</h2>
      </div>
      <h1 className="font-semibold text-devops-primary-violet">{location}</h1>
    </JobCardLayout>
  );
};

export const JobCards: React.FC<{
  filterTitle?: string | undefined;
  location?: string | undefined;
  fullTime?: string | undefined;
}> = async ({ filterTitle, location, fullTime }) => {
  const data = await getData();
  if (filterTitle || location || fullTime) {
    return (
      <div className="xs:flex xs:flex-col md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-4">
        {data
          .filter((job) => {
            if (fullTime) {
              return job.contract.toLowerCase().includes(fullTime);
            }
            return job;
          })
          .filter((job) => {
            if (location) {
              return job.location.toLowerCase().includes(location);
            }
            return job;
          })
          .filter((job) => {
            if (filterTitle) {
              return (
                job.company.toLowerCase().includes(filterTitle) ||
                job.position.toLowerCase().trim().includes(filterTitle)
              );
            }
            return job;
          })
          .map((job) => (
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
  return (
    <div className="xs:flex xs:flex-col md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-4">
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
};
