"use client";

import CodeBlock from "@/components/shared/CodeBlock";
import { Button } from "@/components/ui/button";
import { useForm } from "@/context/apiContext";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { apiName: string; id: string } }) => {
  const { response } = useForm();
  const router = useRouter();

  const codeBlocks = response.split("```");
  const language = codeBlocks[1].split("\n")[0];
  const header = codeBlocks
    .filter((_, index) => index % 2 === 0)
    .join(" ")
    .split("**")
    .filter((string) => {
      return string.trim().length > 0 && typeof string === "string";
    });

  return (
    <div className="w-full flex flex-col items-center gap-5 bg-white">
      <div className="w-full p-5 flex items-center justify-center font-medium text-3xl text-black bg-white shadow-lg">
        <div>
          {params.apiName[0].toUpperCase() + params.apiName.slice(1)} REST API
        </div>
      </div>
      {codeBlocks.map((block, index) =>
        index % 2 !== 0 ? (
          <CodeBlock
            key={index}
            response={block}
            language={language}
            header={header[Math.floor(index / 2)]}
          />
        ) : null
      )}
    </div>
  );
};

export default Page;
