import { Router } from "express";
import {getAllFood} from "../controllers/food.controller.js";

const foodRoute = Router() 

// Food Route
foodRoute.route("/food").get(getAllFood)

export default foodRoute