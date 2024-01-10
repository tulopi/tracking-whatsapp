import { Request } from "express";
import configModel from "../models/config.model";
import { IConfig } from "../types/Config.types";


export const getTokenConfigService = async (req: Request):Promise<IConfig> => {
    const data = await configModel.find().lean();
    if(data.length != 0) return data[0];
    const newData = new configModel();
    const dataSave = await newData.save();
    return dataSave;
};