import { Document } from "mongoose";

export interface IConfig extends Document {
    emoji_cierre: string[];
    emoji_apertura: string[];
    frase_bienvenida: string[];
    frase_despedida: string[];
    cuerpo_mensaje: string[];
};