import { Request } from "express";
import configModel from "../models/config.model";
import { IConfig } from "../types/Config.types";
import { StatusError } from "../../../shared/classes/StatusError";
import { isValidObjectId } from "mongoose";

export const updateTokenConfigService = async (
    id: string,
    req: Request
): Promise<IConfig> => {
    if (!req.body || Object.keys(req.body).length === 0) throw new StatusError("No hay campos para actualizar", 400);
    if (!isValidObjectId(id)) throw new StatusError("El id proporcionado no es válido", 400);

    const {
        emoji_cierre,
        emoji_apertura,
        frase_bienvenida,
        frase_despedida,
        cuerpo_mensaje,
    } = req.body

    const existingTokenConfig = await configModel.findById(id)
    if (!existingTokenConfig) throw new StatusError("Token Config no encontrada", 404);
    if (!emoji_cierre !== undefined) existingTokenConfig.emoji_cierre = emoji_cierre;
    if (!emoji_apertura !== undefined) existingTokenConfig.emoji_apertura = emoji_apertura;
    if (!frase_bienvenida !== undefined) existingTokenConfig.frase_bienvenida = frase_bienvenida;
    if (!frase_despedida !== undefined) existingTokenConfig.frase_despedida = frase_despedida;
    if (!cuerpo_mensaje !== undefined) existingTokenConfig.cuerpo_mensaje = cuerpo_mensaje;

    const tokenConfigUpdate = await existingTokenConfig.save();
    return tokenConfigUpdate;
}