import { NextFunction, Request, Response } from "express";
import { StatusError } from "../../../shared/classes/StatusError";
import { logError,logWarning } from "../../../loggers";
import {redirectClickService} from "../services";

export const redirectClick = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const number = req.params;
        const encodedData = await redirectClickService(req);
        res.redirect(302, `https://wa.me/${number}?text=${encodedData}`);
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