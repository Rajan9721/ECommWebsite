/**
 * I need to write the controller 
 * logic to register a user
 * 
 */
const bcrypt = require("bcryptjs")
const user_model = 
exports.signup = (req, res) =>{
    /**
     * Logic to create the user
     */

    // 1. Read the request body
    const request_body = req.request_body

    // 2. Insert the data in the Users collection in MongoDB

    const userObj = {
        name : request_body.name,
        userId : request_body.userId,
        email : request_body.email,
        userType : request_body.userType,
        password : bcrypt
    }

    try{
        const user_created = await user_model.create(userObj)
        /**
         * return this user
         * 
         */

        res.status(201).send(user_created)

    }catch(err){
        console.log("Error while registering the user", err)
        res.status(500).send({
            message : "Some error happend while registring the user"
        })
    }
}