const mongoose = require('mongoose');

exports.Connection = async () => {
    try {
       await  mongoose.connect("mongodb://127.0.0.1:27017/restful-auth", {})
        console.log("db connected ")
        
    } catch (error) {
        console.log("failed to connect Db" , error)
        
    }
    
}


