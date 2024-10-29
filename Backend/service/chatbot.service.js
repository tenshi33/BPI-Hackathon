const {Query} = require('../models/model');
const chatcompletion = require('../utils/chatcompletion')


async function getAll(){
    const result = await Query.find({});
    return result
}


async function postChatCompletion(prompt){
    try {
        const reponseAI = await chatcompletion(prompt)
        await Query.create({ prompt, reponseAI });
        return reponseAI;
    } catch (error) {
        throw new Error(error.message);
    }

}



module.exports = {
    getAll,
    postChatCompletion
};
