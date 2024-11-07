const express = require('express');
const router = express.Router();
const chatbot = require('../service/chatbot.service.js');

router.get('/getAll/:userID', getAll)
router.post('/prompt',postChatCompletion)
router.put('/reset', resetChat)
// router.put('/update', editTodoItem)

function getAll(req, res) {
    const userID = req.params.userID;
    chatbot.getAll(userID)
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}

function postChatCompletion(req, res) {
    const {prompt,userID} = req.body;
    chatbot.postChatCompletion(prompt,userID)
        .then((result) => {
            console.log(result, "return")
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}


function resetChat(req, res) {
    const user = req.body.userID;
    console.log(user)
    chatbot.resetChat(user)
        .then((result) => {
            console.log(result, "return")
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}

module.exports = router; 
