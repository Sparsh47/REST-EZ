"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

interface ApiContextTypes {
  formData: any[];
  setFormData: React.Dispatch<React.SetStateAction<any[]>>;
  response: string;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
}

const apiContext = createContext<ApiContextTypes>({
  formData: [],
  setFormData: () => {},
  response: "",
  setResponse: () => {},
});

export default function APIProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<any[]>([]);
  const [response, setResponse] = useState<string>("");

  return (
    <apiContext.Provider
      value={{ formData, setFormData, response, setResponse }}
    >
      {children}
    </apiContext.Provider>
  );
}

export function useForm() {
  const { formData, setFormData, response, setResponse } =
    useContext<ApiContextTypes>(apiContext);
  return { formData, setFormData, response, setResponse };
}
