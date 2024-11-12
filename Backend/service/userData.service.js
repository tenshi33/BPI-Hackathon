const {Data} = require('../models/model');
const { storeEmbedding, getEmbedding } = require('../utils/Embedding');

async function getAll(){
    return await Data.find({});
}


async function filterUserData(userID){
    return await Data.find({
        _id : userID
    })
}

async function registerUser(user) {
    console.log(user, "Register Account");
    try {
        const exist = await Data.findOne({ email: user.email });
        console.log(exist)
        if (exist) {
            console.log("ERROR") 
            throw new Error("User already Taken");
            
        }else{
            const result = await Data.create(user);
            return result
        }
        
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

    // const exist = await Data.findOne({ email: user.email });
    // console.log(exist)
    // if (exist) {
    //     console.log("ERROR") 
    //     throw new Error("User already Taken");
        
    // }else{
    //     const result = await Data.insert(user);
    //     return result
    // }
    
    // const formattedResult = {
    //     userID: result._id,
    //     fullName: result.fullName,
    //     email: result.email,
    //     password: result.password,
    //     phone: result.phone,
    //     age: result.age,
    //     __v: result.__v
    //   };
      
    //await storeEmbedding(JSON.stringify(formattedResult))
    




async function editUserData(user){
    
    const result =  await Data.updateOne(
        {_id: user._id},
        {$set : user},
        { upsert: true }
    )
    return result
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
