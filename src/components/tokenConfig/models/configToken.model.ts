import { Schema, model } from "mongoose";
import { IConfigToken } from "../types/ConfigToken.types";

const configTokenSchema = new Schema(
    {
        emoji_apertura: {
            type: [String],
        },
        emoji_cierre: {
            type: [String],
        },
        frase_bienvenida: {
            type: [String],
        },
        frase_despedida: {
            type: [String],
        },
        cuerpo_mensaje: {
            type: [String],
        }
    }
)


export default model<IConfigToken>("configToken", configTokenSchema);