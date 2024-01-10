import { Document } from "mongoose";

export interface IClick extends Document {
    campaign: string;
    adset: string;
    ad: string;
    external_id: string;
    createdAt: Date;
    mensaje: string;
};