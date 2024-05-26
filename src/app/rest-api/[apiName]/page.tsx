"use client";
import { SelectMenu } from "@/components/shared/SelectMenu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { tabsOptions } from "./tabsOptions";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useForm } from "@/context/apiContext";
import { useRouter } from "next/navigation";
import { v4 as uuidV4 } from "uuid";
import { generatePrompt } from "@/lib/generatePrompt";

interface ApiType {
  authentication: number;
  "e-commerce": number;
  chat: number;
  custom: number;
}

type ApiNameType = "authentication" | "e-commerce" | "chat" | "custom";

export default function Page({ params }: { params: { apiName: string } }) {
  const { apiName } = params;

  const [userChoice, setUserChoice] = useState(0);
  const { formData, setFormData, setResponse } = useForm();
  const router = useRouter();

  const name: ApiType = {
    authentication: 0,
    "e-commerce": 1,
    chat: 2,
    custom: 3,
  };

  useEffect(() => {
    switch (name[apiName as ApiNameType]) {
      case 0:
        setUserChoice(0);
        break;
      case 1:
        setUserChoice(1);
        break;
      case 2:
        setUserChoice(2);
        break;
      case 3:
        setUserChoice(3);
        break;
      default:
        break;
    }
  }, [apiName, name]);

  const handleInputChange = async (e: any, label: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [label]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const modelName = formData["Model"];
    console.log(modelName);
    let conversation;
    if (modelName === "Gemini") {
      const { conversation: geminiConversation } = await import(
        "../../../api/gemini/client"
      );
      conversation = geminiConversation;
    } else {
      const { conversation: openAIConversation } = await import(
        "../../../api/openai/client"
      );
      conversation = openAIConversation;
    }
    const message = generatePrompt(formData, apiName);
    const response = await conversation(message);
    console.log("Response: ", response);
    setResponse(response);
    router.push(`${apiName}/${uuidV4()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[100vh] w-full relative flex items-center justify-center"
    >
      <div className="p-4 border-[0.5px] border-white rounded-xl">
        <div className="w-[30rem]">
          <div className="py-2">
            {tabsOptions[userChoice].options.map((option) =>
              Object.entries(option).map((entry, index) => (
                <div key={`${index}-${entry[0]}`} className="space-y-1">
                  <Label>{entry[0]}</Label>
                  <SelectMenu label={entry[0]} values={entry[1]} />
                </div>
              ))
            )}
            {apiName === "custom" && (
              <div className="space-y-1">
                <Label htmlFor="custom">Enter your custom requirements</Label>
                <Textarea
                  placeholder="Tell us a little bit about your idea"
                  className="resize-none"
                  onChange={(e, label) =>
                    handleInputChange(e, "Custom Requirements")
                  }
                />
              </div>
            )}
          </div>
          <div>
            <Button
              type="submit"
              className="bg-[#eee] text-black w-full font-semibold hover:bg-black hover:text-[#eee]"
            >
              CREATE
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
