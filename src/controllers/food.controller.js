 import { Food } from "../models/Food.model.js"
 
//  EndPoint to fetch all foods
 async function getAllFood(req,res){
    try {
        let foods = await Food.find()
        // console.log(foods);
        res.status(200).send(foods)
    } catch (error) {
        console.log(`FOOD CONTROLLER ERROR : ${error.message}`);
        res.status(500).send({message : 'Some Problem while getting Info.'})
    }
}

// EndPoint to search food by Name:( by name )
async function getFoodByName(req,res) {

    try {
        let singleFood = await Food.find({name : {$regex:req.params.name, $options : 'i'}})
        // console.log(singleFood);
        
        if(singleFood.length == 0){
            res.status(401).send({message : "Food Not Found!"})
        }else{
            res.status(200).send({message : "Food Found", data : singleFood})

        }

    } catch (error) {
        console.log(`Get Food By Name : ${error.message}`);
        res.status(500).send({message : "Intrnal Server Error"})
        
    }
}


export { getAllFood, getFoodByName }