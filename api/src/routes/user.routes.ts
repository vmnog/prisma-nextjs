import express, { Router } from "express";
import { AuthMiddleware } from "../services/middleware";
import { userController } from "../controllers/userController";

export const userRouter: Router = express.Router();

userRouter.post("/", userController.create);

userRouter.get("/", AuthMiddleware, userController.list);

userRouter.get("/email", AuthMiddleware, userController.findByEmail);

userRouter.delete("/email", AuthMiddleware, userController.deleteByEmail);

userRouter.put("/email", AuthMiddleware, userController.updateByEmail);
