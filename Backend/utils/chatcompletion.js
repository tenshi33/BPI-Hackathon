const OpenAI = require('openai');


// const openai = new OpenAI({ 
//       baseURL: 'http://localhost:11434/v1/', 
//       apiKey: 'ollama'
// });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function chatcompletion(message,userData,history) {
  try {
    alpaca_prompt = `Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.
                  ### Input:
                  This is the user query ${message}
    
                  ### Context:
                  check the ${history} if the user have a question about the conversation, based on the query count highest will be the latest 
                  This is our conversation : ${history}
                  Focus on this user : ${userData}
                  if you can't find any data the can help you answer the query use your general knowledge
                  
                  ### Instruction:
                  Make you response 1-2 Sentences, And try to make your response more like a student.

                  
                  `
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: alpaca_prompt },
      ],
      // model: 'llama3.2:1b',
      model: 'gpt-4o-mini', 
    }); 
    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
  } catch (error) {
    throw new Error(error.message) 
  }
}

module.exports = chatcompletion;
