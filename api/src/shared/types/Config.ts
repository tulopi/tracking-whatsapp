export interface Config {
    PORT: number;
    PERS: string;
    admin: Admin;
    mongodb: MongoDb;
}

export interface Admin {
    adminId: string;
    adminSecretKey: string;
}

export interface MongoDb {
    mongoUrl: string;
    options: MongoDbOptions;
}

export interface MongoDbOptions {
    serverSelectionTimeoutMS: number;
}
