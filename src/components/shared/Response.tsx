"use client";

import { useForm } from "@/context/apiContext";

const Response = () => {
  const { response } = useForm();

  return (
    <div>
      <h1>API Response</h1>
      <pre>{response}</pre>
    </div>
  );
};

export default Response;
