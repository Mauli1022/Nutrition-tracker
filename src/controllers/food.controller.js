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


export { getAllFood }