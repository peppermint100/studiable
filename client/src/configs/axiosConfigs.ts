import { AxiosRequestConfig } from "axios";
import env from "./env";

const axiosConfigs:AxiosRequestConfig = {
    headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': `${env.CLIENT}` 
    },
    withCredentials: true,
    baseURL: env.ENDPOINT
}

export default axiosConfigs;