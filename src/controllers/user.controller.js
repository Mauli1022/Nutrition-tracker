import { User } from "../Models/User.module.js";
import bcryjs from "bcryptjs"

// EndPoint for Registering User
async function userRegister(req, res) {
    let newUser = req.body
    // console.log(user);

    bcryjs.genSalt(10,(error,salt)=>{
        if(error){
            console.log(`Error in Password Hashing : ${error.message}`);
        }else{
            bcryjs.hash(String(newUser.password),salt,async(error,hpass)=>{
                if(!error){
                    newUser.password = hpass // new hash Password

                    try {
                        const user = await User.create(newUser)
                        res.status(201).send({
                            message: "User Created",
                            data: user
                        })
                
                    } catch (error) {
                        console.log(`REGISTER ERROR : ${error}`);
                        res.status(400).send({ message: "Failed to Register" })
                    }
                }
            })
        }
    })
}


// EndPoint for handling user Login the 
async function userLogin(req, res) {
   let logUser = req.body;

   try {
    let myUser = await (await User.find({email : logUser.email}))

    if(!myUser){
        res.status(404).send({message : "User Does not Found"})
    }else{
        res.status(200).send({message : "User Found",data : myUser})
    }

   } catch (error) {
    console.log(`FIND USER ERROR : ${error.message}`)
    res.status(500).send({message : "Internal Server Error"})
   }
}

export { userRegister, userLogin }