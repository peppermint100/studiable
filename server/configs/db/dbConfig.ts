import dotenv from "dotenv";

dotenv.config();

const dbConfig: any = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
        "./entities/**/*.ts"
    ]
};

export default dbConfig;