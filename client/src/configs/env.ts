import dotenv from "dotenv";

dotenv.config()

export default {
    ENDPOINT:process.env.REACT_APP_ENDPOINT || "http://localhost:5000",
    CLIENT: process.env.REACT_APP_CLIENT || "http://localhost:3000"
}