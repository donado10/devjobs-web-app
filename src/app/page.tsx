import Header from "@/components/Header";
import { JobCards } from "@/components/Job";

export default function Home() {
  return (
    <div className="">
      <div>
        <Header />
        <main className="w-full p-8">
          <JobCards />
        </main>
      </div>
    </div>
  );
}
