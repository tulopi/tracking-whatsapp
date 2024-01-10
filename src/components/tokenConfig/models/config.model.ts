import { Schema, model } from "mongoose";
import { IConfig } from "../types/Config.types";

const configSchema = new Schema (
    {
        emoji_apertura: {
            type: [String],
            required: true
        },
        emoji_cierre: {
            type: [String],
            required: true
        },
        frase_bienvenida: {
            type: [String],
            required: true
        },
        frase_despedida: {
            type: [String],
            required: true
        },
        cuerpo_mensaje: {
            type: [String],
            required: true,
        }
    }
);

export default model<IConfig>("config", configSchema);