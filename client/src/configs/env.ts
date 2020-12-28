import dotenv from "dotenv";

dotenv.config();

const envConfigs = {
    ENDPOINT:process.env.REACT_APP_ENDPOINT || "http://localhost:5000",
    CLIENT: process.env.REACT_APP_CLIENT || "http://localhost:3000",
    KAKAO_API_KEY: process.env.REACT_APP_KAKAO_API_KEY || ""
}

export default envConfigs;