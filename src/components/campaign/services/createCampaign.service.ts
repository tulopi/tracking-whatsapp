import { Request } from "express";
import { StatusError } from "../../../shared/classes/StatusError";
import { ICampaign } from "../types/Campaign.types";
import campaignModel from "../models/campaign.model";
export const createCampaignService = async (
    req: Request
): Promise<ICampaign> => {
    const { nombre, url_landing} = req.body;

    if (!nombre || !url_landing)
        throw new StatusError("Campos obligatorios no proporcionados", 400);

    const campaign = new campaignModel({nombre, url_landing});
    const result = await campaign.save();
    return result;
};
