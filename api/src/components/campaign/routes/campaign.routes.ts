import { Router } from "express";
import * as controllers from "../controllers";

const campaignRouter = Router()

// [POST] 🌐/api/campaign/
campaignRouter.post("", controllers.createCampaign);
// [GET] 🌐/api/campaign/
campaignRouter.get("", controllers.getCampaign);

export default campaignRouter