import { Router } from "express";
import { userRegister,userLogin } from "../controllers/user.controller.js";
import { hassPassword } from "../middleware/hassPass.middleware .js"

const router = Router();

// User Route
router.route("/register").post(hassPassword,userRegister)
router.route("/login").post(userLogin)


export default router