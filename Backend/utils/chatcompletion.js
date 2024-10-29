const OpenAI = require('openai');

// Ollama AI
// const openai = new OpenAI({ 
//       baseURL: 'http://localhost:11434/v1/', 
//       apiKey: 'ollama'
// });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function chatcompletion(message) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message },
        { role: 'system', content: 'Summary, Make it at least 1 sentence' }
      ],
      // model: 'llama3.2:1b',
      model: 'gpt-4o-mini', 
    }); 
    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);  // Logs the error for debugging
    return error.message;
  }
}

module.exports = chatcompletion;
