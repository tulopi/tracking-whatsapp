import { StatusError } from "../../../shared/classes/StatusError";
import { Request } from "express";
import conversionesModel from "../models/conversiones.model";
import { IConversiones } from "../types/Conversiones.types";
import clickModel from "../../click/models/click.model";

export const checkConversionService = async (
    req: Request
): Promise<IConversiones> => {
    const mensaje = req.body.mensaje;

    const mensajeExists = await clickModel.findOne({ mensaje: mensaje });
    if (!mensajeExists) {
        throw new StatusError("No se encontró el mensaje en la base de datos", 404);
    }

    let result: IConversiones | null = null;
    if (mensajeExists) {
        const click_id = mensajeExists._id;
        const conversion = new conversionesModel({ nombre: "lead", value: 0, click_id });
        const savedConversion = await conversion.save();
        if (savedConversion) {
            result = savedConversion;
            await clickModel.findOneAndUpdate({ _id: mensajeExists._id }, { mensaje: "" });
        }
    }

    if (result === null) {
        throw new StatusError("Error al crear la conversión", 500);
    }

    return result;
};
