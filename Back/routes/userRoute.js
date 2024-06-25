import { Router } from "express";
import * as userController from  "../controller/userController.js";

const userRoute = Router();

userRoute.post("/user", userController.createUser);
userRoute.get("/user/:email", userController.getUser);
userRoute.post("/login", userController.loginUser);
userRoute.put("/user/:email", userController.alterUser);

export default userRoute;