import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

// Router

import router from "./routers/index.routes";

// Loggers

import { logInfo } from "./loggers";
import { StatusError } from "./shared/classes/StatusError";
import connectDB from "./shared/database/database";

//--------------------------------------------------------
// Server

const app = express();

// Server Config

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//---------------------
// Login

app.use((req, res, next): void => {
    logInfo(`${req.method} ${req.url}`);
    next();
});

// Router
app.use(router);

// Manejo de errores
app.use(
    (
        error: any,
        req: Request,
        res: Response,
        next: NextFunction
    ): Response<any, Record<string, any>> => {
        const statusError = error as StatusError;
        const status = statusError.status ?? 500;
        const message = statusError.message;
        return res.status(status).json({ status, message });
    }
);

//---------------
// MongoDB connection
connectDB();
//---------------

export default app;