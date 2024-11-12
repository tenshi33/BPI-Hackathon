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
        const formatToSearch = `
        ${userID} :${prompt}
        `;
        const PersonalData = await searchEmbedding(formatToSearch);
        console.log(PersonalData, "Searched Item");

        const responseAI = await chatcompletion(prompt, PersonalData); // Fixed typo here
        const formatToStore = `
        ${prompt} : ${responseAI}
        `;

        await storeEmbedding(formatToStore);
        await Query.create({ prompt, responseAI, userID, oldConvo: false }); // Fixed typo here
        return responseAI; // Fixed typo here
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
