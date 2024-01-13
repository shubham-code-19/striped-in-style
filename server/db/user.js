require("./config")

const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    userName:String,
    userEmail:String,
    userPassword:String,
    // userConfirmpassword:String,
})

const user=mongoose.model("users",userSchema)

module.exports=user;