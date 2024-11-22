import Image from "next/image";
import { JobCompanyInfoLayout, JobDescriptionLayout } from "./Layouts";

interface IJobCompanyInfo {
  company: string;
  logo: string;
  logoBackground: string;
  website: string;
}

interface IJobDescription {
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
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

export const JobCompanyInfo: React.FC<IJobCompanyInfo> = async ({
  company,
  logo,
  logoBackground,
  website,
}) => {
  return (
    <JobCompanyInfoLayout>
      <div className="relative flex-col items-center justify-center gap-4 rounded-md px-4 py-12 xs:flex md:hidden">
        <div
          className={`absolute inset-0 left-1/2 flex aspect-square w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl`}
          style={{ backgroundColor: `${logoBackground}` }}
        >
          <Image src={logo} alt="" width={40} height={40} />
        </div>
        <h1 className="text-2xl font-bold">{company}</h1>
        <h2 className="text-devops-secondary-darkGrey">{website}</h2>
        <button className="w-fit rounded-md bg-devops-primary-lightViolet/20 px-4 py-3">
          <span className="font-semibold text-devops-primary-violet">
            Company Site
          </span>
        </button>
      </div>
      <div className="relative h-[8rem] w-full items-center gap-4 rounded-md xs:hidden md:flex">
        <div
          className="flex aspect-square w-[128px] items-center justify-center rounded-md"
          style={{ backgroundColor: `${logoBackground}` }}
        >
          <Image src={logo} alt="" width={100} height={100} />
        </div>
        <div className="mx-8 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{company}</h1>
          <h2 className="text-devops-secondary-darkGrey">{website}</h2>
        </div>
        <button className="ml-auto mr-4 w-fit rounded-md bg-devops-primary-lightViolet/20 px-4 py-3">
          <span className="font-semibold text-devops-primary-violet">
            Company Site
          </span>
        </button>
      </div>
    </JobCompanyInfoLayout>
  );
};

export const JobDescription: React.FC<IJobDescription> = async ({
  position,
  location,
  postedAt,
  contract,
  description,
  requirements,
  role,
}) => {
  return (
    <JobDescriptionLayout>
      <div className="gap-4 xs:flex xs:flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-devops-secondary-gray">
            {postedAt} . {contract}
          </h2>
          <h1 className="text-xl font-bold">{position}</h1>
          <h2 className="font-semibold text-devops-primary-violet">
            {location}
          </h2>
        </div>
        <button className="rounded-md bg-devops-primary-violet px-4 py-3 hover:bg-devops-primary-violet/40 xs:mt-12 xs:w-full md:mt-0 md:w-fit">
          <span className="font-semibold text-white">Company Site</span>
        </button>
      </div>
      <div className="my-8">
        <p className="text-devops-secondary-darkGrey">{description}</p>
        <div className="mt-8 flex flex-col gap-8">
          <h1 className="text-2xl font-bold">Requirements</h1>
          <p className="text-devops-secondary-darkGrey">
            {requirements.content}
          </p>
          <ul className="ml-6 flex list-inside list-disc flex-col gap-4">
            {requirements.items.map((item, i) => (
              <li key={i} className="flex gap-8 text-devops-primary-violet">
                <span className="text-devops-secondary-darkGrey">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-8">
          <h1 className="text-2xl font-bold">What You Will Do</h1>
          <p className="text-devops-secondary-darkGrey">{role.content}</p>
          <ol className="ml-4 flex flex-col gap-4">
            {role.items.map((item, i) => (
              <li key={i} className="flex gap-4 text-devops-secondary-darkGrey">
                <span className="font-bold text-devops-primary-violet">
                  {i + 1}
                </span>{" "}
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </JobDescriptionLayout>
  );
};
