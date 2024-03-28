"use client";
import { SelectMenu } from "@/components/SelectMenu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsOptions } from "./tabsOptions";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { DataContext } from "../context";
import { conversation } from "@/api/openai/client";

export default function BackgroundBeamsDemo() {
  const [formData, setFormData] = useState({});
  const [message, setMesage] = useState("");
  const [tab, setTab] = useState(tabsOptions[0].tab.toLowerCase());
  const router = useRouter();
  const context = useContext(DataContext);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // console.log(formData);
    const { Model, ...promptData } = formData;
    // console.log("PROMPT DATA: ", promptData);
    if (tab === "custom") {
      const { description, ...data } = promptData;
      let prompt = `I want you to code a custom api for me.This is the description of the api that I want you to create: ${description} These are the configurations that I want the REST api in: ${data}. Please provide the complete code accordingly.`;
      setMesage(prompt);
    } else {
      let prompt = `I want you to code a ${tab} api for me. These are the configurations that I want the REST api in: ${promptData}. Please provide the complete code accordingly.`;
      setMesage(prompt);
    }
    // router.push(`/rest-api/${uuidv4()}`);
    await context.setData({ model: formData["Model"], message: message });
    // console.log(message);
    conversation(
      `I want you to code a ${tab} api for me. These are the configurations that I want the REST api in: ${promptData}. Please provide the complete code accordingly.`
    );
    setFormData({});
  };

  const handleTabChange = (value: string) => {
    setTab(value);
  };

  return (
    <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="p-4 border-[0.5px] border-white rounded-xl">
        <Tabs
          defaultValue={tab}
          className="w-full"
          onValueChange={handleTabChange}
        >
          <TabsList className="grid w-full grid-cols-4">
            {tabsOptions.map((tabTrigger, index) => (
              <TabsTrigger key={index} value={tabTrigger.tab.toLowerCase()}>
                {tabTrigger.tab}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsOptions.map((tabs) => (
            <>
              <TabsContent value={tabs.tab.toLowerCase()}>
                <Card className="bg-[#09090B] text-white pt-3">
                  <CardContent className="space-y-2">
                    {tabs.options.map((option) =>
                      Object.entries(option).map((entry, index) => (
                        <div key={`${index}-${entry[0]}`} className="space-y-1">
                          <Label>{entry[0]}</Label>
                          <SelectMenu
                            label={entry[0]}
                            values={entry[1]}
                            handleSelectChange={handleInputChange}
                          />
                        </div>
                      ))
                    )}
                    {tabs.tab.toLowerCase() === "custom" && (
                      <div className="space-y-1">
                        <Label htmlFor="custom">
                          Enter your custom requirements
                        </Label>
                        <Textarea
                          placeholder="Tell us a little bit about your idea"
                          name="description"
                          className="resize-none"
                          onChange={handleInputChange}
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="bg-[#e2e2e2] text-black w-full font-semibold"
                      onClick={handleSubmit}
                    >
                      CREATE
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
