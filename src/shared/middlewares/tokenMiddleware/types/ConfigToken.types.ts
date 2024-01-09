import { Document } from "mongoose";

export interface IConfigToken extends Document {
    emoji_cierre: string[];
    emoji_apertura: string[];
    frase_saludo: string[];
    frase_despedida: string[];
    cuerpo_mensaje: string[];
    createdAt: Date;
};