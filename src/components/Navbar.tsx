"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="absolute w-full h-[60px] flex items-center justify-between px-10 bg-transparent font-bold text-2xl z-20">
        <h1
          className="cursor-pointer font-medium relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
          onClick={() => router.push("/")}
        >
          <span className="text-4xl px-2 text-[#48519C]">{"{"}</span>
          _restEZ
          <span className="text-4xl px-2 text-[#48519C]">{"}"}</span>
        </h1>
        <div>
          <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
