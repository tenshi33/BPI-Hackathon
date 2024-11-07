const {Query} = require('../models/model');
const {Data} = require('../models/model');
const chatcompletion = require('../utils/chatcompletion')


async function getAll(userID) {
    const result = await Query.find({ userID, oldConvo: false }).sort({ query_count: -1 });
    return result;
}



async function postChatCompletion(prompt,userID){
    try {
        const userData = await Data.find({_id: userID})
        const history  = await Query.find({_id: userID}).limit(20).sort({ query_count: -1 });
        console.log(userData, "ye")
        const userDataText = JSON.stringify(userData);
        const historyData = JSON.stringify(history);
        const reponseAI = await chatcompletion(prompt,userDataText,historyData)
        await Query.create({ prompt, reponseAI ,userID,oldConvo : false});
        console.log(reponseAI)
        return reponseAI;
    } catch (error) {
        console.log(error, "error")
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
