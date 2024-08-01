const mongoose = require("mongoose")

const propertySchema= new mongoose.Schema({
    images:[String],
    price:{type: Number , required: true},
    country:{type: String , required: true},
    street:{type: String , required: true},
    city:{type: String , required: true},
    description: {type: String, required:true},
    bedroomCount:{ type: Number, required: true},
    bathroomCount:{ type: Number, required: true}
})

module.exports= mongoose.model("Property", propertySchema)