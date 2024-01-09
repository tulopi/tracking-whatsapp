import { Request } from "express";
import clickModel from "../models/click.model";
import { StatusError } from "../../../shared/classes/StatusError";
import { IClick } from "../types/Click.types";

export const createClickService = async (
    req: Request
): Promise<IClick> => {
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
    
    // Al momento de crear el click se genera el configToken? De ser así tendría que importar el configToken como un modelo nuevo y generar aleatorio y consultar en la db que no haya un mensaje que ya exista??, Preguntarle a macopi

    const click = new clickModel(clickData);
    const result = await click.save();
    return result;
};