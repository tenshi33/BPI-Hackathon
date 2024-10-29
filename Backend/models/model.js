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
  reponseAI: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
},{ collection: 'chatbotHistory' });

const userDataSchema = new mongoose.Schema({
  userID: {
    type: Number,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  income: {
    type: String,
    required: true,
  },
  financialGoals: {
    type: String,
    required: true,
  },
  loansDebts: {
    type: Number,
    required: true,
  },
  savings: {
    type: Number,
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  employees: {
    type: Number,
    required: true,
  },
  revenue: {
    type: Number,
    required: true,
  },
  shortTermGoals: {
    type: String,
    required: true,
    trim: true,
  },
  longTermGoals: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
},{ collection: 'UserData' });

querySchema.plugin(mongooseSequence, { inc_field: 'query_count' });
userDataSchema.plugin(mongooseSequence, { inc_field: 'userID' });

const Query = mongoose.model('Query', querySchema);
const Data = mongoose.model('Data', userDataSchema);

module.exports = {
  Data,
  Query,
};
