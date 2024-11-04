const OpenAI = require('openai');


const openai = new OpenAI({ 
      baseURL: 'http://localhost:11434/v1/', 
      apiKey: 'ollama'
});

//const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function chatcompletion(message,userData,history) {
  try {
    alpaca_prompt = `Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.
                  ### Instruction:
                  ${userData,history} and you can give my basic information. Make it only 1 sentences

                  ### Input:
                  ${message}

                  ### Response:  N/A
                  
                  `
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: alpaca_prompt },
        { role: 'user', content: message },
      ],
      model: 'llama3.2:1b',
      //model: 'gpt-4o-mini', 
    }); 
    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
  } catch (error) {
    throw new Error(error.message) 
  }
}

module.exports = chatcompletion;
