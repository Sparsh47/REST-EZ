"use client";

import "./styles.css";
import { BsCart } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import ApiCards from "@/components/shared/ApiCards";

const Page = () => {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center gap-5">
      <h1 className="w-[43%] text-2xl font-semibold text-[#333]">
        What type of API do you wish to create:
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-10">
        <ApiCards Icon={BsLock} apiName="authentication" />
        <ApiCards Icon={BsCart} apiName="e-commerce" />
        <ApiCards Icon={BsChat} apiName="chat" />
        <ApiCards Icon={AiOutlinePlusCircle} apiName="custom" />
      </div>
    </div>
  );
};

export default Page;
