/**
 * This will be the starting file of the project
 */

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const server_config = require("./config/server.config")
const db_config = require("./config/db.config")
const { mongo } = require("mongoose")


/**
 * Create an admin user at the starting of the application
 * if not already present
 */


// Connection with mongoDB
mongoose.connect(db_config.DB_URL)

const db = mongoose.connection

db.on("error", ()=>{
    console.log('error')
})

db.once("open", ()=>{
    console.log("Connected to MongoDB")
    init()
})

async function init(){
    try{
        let user  = await user_model.findOne({userId : "admin"})

       if(user){
          console.log("Admin is already present")
          return
        }

    }catch(err){
        console.log("Error while reading the data", err)
    }
    

    try{
      user = await user_model.create({
        name : "Rajan",
        userId : "admin",
        email : "its1.rajan@gmail.com",
        userType : "ADMIN",
        password : bcrypt.hashSync("Welcome1",8)
      })
      console.log("Admin created ", user)


    }catch(err){
        console.log("Error while create admin", err)
    }
}

/**
 * Start the server
 */

app.listen(server_config.PORT,()=>{
console.log("Server started ap port num: ", server_config.PORT)
})
