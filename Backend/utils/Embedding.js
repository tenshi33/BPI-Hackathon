const { OpenAI } = require('openai');
const {Embedding} = require('../models/model');
const cosineSimilarity = require('cosine-similarity');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Get embedding for text using OpenAI
async function getEmbedding(text) {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: text,
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error("Error fetching embedding:", error.message || error);
    throw new Error("Failed to retrieve embedding.");
  }
}


// Use this to store the vector data to database mongodb
async function storeEmbedding(text) {
  console.log("Text to save:", text);

  try {
    // Assuming getEmbedding is a function that generates an embedding from the text
    const embedding = await getEmbedding(text);

    // Log the embedding to check its value
    console.log("Generated embedding:", embedding);

    if (!embedding) {
      throw new Error("Failed to generate embedding");
    }

    // Assuming Embedding.create is a method for saving the embedding to a database
    const result = await Embedding.create({
      text: text,
      embedding: embedding,
    });

    console.log("Embedding saved successfully:", result);
  } catch (error) {
    console.error("Error saving embedding:", error);
  }
}



// Search for similar embeddings in MongoDB

async function searchEmbedding(queryText) {

  const queryEmbedding = await getEmbedding(queryText);

  const embeddings = await Embedding.find(); // Not efficient yet, still finding a vector search library
  const similarTexts = [];

  for (let doc of embeddings) {
    const similarity = cosineSimilarity(queryEmbedding, doc.embedding);
    if (similarity > 0.8) {  // How simlary the query and embedding data "0.7"
      similarTexts.push({
        text: doc.text,
        similarity: similarity
      });
    }
  }
  return similarTexts;
}

// Exporting all the functions
module.exports = {
  storeEmbedding,
  searchEmbedding,
  getEmbedding
};
