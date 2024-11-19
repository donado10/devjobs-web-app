import Filter from "@/components/Filter";
import Header from "@/components/Header";
import { JobCards } from "@/components/Job";

export default function Home() {
  return (
    <main className="relative w-full p-8">
      <div className="absolute right-1/2 top-0 flex w-full -translate-y-1/2 translate-x-1/2 items-center justify-center">
        <Filter />
      </div>
      <JobCards />
    </main>
  );
}
