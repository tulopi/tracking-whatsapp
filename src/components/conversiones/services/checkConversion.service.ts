import { StatusError } from "../../../shared/classes/StatusError";
import { Request } from "express";
import conversionesModel from "../models/conversiones.model";
import { IConversiones } from "../types/Conversiones.types";

export const checkConversionService = async(
    req: Request
): Promise<IConversiones> => {
    const message = req.body
    // BUSCAR SI EXISTE ALGUN CLICK_ID QUE TENGA EL MISMO MENSAJE EN LA ULTIMA HORA
    // SI LO ENCUENTRA LLAMAR A CREATE CONVERSION Y PASAR nombre:LEAD, value:0 y click_id que hizo match (Maybe crear un update)
    return message;
};
