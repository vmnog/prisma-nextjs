import express, { Router } from "express";

import { userRouter } from "./user.routes";

export const appRouter: Router = express.Router();

appRouter.use("/user", userRouter);
