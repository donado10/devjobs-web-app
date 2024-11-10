import React from "react";

const page = () => {
  return (
    <main className="relative w-full p-8 min-h-screen">
      <div className="absolute right-1/2 translate-x-1/2 top-0 -translate-y-[10%]  w-4/5">
        <div className="relative w-full flex flex-col bg-white items-center justify-center px-4 py-12 gap-4 rounded-md">
          <h1 className="text-black font-bold text-2xl">Scoot</h1>
          <h2 className="text-devops-secondary-darkGrey">scoot.com</h2>
          <button className="px-4 py-3 bg-devops-primary-lightViolet/20  w-fit rounded-sm">
            <span className="text-devops-primary-violet font-semibold">
              Company Site
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
