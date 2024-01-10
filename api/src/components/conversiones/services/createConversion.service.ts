import { Request } from "express";
import { StatusError } from "../../../shared/classes/StatusError";
import { isValidObjectId } from "mongoose";
import { IConversiones } from "../types/Conversiones.types";
import conversionesModel from "../models/conversiones.model";
export const createConversionService = async (
    req: Request
): Promise<IConversiones> => {
    const { nombre, value, click_id } = req.body;

    if (!nombre || !value || !click_id)
        throw new StatusError("Campos obligatorios no proporcionados", 400);

    if (click_id && !isValidObjectId(click_id))
        throw new StatusError("El id del click_id no es válido", 400);


    const conversion = new conversionesModel({nombre, value, click_id});
    const result = await conversion.save();
    return result;
};
