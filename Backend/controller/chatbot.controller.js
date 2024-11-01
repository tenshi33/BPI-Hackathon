const express = require('express');
const router = express.Router();
const chatbot = require('../service/chatbot.service.js');

router.get('/getAll', getAll)
router.post('/prompt',postChatCompletion)
// router.put('/update', editTodoItem)

function getAll(req, res) {
    chatbot.getAll()
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}

function postChatCompletion(req, res) {
    const {prompt,userID} = req.body;
    console.log(prompt,userID)
    chatbot.postChatCompletion(prompt,userID)
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}


module.exports = router; 
