import { Traking } from "../models/Traking.model.js";

async function TrakingFood(req,res) {
    
    let trakData = req.body;

    try {
        let data = await Traking.create(trakData)
        res.status(201).send({message : "Food Added"})
    } catch (error) {
        console.log(`Traking Error : ${error.message}`);
        res.status(500).send({message : "Internal Server Error (Traking) "})
    }
    
}

// EndPoint to fetch all foods eaten by a person
async function fetchFoodEatenByUser(req,res) {
    // res.send("Food Eaten By Person")

    let userID = req.params.userId;
    let date = new Date(req.params.date);
    let strDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    // console.log(strDate,date,new Date(req.params.date).getDay());
    
    
    try {
        let data = await Traking.find({userId : userID,eatenDate : strDate})
        .populate("userId").populate("foodId")

        if(data.length === 0){
            res.status(200).send({message : "Food Not Added"})
        }else{
            res.status(200).send({data : data})
        }
    } catch (error) {
        res.status(500).send({message : "Some Problem in Getting the Food"})
        console.log(`Fetch Food Eaten By User : ${error.message}`);
        
    }    
} 

export {TrakingFood,fetchFoodEatenByUser}

// Date Format : 
//  MM/DD/YYYY