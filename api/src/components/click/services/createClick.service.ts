import { Request } from "express";
import clickModel from "../models/click.model";
import { createTokenService } from "./createToken.service";
import { StatusError } from "../../../shared/classes/StatusError";
import { isValidObjectId } from "mongoose";

export const createClickService = async (
    req: Request
): Promise<String> => {

    const { campaign, adset, ad, external_id } = req.body
    if (!campaign || !adset || !ad || !external_id)
        throw new StatusError("Campos obligatorios no proporcionados", 400);
        const token = await createTokenService();
    if(!isValidObjectId(campaign)) throw new StatusError("Campaign no es un ObjectId", 400);
    if(!token) throw new StatusError("Error en la creación del token", 500);
    const clickData = {
        campaign,
        adset,
        ad,
        external_id,
        mensaje: token,
        createdAt: new Date()
    }
    const click = new clickModel(clickData);
    if(!click) throw new StatusError("Error en la creación del click", 500);
    const result = await click.save();
    return result.mensaje;
};


// DEVOLVER SOLO EL MENSAJE CLICKDATA.MENSAJE