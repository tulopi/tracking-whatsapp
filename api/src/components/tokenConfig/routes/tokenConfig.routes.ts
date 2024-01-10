import { Router } from "express";
import * as controllers from "../controllers";

const configRouter = Router()

// [GET] 🌐/api/config/
configRouter.get("/", controllers.getTokenConfig);
// [PUT] 🌐/api/config/:id
configRouter.put("/:id", controllers.updateTokenConfig);

export default configRouter;