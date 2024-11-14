const { model } = require("mongoose");
const OpenAI = require("openai");

// const openai = new OpenAI({
//   baseURL: "http://localhost:11434/v1/",
//   apiKey: "ollama",
// });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function chatcompletion(message, userData, history, RagData) {

  const FilteredRag = RagData.map((element)=>{
    return element.text
  })
  console.log(FilteredRag,"FILTERRAG")
  try {
    const currentDate = new Date()
    console.log(RagData);
    let alpaca_prompt = `
### Context:
Date: ${currentDate}
This data might help you to answer the user query : ${FilteredRag}  
Check the ${history} if the user has a question about the conversation, based on the query count where the highest will be the latest. 
This is our conversation: ${history}
Focus on this user: ${userData}
If you can't find any data that can help answer the query, use your general knowledge.

### Instruction:
Make your response 1-2 sentences, and try to make your response more like a student.
`;

    console.log(userData, "user data");
    // Send the request to the OpenAI instance
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: alpaca_prompt },
        { role: "user", content: message }
      ],
      model: "gpt-4o-mini"
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
