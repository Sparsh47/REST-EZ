import OpenAI from "openai";

const apiKey = "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";

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