import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDqSY56WQxvEuV37_re8R1hEFIUfjIQ7cE"

const genAI = new GoogleGenerativeAI(apiKey);


export async function conversation(message: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(message);

    const response = await result.response;

    const text = await response.text();

    return text;
}