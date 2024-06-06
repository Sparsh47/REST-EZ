import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || ""

const genAI = new GoogleGenerativeAI(apiKey);


export async function conversation(message: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(message);

    const response = await result.response;

    const text = await response.text();

    return text;
}

