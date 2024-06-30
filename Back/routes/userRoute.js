import { Router } from "express";
import * as userController from  "../controller/userController.js";
import { auth } from "../middlewares/auth.js";

const userRoute = Router();

userRoute.post("/user", userController.createUser);
userRoute.get("/user",  auth ,userController.getUser);
userRoute.post("/login", userController.loginUser);
userRoute.put("/user/:id", userController.alterUser);

export default userRoute;