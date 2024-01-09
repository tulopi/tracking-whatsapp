import Router from "express"
import * as controllers from "../controllers";
import { tokenMiddleware } from "../../../shared/middlewares/token.middleware";


const clickRouter = Router()

// [POST] 🌐/api/click/
clickRouter.post("/", tokenMiddleware.createToken, controllers.createClick)

export default clickRouter;