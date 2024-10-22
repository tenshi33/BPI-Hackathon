import Query from "../models/chathistory.model.js";

const getHistory = async () => {
  try {
    const result = await Query.find({}).sort({ query_count: -1 }).limit(10);
    return result;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export default getHistory;
