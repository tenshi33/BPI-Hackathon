const {Data} = require('../models/model');


async function getAll(){
    return await Data.find({});
}


async function filterUserData(userID){
    return await Data.find({
        _id : userID
    })
}

async function registerUser(user) {
    console.log(user);
    const exist = await Data.findOne({ email: user.email });
    
    if (exist) {
        throw new Error("User already Taken"); 
    }
    
    return await Data.create(user);
}




async function editUserData(data){
    return await Data.updateOne(
        {_id: data._id},
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
