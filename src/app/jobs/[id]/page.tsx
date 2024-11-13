import { JobCompanyInfo, JobDescription } from "@/components/JobDetails";
import React from "react";
import { getData } from "@/components/Job";
import { Suspense } from "react";

// Define the Params type
interface Params {
  params: Promise<{ id: number }>;
}

const page: React.FC<Params> = async ({ params }) => {
  const param = (await params).id;
  const data = await getData();
  const job = data.find((job) => job.id === Number(param))!;

  return (
    <main className="relative w-full  min-h-screen">
      <div className="absolute right-1/2 translate-x-1/2 top-0 -translate-y-[1%]  w-full flex flex-col items-center gap-8  ">
        <Suspense fallback={<h1>Loading....</h1>}>
          <JobCompanyInfo
            company={job.company}
            logo={`.${job.logo}`}
            website={job.website}
            logoBackground={job.logoBackground}
          />
        </Suspense>
        <Suspense fallback={<h1>Loading....</h1>}>
          <JobDescription
            contract={job.contract}
            description={job.description}
            location={job.location}
            position={job.position}
            postedAt={job.postedAt}
            requirements={job.requirements}
            role={job.role}
            website={job.website}
          />
        </Suspense>
        <div className="p-8 bg-white w-full ">
          <div className="xs:block md:hidden">
            <button className="px-4 py-3 bg-devops-primary-violet  w-full rounded-md">
              <span className="text-white font-semibold">Apply Now</span>
            </button>
          </div>
          <div className="xs:hidden md:flex  items-center justify-between">
            <div>
              <h1 className="text-black font-bold text-xl">{job.position}</h1>
              <h2 className="text-devops-secondary-gray">So Digital Inc.</h2>
            </div>
            <button className="px-4 py-3 bg-devops-primary-violet  w-fit rounded-md">
              <span className="text-white font-semibold">Apply Now</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
