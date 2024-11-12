const mongoose = require('mongoose');
const mongooseSequence = require('mongoose-sequence')(mongoose);

const querySchema = new mongoose.Schema({
  query_count: {
    type: Number,
    unique: true,
  },
  prompt: {
    type: String,
    required: true,
    trim: true,
  },
  oldConvo : {
    type : Boolean
  },
  userID : {
    type: String,
    required: true
  },
  responseAI: {
    type: String,
    required: true,
    trim: true,
  },
},{ collection: 'chatbotHistory' });

const userDataSchema = new mongoose.Schema({

  fullName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
  },
  age: {
    type: Number,
  },
  income: {
    type: Number,
  },
  financialGoals: {
    type: String,
  },
  loansDebts: {
    type: Number,
  },
  savings: {
    type: Number,
  },
  businessName: {
    type: String,
  },
  industry: {
    type: String,
  },
  numEmployees: {
    type: Number,
  },
  revenue: {
    type: Number,
  },
  shortTermGoals: {
    type: String,
  },
  longTermGoals: {
    type: String,

  },
},{ collection: 'UserData' });


const embeddingSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  embedding: {
    type: [Number],  // Assuming the embedding is a numeric array (like a vector)
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{ collection: 'embeddings' });

querySchema.plugin(mongooseSequence, { inc_field: 'query_count' });

const Query = mongoose.model('Query', querySchema);
const Data = mongoose.model('Data', userDataSchema);
const Embedding = mongoose.model('Embedding', embeddingSchema)

module.exports = {
  Data,
  Query,
  Embedding,
};
