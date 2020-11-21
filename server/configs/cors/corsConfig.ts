import { CorsOptions } from "cors";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.CLIENT);
const corsConfigs:CorsOptions = {
    origin: process.env.CLIENT || "http://localhost:3000",
    credentials: true,
}

export default corsConfigs; 