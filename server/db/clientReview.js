require("./config")

const mongoose = require("mongoose")

const clientSchema = mongoose.Schema({

    img:String,
    name:String,
    desc:String

})

const client = mongoose.model("clientsreviews", clientSchema)

module.exports = client;


