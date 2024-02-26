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

/**
 * Start the server
 */

app.listen(server_config.PORT,()=>{
console.log("Server started ap port num: ", server_config.PORT)
})
