import { IConfig } from '../../tokenConfig/types/Config.types';
import configModel from '../../tokenConfig/models/config.model';
import clickModel from '../models/click.model';
import { StatusError } from '../../../shared/classes/StatusError';

export const createTokenService = async (): Promise<string> => {
    const getRandomElement = (arr: string[]): string => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    const checkIfTokenExists = async (newToken: string): Promise<boolean> => {
        const pastHour = new Date(Date.now() - 60 * 60 * 1000);

        const existingToken = await clickModel.findOne({
            mensaje: newToken,
            createdAt: { $gte: pastHour }
        });
        return !!existingToken;
    };

    let newToken: string | undefined = undefined;

    const allConfigData = await configModel.find();
    

    if (Array.isArray(allConfigData) && allConfigData.length > 0) {
        let isUnique = false;
        while (!isUnique) {
            const randomIndex = Math.floor(Math.random() * allConfigData.length);
            const randomConfigData: IConfig = allConfigData[randomIndex];
            newToken = [
                getRandomElement(randomConfigData.emoji_apertura),
                getRandomElement(randomConfigData.frase_bienvenida),
                getRandomElement(randomConfigData.cuerpo_mensaje),
                getRandomElement(randomConfigData.frase_despedida),
                getRandomElement(randomConfigData.emoji_cierre)
            ].join(" ");
            const exists = await checkIfTokenExists(newToken);
            if (!exists) {
                isUnique = true;
            }
        }
        if (!newToken) {
            throw new StatusError("Error al generar un token único", 500);
        }
    } else {
        throw new StatusError("No se encontraron datos en configModel", 404);
    }

    return newToken!;
};