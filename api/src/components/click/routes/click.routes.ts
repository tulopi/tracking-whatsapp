import Router from "express"
import * as controllers from "../controllers";


const clickRouter = Router()

// [POST] 🌐/api/click/
clickRouter.post("/", controllers.createClick)

export default clickRouter;