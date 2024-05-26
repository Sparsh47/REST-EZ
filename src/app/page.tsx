"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import hero from "../../public/hero.png";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-[130vh] w-full flex flex-col items-center justify-center">
        <p className="text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-sky-800 to-cyan-400 py-8">
          APIs designed &
          <br />
          built faster with AI.
        </p>
        <Button
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-10"
          onClick={() => {
            router.push(`rest-api`);
          }}
        >
          Get Started
        </Button>
        <Image
          src={hero}
          alt="hero-image"
          className="w-[70vw] rounded-[25px]"
        />
      </div>
    </>
  );
}
