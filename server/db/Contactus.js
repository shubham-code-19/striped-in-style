require("./config")

const mongoose = require("mongoose")

const ContactShema =new mongoose.Schema({
   name:String,
   email:String,
   feedback:String

})

const Contact = mongoose.model("contacts", ContactShema)

module.exports = Contact;


