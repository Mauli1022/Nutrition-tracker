import { User } from "../models/User.model.js";
import bcryjs from "bcryptjs"
import jwt from "jsonwebtoken"

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
//    console.log(`Input Password ${logUser.password}`);
   try {
     const myUser = await User.findOne({email : logUser.email})
    //  console.log(myUser.password);
     

    if(!myUser){
        res.status(404).send({message : "User Does not Found"})
    }else{
        // res.status(200).send({message : "User Found",data : myUser})

        // Check the password which are stored in db and 
        // The password we get from the user
        bcryjs.compare(String(logUser.password),myUser.password,(error,result)=>{
            // Send Jwt headers in cookies  ---Todo
            if(result==true){
            //    res.status(200).send({message : "Login Successful"}) 
            // generate and send jwt access token to the user
            // when it first time login
            // By default the algorithm are RS256 we need to provide algorithm 
            // For generating access token
               jwt.sign({email : myUser.email},`${process.env.ACCESS_TOKEN_SECRET}`,(error,token)=>{
                if(!error){
                    res.send({message : "Login Successful", token : token})
                }
               })
            }
            else{
                // For in correct input send 401 status code
                res.status(403).send({message : "Incorrect Password"})
                // console.log('Error : ' ,error.message); 
            }
        })
    }

   } catch (error) {
    console.log(`FIND USER ERROR : ${error.message}`)
    res.status(500).send({message : "Internal Server Error"})
   }
}

export { userRegister, userLogin }