import express, { Router } from "express";

import { userRouter } from "./user.routes";
import { sessionRouter } from "./session.routes";

export const appRouter: Router = express.Router();

appRouter.use("/user", userRouter);
appRouter.use("/session", sessionRouter);
