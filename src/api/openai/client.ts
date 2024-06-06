import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY || "";

const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
})

export async function conversation(message: string) {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: message }],
            model: 'gpt-3.5-turbo',
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.log("Error using openai api: ", error)
    }
}

