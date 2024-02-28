"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import hero from "../../public/hero.png";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-[130vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
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
