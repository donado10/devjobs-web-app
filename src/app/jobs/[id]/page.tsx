import { JobCompanyInfo, JobDescription } from "@/components/JobDetails";
import React from "react";
import { getData } from "@/components/Job";
import { Suspense } from "react";
import { JobFooterLayout } from "@/components/Layouts";

// Define the Params type
interface Params {
  params: Promise<{ id: number }>;
}

const page: React.FC<Params> = async ({ params }) => {
  const param = (await params).id;
  const data = await getData();
  const job = data.find((job) => job.id === Number(param))!;

  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute right-1/2 top-0 flex w-full -translate-y-[1%] translate-x-1/2 flex-col items-center gap-8">
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
        <JobFooterLayout>
          <div className="xs:block md:hidden">
            <button className="w-full rounded-md bg-devops-primary-violet px-4 py-3">
              <span className="font-semibold">Apply Now</span>
            </button>
          </div>
          <div className="items-center justify-between xs:hidden md:flex">
            <div>
              <h1 className="text-xl font-bold">{job.position}</h1>
              <h2 className="text-devops-secondary-gray">So Digital Inc.</h2>
            </div>
            <button className="w-fit rounded-md bg-devops-primary-violet px-4 py-3">
              <span className="font-semibold text-white">Apply Now</span>
            </button>
          </div>
        </JobFooterLayout>
      </div>
    </main>
  );
};

export default page;
