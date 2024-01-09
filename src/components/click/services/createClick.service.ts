import { Request } from "express";
import clickModel from "../models/click.model";
import { createTokenService } from "../../tokenConfig/services";
import { StatusError } from "../../../shared/classes/StatusError";
import { IClick } from "../types/Click.types";
import { IConfigToken } from "../../tokenConfig/types/ConfigToken.types";

export const createClickService = async (
    req: Request
): Promise<{result: IClick, token: IConfigToken}> => {
    const { campaign, adset, ad, mensaje } = req.body
    if (!campaign || !adset || !ad )
        throw new StatusError("Campos obligatorios no proporcionados", 400);
    const clickData = {
        campaign,
        adset,
        ad,
        mensaje,
        createdAt: new Date()
    }
    
    const token = await createTokenService()
    if(!token) throw new StatusError("Error en la creación del token", 500);
    const click = new clickModel(clickData);
    if(!click) throw new StatusError("Error en la creación del click", 500);
    const result = await click.save();
    return {result, token};
};