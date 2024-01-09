import Router from "express"
import * as controllers from "../controllers";


const conversionesRouter = Router()

// [POST] 🌐/api/click/
conversionesRouter.post("/", controllers.createConversion)

export default conversionesRouter;