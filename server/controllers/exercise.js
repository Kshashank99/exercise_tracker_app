const Exercise = require("../model/Exercise")
const axios = require("axios")

const loadDatabase = () =>{
    Exercise.count({},(err,count)=>{
        if(count>0){
            console.log("count: ",count)
        }
        else{
            axios.get("https://wger.de/api/v2/exerciseinfo?language=2&limit=100")
            .then(response=>{
                // console.log(response.data.results[0])
                let results = response.data.results
                results.forEach(el=>{
                    let equips = []
                    el.equipment.forEach(element=>{
                        equips.push(element.name)
                    })
                    let exercise = new Exercise({
                        name: el.name,
                        description:el.description?el.description.replace(/<[^>]*>?/gm, ''):'',
                        category:el.category.name,
                        equipments:equips
                    })
                    exercise.save((err)=>{
                        if(err)
                        {
                            console.log(err)
                        }
                    });
                })
            })
            .catch(error=>{
                console.log(error)
            })
        }
    })
}


exports.getExercise=(req,res)=>{
    loadDatabase();
    Exercise.find({},(err,data)=>{
        if(err){
            res.json({
                msg:err
            })
        }
        else{
            res.json({
                length:data.length,
                data
            })
        }
    })
}