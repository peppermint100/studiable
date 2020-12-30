import axios from "axios";
import axiosConfigs from '../../configs/axiosConfigs';
import { LoginRequestType } from '../../redux/actions/Auth/authActions';

export const login = async (values: LoginRequestType) => {
    try{
        const res = await axios.post("/auth/login", values, axiosConfigs)
        return res.data;
    }catch(err: any){
        if(err.response){
            return { message: err.response.data.message, error: err.response };
        }else{
            return { message: "로그인에 실패하였습니다.", error: err.response};
        }
    }
}