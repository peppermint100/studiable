import axios from "axios";
import axiosConfigs from "../../configs/axiosConfigs";

export const login = async (email: string, password: string) => {
    try{
        const res = await axios.post("/auth/login", { email, password }, axiosConfigs)
        return res;
    }catch(err: any){
        throw new Error(err.response.data.message);
    }
}