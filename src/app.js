import express from "express"

const app = express()


// configure Middlewares : 
app.use(express.json({limit : "20kb"}))
app.use(express.urlencoded({extended : true, limit : "20kb"}))


// import Routes:
import userRoute from "./routes/user.route.js"
import foodRoute from "./routes/food.route.js"
import  trakingRoute  from "./routes/traking.route.js"

// Route declaration 
app.use("/api",userRoute)
app.use("/api",foodRoute)
app.use("/api",trakingRoute)


export { app }