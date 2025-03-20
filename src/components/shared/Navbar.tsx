"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="absolute w-full h-[60px] flex items-center justify-between px-10 bg-transparent font-bold text-2xl z-20">
        <Link href="/" className="cursor-pointer font-semibold text-black">
          <span className="text-4xl px-2 text-black">{"{"}</span>
          _restEZ
          <span className="text-4xl px-2 text-black">{"}"}</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
