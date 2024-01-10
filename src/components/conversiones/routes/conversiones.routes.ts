import Router from "express"
import * as controllers from "../controllers";


const conversionesRouter = Router()

// [POST] 🌐/api/conversiones/
conversionesRouter.post("/", controllers.createConversion);
// [GET] 🌐/api/conversiones/
conversionesRouter.post("/mensaje", controllers.checkConversion);


export default conversionesRouter;