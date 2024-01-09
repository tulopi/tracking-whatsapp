import { Request } from "express";
import configTokenModel from "../models/configToken.model";
import { IConfigToken } from "../types/ConfigToken.types";


export const getTokenConfigService = async (req: Request):Promise<IConfigToken> => {
    const data = await configTokenModel.find().lean()
    if(data.length != 0) return data[0];
    const newData = new configTokenModel()
    const dataSave = await newData.save()
    return dataSave;
};