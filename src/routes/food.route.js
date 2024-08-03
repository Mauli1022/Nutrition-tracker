import { Router } from "express";
import {getAllFood} from "../controllers/food.controller.js";

// Import Middleware
import { verifyToken } from "../middleware/auth.middleware.js";

const foodRoute = Router() 

// Food Route
foodRoute.route("/food").get(verifyToken,getAllFood)

export default foodRoute