const OpenAI = require('openai');

const openai = new OpenAI({ 
      baseURL: 'http://localhost:11434/v1/', 
      apiKey: 'ollama'
});

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function chatcompletion(message, userData, history) {
  try {
    let alpaca_prompt = `Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.
                  ### Input:
                  This is the user query: ${message}
    
                  ### Context:
                  Check the ${history} if the user has a question about the conversation, based on the query count where the highest will be the latest. 
                  This is our conversation: ${history}
                  Focus on this user: ${userData}
                  If you can't find any data that can help answer the query, use your general knowledge.
                  
                  ### Instruction:
                  Make your response 1-2 sentences, and try to make your response more like a student.
                  `;
    console.log(userData, "user data")
    // Send the request to the OpenAI instance
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'user', content: alpaca_prompt },
      ],
      model: 'tfg-patatas/prototype',
    }); 


    const responseContent = completion.choices[0].message?.content;
    if (responseContent) {
      return responseContent;
    } else {
      return "No response from AI.";
    }
  } catch (error) {
    // Enhanced error logging
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Error Message:", error.message);
    }
    throw new Error("Failed to get response from AI");
  }
}

module.exports = chatcompletion;
