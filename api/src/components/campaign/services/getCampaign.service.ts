import { StatusError } from "../../../shared/classes/StatusError";
import { Request } from "express";
import campaignModel from "../models/campaign.model";
import { ICampaign } from "../types/Campaign.types";
import clickModel from "../../click/models/click.model";
import conversionesModel from "../../conversiones/models/conversiones.model";

export const getCampaignService = async (
    req: Request
): Promise<any> => {
    const campaigns = await campaignModel.find().lean();

    if (!campaigns || campaigns.length === 0) {
        throw new StatusError("No se encontraron campañas", 404);
    }
    for (let i = 0; i < campaigns.length; i++) {
        const campaign: any = campaigns[i];
        campaign["clicks"] = await clickModel.countDocuments({ campaign });
        campaign["leads"] = await clickModel.countDocuments({ campaign, mensaje: "" });
        campaign["conversionRate"] = ((campaign["leads"] / campaign["clicks"]) * 100).toFixed(2) + "%";
    }
    return campaigns
};