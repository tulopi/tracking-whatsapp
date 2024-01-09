import { Request } from "express";
import clickModel from "../models/click.model";
import { StatusError } from "../../../shared/classes/StatusError";
import { IClick } from "../types/Click.types";

export const createClickService = async (
    req: Request
): Promise<IClick> => {
    const { campaign, adset, ad } = req.body
    if (!campaign || !adset || !ad )
        throw new StatusError("Campos obligatorios no proporcionados", 400);
    const clickData = {
        campaign,
        adset,
        ad,
        mensaje: new Date(),
        createdAt: new Date()
    }
    // Al momento de crear el click se genera el configToken? Preguntarle a macopi

    const click = new clickModel(clickData);
    const result = await click.save();
    return result;
}