import Image from "next/image";

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
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className="relative w-4/5 flex flex-col bg-white items-center justify-center px-4 py-12 gap-4 rounded-md">
      <div
        className={`absolute inset-0  left-1/2 -translate-x-1/2 -translate-y-1/2  aspect-square w-12 rounded-xl flex items-center justify-center `}
        style={{ backgroundColor: `${logoBackground}` }}
      >
        <Image src={logo} alt="" width={40} height={40} />
      </div>
      <h1 className="text-black font-bold text-2xl">{company}</h1>
      <h2 className="text-devops-secondary-darkGrey">{website}</h2>
      <button className="px-4 py-3 bg-devops-primary-lightViolet/20  w-fit rounded-md">
        <span className="text-devops-primary-violet font-semibold">
          Company Site
        </span>
      </button>
    </div>
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
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className="p-4 bg-white w-4/5 flex flex-col rounded-md">
      <div className="flex flex-col gap-2 ">
        <h2 className="text-devops-secondary-gray">
          {postedAt} . {contract}
        </h2>
        <h1 className="text-black font-bold text-xl">{position}</h1>
        <h2 className="text-devops-primary-violet font-semibold">{location}</h2>
      </div>
      <button className="px-4 py-3 bg-devops-primary-violet  w-full rounded-md mt-12">
        <span className="text-white font-semibold">Company Site</span>
      </button>
      <div className="text-devops-secondary-darkGrey my-8 ">
        <p>{description}</p>
        <div className="mt-8 flex flex-col gap-8">
          <h1 className="text-2xl font-bold text-black">Requirements</h1>
          <p>{requirements.content}</p>
          <ul className="ml-6 flex flex-col gap-4">
            {requirements.items.map((item, i) => (
              <li key={i} className="flex items-center gap-8">
                <span className="block w-[4px]  h-[4px] rounded-full bg-devops-primary-violet"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-8">
          <h1 className="text-2xl font-bold text-black">What You Will Do</h1>
          <p>{role.content}</p>
          <ol className="ml-4 flex flex-col gap-4">
            {role.items.map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className=" text-devops-primary-violet font-bold">
                  {i + 1}
                </span>{" "}
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
