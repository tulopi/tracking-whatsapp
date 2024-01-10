import { NextFunction, Request, Response } from "express";
import { StatusError } from "../../../shared/classes/StatusError";
import { logError, logWarning } from "../../../loggers";
import {getTokenConfigService} from "../services";

export const getTokenConfig = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const data = await getTokenConfigService(req);
        res.status(200).json({message: data})
    } catch (err: StatusError | unknown) {
        logError(err);
        logWarning(`${req.method} ${req.originalUrl} ${res.statusCode}`);
        if (err instanceof StatusError) {
            next(err);
        } else {
            const statusError = new StatusError("Internal Server Error: " + err, 500);
            next(statusError);
        }
    }
};