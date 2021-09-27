const mongoose = require("mongoose")

const exreciseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:({
        type:String
    }),
    category:{
        type:String
    },
    equipments:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model("Exercise",exreciseSchema)