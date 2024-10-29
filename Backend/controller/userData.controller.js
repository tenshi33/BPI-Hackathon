const express = require('express');
const router = express.Router();
const data = require('../service/userData.service');

router.get('/getAll', getAll)
router.get('/filterUserData', filterUserData)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.put('/update', editUserData)

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

function registerUser(req, res) {
    const user = req.body;
    console.log(user)
    data.registerUser(user)
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}


function editUserData(req, res) {
    const updatedUser = req.body;
    console.log(updatedUser)
    data.editUserData(updatedUser)
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}

function loginUser(req, res) {
    const User = req.body;
    console.log(User)
    data.loginUser(User)
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}




module.exports = router; 
