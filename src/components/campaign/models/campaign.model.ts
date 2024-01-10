import { Schema, model } from "mongoose";
import { ICampaign } from "../types/Campaign.types";

const campaignSchema = new Schema (
    {
        nombre: {
            type: String,
            required: true
        },
        url_landing: {
            type: String,
            required: true
        }
    }
);

export default model<ICampaign>("campaign", campaignSchema);