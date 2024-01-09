import { Schema, model } from "mongoose";
import { IConfigToken } from "../types/ConfigToken.types";

const configTokenSchema = new Schema({
    emoji_cierre: {
        type: [String],
        enum: ["✅", "✔️", "❓", "❔", "⁉️"]
    },
    emoji_apertura: {
        type: [String],
        enum: ["💼", "🤝", "📊"]
    },
    frase_saludo: {
        type: [String],
        enum: ["Buen día",
            "Hola",
            "¿Qué tal?",
            "Espero su pronta respuesta"]
    },
    frase_despedida: {
        type: [String],
        enum: ["¿Me podrían ayudar?",
            "Muchas gracias",
            "Espero su pronta respuesta"]
    },
    cuerpo_mensaje: {
        type: [String],
        enum: ["Quiero ayuda para cancelar mis deudas",
            "Busco asesoramiento para gestionar mis finanzas y salir del endeudamiento",
            "Necesito estrategias efectivas para reducir mis cargas financieras",
            "Estoy buscando opciones para consolidar mis deudas y pagarlas más fácilmente",
            "Deseo aprender sobre planes de pago y negociación con acreedores para resolver mis deudas"]
    }
})


export default model<IConfigToken>("configToken", configTokenSchema);