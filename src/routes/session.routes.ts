import express, { Router } from "express";

import { sessionController } from "../controllers/sessionController";

export const sessionRouter: Router = express.Router();

sessionRouter.post("/", sessionController.updateOrCreate);
