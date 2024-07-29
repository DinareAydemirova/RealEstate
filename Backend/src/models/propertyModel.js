const mongoose = require("mongoose")

const propertySchema= new mongoose.Schema({
    images:[String],
    price:{type: Number , required: true},
    location:{type: String , required: true},
    description: {type: String, required:true},
    bedroomCount:{ type: Number, required: true},
    bathroomCount:{ type: Number, required: true}
})

module.exports= mongoose.model("Property", propertySchema)