import express from "express"

const app = express()


// configure Middlewares : 
app.use(express.json({limit : "20kb"}))
app.use(express.urlencoded({extended : true, limit : "20kb"}))


// import Routes:
import userRoute from "./routes/user.route.js"

// Route declaration 
app.use("/api",userRoute)
export { app }