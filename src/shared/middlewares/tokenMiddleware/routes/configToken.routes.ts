import Router from "express"
import * as controllers from "../controllers";


const tokenRouter = Router()

// [POST] 🌐/api/configtoken/
tokenRouter.post("/", controllers.createToken);

export default tokenRouter;