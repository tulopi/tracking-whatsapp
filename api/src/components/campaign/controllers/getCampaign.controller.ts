import { Request, Response, NextFunction } from "express";
import { StatusError } from "../../../shared/classes/StatusError";
import { logError, logWarning } from "../../../loggers";
import { getCampaignService } from "../services/getCampaign.service";

export const getCampaign = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const data = await getCampaignService(req);
        res.status(201).json({data});
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