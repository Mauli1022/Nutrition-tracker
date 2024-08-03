import { Router } from "express";
import { userRegister,userLogin } from "../controllers/user.controller.js";

const router = Router();

// User Route
router.route("/register").post(userRegister)
router.route("/login").post(userLogin)


export default router