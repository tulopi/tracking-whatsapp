import dotenv from "dotenv";

import { Config } from "../shared/types/Config";

dotenv.config();

const config: Config = {
    PORT: parseInt(process.env.PORT ?? "8080"),
    PERS: process.env.PERS ?? "mongodb",
    admin: {
        adminId: process.env.ADMIN_ID ?? "",
        adminSecretKey: process.env.ADMIN_SECRET_KEY ?? "secret_key",
    },
    mongodb: {
        mongoUrl: process.env.MONGO_URI ?? "",
        options: {
            serverSelectionTimeoutMS: 5000,
        },
    },
};

export default config;
