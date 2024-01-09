import { Document } from "mongoose";

export interface IClick extends Document {
    campaign: string;
    adset: string;
    ad: string;
    createdAt: Date;
    mensaje: string;
};