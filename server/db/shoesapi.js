require("./config")

const mongoose = require("mongoose")

const shoesSchema = mongoose.Schema({
    id:Number,
    img:String,
    price:Number,
    name:String

})

const shoes = mongoose.model("shoesapi", shoesSchema)

module.exports = shoes;


