import connectDB from "../config/DBconfig.js";
import Query from "../models/chathistory.model.js";


const getHistory = async () =>{
    try{
    const result = await Query.find({});
    return result
    }catch(error){
        console.log(`Error : ${error}`)
    }
}

export default getHistory;