const mongoose = require("mongoose")

/**
 * 
 * We are create the bellow forms
 * 
 * name
 * userId
 * password
 * email
 * userType
 * 
 * 
 */

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true 
    },
    userId :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        lowercase : true,
        minLength : 10,
        unique : true
    },
    userType : {
        type : String,
        default : "CUSTOMER",
        enum : ["CUSTOMER", "ADMIN"]
    }
}, {timestamps : true, versionKey:false})

module.export = mongoose.model("user", userSchema)