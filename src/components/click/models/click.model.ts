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
        },
        mensaje: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date
        }
    }
);

export default model<IClick>("click", clickSchema);