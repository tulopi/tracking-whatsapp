import { Document } from "mongoose";

export interface ICampaign extends Document{
    nombre: string;
    url_landing: string;
}