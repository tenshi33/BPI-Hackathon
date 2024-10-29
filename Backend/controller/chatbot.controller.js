const express = require('express');
const router = express.Router();
const chatbot = require('../service/chatbot.service.js');

router.get('/getAll', getAll)
router.post('/prompt',postChatCompletion)
// router.post('/insert', postTodoItem)
// router.put('/update', editTodoItem)

function getAll(req, res) {
    console.log("hellow")
    chatbot.getAll()
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}

function postChatCompletion(req, res) {
    const prompt = req.body.prompt;
    console.log(prompt)
    chatbot.postChatCompletion(prompt)
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}

// function editTodoItem(req, res) {
//     const data = req.body;
//     console.log(data)
//     TodoService.editTodoItem(data)
//         .then((result) => {
//             return res.status(200).json(result);
//         })
//         .catch((err) => {
//             return res.status(500).json({ error: err.message }); 
//         });
// }


module.exports = router; 
