const {Query} = require('../models/model');
const chatcompletion = require('../utils/chatcompletion')


async function getAll(){
    const result = await Query.find({});
    return result
}


async function postChatCompletion(prompt){
    try {
        const reponseAI = await chatcompletion(prompt)
        await Query.create({ prompt, answer });
        return reponseAI;
    } catch (error) {
        throw new error(error.message);
    }

}



module.exports = {
    getAll,
    postChatCompletion
};
