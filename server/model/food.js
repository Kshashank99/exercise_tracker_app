const mongoose = require("mongoose")


const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    data:{
        type:Object,
    }
})


module.exports = mongoose.model("food",foodSchema)