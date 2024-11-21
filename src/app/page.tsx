import Filter from "@/components/Filter";
import { JobCards } from "@/components/Job";
import React from "react";

interface Params {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export const dynamic = "force-dynamic";

export default async function Home({ searchParams }: Params) {
  const job = (await searchParams).jobTitle;
  const location = (await searchParams).location;
  const fullTime = (await searchParams).fullTime;

  return (
    <main className="relative w-full p-8">
      <div className="absolute right-1/2 top-0 flex w-full -translate-y-1/2 translate-x-1/2 items-center justify-center">
        <Filter />
      </div>
      <JobCards filterTitle={job} location={location} fullTime={fullTime} />
    </main>
  );
}
