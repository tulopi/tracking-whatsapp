import { NextFunction, Request, Response } from "express";
import { StatusError } from "../../../shared/classes/StatusError";
import { logError, logWarning } from "../../../loggers";
import { createCampaignService } from "../services";

export const createCampaign = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const data = await createCampaignService(req);
        res.status(201).json({ message: data });
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