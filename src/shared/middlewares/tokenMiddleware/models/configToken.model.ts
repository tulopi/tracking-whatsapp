import { Schema, model } from "mongoose";
import { IConfigToken } from "../types/ConfigToken.types";

const configTokenSchema = new Schema({
    emoji_cierre: {
        type: [Schema.Types.String],
        enum: ["✅", "✔️", "❓", "❔", "⁉️"]
    },
    emoji_apertura: {
        type: [Schema.Types.String],
        enum: ["💼", "🤝", "📊"]
    },
    frase_saludo: {
        type: [Schema.Types.String],
        enum: ["Buen día",
            "Hola",
            "¿Qué tal?",
            "Espero su pronta respuesta"]
    },
    frase_despedida: {
        type: [Schema.Types.String],
        enum: ["¿Me podrían ayudar?",
            "Muchas gracias",
            "Espero su pronta respuesta"]
    },
    cuerpo_mensaje: {
        type: [Schema.Types.String],
        enum: ["Quiero ayuda para cancelar mis deudas",
            "Busco asesoramiento para gestionar mis finanzas y salir del endeudamiento",
            "Necesito estrategias efectivas para reducir mis cargas financieras",
            "Estoy buscando opciones para consolidar mis deudas y pagarlas más fácilmente",
            "Deseo aprender sobre planes de pago y negociación con acreedores para resolver mis deudas"]
    },
    createdAt: {
        type: Date
    }
})


export default model<IConfigToken>("configToken", configTokenSchema);