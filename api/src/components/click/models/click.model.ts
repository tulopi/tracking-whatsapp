import { Schema, model } from "mongoose";
import { IClick } from "../types/Click.types";

const clickSchema = new Schema (
    {
        campaign: {
            type: Schema.Types.ObjectId,
            ref: "campaign",
            required: true
        },
        adset: {
            type: String,
            required: true
        },
        ad: {
            type: String,
            required: true
        },
        external_id: {
            type: String,
            required: true
        },
        mensaje: {
            type: String,
        },
        createdAt: {
            type: Date
        }
    }
);

export default model<IClick>("click", clickSchema);