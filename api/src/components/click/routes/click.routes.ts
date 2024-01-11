import Router from "express"
import * as controllers from "../controllers";


const clickRouter = Router()

// [POST] 🌐/api/click/
clickRouter.post("/", controllers.createClick);
// [GET] 🌐/api/click/redir/:num?campaign=?external_id=?ad=?adset=
clickRouter.get("/redir/:num", controllers.redirectClick);

export default clickRouter;