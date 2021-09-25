const mongoose = require('mongoose')


const foodSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    data:{
        type:object,
    }
})


module.exports = mongooose.model("food",foodSchema)
