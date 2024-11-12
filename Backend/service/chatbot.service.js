const {Query} = require('../models/model');
const {Data} = require('../models/model');
const chatcompletion = require('../utils/chatcompletion')
const { storeEmbedding, searchEmbedding, getEmbedding } = require('../utils/Embedding');



async function getAll(userID) {
    const result = await Query.find({ userID, oldConvo: false }).sort({ query_count: -1 });
    return result;
}



async function postChatCompletion(prompt, userID) {
    try {
        const userData = await Data.find({_id: userID});
        const history = await Query.find({userID:userID, oldConvo : false})
        console.log(history)

        const responseAI = await chatcompletion(prompt,userData,history); 
        await Query.create({ prompt, responseAI, userID, oldConvo: false }); 
        return responseAI;
    } catch (error) {
        console.log(error, "error");
        throw new Error(error.message);
    }
}


async function resetChat(user) {
    const result = await Query.updateMany(
        {userID: user.userID },
        { $set: { oldConvo: true } }
    );
    return result;
}


module.exports = {
    getAll,
    postChatCompletion,
    resetChat
};
