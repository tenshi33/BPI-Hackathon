const {Query} = require('../models/model');
const {Data} = require('../models/model');
const chatcompletion = require('../utils/chatcompletion')


async function getAll(userID){
    console.log(userID)
    const result = await Query.find({userID:userID}).limit(5);
    return result
}


async function postChatCompletion(prompt,userID){
    try {
        const userData = await Data.find({_id: userID})
        console.log(userData, "ye")
        const userDataText = JSON.stringify(userData);
        const reponseAI = await chatcompletion(prompt,userDataText)
        await Query.create({ prompt, reponseAI ,userID});
        return reponseAI;
    } catch (error) {
        throw new Error(error.message);
    }

}



module.exports = {
    getAll,
    postChatCompletion
};
