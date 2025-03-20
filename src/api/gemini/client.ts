import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "AIzaSyDqSY56WQxvEuV37_re8R1hEFIUfjIQ7cE"

const genAI = new GoogleGenerativeAI(apiKey);


export async function conversation(message: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(message);

    const response = result.response;

    return response.text();
}

