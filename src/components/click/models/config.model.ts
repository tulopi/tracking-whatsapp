import { Schema, model } from "mongoose";
import { IClick } from "../types/Click.types";

const clickSchema = new Schema (
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

export default model<IClick>("click", clickSchema);