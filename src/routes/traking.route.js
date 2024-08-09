import { Router } from "express"
import {TrakingFood,fetchFoodEatenByUser} from "../controllers/traking.controller.js"
import { verifyToken } from "../middleware/auth.middleware.js"

const trakingRoute = Router()

trakingRoute.route("/trakfood").post(verifyToken,TrakingFood)
trakingRoute.route("/fetchfood/:userId/:date").get(verifyToken,fetchFoodEatenByUser)

export default trakingRoute 