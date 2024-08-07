import { Router } from "express";
import {getAllFood,getFoodByName} from "../controllers/food.controller.js";

// Import Middleware
import { verifyToken } from "../middleware/auth.middleware.js";

const foodRoute = Router() 

// Food Route
foodRoute.route("/food").get(verifyToken,getAllFood)
foodRoute.route("/foodName/:name").get(verifyToken,getFoodByName)

export default foodRoute