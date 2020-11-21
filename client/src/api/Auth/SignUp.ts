import axios from "axios";
import axiosConfigs from "../../configs/axiosConfigs";

export const signup = async (username: string, email: string, password: string, confirmPassword: string) => {
    try{
        const res = await axios.post("/auth/signup", { username, email, password, confirmPassword }, axiosConfigs)
        return res;
    }catch(err: any){
        throw new Error(err.response.data.message);
    }
}