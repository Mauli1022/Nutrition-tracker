import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./db/index.js"

// Configure Middleware:
dotenv.config({
    path : "./.env"
})
const PORT = process.env.PORT || 6000


connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`SERVER IS RUNNING : ${PORT}`);
    })
})
.catch((error)=>{
    console.log(`MONGODB CONNECTION FILED !!! ${error.message}`);
})

