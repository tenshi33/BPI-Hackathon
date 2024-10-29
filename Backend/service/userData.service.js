const {Data} = require('../models/model');


async function getAll(){
    return await Data.find({});
}


async function filterUserData(userID){
    return await Data.find({
        userID : userID
    })
}




module.exports = {
    getAll,
    filterUserData
};
