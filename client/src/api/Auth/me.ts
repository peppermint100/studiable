import axios from "axios";
import axiosConfigs from "../../configs/axiosConfigs";

export const me = async () => {
    try{
        const res = await axios.post("/auth/me",{},axiosConfigs);
        const user = res.data;
        return user; 
    }catch(err: any){
        if(err.response){
            return { message: err.response.data.message, error: err.response};
        }else{
            return { message: "로그인에 실패하였습니다.", error: err.response};
        }
    }
} 
