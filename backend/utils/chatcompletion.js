import OpenAI from 'openai';
import 'dotenv/config';
// Ollama AI
// const openai = new OpenAI({ 
//       baseURL: 'http://localhost:11434/v1/', 
//       apiKey: 'ollama'
// });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function chatcompletion(message) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message },
        { role: 'system', content: 'Summary, Make it at least 1 sentence' }
      ],
      model: 'llama3.2:1b',  
    });

    return completion.choices[0].message.content;
  } catch (error) {
    return error.message;
  }
}
