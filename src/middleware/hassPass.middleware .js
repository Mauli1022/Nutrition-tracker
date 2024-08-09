import bcryjs from "bcryptjs"


async function hassPassword(req,res,next) {

    const user = req.body
    
    bcryjs.genSalt(8,(error,salt)=>{
        if(error){
            console.log(`Error In Password Hashing : ${error.message}`);
        }else{
            bcryjs.hash(String(user.password),salt,(error,hpass)=>{
                if(!error){
                    user.password = hpass
                    // console.log(user);
                    next()
                }
            })
        }
    })
    // console.log(userPass);
}
export {hassPassword}