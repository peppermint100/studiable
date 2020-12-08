import axios from "axios";
import axiosConfigs from "../../configs/axiosConfigs";

const getAllCafeAPI = async () => {
    try{
        const res = await axios.get("/cafe", axiosConfigs);
        const { data } = res;
        return data;
    }catch(err: any){
        if(err) throw new Error(err.reponse.data.message);
    }
} 

export default getAllCafeAPI;