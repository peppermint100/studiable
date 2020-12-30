import axios from "axios";
import axiosConfigs from "../../configs/axiosConfigs";
import RegisterRequest from '../../types/Auth/RegisterRequest';

export const signUp = async (values: RegisterRequest)=> {
    try{
        const res = await axios.post("/auth/signup", values, axiosConfigs)
        return res.data;
    }catch(err: any){
        if(err.response){
            return { message: err.response.data.message, error: err.response};
        }else{
            return { message: "회원가입에 실패하였습니다.", error: err.response};
        }
    }
}
