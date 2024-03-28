"use client";

import { DataContext } from "@/app/context";
import { useContext } from "react";

const Page = () => {
  const context = useContext(DataContext);
  console.log("CONTEXT: ", context);

  return (
    <div className="h-[100vh] flex items-center justify-center w-full bg-black">
      page
    </div>
  );
};

export default Page;
