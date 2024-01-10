import { Document, Schema } from "mongoose";

export interface IConversiones extends Document{
    nombre: string;
    value: number;
    click_id: Schema.Types.ObjectId;
};