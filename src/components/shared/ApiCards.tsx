"use client";

import { useRouter } from "next/navigation";
import { IconType } from "react-icons/lib";

const ApiCards = ({ Icon, apiName }: { Icon: IconType; apiName: String }) => {
  const router = useRouter();
  return (
    <div
      className="card"
      onClick={() => {
        router.push(`rest-api/${apiName}`);
      }}
    >
      <Icon className="icon" />
      {apiName[0].toUpperCase() + apiName.slice(1)}
    </div>
  );
};

export default ApiCards;
