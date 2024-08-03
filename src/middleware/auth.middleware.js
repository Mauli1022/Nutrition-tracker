import jwt from "jsonwebtoken"
// Middleware to Verify JWT Access token
export function verifyToken(req,res,next){

    if(req.headers.authorization !== undefined){
        const JWTtoken = req.headers.authorization.split(" ")[1]
        // console.log(typeof JWTtoken);
        jwt.verify(String(JWTtoken),`${process.env.ACCESS_TOKEN_SECRET}`,(error,data)=>{
            if(!error){
                next()
            }else{
                res.send({message : "INVALID TOKEN"})
            }
        })

        
        
    }else{
        // Use 401 status code for not getting the valid credential(information) like access token
        res.status(401).send({message : "Please Send a Token"})
    }
    // res.send({message : "Middleware function"})
}