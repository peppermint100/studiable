import { call, put } from "redux-saga/effects";
import getAllCafeAPI from "../../../api/Cafe/getAllCafeAPI";
import CafeDataTypeClient from "../../../types/Cafe/CafeDataTypeClient";
import { getAllCafeReceiveData } from "../../actions/Cafe/CafeActions";

export function* _getAllCafe(){
    try{
        const res = yield call(getAllCafeAPI);
        const cafeList: Array<CafeDataTypeClient> = res.cafe;
        
        yield put(getAllCafeReceiveData(cafeList));
    }catch(err: any){
        console.log(err);
    }
}