const express = require('express');
const router = express.Router();
const data = require('../service/userData.service.js');

router.get('/getAll', getAll)
router.get('/filterUserData', filterUserData)
// router.post('/insert', postTodoItem)
// router.put('/update', editTodoItem)

function getAll(req, res) {
    data.getAll()
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}

function filterUserData(req, res) {
    const userID = req.body.userID;
    data.filterUserData(userID)
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
