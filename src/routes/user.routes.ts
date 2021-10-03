import express, { Router } from "express";

import { userController } from "../controllers/userController";

export const userRouter: Router = express.Router();

userRouter.post("/", userController.create);

userRouter.get("/", userController.list);

userRouter.get("/email", userController.findByEmail);

userRouter.delete("/email", userController.deleteByEmail);

userRouter.put("/email", userController.updateByEmail);
