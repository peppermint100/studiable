import axios from "axios";
import axiosConfigs from "../../configs/axiosConfigs";

const getAuth = async (token: string) => {
    try{
        const res = await axios.post("/auth/me",{},axiosConfigs);
        const { data : { username, email }} = res;
        return { username, email, token };
    }catch(err: any){
        if(err) throw new Error(err.reponse.data.message);
    }
} 

export default getAuth;