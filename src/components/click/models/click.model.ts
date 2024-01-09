import { Schema, model } from "mongoose";
import { IClick } from "../types/Click.types";

const clickSchema = new Schema (
    {
        campaign: {
            type: String,
            required: true
        },
        adset: {
            type: String,
            required: true
        },
        ad: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model<IClick>("click", clickSchema);