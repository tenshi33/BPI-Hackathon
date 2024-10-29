const {Data} = require('../models/model');


async function getAll(){
    return await Data.find({});
}


async function filterUserData(userID){
    return await Data.find({
        userID : userID
    })
}

async function registerUser(data){
    return await Data.create(data)
}


async function editUserData(data){
    return await Data.updateOne(
        {email: data.email},
        {$set : data},
        { upsert: true }
    )
}

async function loginUser(data) {
    const user = await Data.findOne({ email: data.email });

    if (user && user.password === data.password) {
        return user._id;
    }

    return null; 
}





module.exports = {
    getAll,
    filterUserData,
    registerUser,
    editUserData,
    loginUser
};
