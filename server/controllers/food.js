const Food = require("../model/food")
const axios = require("axios")
exports.getFoodItem = (req,res)=>{

    Food.findOne({'name':{$eq:`${req.body.item}`}},(err,foodItem)=>{
        if(err){
            console.log(err)
        }
        else{
            if(foodItem !== null){
                return res.json(foodItem)
            }
            else{
                const response = axios.get(`${process.env.NUTAPP_END}?app_id=${process.env.NUTAPP_ID}&app_key=${process.env.NUTAPP_KEY}&ingr=${req.body.item}&nutrition-type=logging`)
                .then(response=>{
                        const data = response.data.totalNutrients
                        if(Object.keys(response.data.totalNutrients).length>0){
                            const food = new Food({"name":`${req.body.item}`,"data":{calories:data.ENERC_KCAL,fats:data.FAT,carbs:data.CHOCDF,protein:data.PROCNT}})
                            food.save()
                            return res.json(food)
                        }
                        else{
                            return res.status(400).json({ 
                                msg:"Invalid Query!"
                            })
                        }
                    })
                .catch(error=>{
                    console.log(error)
                })
            }
        }
    })

}

