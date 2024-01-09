import { IConfigToken } from '../types/ConfigToken.types';
import configTokenModel from "../models/configToken.model";
import { StatusError } from '../../../shared/classes/StatusError';

export const createTokenService = async (
): Promise<IConfigToken> => {
    const getRandomElement = (arr: string[]): string => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    const getPastHourDate = (): Date => {
        const pastHour = new Date();
        pastHour.setHours(pastHour.getHours() - 1);
        return pastHour;
    };

    const checkIfTokenExists = async (newToken: IConfigToken): Promise<boolean> => {
        const pastHour = getPastHourDate();

        const existingToken = await configTokenModel.findOne({
            emoji_cierre: newToken.emoji_cierre,
            emoji_apertura: newToken.emoji_apertura,
            frase_saludo: newToken.frase_saludo,
            frase_despedida: newToken.frase_despedida,
            cuerpo_mensaje: newToken.cuerpo_mensaje,
            createdAt: { $gte: pastHour }
        });

        return !!existingToken;
    };

    let newToken: IConfigToken;

    do {
        newToken = new configTokenModel({
            emoji_cierre: [getRandomElement(["✅", "✔️", "❓", "❔", "⁉️"])],
            emoji_apertura: [getRandomElement(["💼", "🤝", "📊"])],
            frase_saludo: [getRandomElement([
                "Buen día",
                "Hola",
                "¿Qué tal?",
                "Espero su pronta respuesta"
            ])],
            frase_despedida: [getRandomElement([
                "¿Me podrían ayudar?",
                "Muchas gracias",
                "Espero su pronta respuesta"
            ])],
            cuerpo_mensaje: [getRandomElement([
                "Quiero ayuda para cancelar mis deudas",
                "Busco asesoramiento para gestionar mis finanzas y salir del endeudamiento",
                "Necesito estrategias efectivas para reducir mis cargas financieras",
                "Estoy buscando opciones para consolidar mis deudas y pagarlas más fácilmente",
                "Deseo aprender sobre planes de pago y negociación con acreedores para resolver mis deudas"
            ])],
            createdAt: new Date()
        });

    } while (await checkIfTokenExists(newToken));

    const result = await configTokenModel.create(newToken);

    if (!result) {
        throw new StatusError("Error al crear el nuevo ConfigToken", 400);
    }
    
    return result.toObject();
};